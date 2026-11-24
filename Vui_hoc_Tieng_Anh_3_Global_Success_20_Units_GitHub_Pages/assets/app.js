"use strict";
const COURSE_STORE = "ngo-quyen-english3-global-v1";

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
function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
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
  return `<header class="site-header"><a class="site-brand" href="${BASE}index.html"><span class="brand-bot">${courseMascotSVG()}</span><span><b>Vui học <em>Tiếng Anh 3</em></b><small>${SCHOOL_NAME}</small></span></a><div class="header-buttons">${activeStudent() ? button(`${escapeHTML(activeStudent().avatar)} ${escapeHTML(activeStudent().name)}`, "join", 'class="student-button"') : button("👋 Nhập tên và lớp", "join", 'class="primary"')}${button("🎨", "settings", 'class="icon-button" aria-label="Màu sắc và âm thanh"')}${button("🔊", "sound-toggle", `class="icon-button" aria-label="${courseDB.settings.sound ? "Tắt" : "Bật"} âm báo"`)}</div></header><div class="author-line"><span>📖 Global Success</span><span>Thực hiện ứng dụng: <b>${COURSE_AUTHORS.join(" · ")}</b></span></div>`;
}
function footerHTML() {
  return `<footer><b>${SCHOOL_NAME}</b><p>${COURSE_AUTHORS.join(" &amp; ")} · Tiếng Anh 3 · Global Success</p><p>Học liệu tương tác biên soạn theo mục tiêu bài học. Hồ sơ và điểm lưu trên trình duyệt, không tự đồng bộ giữa các máy.</p><a href="https://gs.hoclieu.vn/" target="_blank" rel="noopener">Học liệu chính thức của Global Success</a></footer>`;
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
  return `<nav class="lesson-breadcrumb"><a href="${BASE}index.html">🏡 Chọn bài khác</a><span>Chủ điểm ${lesson.topic}. ${COURSE_TOPICS[lesson.topic - 1]}</span></nav><section class="lesson-banner"><div class="lesson-icon illustrated">${lessonIllustration(lesson.id)}</div><div><span class="eyebrow">HÀNH TRÌNH KHÁM PHÁ · ${lesson.label.toUpperCase()}</span><h1>${lesson.title}</h1><p>${lesson.lead}</p></div></section><nav class="tabs" aria-label="Hoạt động bài học">${[
    ["home", "📚 Learn & listen"],
    ["practice", "🎮 Play & practise"],
    ["quiz", "🚀 Challenge"],
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
  return `<section class="portal-hero"><div><span class="eyebrow">GLOBAL SUCCESS · TIẾNG ANH 3</span><h1>Hello, explorers!<br><em>Cùng vui học tiếng Anh</em></h1><p>Nghe từng từ, ghép từng câu và khám phá thế giới cùng Sunny. Mỗi ngày một chút, em thêm tự tin nói tiếng Anh!</p><div class="hero-badges"><span>📚 20 Units</span><span>🌈 4 Review & Fun time</span><span>🎯 208 câu hỏi</span><span>🖱️ Thực hành tương tác</span></div>${activeStudent() ? `<div class="welcome"><b>Chào ${escapeHTML(activeStudent().name)}!</b><p>Lớp ${escapeHTML(activeStudent().className)} · Đã hoàn thành thử thách ${completedLessons()}/24 mục bài</p></div>` : button("Bắt đầu bằng tên của em", "join", 'class="primary large"')}</div><div class="cover-world">${worldScenery()}<figure class="book-showcase"><img src="${BASE}assets/book-covers.png" alt="Bìa hai tập SGK Tiếng Anh 3 Global Success"><figcaption>SGK Tiếng Anh 3 · Global Success</figcaption></figure><div class="floating-bot">${courseMascotSVG()}</div><span class="cover-star">✦</span><div class="tech-chip chip-a">Hello! 👋</div><div class="tech-chip chip-b">Listen · Play · Learn</div></div></section><section id="lesson-library"><div class="section-title"><div><span class="eyebrow">MỤC LỤC CỦA EM</span><h2>Hôm nay em muốn học bài nào?</h2></div><label class="search"><span>🔎</span><input id="lesson-search" placeholder="Tìm tên bài học…" value="${escapeHTML(app.search)}" aria-label="Tìm bài học"></label></div><div class="topic-filters">${button("Tất cả 24 mục bài", "topic-filter", `data-topic="0" aria-pressed="${app.topic === 0}"`)}${COURSE_TOPICS.map((topic, i) => button("Chủ điểm " + (i + 1), "topic-filter", `data-topic="${i + 1}" aria-pressed="${app.topic === i + 1}" title="${topic}"`)).join("")}</div><p class="hint">Khám phá 20 Units theo bốn chủ điểm. Sau mỗi năm Unit là một Review & Fun time để ôn tập và chơi mà học.</p><div id="lesson-groups">${lessonGroupsHTML()}</div></section>`;
}
function lessonGroupsHTML() {
  const selected = COURSE_LESSONS.filter(
    (l) =>
      (!app.topic || l.topic === app.topic) &&
      normalizeText(l.label + " " + l.title + " " + l.vi).includes(normalizeText(app.search)),
  );
  if (!selected.length)
    return '<div class="panel empty">Chưa tìm thấy bài. Em thử từ khóa khác nhé.</div>';
  return COURSE_TOPICS.map((topic, i) => {
    const list = selected.filter((l) => l.topic === i + 1);
    if (!list.length) return "";
    return `<section class="topic-group theme-${i + 1}"><div class="topic-heading"><span>${["👋", "🏫", "🏡", "🌍"][i]}</span><div><small>CHỦ ĐỀ ${i + 1}</small><h3>${topic}</h3></div></div><div class="lesson-grid">${list
      .map((l) => {
        const record = activeStudent()?.lessons?.[l.id];
        return `<a class="lesson-card ${l.kind === "review" ? "review-card" : ""}" href="${BASE}${l.slug}/index.html" data-lesson-link="${l.id}"><div class="card-art art-${l.id % 4}">${lessonIllustration(l.id)}</div><div class="lesson-card-body"><span class="lesson-number">${l.label}</span><h4>${l.title}</h4><p>${l.lead}</p><div class="card-bottom"><span>${record?.quiz ? `⭐ ${record.quiz.correct}/${record.quiz.total} câu đúng` : record?.practice ? "✓ Đã thực hành" : "Cùng khám phá"}</span><b>Vào học</b></div></div></a>`;
      })
      .join("")}</div></section>`;
  }).join("");
}
function lessonHomeHTML() {
  return `<section class="learning-intro"><div><span class="eyebrow">${lesson.kind === "review" ? "REVIEW & FUN TIME" : "READY, SET, LEARN!"}</span><h2>${lesson.label} · ${lesson.title}</h2><p>${lesson.vi}</p><div class="hero-badges"><span>🖼️ ${lesson.vocab.length} từ / cụm từ</span><span>🎧 Bấm nghe và nói theo</span><span>🎯 ${lesson.quiz.length} câu thử thách</span></div></div>${lessonIllustration(lesson.id)}</section><section class="panel"><div class="section-title"><div><span class="eyebrow">WORD GARDEN</span><h2>Vườn từ vựng của em</h2><p>Quan sát tranh, bấm nghe rồi nói theo. Các tranh được biên soạn minh họa.</p></div>${button("🎮 Vào chơi", "view", 'data-view="practice" class="primary"')}</div><div class="vocab-grid">${lesson.vocab.map((v, i) => `<article class="vocab-tile">${wordArt(v.art)}<h3 lang="en">${escapeHTML(v.word)}</h3><p>${escapeHTML(v.vi)}</p>${button("🔊 Listen", "en-play", `data-text="${escapeHTML(v.word)}" aria-label="Nghe ${escapeHTML(v.word)}" class="listen-button"`)}</article>`).join("")}</div>${button(lessonRecord()?.read?.includes(0) ? "✓ Đã xem từ vựng" : "Em đã xem từ vựng", "read-mark", 'data-index="0" class="secondary"')}</section><section class="panel"><span class="eyebrow">SAY IT TOGETHER</span><h2>Cùng luyện mẫu câu</h2><div class="pattern-grid">${lesson.patterns.map((p) => `<article class="pattern-card"><div class="pattern-line"><b lang="en">${escapeHTML(p.q)}</b>${button("🔊", "en-play", `data-text="${escapeHTML(p.q)}" aria-label="Nghe ${escapeHTML(p.q)}"`)}</div><p>${escapeHTML(p.qvi)}</p><div class="pattern-line answer"><b lang="en">${escapeHTML(p.a)}</b>${button("🔊", "en-play", `data-text="${escapeHTML(p.a)}" aria-label="Nghe ${escapeHTML(p.a)}"`)}</div><p>${escapeHTML(p.avi)}</p></article>`).join("")}</div>${button(lessonRecord()?.read?.includes(1) ? "✓ Đã tìm hiểu mẫu câu" : "Em đã tìm hiểu mẫu câu", "read-mark", 'data-index="1" class="secondary"')}<p class="hint">Nói theo cùng bạn hoặc thầy cô. Ứng dụng không thu âm và không tự chấm phát âm.</p></section><section class="panel reading-paper"><span class="eyebrow">READ A LITTLE</span><h2>Đọc một chút nhé!</h2><div lang="en" class="mini-reading">${escapeHTML(lesson.reading).replace(/\n/g, "<br>")}</div>${button(lessonRecord()?.read?.includes(2) ? "✓ Đã đọc" : "Em đã đọc đoạn ngắn", "read-mark", 'data-index="2" class="secondary"')}<p class="hint">Đoạn đọc và bài tập bổ trợ được biên soạn riêng theo chủ đề, không chép nguyên bài tập SGK.</p></section><section class="panel next-action"><div><h2>Play, practise and smile!</h2><p>${lesson.task}</p></div>${button("Vào khu trò chơi", "view", 'data-view="practice" class="primary"')}</section><div class="lesson-links">${lesson.id > 1 ? `<a href="../${COURSE_LESSONS[lesson.id - 2].slug}/index.html">${COURSE_LESSONS[lesson.id - 2].label}</a>` : ""}${lesson.id < COURSE_LESSONS.length ? `<a href="../${COURSE_LESSONS[lesson.id].slug}/index.html">${COURSE_LESSONS[lesson.id].label}</a>` : ""}</div>`;
}
function joinView(message = "Mỗi bạn một hành trình riêng.") {
  return `<section class="panel join-panel"><span class="join-mascot">🤖</span><h2>Sunny muốn biết tên của em!</h2><p>${message}</p><form id="student-form"><label>Họ và tên<input id="student-name" required maxlength="60" autocomplete="off" placeholder="Ví dụ: Nguyễn Minh Anh"></label><label>Lớp<input id="student-class" required maxlength="20" autocomplete="off" placeholder="Ví dụ: 3/1"></label><label>Bạn đồng hành<select id="student-avatar"><option>🐰</option><option>🐻</option><option>🐱</option><option>🦊</option></select></label><button class="primary" type="submit">Lưu và bắt đầu</button></form>${courseDB.profiles.length ? `<details><summary>Chọn hồ sơ đã có</summary><div class="profile-list">${courseDB.profiles.map((p) => button(`${escapeHTML(p.avatar)} ${escapeHTML(p.name)} · ${escapeHTML(p.className)}`, "profile-select", `data-id="${escapeHTML(p.id)}"`)).join("")}</div></details>` : ""}<p class="hint">Tên và lớp lưu trên trình duyệt này, dùng cho thành tích và giấy khen.</p></section>`;
}
function startQuiz() {
  stopEnglish();
  if (!activeStudent()) {
    stopProgram();
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
    return `<section class="panel challenge-intro"><span>🚀</span><h2>Thử thách ${lesson.label}</h2><p>${lesson.quiz.length} câu hỏi luyện từ vựng, mẫu câu và tình huống. Không giới hạn thời gian; chọn một đáp án mỗi câu.</p>${record.quiz ? `<p class="pill">Lượt tốt nhất: ${record.quiz.correct}/${record.quiz.total} câu đúng</p>` : ""}${button("Em sẵn sàng!", "quiz-start", 'class="primary large"')}<p>Hoàn thành lượt chơi để nhận giấy ghi nhận sự cố gắng của em.</p></section>`;
  if (run.done) {
    const mistakes = run.answers.filter((a) => !a.correct);
    return `<section class="panel result"><span>🏆</span><h2>Em đã hoàn thành!</h2><b class="score">${run.correct}<small>/${run.questions.length}</small></b><p>câu trả lời đúng · Điểm tốt nhất được giữ lại</p><div class="actions">${button("Nhận giấy khen", "view", 'data-view="certificate" class="primary"')}${button("Thử lại", "quiz-start")}${button("Về bài học", "view", 'data-view="home"')}</div>${mistakes.length ? `<details open class="review"><summary>Cùng ôn lại ${mistakes.length} câu</summary>${mistakes.map((a) => `<article><h3>${escapeHTML(a.question.q)}</h3><p><b>Lựa chọn đúng:</b> ${escapeHTML(a.question.options[a.question.answer])}</p><p>${escapeHTML(a.question.why)}</p></article>`).join("")}</details>` : '<p class="success feedback">✨ Em đã làm đúng tất cả câu trong lượt này!</p>'}</section>`;
  }
  const q = run.questions[run.index],
    answer = run.answers[run.index];
  return `<section class="panel quiz-card"><div class="quiz-top"><span>Câu ${run.index + 1}/${run.questions.length}</span><span>Mức ${q.level} · ${["", "Nhận biết", "Thông hiểu", "Vận dụng"][q.level]}</span></div><div class="progress"><i style="width:${(run.index / run.questions.length) * 100}%"></i></div><h2>${escapeHTML(q.q)}</h2>${q.art ? `<div class="quiz-illustration">${wordArt(q.art)}</div>` : ""}<div class="answer-grid">${q.options.map((option, i) => button(`<b>${"ABCD"[i]}</b>${escapeHTML(option)}`, "quiz-answer", `data-index="${i}" class="quiz-option ${answer ? (i === q.answer ? "right" : i === answer.selected ? "wrong" : "dim") : ""}" ${answer ? "disabled" : ""}`)).join("")}</div>${answer ? `<div class="feedback ${answer.correct ? "success" : "try"}" role="status"><b>${answer.correct ? "🎉 Em đã làm đúng!" : "🌱 Mình cùng tìm hiểu lại nhé."}</b><p>${escapeHTML(q.why)}</p>${button(run.index === run.questions.length - 1 ? "Xem kết quả" : "Câu tiếp theo", "quiz-next", 'class="primary"')}</div>` : ""}</section>`;
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
  return `<section class="section-title"><div><span class="eyebrow">CÙNG NHAU TIẾN BỘ</span><h1>Vườn thành tích</h1><p>Mỗi Unit hoặc Review quy đổi về 100 điểm. Tối đa 2.400 điểm cho 20 Units và 4 Review. Hoạt động nghe, nói theo và trò chơi giúp em luyện thêm.</p></div></section><div class="actions">${button("In bảng thành tích", "print-progress", 'class="primary"')}${button("Tải CSV", "export-csv")}${button("Tải kết quả của em", "export-self", p ? "" : "disabled")}${button("Sao lưu tất cả", "export-all")}${button("Nhập kết quả JSON", "import-click")}<input id="import-json" type="file" accept=".json" multiple hidden></div>${
    p
      ? `<div class="stat-row"><article><b>${completedLessons(p)}/24</b><span>Bài đã làm thử thách</span></article><article><b>${totalQuizPoints(p)}/2400</b><span>Điểm thử thách</span></article><article><b>${Object.values(p.lessons || {}).filter((r) => r.practice).length}</b><span>Bài đã thực hành</span></article></div><section class="panel"><h2>Hành trình của ${escapeHTML(p.name)}</h2><div class="progress-list">${COURSE_LESSONS.map(
          (l) => {
            const r = p.lessons?.[l.id];
            return `<a href="${BASE}${l.slug}/index.html" data-lesson-link="${l.id}"><span>${l.icon} ${l.label}. ${l.title}</span><small>${r?.practice ? "✓ Thực hành · " : ""}${r?.quiz ? `${r.quiz.correct}/${r.quiz.total} câu đúng` : "Chưa làm thử thách"}</small></a>`;
          },
        ).join("")}</div></section>`
      : ""
  }<section class="panel"><h2>Bảng các hồ sơ trên máy</h2><div class="table-scroll"><table><thead><tr><th>Học sinh</th><th>Lớp</th><th>Thử thách đã làm</th><th>Điểm /2400</th></tr></thead><tbody>${
    [...courseDB.profiles]
      .sort(
        (a, b) =>
          totalQuizPoints(b) - totalQuizPoints(a) ||
          a.name.localeCompare(b.name, "vi"),
      )
      .map(
        (person) =>
          `<tr><td>${escapeHTML(person.name)}</td><td>${escapeHTML(person.className)}</td><td>${completedLessons(person)}/24</td><td>${totalQuizPoints(person)}</td></tr>`,
      )
      .join("") ||
    '<tr><td colspan="4">Chưa có hồ sơ. Em nhập tên để bắt đầu nhé.</td></tr>'
  }</tbody></table></div></section>`;
}
function guideView() {
  return `<section class="panel"><h1>Cùng em tự tin học tiếng Anh</h1><div class="knowledge-grid"><article><h2>📚 Học theo chủ đề</h2><p>20 Units theo mục lục thầy cung cấp, đủ 4 Review & Fun time. Review 2 sau Unit 10 được bổ sung để trọn phần ôn tập. Nội dung bổ trợ từ vựng và mẫu câu, không thay SGK hoặc chương trình của giáo viên.</p></article><article><h2>🎧 Nghe được ngay</h2><p>Âm thanh tiếng Anh tổng hợp được đóng gói cùng ứng dụng; có tốc độ chậm và phát lại. Đây là giọng tham khảo, không phải bản thu chính thức Global Success.</p></article><article><h2>🎮 Học qua thao tác</h2><p>Ghép cặp, nghe chọn, gõ từ, xếp câu bằng nút hoặc kéo thả, đọc hiểu, chọn từ theo tranh; thêm thẻ từ và luyện nói theo. Không chấm phát âm tự động và không cần micro.</p></article><article><h2>💾 Giữ kết quả</h2><p>Nhập tên và lớp để lưu hồ sơ riêng trên trình duyệt. Tải JSON khi chuyển máy; CSV và in bảng thành tích ở mục Thành tích. Không có máy chủ tổng hợp điểm toàn trường.</p></article><article><h2>🎖️ Giấy khen</h2><p>Hoàn thành thử thách để giấy có kết quả thật. Xem mẫu, tải ảnh PNG, PDF A4 hoặc in. Giấy chỉ ghi nhận hoạt động học tập trong ứng dụng.</p></article><article><h2>🧑‍🏫 Đồng hành</h2><p>Thầy cô hỗ trợ phát âm, hỏi đáp theo cặp và nhận xét cách dùng từ trong ngữ cảnh. Bài tập có giải thích để học sinh tự sửa; ưu tiên sự tiến bộ.</p></article></div></section>`;
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
    )}</div><label>Âm lượng<input id="course-volume" type="range" min="0" max="100" value="${Math.round(courseDB.settings.volume * 100)}"></label><div class="actions">${button(courseDB.settings.sound ? "Tắt âm báo" : "Bật âm báo", "sound-toggle")}${button("Nghe thử tiếng Việt", "read-demo")}${button("Đóng", "dialog-close", 'class="primary"')}</div><label>Tốc độ tiếng Anh<select id="english-rate"><option value="0.8" ${courseDB.settings.englishRate === 0.8 ? "selected" : ""}>Chậm · 0,8×</option><option value="1" ${!courseDB.settings.englishRate || courseDB.settings.englishRate === 1 ? "selected" : ""}>Bình thường · 1×</option><option value="1.1" ${courseDB.settings.englishRate === 1.1 ? "selected" : ""}>Nhanh hơn · 1,1×</option></select></label><p>Âm hiệu chỉ là phản hồi thao tác. Các nút nghe dùng giọng tiếng Anh tổng hợp đóng gói sẵn; không phải audio chính thức của SGK.</p></section>`;
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
  stopEnglish();
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
          { app: "ngo-quyen-english3-global", version: 4, profiles },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    ),
    all ? "Tieng-Anh-3-tat-ca-ket-qua.json" : "Tieng-Anh-3-ket-qua-cua-em.json",
  );
}
function validateIncoming(data) {
  if (
    data?.app !== "ngo-quyen-english3-global" ||
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
        total = COURSE_LESSONS.find((l) => l.id === lessonId)?.quiz.length || 8;
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

  const b = event.target.closest("[data-action]");
  if (!b || b.disabled) return;
  const action = b.dataset.action,
    index = Number(b.dataset.index);
  if (action === "join") {
    stopProgram();
    app.dialog = "join";
    render();
    return;
  }
  if (action === "settings") {
    stopProgram();
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
    stopProgram();
    app.view = b.dataset.view;
    app.dialog = null;
    app.wheelUsed = false;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "profile-select") {
    stopProgram();
    courseDB.activeId = b.dataset.id;
    app.dialog = null;
    app.quiz = null;
    app.work = null;
    persistCourse();

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
      stopProgram();
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
    speakText("Xin chào em! Cùng Sunny vui học tiếng Anh lớp ba nhé.");
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
      ["Họ và tên", "Lớp", "Số bài đã làm thử thách", "Điểm /2400"],
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
      "Thanh-tich-Tieng-Anh-3.csv",
    );
    return;
  }
  if (action === "print-progress") {
    document.querySelector("#course-print").innerHTML =
      `<h2>${SCHOOL_NAME}</h2><h1>BẢNG THÀNH TÍCH TIẾNG ANH 3</h1>${document.querySelector(".table-scroll").innerHTML}<p>${COURSE_AUTHORS.join(" · ")}</p>`;
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
  if (t.id === "english-rate") {
    courseDB.settings.englishRate = Number(t.value);
    persistCourse();
    return;
  }
  if (t.id === "course-volume") {
    courseDB.settings.volume = Number(t.value) / 100;
    persistCourse();
    return;
  }
  if (activeStudent() && app.view === "practice") practiceInput(t);
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
      `Đã nhập ${count} hồ sơ${failed ? "; " + failed + " tệp chưa đúng định dạng" : ""}.`,
    );
    return;
  }
  if (activeStudent() && app.view === "practice") await practiceChange(t);
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

  render();
  notify("Chào " + person.name + "! Hành trình đã sẵn sàng.");
}

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
