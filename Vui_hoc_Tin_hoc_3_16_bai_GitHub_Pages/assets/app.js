"use strict";
const COURSE_STORE = "ngo-quyen-tinhoc3-course-v4";
const LEGACY_STORE = "ngo-quyen-tinhoc3-bai1-v1";
const SCHOOL_NAME = "Trường Tiểu học Ngô Quyền";
const COURSE_AUTHORS = ["Trần Thị Quỳnh Trâm", "Hồ Thị Cẩm Diêu"];
const LESSON_ID = Number(document.body.dataset.lesson) || 0;
const BASE = LESSON_ID ? "../" : "./";
const lesson = COURSE_LESSONS.find((item) => item.id === LESSON_ID);
const cleanString = (value, max = 80) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";
const escapeHTML = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const makeId = () =>
  window.crypto?.randomUUID?.() ||
  Date.now().toString(36) + Math.random().toString(36).slice(2);
const mix = (items) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
function button(text, action, attrs = "") {
  return `<button type="button" data-action="${action}" ${attrs}>${text}</button>`;
}
function emptyCourse() {
  return {
    version: 4,
    profiles: [],
    activeId: null,
    settings: { theme: "garden", volume: 0.5, sound: true },
  };
}
let courseDB = emptyCourse(),
  storageAvailable = true;
try {
  const stored = JSON.parse(localStorage.getItem(COURSE_STORE) || "null");
  if (
    stored?.version === 4 &&
    Array.isArray(stored.profiles) &&
    stored.profiles.length <= 200
  )
    courseDB = stored;
} catch {
  storageAvailable = false;
}
courseDB.settings = { ...emptyCourse().settings, ...courseDB.settings };
const app = {
  view: "home",
  dialog: null,
  topic: 0,
  search: "",
  quiz: null,
  work: null,
  lastPointer: null,
  wheelUsed: false,
  certificateLesson: LESSON_ID || 1,
  certificateType: "GIẤY KHEN",
  certificateUrls: [],
  music: null,
};
function activeStudent() {
  return courseDB.profiles.find((p) => p.id === courseDB.activeId);
}
function lessonRecord(id = LESSON_ID) {
  const student = activeStudent();
  if (!student) return {};
  student.lessons = student.lessons || {};
  return (
    student.lessons[id] ||
    (student.lessons[id] = { practice: false, read: [], quiz: null })
  );
}
function persistCourse() {
  try {
    localStorage.setItem(COURSE_STORE, JSON.stringify(courseDB));
    storageAvailable = true;
  } catch {
    storageAvailable = false;
    notify(
      "Chưa lưu được trên trình duyệt. Em tải kết quả JSON để giữ lại nhé.",
    );
  }
}
function migrateLegacy() {
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_STORE) || "null");
    if (!Array.isArray(legacy?.profiles)) return;
    let changed = false;
    for (const old of legacy.profiles.slice(0, 200)) {
      if (!cleanString(old.name, 60) || !cleanString(old.className, 20))
        continue;
      let person = courseDB.profiles.find(
        (p) =>
          p.id === old.id ||
          (p.name.toLocaleLowerCase("vi") ===
            old.name.toLocaleLowerCase("vi") &&
            p.className.toLocaleLowerCase("vi") ===
              old.className.toLocaleLowerCase("vi")),
      );
      if (!person && courseDB.profiles.length < 200) {
        person = {
          id: old.id || makeId(),
          name: cleanString(old.name, 60),
          className: cleanString(old.className, 20),
          avatar: old.avatar || "🐰",
          lessons: {},
        };
        courseDB.profiles.push(person);
        changed = true;
      }
      if (!person) continue;
      const r = old.results?.final;
      if (
        r?.total === 12 &&
        Number.isInteger(r.correct) &&
        r.correct >= 0 &&
        r.correct <= 12
      ) {
        const current = person.lessons[1] || {};
        if (!current.quiz || r.correct > current.quiz.correct) {
          person.lessons[1] = {
            ...current,
            quiz: { correct: r.correct, total: 12, date: r.date || "" },
            practice: Boolean(current.practice),
            read: old.read || [],
          };
          changed = true;
        }
      }
      if (!courseDB.activeId && legacy.activeId === old.id) {
        courseDB.activeId = person.id;
        changed = true;
      }
    }
    if (changed) persistCourse();
  } catch {}
}
function syncLegacyStudent() {
  const student = activeStudent();
  if (!student) return;
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_STORE) || "null") || {
      app: "ngo-quyen-tinhoc3-bai1",
      version: 1,
      profiles: [],
      sound: true,
    };
    if (!Array.isArray(legacy.profiles)) return;
    let person = legacy.profiles.find(
      (p) =>
        p.name.toLocaleLowerCase("vi") ===
          student.name.toLocaleLowerCase("vi") &&
        p.className.toLocaleLowerCase("vi") ===
          student.className.toLocaleLowerCase("vi"),
    );
    if (!person) {
      person = {
        id: student.id,
        name: student.name,
        className: student.className,
        avatar: student.avatar,
        results: {},
        read: [],
        reflection: { info: "", decision: "" },
        updatedAt: new Date().toISOString(),
      };
      legacy.profiles.push(person);
    }
    const imported = student.lessons?.[1]?.quiz;
    if (
      imported?.total === 12 &&
      Number.isInteger(imported.correct) &&
      imported.correct >= 0 &&
      imported.correct <= 12 &&
      (!person.results.final || imported.correct > person.results.final.correct)
    )
      person.results.final = {
        correct: imported.correct,
        total: 12,
        date: imported.date || new Date().toISOString(),
        runId: "course-import",
      };
    legacy.activeId = person.id;
    localStorage.setItem(LEGACY_STORE, JSON.stringify(legacy));
  } catch {}
}
function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLowerCase();
}
function completedLessons(student = activeStudent()) {
  return COURSE_LESSONS.filter((l) => student?.lessons?.[l.id]?.quiz).length;
}
function totalQuizPoints(student) {
  return Object.values(student.lessons || {}).reduce(
    (sum, r) =>
      sum + (r.quiz ? Math.round((r.quiz.correct / r.quiz.total) * 100) : 0),
    0,
  );
}
function applyAppearance() {
  const theme = ["garden", "ocean", "sunset"].includes(courseDB.settings.theme)
    ? courseDB.settings.theme
    : "garden";
  document.body.dataset.theme = theme;
}
function headerHTML() {
  return `<header class="site-header"><a class="site-brand" href="${BASE}index.html"><span class="brand-bot">${courseMascotSVG()}</span><span><b>Vui học <em>Tin học 3</em></b><small>${SCHOOL_NAME}</small></span></a><div class="header-buttons">${activeStudent() ? button(`${escapeHTML(activeStudent().avatar)} ${escapeHTML(activeStudent().name)}`, "join", 'class="student-button"') : button("👋 Nhập tên và lớp", "join", 'class="primary"')}${button("🎨", "settings", 'class="icon-button" aria-label="Màu sắc và âm thanh"')}${button("🔊", "sound-toggle", `class="icon-button" aria-label="${courseDB.settings.sound ? "Tắt" : "Bật"} âm báo"`)}</div></header><div class="author-line"><span>📖 Kết nối tri thức với cuộc sống</span><span>Thực hiện ứng dụng: <b>${COURSE_AUTHORS.join(" · ")}</b></span></div>`;
}
function footerHTML() {
  return `<footer><b>${SCHOOL_NAME}</b><p>${COURSE_AUTHORS.join(" &amp; ")} · Tin học 3 · Kết nối tri thức với cuộc sống</p><p>Học liệu tương tác biên soạn theo mục tiêu bài học. Hồ sơ và điểm lưu trên trình duyệt, không tự đồng bộ giữa các máy.</p><a href="https://sachdientu.nxbgd.vn/thu-vien-so/doc-sach/sgv-tin-hoc-3.4484742358" target="_blank" rel="noopener">Đối chiếu chương trình trên thư viện Nhà xuất bản Giáo dục</a></footer>`;
}
function navigationHTML() {
  if (!LESSON_ID)
    return `<nav class="tabs" aria-label="Trang chủ chương trình">${[
      ["home", "🏡 Tất cả bài học"],
      ["progress", "🏆 Thành tích"],
      ["certificate", "🎖️ Giấy khen"],
      ["guide", "💬 Hướng dẫn"],
    ]
      .map(([id, label]) =>
        button(
          label,
          "view",
          `data-view="${id}" ${app.view === id ? 'aria-current="page"' : ""}`,
        ),
      )
      .join("")}</nav>`;
  return `<nav class="lesson-breadcrumb"><a href="${BASE}index.html">🏡 Chọn bài khác</a><span>Chủ đề ${lesson.topic}. ${COURSE_TOPICS[lesson.topic - 1]}</span></nav><section class="lesson-banner"><div class="lesson-icon illustrated">${gradeThreeArt(lesson.id)}</div><div><span class="eyebrow">HÀNH TRÌNH KHÁM PHÁ · BÀI ${lesson.id}</span><h1>${lesson.title}</h1><p>${lesson.lead}</p></div></section><nav class="tabs" aria-label="Hoạt động bài học">${[
    ["home", "🌱 Khám phá"],
    ["practice", "🎮 Thực hành"],
    ["quiz", "🚀 Thử thách"],
    ["certificate", "🎖️ Giấy khen"],
  ]
    .map(([id, label]) =>
      button(
        label,
        "view",
        `data-view="${id}" ${app.view === id ? 'aria-current="page"' : ""}`,
      ),
    )
    .join("")}</nav>`;
}
function rootHomeHTML() {
  return `<section class="portal-hero"><div><span class="eyebrow">MỖI BÀI HỌC, MỘT CUỘC KHÁM PHÁ</span><h1>Cùng Mít mở cửa<br><em>thế giới Tin học!</em></h1><p>Cùng Mít khám phá Tin học lớp 3 qua những câu chuyện, hình ảnh và thử thách nhỏ. Em chọn một bài để bắt đầu nhé!</p><div class="hero-badges"><span>📚 16 bài học</span><span>🌈 6 chủ đề</span><span>🖱️ Thao tác thật</span></div>${activeStudent() ? `<div class="welcome"><b>Chào ${escapeHTML(activeStudent().name)}!</b><p>Lớp ${escapeHTML(activeStudent().className)} · Đã hoàn thành thử thách ${completedLessons()}/16 bài</p></div>` : button("Bắt đầu bằng tên của em", "join", 'class="primary large"')}</div><div class="cover-world">${worldScenery()}<figure class="book-showcase"><img src="${BASE}assets/book-cover.png" alt="Bìa SGK Tin học 3 – Kết nối tri thức với cuộc sống"><figcaption>SGK Tin học 3 · Kết nối tri thức</figcaption></figure><div class="book-mascot">${courseMascotSVG()}</div><span class="book-spark">✦</span><span class="book-tag">Cùng em khám phá! 🌈</span></div></section><section id="lesson-library"><div class="section-title"><div><span class="eyebrow">MỤC LỤC CỦA EM</span><h2>Hôm nay em muốn học bài nào?</h2></div><label class="search"><span>🔎</span><input id="lesson-search" placeholder="Tìm tên bài học…" value="${escapeHTML(app.search)}" aria-label="Tìm bài học"></label></div><div class="topic-filters">${button("Tất cả 16 bài", "topic-filter", `data-topic="0" aria-pressed="${app.topic === 0}"`)}${COURSE_TOPICS.map((topic, i) => button("Chủ đề " + (i + 1), "topic-filter", `data-topic="${i + 1}" aria-pressed="${app.topic === i + 1}" title="${topic}"`)).join("")}</div><div class="library-note"><span>🧭</span><p><b>Hành trình 16 bài học</b><br>Quan sát, thực hành rồi thử thách. Mỗi bước nhỏ giúp em tự tin hơn!</p></div><div id="lesson-groups">${lessonGroupsHTML()}</div></section>`;
}
function lessonGroupsHTML() {
  const selected = COURSE_LESSONS.filter(
    (l) =>
      (!app.topic || l.topic === app.topic) &&
      normalizeText(l.title + " " + l.id).includes(normalizeText(app.search)),
  );
  if (!selected.length)
    return '<div class="panel empty">Chưa tìm thấy bài. Em thử từ khóa khác nhé.</div>';
  return COURSE_TOPICS.map((topic, i) => {
    const list = selected.filter((l) => l.topic === i + 1);
    if (!list.length) return "";
    return `<section class="topic-group theme-${i + 1}"><div class="topic-heading"><span>${["🌱", "🌐", "🌳", "🛡️", "🎨", "🧩"][i]}</span><div><small>CHỦ ĐỀ ${i + 1}</small><h3>${topic}</h3></div></div><div class="lesson-grid">${list
      .map((l) => {
        const record = activeStudent()?.lessons?.[l.id];
        return `<a class="lesson-card" href="${BASE}bai-${l.id}/index.html" data-lesson-link="${l.id}"><div class="card-art art-${l.id % 4}">${gradeThreeArt(l.id)}</div><div class="lesson-card-body"><span class="lesson-number">BÀI ${l.id}</span><h4>${l.title}</h4><p>${l.lead}</p><div class="card-bottom"><span>${record?.quiz ? `⭐ ${record.quiz.correct}/${record.quiz.total} câu đúng` : record?.practice ? "✓ Đã thực hành" : "Cùng khám phá"}</span><b>Vào học</b></div></div></a>`;
      })
      .join("")}</div></section>`;
  }).join("");
}
function lessonHomeHTML() {
  return `<section class="panel goals"><div><span class="eyebrow">SAU BÀI HỌC, EM CÓ THỂ</span><h2>Ba điều mình cùng khám phá</h2><ul>${lesson.goals.map((goal) => `<li>🌟 ${goal}</li>`).join("")}</ul></div><aside class="lesson-journey"><b>${activeStudent() ? escapeHTML(activeStudent().name) : "Nhà khám phá nhỏ"}</b><span>🌱 Đọc và quan sát</span><span>🎮 Thực hành tương tác</span><span>🚀 Thử thách 8 câu</span><span>🎖️ Giấy khen mang tên em</span></aside></section><div class="knowledge-grid">${lesson.cards.map((card, i) => `<article class="knowledge-card"><div><span>${["👀", "💡", "🌟"][i]}</span>${button("🔊", "read-card", `data-index="${i}" class="icon-button" aria-label="Nghe ${card.title}"`)}</div><h2>${card.title}</h2><p>${card.body}</p><div class="example"><b>Ví dụ của em</b><p>${card.example}</p></div>${button(lessonRecord()?.read?.includes(i) ? "✓ Đã tìm hiểu" : "Em đã tìm hiểu", "read-mark", `data-index="${i}" class="secondary"`)}</article>`).join("")}</div><section class="panel next-action illustrated-action"><div class="action-picture">${gradeThreeArt(lesson.id)}</div><div><h2>Thử làm cùng Mít nhé!</h2><p>${lesson.task}</p></div>${button("Vào phòng thực hành", "view", 'data-view="practice" class="primary"')}</section><div class="lesson-links">${lesson.id > 1 ? `<a href="../bai-${lesson.id - 1}/index.html">Bài ${lesson.id - 1}: ${COURSE_LESSONS[lesson.id - 2].title}</a>` : ""}${lesson.id < 16 ? `<a href="../bai-${lesson.id + 1}/index.html">Bài ${lesson.id + 1}: ${COURSE_LESSONS[lesson.id].title}</a>` : ""}</div>`;
}
function joinView(message = "Mỗi bạn một hành trình riêng.") {
  return `<section class="panel join-panel"><span class="join-mascot">🤖</span><h2>Mít muốn biết tên của em!</h2><p>${message}</p><form id="student-form"><label>Họ và tên<input id="student-name" required maxlength="60" autocomplete="off" placeholder="Ví dụ: Nguyễn Minh Anh"></label><label>Lớp<input id="student-class" required maxlength="20" autocomplete="off" placeholder="Ví dụ: 3/1"></label><label>Bạn đồng hành<select id="student-avatar"><option>🐰</option><option>🐻</option><option>🐱</option><option>🦊</option></select></label><button class="primary" type="submit">Lưu và bắt đầu</button></form>${courseDB.profiles.length ? `<details><summary>Chọn hồ sơ đã có</summary><div class="profile-list">${courseDB.profiles.map((p) => button(`${escapeHTML(p.avatar)} ${escapeHTML(p.name)} · ${escapeHTML(p.className)}`, "profile-select", `data-id="${escapeHTML(p.id)}"`)).join("")}</div></details>` : ""}<p class="hint">Tên và lớp lưu trên trình duyệt này, dùng cho thành tích và giấy khen.</p></section>`;
}
function startQuiz() {
  if (!activeStudent()) {
    app.dialog = "join";
    render();
    return;
  }
  const questions = mix(lesson.quiz).map((q) => {
    const options = mix(
      q.options.map((text, i) => ({ text, correct: i === q.answer })),
    );
    return {
      ...q,
      options: options.map((o) => o.text),
      answer: options.findIndex((o) => o.correct),
    };
  });
  app.quiz = { questions, index: 0, answers: [], correct: 0, done: false };
  app.view = "quiz";
  render();
}
function quizView() {
  if (!activeStudent()) return joinView("Nhập tên để lưu kết quả thử thách.");
  const run = app.quiz,
    record = lessonRecord();
  if (!run)
    return `<section class="panel challenge-intro"><span>🚀</span><h2>Thử thách Bài ${LESSON_ID}</h2><p>8 câu hỏi nhận biết, thông hiểu và vận dụng. Không giới hạn thời gian; chọn một đáp án mỗi câu.</p>${record.quiz ? `<p class="pill">Lượt tốt nhất: ${record.quiz.correct}/${record.quiz.total} câu đúng</p>` : ""}${button("Em sẵn sàng!", "quiz-start", 'class="primary large"')}<p>Hoàn thành lượt chơi để nhận giấy ghi nhận sự cố gắng của em.</p></section>`;
  if (run.done) {
    const mistakes = run.answers.filter((a) => !a.correct);
    return `<section class="panel result"><span>🏆</span><h2>Em đã hoàn thành!</h2><b class="score">${run.correct}<small>/${run.questions.length}</small></b><p>câu trả lời đúng · Điểm tốt nhất được giữ lại</p><div class="actions">${button("Nhận giấy khen", "view", 'data-view="certificate" class="primary"')}${button("Thử lại", "quiz-start")}${button("Về bài học", "view", 'data-view="home"')}</div>${mistakes.length ? `<details open class="review"><summary>Cùng ôn lại ${mistakes.length} câu</summary>${mistakes.map((a) => `<article><h3>${escapeHTML(a.question.q)}</h3><p><b>Lựa chọn đúng:</b> ${escapeHTML(a.question.options[a.question.answer])}</p><p>${escapeHTML(a.question.why)}</p></article>`).join("")}</details>` : '<p class="success feedback">✨ Em đã làm đúng tất cả câu trong lượt này!</p>'}</section>`;
  }
  const q = run.questions[run.index],
    answer = run.answers[run.index];
  return `<section class="panel quiz-card"><div class="quiz-top"><span>Câu ${run.index + 1}/${run.questions.length}</span><span>Mức ${q.level} · ${["", "Nhận biết", "Thông hiểu", "Vận dụng"][q.level]}</span>${button("🔊 Nghe câu hỏi", "read-question")}</div><div class="progress"><i style="width:${(run.index / run.questions.length) * 100}%"></i></div><h2>${escapeHTML(q.q)}</h2><div class="answer-grid">${q.options.map((option, i) => button(`<b>${"ABCD"[i]}</b>${escapeHTML(option)}`, "quiz-answer", `data-index="${i}" class="quiz-option ${answer ? (i === q.answer ? "right" : i === answer.selected ? "wrong" : "dim") : ""}" ${answer ? "disabled" : ""}`)).join("")}</div>${answer ? `<div class="feedback ${answer.correct ? "success" : "try"}" role="status"><b>${answer.correct ? "🎉 Em đã làm đúng!" : "🌱 Mình cùng tìm hiểu lại nhé."}</b><p>${escapeHTML(q.why)}</p>${button(run.index === run.questions.length - 1 ? "Xem kết quả" : "Câu tiếp theo", "quiz-next", 'class="primary"')}</div>` : ""}</section>`;
}
function answerQuiz(index) {
  const run = app.quiz;
  if (!run || run.done || run.answers[run.index]) return;
  const q = run.questions[run.index];
  if (!Number.isInteger(index) || index < 0 || index >= q.options.length)
    return;
  const correct = index === q.answer;
  run.answers.push({ question: q, selected: index, correct });
  if (correct) run.correct++;
  stopSpeech();
  audioCue(correct);
  render();
}
function nextQuiz() {
  const run = app.quiz;
  if (!run || !run.answers[run.index] || run.done) return;
  if (run.index < run.questions.length - 1) run.index++;
  else {
    run.done = true;
    const record = lessonRecord(),
      result = {
        correct: run.correct,
        total: run.questions.length,
        date: new Date().toISOString(),
      };
    if (!record.quiz || result.correct >= record.quiz.correct)
      record.quiz = result;
    persistCourse();
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function progressView() {
  const p = activeStudent();
  return `<section class="section-title"><div><span class="eyebrow">CÙNG NHAU TIẾN BỘ</span><h1>Vườn thành tích</h1><p>Điểm thử thách mỗi bài quy đổi về 100. Tối đa 1.600 điểm cho 16 bài; điểm trò chơi riêng của Bài 1 vẫn xem trong Bài 1.</p></div></section><div class="actions">${button("In bảng thành tích", "print-progress", 'class="primary"')}${button("Tải CSV", "export-csv")}${button("Tải kết quả của em", "export-self", p ? "" : "disabled")}${button("Sao lưu tất cả", "export-all")}${button("Nhập kết quả JSON", "import-click")}<input id="import-json" type="file" accept=".json" multiple hidden></div>${
    p
      ? `<div class="stat-row"><article><b>${completedLessons(p)}/16</b><span>Bài đã làm thử thách</span></article><article><b>${totalQuizPoints(p)}/1600</b><span>Điểm thử thách</span></article><article><b>${Object.values(p.lessons || {}).filter((r) => r.practice).length}</b><span>Bài đã thực hành</span></article></div><section class="panel"><h2>Hành trình của ${escapeHTML(p.name)}</h2><div class="progress-list">${COURSE_LESSONS.map(
          (l) => {
            const r = p.lessons?.[l.id];
            return `<a href="${BASE}bai-${l.id}/index.html" data-lesson-link="${l.id}"><span>${l.icon} Bài ${l.id}. ${l.title}</span><small>${r?.practice ? "✓ Thực hành · " : ""}${r?.quiz ? `${r.quiz.correct}/${r.quiz.total} câu đúng` : "Chưa làm thử thách"}</small></a>`;
          },
        ).join("")}</div></section>`
      : ""
  }<section class="panel"><h2>Bảng các hồ sơ trên máy</h2><div class="table-scroll"><table><thead><tr><th>Học sinh</th><th>Lớp</th><th>Thử thách đã làm</th><th>Điểm /1600</th></tr></thead><tbody>${
    [...courseDB.profiles]
      .sort(
        (a, b) =>
          totalQuizPoints(b) - totalQuizPoints(a) ||
          a.name.localeCompare(b.name, "vi"),
      )
      .map(
        (person) =>
          `<tr><td>${escapeHTML(person.name)}</td><td>${escapeHTML(person.className)}</td><td>${completedLessons(person)}/16</td><td>${totalQuizPoints(person)}</td></tr>`,
      )
      .join("") ||
    '<tr><td colspan="4">Chưa có hồ sơ. Em nhập tên để bắt đầu nhé.</td></tr>'
  }</tbody></table></div></section>`;
}
function guideView() {
  return `<section class="panel"><h1>Cùng đồng hành với các em</h1><div class="knowledge-grid"><article><h2>🌱 Một chương trình, 16 bài</h2><p>Trang chủ dẫn đến từng bài đúng thứ tự mục lục. Bài 1 giữ trọn bộ 10 trò chơi đã hoàn thiện. Mỗi bài còn lại có kiến thức, phòng thực hành riêng và 8 câu thử thách.</p></article><article><h2>🖱️ Thực hành và mô phỏng</h2><p>Các công cụ gõ, kéo thả, chỉnh trang chiếu và xuất sản phẩm có thao tác thật trên web. Trình quản lí thư mục và bật/tắt thiết bị là mô phỏng. Bài học luôn gợi ý thực hành bổ sung trên máy thật.</p></article><article><h2>💾 Giữ kết quả</h2><p>Hồ sơ dùng chung giữa các bài trên cùng website và trình duyệt. Không có bảng điểm trung tâm tự đồng bộ. Xuất JSON để gửi giáo viên hoặc chuyển máy; nhập JSON tại Thành tích.</p></article><article><h2>🎧 Âm thanh và hình ảnh</h2><p>Chọn màu, âm lượng và âm báo ở nút 🎨. Lời đọc dùng giọng tiếng Việt của thiết bị. Thiếu giọng vẫn có đủ nội dung chữ. Không thu âm hoặc dùng micro.</p></article><article><h2>🎖️ Giấy khen</h2><p>Mỗi bài có giấy khen hoặc giấy chứng nhận, xem được mẫu ngay. Hoàn thành thử thách để có kết quả thật. Tải PNG, PDF A4 trực tiếp hoặc in; mẫu chưa hoàn thành có nhãn BẢN XEM TRƯỚC.</p></article><article><h2>📚 Nội dung</h2><p>Các ví dụ, câu hỏi và công cụ được biên soạn riêng theo yêu cầu chương trình; không phải bản sao toàn bộ SGK. Bài 12 dùng sơ đồ hành tinh không theo tỉ lệ và vòng đời bướm. Cùng giáo viên trao đổi điều em quan sát được.</p></article></div></section>`;
}
function settingsView() {
  return `<section class="panel settings-panel"><h2>🎨 Góc màu sắc và âm thanh</h2><div class="theme-options">${[
    ["garden", "🌷 Vườn mơ tím"],
    ["ocean", "🐳 Đại dương xanh"],
    ["sunset", "🌅 Nắng hồng"],
  ]
    .map(([id, label]) =>
      button(
        label,
        "theme",
        `data-theme="${id}" aria-pressed="${courseDB.settings.theme === id}"`,
      ),
    )
    .join(
      "",
    )}</div><label>Âm lượng<input id="course-volume" type="range" min="0" max="100" value="${Math.round(courseDB.settings.volume * 100)}"></label><div class="actions">${button(courseDB.settings.sound ? "Tắt âm báo" : "Bật âm báo", "sound-toggle")}${button("Nghe thử tiếng Việt", "read-demo")}${button("Đóng", "dialog-close", 'class="primary"')}</div><p>Âm lượng này chỉ áp dụng trong ứng dụng. Lời đọc phụ thuộc giọng tiếng Việt đã có trên thiết bị.</p></section>`;
}
function render() {
  applyAppearance();
  document.querySelector("#course-app").innerHTML =
    `<div class="site-shell">${headerHTML()}${navigationHTML()}<main>${!storageAvailable ? '<p class="feedback try">Trình duyệt chưa lưu được kết quả. Hãy tải JSON để giữ thành tích.</p>' : ""}${app.dialog === "join" ? joinView() : app.dialog === "settings" ? settingsView() : app.view === "progress" ? progressView() : app.view === "certificate" ? courseCertificateView() : app.view === "guide" ? guideView() : LESSON_ID ? (app.view === "practice" ? practiceHTML() : app.view === "quiz" ? quizView() : lessonHomeHTML()) : rootHomeHTML()}</main>${footerHTML()}</div>`;
  if (app.view === "certificate" && !app.dialog) refreshCourseCertificate();
}
let noticeTimer;
function notify(message) {
  const box = document.querySelector("#course-toast");
  box.textContent = message;
  box.hidden = false;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => (box.hidden = true), 4200);
}
function stopSpeech() {
  window.speechSynthesis?.cancel();
}
function speakText(text) {
  stopSpeech();
  if (!window.speechSynthesis) {
    notify("Thiết bị chưa có chức năng đọc. Em đọc nội dung chữ nhé.");
    return;
  }
  const voice = window.speechSynthesis
    .getVoices()
    .find((v) => /^vi[-_]/i.test(v.lang));
  if (!voice) {
    notify(
      "Chưa có giọng đọc tiếng Việt trên thiết bị. Em vẫn có thể đọc nội dung trên màn hình.",
    );
    return;
  }
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "vi-VN";
  speech.voice = voice;
  speech.rate = 0.88;
  speech.volume = Number(courseDB.settings.volume) || 0;
  speech.onerror = () => {};
  window.speechSynthesis.speak(speech);
}
let courseAudio;
function playTone(freq) {
  if (!courseDB.settings.sound) return;
  try {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return;
    courseAudio = courseAudio || new Audio();
    courseAudio.resume();
    const osc = courseAudio.createOscillator(),
      gain = courseAudio.createGain(),
      time = courseAudio.currentTime;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(
      Math.max(0.0001, courseDB.settings.volume * 0.12),
      time + 0.02,
    );
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.24);
    osc.connect(gain);
    gain.connect(courseAudio.destination);
    osc.start(time);
    osc.stop(time + 0.25);
  } catch {}
}
function audioCue(ok) {
  playTone(ok ? 659 : 220);
}
function saveDownload(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
function exportProduct(name, body, note, slides = false) {
  const controls = slides
    ? '<nav><button onclick="step(-1)">Trang trước</button><button onclick="step(1)">Trang sau</button></nav><script>let i=0;const s=[...document.querySelectorAll(".slide")];function show(){s.forEach((n,k)=>n.hidden=k!==i)}function step(d){i=Math.max(0,Math.min(s.length-1,i+d));show()}document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1)});show();<\/script>'
    : "";
  const html = `<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHTML(name)}</title><style>body{margin:0;background:#eee8ff;font:20px Arial;color:#392b53;text-align:center;padding:30px}article{max-width:900px;margin:30px auto;padding:60px 30px;background:white;border-radius:24px;min-height:360px}article>span{font-size:90px}article>img{max-width:80%;max-height:300px;object-fit:contain;border-radius:15px}h3{font-size:36px}p{white-space:pre-wrap;line-height:1.6}button{font:inherit;padding:12px;margin:8px;border:0;border-radius:10px;background:#7044cc;color:white}[hidden]{display:none!important}</style><main>${body}</main><p>${escapeHTML(note)}</p>${controls}</html>`;
  saveDownload(
    new Blob([html], { type: "text/html;charset=utf-8" }),
    name + ".html",
  );
}
function exportResults(all = false) {
  const profiles = all ? courseDB.profiles : [activeStudent()].filter(Boolean);
  saveDownload(
    new Blob(
      [
        JSON.stringify(
          { app: "ngo-quyen-tinhoc3-course", version: 4, profiles },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    ),
    all ? "Tin-hoc-3-tat-ca-ket-qua.json" : "Tin-hoc-3-ket-qua-cua-em.json",
  );
}
function validateIncoming(data) {
  if (
    data?.app !== "ngo-quyen-tinhoc3-course" ||
    data.version !== 4 ||
    !Array.isArray(data.profiles) ||
    data.profiles.length > 200
  )
    throw Error("Tệp không đúng định dạng toàn chương trình.");
  return data.profiles.map((person) => {
    if (!cleanString(person.name, 60) || !cleanString(person.className, 20))
      throw Error("Thiếu tên hoặc lớp.");
    const lessons = {};
    for (const [id, r] of Object.entries(person.lessons || {})) {
      const lessonId = Number(id),
        total = lessonId === 1 ? 12 : 8;
      if (!COURSE_LESSONS.some((l) => l.id === lessonId)) continue;
      let quiz = null;
      if (r.quiz) {
        if (
          r.quiz.total !== total ||
          !Number.isInteger(r.quiz.correct) ||
          r.quiz.correct < 0 ||
          r.quiz.correct > total
        )
          throw Error("Điểm không hợp lệ.");
        quiz = {
          correct: r.quiz.correct,
          total,
          date: cleanString(r.quiz.date, 40),
        };
      }
      lessons[id] = {
        practice: r.practice === true,
        quiz,
        read: Array.isArray(r.read)
          ? r.read.filter((i) => [0, 1, 2].includes(i))
          : [],
      };
    }
    return {
      id: cleanString(person.id, 100) || makeId(),
      name: cleanString(person.name, 60),
      className: cleanString(person.className, 20),
      avatar: ["🐰", "🐻", "🐱", "🦊"].includes(person.avatar)
        ? person.avatar
        : "🐰",
      lessons,
    };
  });
}
function mergeIncoming(people) {
  for (const incoming of people) {
    const old = courseDB.profiles.find(
      (p) =>
        p.id === incoming.id ||
        (p.name.toLocaleLowerCase("vi") ===
          incoming.name.toLocaleLowerCase("vi") &&
          p.className.toLocaleLowerCase("vi") ===
            incoming.className.toLocaleLowerCase("vi")),
    );
    if (old) {
      for (const [id, r] of Object.entries(incoming.lessons)) {
        const current =
          old.lessons[id] ||
          (old.lessons[id] = { practice: false, quiz: null, read: [] });
        current.practice = current.practice || r.practice;
        current.read = [...new Set([...current.read, ...r.read])];
        if (r.quiz && (!current.quiz || r.quiz.correct > current.quiz.correct))
          current.quiz = r.quiz;
      }
    } else {
      if (courseDB.profiles.length >= 200) throw Error("Đã đủ 200 hồ sơ.");
      courseDB.profiles.push(incoming);
    }
  }
  persistCourse();
}
function handleClick(event) {
  const link = event.target.closest("[data-lesson-link]");
  if (link?.dataset.lessonLink === "1") syncLegacyStudent();
  const b = event.target.closest("[data-action]");
  if (!b || b.disabled) return;
  const action = b.dataset.action,
    index = Number(b.dataset.index);
  if (action === "join") {
    app.dialog = "join";
    render();
    return;
  }
  if (action === "settings") {
    app.dialog = "settings";
    render();
    return;
  }
  if (action === "dialog-close") {
    app.dialog = null;
    render();
    return;
  }
  if (action === "view") {
    stopSpeech();
    app.view = b.dataset.view;
    app.dialog = null;
    app.wheelUsed = false;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "profile-select") {
    courseDB.activeId = b.dataset.id;
    app.dialog = null;
    app.quiz = null;
    persistCourse();
    syncLegacyStudent();
    render();
    return;
  }
  if (action === "topic-filter") {
    app.topic = Number(b.dataset.topic);
    render();
    return;
  }
  if (action === "read-mark") {
    if (!activeStudent()) {
      app.dialog = "join";
      render();
      return;
    }
    const r = lessonRecord();
    if (!r.read.includes(index)) r.read.push(index);
    persistCourse();
    render();
    return;
  }
  if (action === "read-card") {
    const card = lesson.cards[index];
    speakText(card.title + ". " + card.body + ". " + card.example);
    return;
  }
  if (action === "read-question") {
    const q = app.quiz.questions[app.quiz.index];
    speakText(
      q.q + ". " + q.options.map((o, i) => "ABCD"[i] + ". " + o).join(". "),
    );
    return;
  }
  if (action === "read-demo") {
    speakText("Xin chào em! Cùng Mít khám phá Tin học lớp ba nhé.");
    return;
  }
  if (action === "theme") {
    courseDB.settings.theme = b.dataset.theme;
    persistCourse();
    render();
    return;
  }
  if (action === "sound-toggle") {
    courseDB.settings.sound = !courseDB.settings.sound;
    persistCourse();
    render();
    return;
  }
  if (action === "quiz-start") {
    startQuiz();
    return;
  }
  if (action === "quiz-answer") {
    answerQuiz(index);
    return;
  }
  if (action === "quiz-next") {
    nextQuiz();
    return;
  }
  if (action === "export-self") {
    exportResults(false);
    return;
  }
  if (action === "export-all") {
    exportResults(true);
    return;
  }
  if (action === "import-click") {
    document.querySelector("#import-json").click();
    return;
  }
  if (action === "export-csv") {
    const quote = (v) =>
      '"' +
      String(v)
        .replace(/"/g, '""')
        .replace(/^[=+@-]/, "'") +
      '"';
    const rows = [
      ["Họ và tên", "Lớp", "Số bài đã làm thử thách", "Điểm /1600"],
      ...courseDB.profiles.map((p) => [
        p.name,
        p.className,
        completedLessons(p),
        totalQuizPoints(p),
      ]),
    ];
    saveDownload(
      new Blob(
        ["\uFEFF" + rows.map((row) => row.map(quote).join(",")).join("\r\n")],
        { type: "text/csv;charset=utf-8" },
      ),
      "Thanh-tich-Tin-hoc-3.csv",
    );
    return;
  }
  if (action === "print-progress") {
    document.querySelector("#course-print").innerHTML =
      `<h2>${SCHOOL_NAME}</h2><h1>BẢNG THÀNH TÍCH TIN HỌC 3</h1>${document.querySelector(".table-scroll").innerHTML}<p>${COURSE_AUTHORS.join(" · ")}</p>`;
    document.body.dataset.print = "progress";
    window.print();
    return;
  }
  if (action === "certificate-print") {
    document.querySelector("#course-print").innerHTML =
      `<img class="print-certificate" src="${document.querySelector("#course-certificate-image").src}" alt="Giấy khen">`;
    document.body.dataset.print = "certificate";
    window.print();
    return;
  }
  handlePractice(action, b);
}
function handleInput(event) {
  const t = event.target;
  if (t.id === "lesson-search") {
    app.search = t.value;
    document.querySelector("#lesson-groups").innerHTML = lessonGroupsHTML();
    return;
  }
  if (t.id === "course-volume") {
    courseDB.settings.volume = Number(t.value) / 100;
    persistCourse();
    return;
  }
  if (!activeStudent() || app.view !== "practice") return;
  const w = currentWork();
  if (t.id === "typing-input") {
    w.typed = t.value;
    document.querySelector("#typing-feedback").textContent = typingFeedback(
      w.typed,
    );
  }
  if (t.id === "distance") {
    w.distance = Number(t.value);
    document.querySelector("#distance-value").textContent = t.value;
  }
  if (t.id === "slide-title" || t.id === "slide-text") {
    const slide = w.slides[w.index];
    slide[t.id === "slide-title" ? "title" : "text"] = t.value;
    w.exported = false;
    document.querySelector("#slide-preview").innerHTML = slideHTML(slide);
  }
  if (["card-recipient", "card-message", "card-color"].includes(t.id)) {
    w[
      t.id === "card-recipient"
        ? "recipient"
        : t.id === "card-message"
          ? "message"
          : "color"
    ] = t.value;
    w.exported = false;
    document.querySelector("#card-preview").innerHTML = greetingHTML(w);
  }
  persistCourse();
}
async function handleChange(event) {
  const t = event.target;
  if (t.id === "certificate-lesson") {
    app.certificateLesson = Number(t.value);
    render();
    return;
  }
  if (t.id === "certificate-type") {
    app.certificateType = t.value === "GIẤY CHỨNG NHẬN" ? t.value : "GIẤY KHEN";
    render();
    return;
  }
  if (t.id === "import-json") {
    let count = 0,
      failed = 0;
    for (const file of [...t.files].slice(0, 100)) {
      try {
        if (file.size > 3 * 1024 * 1024) throw Error();
        const people = validateIncoming(
          JSON.parse((await file.text()).replace(/^\uFEFF/, "")),
        );
        mergeIncoming(people);
        count += people.length;
      } catch {
        failed++;
      }
    }
    render();
    notify(
      `Đã nhập ${count} hồ sơ${failed ? "; " + failed + " tệp chưa đúng định dạng" : ""}. Tệp Bài 1 cũ nhập tại trang Bài 1.`,
    );
    return;
  }
  if (!activeStudent() || app.view !== "practice") return;
  const w = currentWork();
  if (t.id === "slide-upload") {
    const file = t.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 3 * 1024 * 1024) {
      notify("Em chọn ảnh không quá 3 MB nhé.");
      return;
    }
    try {
      const data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      const image = await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = data;
      });
      const canvas = document.createElement("canvas"),
        scale = Math.min(
          1,
          800 / Math.max(image.naturalWidth, image.naturalHeight),
        );
      canvas.width = Math.round(image.naturalWidth * scale);
      canvas.height = Math.round(image.naturalHeight * scale);
      canvas
        .getContext("2d")
        .drawImage(image, 0, 0, canvas.width, canvas.height);
      const photo = canvas.toDataURL("image/jpeg", 0.8);
      if (photo.length > 250000) {
        notify("Ảnh còn lớn. Em chọn ảnh đơn giản hơn nhé.");
        return;
      }
      w.slides[w.index].photo = photo;
      w.exported = false;
      persistCourse();
      render();
    } catch {
      notify("Chưa đọc được ảnh. Em chọn ảnh PNG hoặc JPEG khác nhé.");
    }
    return;
  }

  if (t.dataset.part !== undefined) w.parts[t.dataset.part] = t.value;
  if (t.id === "posture") w.posture = t.value;
  if (t.id === "web-safe") w.safe = t.value;
  if (t.id === "slide-image") {
    w.slides[w.index].image = t.value;
    delete w.slides[w.index].photo;
    w.exported = false;
  }
  if (t.dataset.condition) {
    w[t.dataset.condition] = t.checked;
    delete w.answers[t.dataset.condition];
  }
  if (t.dataset.conditionAnswer) w.answers[t.dataset.conditionAnswer] = t.value;
  persistCourse();
  render();
}
function handleSubmit(event) {
  if (event.target.id !== "student-form") return;
  event.preventDefault();
  const name = cleanString(document.querySelector("#student-name").value, 60),
    className = cleanString(document.querySelector("#student-class").value, 20),
    avatar = document.querySelector("#student-avatar").value;
  if (!name || !className) return;
  let person = courseDB.profiles.find(
    (p) =>
      p.name.toLocaleLowerCase("vi") === name.toLocaleLowerCase("vi") &&
      p.className.toLocaleLowerCase("vi") === className.toLocaleLowerCase("vi"),
  );
  if (!person) {
    if (courseDB.profiles.length >= 200) {
      notify("Đã đủ 200 hồ sơ trên máy này.");
      return;
    }
    person = { id: makeId(), name, className, avatar, lessons: {} };
    courseDB.profiles.push(person);
  }
  courseDB.activeId = person.id;
  app.dialog = null;
  app.quiz = null;
  persistCourse();
  syncLegacyStudent();
  render();
  notify("Chào " + person.name + "! Hành trình đã sẵn sàng.");
}
migrateLegacy();
document.querySelector("#course-app").addEventListener("click", handleClick);
document.querySelector("#course-app").addEventListener("input", handleInput);
document.querySelector("#course-app").addEventListener("change", handleChange);
document.querySelector("#course-app").addEventListener("submit", handleSubmit);
bindPracticeEvents();
window.addEventListener("afterprint", () => {
  delete document.body.dataset.print;
  document.querySelector("#course-print").innerHTML = "";
});
window.addEventListener("pagehide", stopSpeech);
render();
