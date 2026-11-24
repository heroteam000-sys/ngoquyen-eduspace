"use strict";
const TYPE_TARGETS = ["Tin Hoc 4", "12345 67890", "! @ # $"];
const HARDWARE = [
  "Màn hình",
  "Bàn phím",
  "Chuột",
  "PowerPoint",
  "Word",
  "Scratch",
];
const FILE_SEED = [
  { id: "a", name: "Ghi-chu.txt", parent: "root", kind: "file" },
  { id: "b", name: "Nhap.txt", parent: "root", kind: "file" },
  { id: "c", name: "Bai-tap", parent: "root", kind: "folder" },
  { id: "d", name: "Tai-lieu", parent: "root", kind: "folder" },
];
const freshSlide = () => ({
  title: "",
  text: "",
  image: 0,
  size: 24,
  color: "#53387f",
  bold: false,
  italic: false,
  bullets: false,
  font: "Arial",
  transition: "none",
});
let programToken = 0;
function stopProgram() {
  programToken++;
}
function freshWork(id) {
  return {
    parts: {},
    answers: {},
    typed: "",
    exercise: 0,
    typedDone: [],
    slides: [freshSlide()],
    index: 0,
    preview: 0,
    files: JSON.parse(JSON.stringify(FILE_SEED)),
    folder: "root",
    selected: "",
    clipboard: null,
    history: [],
    events: [],
    text: "",
    selection: [0, 0],
    textClip: "",
    undo: [],
    image: 0,
    exported: false,
    idea: "",
    backdrop: "garden",
    active: 0,
    sprites: [
      {
        name: "Mèo Mít",
        emoji: "🐱",
        x: 45,
        y: 55,
        angle: 0,
        speech: "",
        blocks: [],
      },
    ],
    runs: [],
    viewed: [],
    media: {},
    query: "",
    finding: "",
    result: null,
    feedback: "",
  };
}
function currentWork() {
  const r = lessonRecord();
  if (!r.work) r.work = freshWork(LESSON_ID);
  return r.work;
}
function opts(items, value) {
  return items
    .map(
      (x, i) =>
        `<option value="${i}" ${String(value) === String(i) ? "selected" : ""}>${escapeHTML(x)}</option>`,
    )
    .join("");
}
function labSelect(label, key, items, value) {
  return `<label>${label}<select data-work="${key}"><option value="">Chọn câu trả lời</option>${items.map((x) => `<option ${value === x ? "selected" : ""}>${escapeHTML(x)}</option>`).join("")}</select></label>`;
}
function practiceHTML() {
  if (!activeStudent())
    return joinView("Nhập tên và lớp để lưu bài thực hành của em.");
  const w = currentWork();
  return `<section class="lab-banner"><div><span class="eyebrow">PHÒNG THỰC HÀNH · BÀI ${lesson.number}</span><h1>${lesson.title}</h1><p>${lesson.task}</p></div>${lessonIllustration(LESSON_ID)}</section><p class="simulation-note">🧩 Công cụ học tập trên web · Các thao tác tệp, văn bản, trang chiếu và khối lệnh là mô phỏng trong ứng dụng.</p><section class="panel lab-panel">${labBody(w)}<p id="lab-feedback" class="feedback ${lessonRecord().practice ? "success" : "try"}" role="status">${escapeHTML(w.feedback || (lessonRecord().practice ? "✓ Em đã hoàn thành hoạt động này." : "Làm từng bước rồi bấm Kiểm tra nhé."))}</p><div class="actions">${button("✓ Kiểm tra thực hành", "lab-check", 'class="primary"')}${button("Làm lại hoạt động", "lab-reset")}${button("Làm thử thách 8 câu", "view", 'data-view="quiz" class="secondary"')}</div></section><section class="panel real-world"><h2>🌱 Thực hành thêm cùng thầy cô</h2><p>${lesson.real}</p></section>`;
}
function labBody(w) {
  if (LESSON_ID === 1)
    return `<h2>Kéo suy nghĩ vào đúng nhóm</h2><div class="sort-grid">${HARDWARE.map((x, i) => labSelect(`${i < 3 ? "🖥️" : "🧩"} ${x}`, "parts." + i, ["Phần cứng", "Phần mềm"], w.parts[i])).join("")}</div>${labSelect("Khi phần mềm đang lưu, em sẽ…", "safe", ["Chờ lưu xong rồi thoát đúng cách", "Rút điện ngay"], w.safe)}`;
  if (LESSON_ID === 2 || LESSON_ID === 13) {
    const target = LESSON_ID === 2 ? "Tin hoc 4" : TYPE_TARGETS[w.exercise];
    return `<h2>⌨️ Vườn gõ phím</h2><p>Đặt tay trên hàng cơ sở A S D F – J K L ;. Hai phím F và J có gờ để định vị. Dùng Shift khi gõ chữ hoa và kí hiệu phía trên.</p>${LESSON_ID === 13 ? `<div class="actions">${TYPE_TARGETS.map((t, i) => button(`${w.typedDone.includes(i) ? "✓ " : ""}${["Chữ hoa", "Chữ số", "Kí hiệu"][i]}`, "type-exercise", `data-index="${i}" aria-pressed="${w.exercise === i}"`)).join("")}</div>` : ""}<div class="type-target">${escapeHTML(target)}</div><label>Gõ lại đúng mẫu<input id="typing-input" autocomplete="off" spellcheck="false" value="${escapeHTML(w.typed)}" placeholder="Đặt tay đúng và bắt đầu…"></label><p id="typing-feedback">${typingFeedback(w.typed, target)}</p>${lessonIllustration(2)}<p class="hint">Ứng dụng kiểm tra kí tự nhập; thầy cô quan sát tư thế và cách đặt ngón tay của em.</p>${LESSON_ID === 13 ? button("Kiểm tra lượt gõ", "type-check", 'class="secondary"') : ""}`;
  }
  if (LESSON_ID === 3)
    return `<h2>🌐 Trang web về thiên nhiên</h2><div class="mock-browser"><div class="address">🔒 Thư viện mẫu trong ứng dụng · không phải Internet thật</div><div class="actions">${button("🌳 Cây xanh", "web-page", 'data-index="0"')}${button("🦋 Bướm", "web-page", 'data-index="1"')}${button("🔊 Nghe tiếng chuông", "web-audio")}</div><div class="web-card">${lessonIllustration(w.page === 1 ? 12 : 3)}<h3>${w.page === 1 ? "Bướm trải qua các giai đoạn phát triển" : "Cây xanh cần nước và ánh sáng"}</h3><p>${w.page === 1 ? "Trứng, sâu bướm, nhộng và bướm trưởng thành là các giai đoạn trong vòng đời của bướm." : "Cây xanh góp phần làm đẹp trường lớp. Em cùng các bạn chăm sóc cây theo hướng dẫn của thầy cô."}</p></div></div><div class="sort-grid">${labSelect("Dòng giới thiệu em đọc được là…", "formsText", ["Văn bản", "Âm thanh", "Hình ảnh"], w.formsText)}${labSelect("Tiếng chuông vừa nghe là…", "formsAudio", ["Âm thanh", "Văn bản", "Hình ảnh"], w.formsAudio)}${labSelect("Tranh minh họa là…", "formsImage", ["Hình ảnh", "Âm thanh", "Văn bản"], w.formsImage)}</div>`;
  if (LESSON_ID === 4)
    return `<h2>🔎 Tìm trong thư viện nhỏ</h2><p>Nhiệm vụ: tìm cách chăm sóc cây xanh. Nhập từ khóa rồi đọc kết quả phù hợp. Đây là danh mục mô phỏng, không gửi yêu cầu ra Internet.</p><div class="search-row"><input id="search-query" aria-label="Từ khóa" value="${escapeHTML(w.query)}" placeholder="Ví dụ: chăm sóc cây">${button("Tìm kiếm", "search-run", 'class="primary"')}</div><div class="search-results">${w.results ? w.results.map((i) => button(SEARCH_PAGES[i].title, "search-open", `data-index="${i}" class="search-result"`)).join("") || "<p>Chưa thấy kết quả. Thử từ khóa ngắn hơn: cây, bướm hoặc an toàn.</p>" : "<p>Em thử tìm thông tin nhé.</p>"}</div>${w.result !== null ? `<article class="result-page"><h3>${SEARCH_PAGES[w.result].title}</h3><p>${SEARCH_PAGES[w.result].text}</p><small>Nguồn: thư viện học tập mẫu trong ứng dụng</small></article>` : ""}<label>Ghi một điều em tìm được<textarea id="search-finding" maxlength="500">${escapeHTML(w.finding)}</textarea></label>`;
  if (LESSON_ID === 5) return fileLab(w);
  if (LESSON_ID === 6)
    return `<h2>🛡️ Vé sử dụng phần mềm</h2><p>Chọn “Được phép” hoặc “Không được phép” cho từng tình huống.</p><div class="sort-grid">${["Dùng phần mềm được nhà trường cấp quyền", "Dùng phần mềm miễn phí và tuân thủ điều kiện", "Tải bản bẻ khóa để khỏi mua quyền", "Gửi mã kích hoạt riêng của trường cho người lạ"].map((t, i) => labSelect(t, "answers." + i, ["Được phép", "Không được phép"], w.answers[i])).join("")}</div>${lessonIllustration(6)}`;
  if ([7, 8, 9].includes(LESSON_ID)) return slideLab(w);
  if ([10, 11].includes(LESSON_ID)) return textLab(w);
  if (LESSON_ID === 12)
    return `<h2>🎬 Góc văn hóa: Sắc màu Hội An</h2><p>Xem video minh họa tự biên soạn về nhà cổ, đèn lồng và hoạt động giữ gìn cảnh quan. Thử phát, tạm dừng và thay đổi âm lượng.</p><video id="culture-video" controls preload="metadata" playsinline poster="${BASE}assets/culture-poster.png"><source src="${BASE}assets/hoi-an.mp4" type="video/mp4">Thiết bị chưa phát được video. Em đọc lời mô tả bên dưới nhé.</video><details><summary>Nội dung chữ của video</summary><p>Hội An có những ngôi nhà cổ mái ngói và những chiếc đèn lồng nhiều màu. Khi tham quan, em đi theo người lớn, giữ vệ sinh và trân trọng cảnh quan. Tranh trong video là minh họa, không phải ảnh tư liệu.</p></details><p id="media-status" class="hint">${["play", "pause", "volume"].map((k) => `${w.media[k] ? "✓" : "○"} ${{ play: "Đã phát", pause: "Đã tạm dừng", volume: "Đã đổi âm lượng" }[k]}`).join(" · ")}</p><label>Em quan sát được điều gì? Nêu một việc để giữ gìn cảnh quan.<textarea id="media-note" maxlength="700">${escapeHTML(w.finding)}</textarea></label>`;
  return blockLab(w);
}
const SEARCH_PAGES = [
  {
    title: "Chăm sóc cây xanh ở trường",
    text: "Tưới lượng nước vừa đủ theo hướng dẫn, đặt cây nơi có ánh sáng phù hợp, không bẻ cành và nhặt rác quanh gốc.",
  },
  {
    title: "Vòng đời của bướm",
    text: "Bướm phát triển qua các giai đoạn: trứng, sâu bướm, nhộng, bướm trưởng thành.",
  },
  {
    title: "An toàn khi dùng máy tính",
    text: "Giữ tay khô, ngồi đúng tư thế và không tự tháo hoặc sửa thiết bị điện.",
  },
];
function fileLab(w) {
  const parent = w.files.find((f) => f.id === w.folder);
  return `<h2>📁 Trình quản lí tệp mô phỏng</h2><p>1. Sao chép Ghi-chu.txt vào Bai-tap. 2. Cắt bản sao sang Tai-lieu, đổi tên thành Bai-cua-em.txt. 3. Xóa Nhap.txt ở thư mục gốc.</p><p><b>Đang ở: ${escapeHTML(parent?.name || "Thư mục gốc")}</b> · Bộ nhớ nằm trong ứng dụng.</p><div class="actions">${button("Về gốc", "file-root")}${button("Tạo thư mục", "file-new")}${button("Sao chép", "file-copy")}${button("Cắt", "file-cut")}${button("Dán", "file-paste")}${button("Đổi tên", "file-rename")}${button("Xóa", "file-delete")}${button("Hoàn tác", "file-undo")}</div><label>Tên mới / Tên thư mục<input id="file-name" value="${escapeHTML(w.newName || "")}" maxlength="60" placeholder="Nhập tên rồi chọn Tạo hoặc Đổi tên"></label><div class="file-grid">${
    w.files
      .filter((f) => f.parent === w.folder)
      .map(
        (f) =>
          `<div class="file-tile ${w.selected === f.id ? "selected" : ""}">${button(`${f.kind === "folder" ? "📁" : "📄"} ${escapeHTML(f.name)}`, "file-select", `data-id="${f.id}" aria-pressed="${w.selected === f.id}"`)}${f.kind === "folder" ? button("Mở thư mục", "file-open", `data-id="${f.id}"`) : ""}</div>`,
      )
      .join("") || "<p>Thư mục đang trống.</p>"
  }</div><p>${w.clipboard ? `Bộ nhớ tạm: ${w.clipboard.mode === "copy" ? "Sao chép" : "Cắt"} ${escapeHTML(w.files.find((f) => f.id === w.clipboard.id)?.name || "")}` : "Chọn tệp hoặc thư mục trước khi thao tác."}</p>`;
}
function fileSnapshot(w) {
  w.history.push(JSON.stringify({ files: w.files, events: w.events }));
  if (w.history.length > 20) w.history.shift();
}
function fileOperation(w, action) {
  const f = w.files.find((f) => f.id === w.selected);
  if (action === "file-root") {
    w.folder = "root";
    w.selected = "";
    return;
  }
  if (action === "file-undo") {
    if (w.history.length) {
      const prev = JSON.parse(w.history.pop());
      w.files = prev.files;
      w.events = prev.events;
      w.folder = "root";
      w.selected = "";
      w.clipboard = null;
    }
    return;
  }
  if (action === "file-copy" || action === "file-cut") {
    if (!f) throw Error("Em chọn một tệp hoặc thư mục trước nhé.");
    w.clipboard = { id: f.id, mode: action === "file-copy" ? "copy" : "cut" };
    return;
  }
  if (action === "file-new" || action === "file-rename") {
    const name = cleanString(w.newName, 60);
    if (!name || /[\\/:*?"<>|]/.test(name))
      throw Error('Tên không trống và không chứa \\ / : * ? " < > |.');
    if (
      w.files.some(
        (x) => x.parent === w.folder && x.name === name && x.id !== f?.id,
      )
    )
      throw Error("Đã có tên này trong thư mục.");
    if (action === "file-rename" && !f) throw Error("Chọn mục muốn đổi tên.");
    fileSnapshot(w);
    if (action === "file-new")
      w.files.push({ id: makeId(), name, parent: w.folder, kind: "folder" });
    else {
      f.name = name;
      w.events.push("rename");
    }
    w.newName = "";
    return;
  }
  if (action === "file-delete") {
    if (!f) throw Error("Chọn mục cần xóa.");
    fileSnapshot(w);
    const ids = new Set([f.id]);
    let changed = true;
    while (changed) {
      changed = false;
      w.files.forEach((x) => {
        if (ids.has(x.parent) && !ids.has(x.id)) {
          ids.add(x.id);
          changed = true;
        }
      });
    }
    w.files = w.files.filter((x) => !ids.has(x.id));
    w.events.push("delete");
    w.selected = "";
    return;
  }
  if (action === "file-paste") {
    const clip = w.clipboard,
      src = w.files.find((x) => x.id === clip?.id);
    if (!src) throw Error("Bộ nhớ tạm chưa có mục để dán.");
    let dest = w.folder;
    while (dest !== "root") {
      if (dest === src.id)
        throw Error(
          "Không thể đặt thư mục vào chính nó hoặc thư mục con của nó.",
        );
      dest = w.files.find((x) => x.id === dest)?.parent || "root";
    }
    if (w.files.some((x) => x.parent === w.folder && x.name === src.name))
      throw Error("Nơi này đã có mục cùng tên. Chọn thư mục khác.");
    fileSnapshot(w);
    if (clip.mode === "cut") {
      src.parent = w.folder;
      w.events.push("cut-paste");
      w.clipboard = null;
    } else {
      const clone = (item, parent) => {
        const id = makeId();
        w.files.push({ ...item, id, parent });
        const kids = w.files.filter((x) => x.parent === item.id);
        kids.forEach((x) => clone(x, id));
      };
      clone(src, w.folder);
      w.events.push("copy-paste");
    }
    return;
  }
}
function illustrationData(id) {
  return (
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(lessonIllustration(id))
  );
}
function slideHTML(s, standalone = false) {
  return `<article class="slide-content" style="font-family:${s.font};font-size:${s.size}px;color:${s.color};font-weight:${s.bold ? 800 : 400};font-style:${s.italic ? "italic" : "normal"}"><h3>${escapeHTML(s.title || "Tiêu đề của em")}</h3>${s.photo || s.image ? `<img alt="Minh họa trang chiếu" src="${s.photo || illustrationData(Number(s.image))}">` : ""}${
    s.bullets
      ? `<ul>${s.text
          .split("\n")
          .filter(Boolean)
          .map((t) => `<li>${escapeHTML(t)}</li>`)
          .join("")}</ul>`
      : `<p>${escapeHTML(s.text || "Viết điều em muốn giới thiệu…")}</p>`
  }</article>`;
}
function slideLab(w) {
  const s = w.slides[w.index];
  return `<h2>🎞️ Xưởng trang chiếu</h2><p>Soạn nội dung tiếng Việt; mỗi trang một ý. Sản phẩm tải về là bài trình chiếu HTML mở được bằng trình duyệt.</p><div class="actions">${w.slides.map((x, i) => button(`Trang ${i + 1}`, "slide-select", `data-index="${i}" aria-pressed="${w.index === i}"`)).join("")}${button("Thêm trang", "slide-add")}${button("Xóa trang", "slide-delete")}</div><div class="editor-layout"><div class="editor-controls"><label>Tiêu đề<input id="slide-title" value="${escapeHTML(s.title)}" maxlength="100" placeholder="Ví dụ: Ngôi trường của em"></label><label>Nội dung<textarea id="slide-text" maxlength="1000">${escapeHTML(s.text)}</textarea></label><label>Ảnh minh họa<select id="slide-image"><option value="0">Chưa chèn ảnh</option>${[1, 2, 5, 6, 7, 12, 15].map((i) => `<option value="${i}" ${Number(s.image) === i ? "selected" : ""}>${{ 1: "Máy tính", 2: "Bàn phím", 5: "Thư mục", 6: "An toàn", 7: "Trang chiếu", 12: "Nhà cổ và đèn lồng", 15: "Khối lệnh" }[i]}</option>`).join("")}</select></label><label>Hoặc ảnh của em<input id="lab-image" type="file" accept="image/png,image/jpeg,image/webp"></label>${LESSON_ID >= 8 ? `<label>Phông chữ<select id="slide-font">${["Arial", "Georgia", "Verdana"].map((x) => `<option ${s.font === x ? "selected" : ""}>${x}</option>`).join("")}</select></label><label>Cỡ chữ<input id="slide-size" type="range" min="18" max="42" value="${s.size}"></label><label>Màu chữ<input id="slide-color" type="color" value="${s.color}"></label><div class="actions">${button("B · Đậm", "slide-bold", `aria-pressed="${s.bold}"`)}${button("I · Nghiêng", "slide-italic", `aria-pressed="${s.italic}"`)}${button("• Danh sách", "slide-bullets", `aria-pressed="${s.bullets}"`)}</div>` : ""}${
    LESSON_ID === 9
      ? `<label>Chuyển trang<select id="slide-transition">${[
          ["none", "Không có"],
          ["fade", "Mờ dần"],
          ["slide", "Trượt ngang"],
        ]
          .map(
            ([v, t]) =>
              `<option value="${v}" ${s.transition === v ? "selected" : ""}>${t}</option>`,
          )
          .join("")}</select></label>`
      : ""
  }</div><div><div id="slide-preview" class="slide-preview">${slideHTML(s)}</div><p id="preview-status">Trang đang sửa: ${w.index + 1}/${w.slides.length}</p><div class="actions">${button("Xem trang trước", "preview-prev")}${button("Xem trang sau", "preview-next")}</div></div></div><div class="actions">${button("Lưu bài trình chiếu HTML", "slide-export", 'class="secondary"')}${button("Mở / tiếp tục bản nháp", "slide-open")}${button("Thoát xưởng và lưu nháp", "slide-close")}</div><p class="hint">${w.exported ? "✓ Đã tạo tệp để tải" : "Bản nháp tự lưu trên trình duyệt này."}</p>`;
}
function textLab(w) {
  return `<h2>📝 Góc soạn thảo của em</h2><p>${LESSON_ID === 10 ? "Gõ đoạn giới thiệu ngắn có chữ hoa và dấu tiếng Việt. Thử bôi đen một phần rồi xóa, sau đó tải văn bản." : "Mở đoạn mẫu, chọn một cụm từ, sao chép / cắt rồi dán vào vị trí mới. Thêm ảnh và lưu với tên mới."}</p><div class="actions">${button("Mở văn bản mẫu", "text-open")}${button("Sao chép phần chọn", "text-copy")}${button("Cắt phần chọn", "text-cut")}${button("Dán tại con trỏ", "text-paste")}${button("Xóa phần chọn", "text-delete")}${button("Hoàn tác", "text-undo")}</div><label>Văn bản<textarea id="document-text" rows="10" maxlength="5000" placeholder="Em viết ở đây…">${escapeHTML(w.text)}</textarea></label><p class="hint">Bôi đen trong ô trước khi sao chép hoặc cắt. Bộ nhớ tạm ở trong ứng dụng.</p><div class="sort-grid"><label>Tên tệp<input id="document-name" maxlength="60" value="${escapeHTML(w.fileName || "Bai-viet-cua-em")}" placeholder="Tên mới"></label><label>Chèn ảnh minh họa<select id="document-image"><option value="0">Chưa chèn</option>${[1, 5, 7, 12].map((i) => `<option value="${i}" ${Number(w.image) === i ? "selected" : ""}>${{ 1: "Máy tính", 5: "Thư mục", 7: "Trang chiếu", 12: "Hội An" }[i]}</option>`).join("")}</select></label><label>Hoặc ảnh riêng<input id="lab-image" type="file" accept="image/png,image/jpeg,image/webp"></label><label>Mở tệp TXT<input id="text-file" type="file" accept=".txt,text/plain"></label></div><div id="document-preview" class="document-preview">${documentPreview(w)}</div><div class="actions">${button("Lưu dưới tên mới · HTML", "text-export", 'class="secondary"')}${button("Tải văn bản TXT", "text-txt")}</div><p class="hint">Đã thực hiện: ${w.events.join(" · ") || "Chưa có thao tác"}</p>`;
}
function documentPreview(w) {
  return `<p>${escapeHTML(w.text || "Bản xem trước").replace(/\n/g, "<br>")}</p>${w.photo || w.image ? `<img alt="Ảnh minh họa văn bản" src="${w.photo || illustrationData(Number(w.image))}">` : ""}`;
}
const BLOCK_TYPES = {
  flag: { label: "🚩 Khi bấm cờ xanh", color: "event" },
  move: { label: "Di chuyển (bước)", color: "motion" },
  turn: { label: "Xoay (độ)", color: "motion" },
  say: { label: "Nói", color: "looks" },
  wait: { label: "Đợi (giây)", color: "control" },
};
function addBlock(w, type) {
  if (!BLOCK_TYPES[type]) return;
  stopProgram();
  w.runs = [];
  const s = w.sprites[w.active];
  if (s.blocks.length >= 20) {
    notify("Mỗi nhân vật tối đa 20 khối trong hoạt động này.");
    return;
  }
  s.blocks.push({
    type,
    value:
      type === "say"
        ? "Xin chào!"
        : type === "move"
          ? 20
          : type === "turn"
            ? 15
            : 1,
  });
  w.exported = false;
}
function blockLab(w) {
  const s = w.sprites[w.active];
  return `<h2>🧩 Phòng sáng tạo khối lệnh</h2><p>Mô phỏng học tập gợi ý từ Scratch; chương trình chạy lần lượt từ trên xuống. Kéo khối vào vùng lệnh hoặc bấm vào khối để thêm.</p>${LESSON_ID === 14 ? `<div class="actions">${button("Mở ví dụ Robot", "robot-open")}${button("Đóng ví dụ", "robot-close")}</div><p>Quan sát bảng lệnh bên trái, vùng ghép lệnh ở giữa và sân khấu bên phải. Mở, chạy rồi đóng ví dụ.</p>` : `<label>Ý tưởng của em<input id="program-idea" maxlength="200" value="${escapeHTML(w.idea)}" placeholder="Ví dụ: Hai bạn chào nhau trong vườn"></label>`}<div class="actions"><label>Phông nền<select id="program-backdrop"><option value="garden" ${w.backdrop === "garden" ? "selected" : ""}>Khu vườn</option><option value="space" ${w.backdrop === "space" ? "selected" : ""}>Vũ trụ</option><option value="sea" ${w.backdrop === "sea" ? "selected" : ""}>Đại dương</option></select></label>${w.sprites.map((sp, i) => button(`${sp.emoji} ${escapeHTML(sp.name)}`, "sprite-select", `data-index="${i}" aria-pressed="${w.active === i}"`)).join("")}${LESSON_ID >= 16 ? button("Thêm nhân vật", "sprite-add") + button("Xóa nhân vật đang chọn", "sprite-delete") : ""}</div><div class="block-workspace"><aside class="block-palette"><h3>Bảng khối lệnh</h3>${Object.entries(
    BLOCK_TYPES,
  )
    .map(
      ([type, v]) =>
        `<button type="button" draggable="true" data-block="${type}" data-action="block-add" data-type="${type}" class="code-block ${v.color}">${v.label}</button>`,
    )
    .join(
      "",
    )}</aside><section id="block-drop" class="block-stack" aria-label="Vùng ghép lệnh"><h3>Lệnh của ${escapeHTML(s.name)}</h3>${s.blocks.map((b, i) => `<div class="code-block ${BLOCK_TYPES[b.type].color}"><b>${BLOCK_TYPES[b.type].label}</b>${b.type !== "flag" ? `<input aria-label="Giá trị khối ${i + 1}" data-block-value="${i}" ${b.type !== "say" ? 'type="number" min="-100" max="100"' : 'maxlength="120"'} value="${escapeHTML(b.value)}">` : ""}<div class="block-actions">${button("Lên", "block-up", `data-index="${i}" aria-label="Đưa khối ${i + 1} lên"`)}${button("Xuống", "block-down", `data-index="${i}" aria-label="Đưa khối ${i + 1} xuống"`)}${button("Xóa", "block-delete", `data-index="${i}" aria-label="Xóa khối ${i + 1}"`)}</div></div>`).join("") || '<p class="drop-hint">Thả khối vào đây hoặc bấm khối bên trái.</p>'}</section><section><h3>Sân khấu</h3><div id="program-stage" class="program-stage backdrop-${w.backdrop}">${stageHTML(w)}</div><div class="actions">${button("🚩 Chạy chương trình", "program-run", 'class="primary"')}${button("■ Dừng", "program-stop")}</div><p id="program-status" role="status">Sẵn sàng</p></section></div><div class="actions">${button("Tải dự án JSON", "program-save", 'class="secondary"')}</div><p class="hint">Tệp JSON lưu ý tưởng, nhân vật và khối lệnh của mô phỏng; không phải tệp .sb3. Các nhân vật chạy lần lượt để dễ quan sát.</p>`;
}
function stageHTML(w) {
  return `<span class="stage-sun">${w.backdrop === "space" ? "🪐" : w.backdrop === "sea" ? "🫧" : "☀️"}</span>${w.sprites.map((s, i) => `<div class="stage-sprite" style="left:${s.x}%;top:${s.y}%;"><span class="sprite-speech">${escapeHTML(s.speech)}</span><span style="transform:rotate(${s.angle}deg)">${s.emoji}</span><small>${escapeHTML(s.name)}</small></div>`).join("")}`;
}
async function runProgram(w) {
  stopProgram();
  const token = programToken,
    student = activeStudent()?.id;
  w.runs = [];
  const status = document.querySelector("#program-status");
  for (let i = 0; i < w.sprites.length; i++) {
    const s = w.sprites[i];
    if (s.blocks[0]?.type !== "flag") continue;
    s.x = i ? 25 : 45;
    s.y = i ? 70 : 55;
    s.angle = 0;
    s.speech = "";
    for (let j = 1; j < s.blocks.length; j++) {
      if (
        token !== programToken ||
        activeStudent()?.id !== student ||
        app.view !== "practice"
      )
        return;
      const b = s.blocks[j];
      if (b.type === "move")
        s.x = Math.max(
          8,
          Math.min(
            88,
            s.x + Math.max(-100, Math.min(100, Number(b.value) || 0)) / 4,
          ),
        );
      if (b.type === "turn") s.angle += Number(b.value) || 0;
      if (b.type === "say") s.speech = String(b.value).slice(0, 120);
      const stage = document.querySelector("#program-stage");
      if (!stage) return;
      stage.innerHTML = stageHTML(w);
      status.textContent = `${s.name}: đang chạy khối ${j + 1}/${s.blocks.length}`;
      await new Promise((r) =>
        setTimeout(
          r,
          b.type === "wait"
            ? Math.max(100, Math.min(2000, (Number(b.value) || 0) * 1000))
            : 350,
        ),
      );
    }
    w.runs.push(i);
  }
  if (token === programToken) {
    status.textContent = "✓ Chương trình đã chạy xong.";
    w.events.push("run");
    persistCourse();
    audioCue(true);
  }
}
function typingFeedback(text, target) {
  const expected = target || "Tin hoc 4";
  let right = 0;
  for (let i = 0; i < text.length; i++) if (text[i] === expected[i]) right++;
  return `Đúng vị trí: ${right}/${expected.length} kí tự · ${text === expected ? "Tuyệt vời!" : "Gõ đúng chữ hoa, khoảng trắng và kí hiệu."}`;
}
function validatePractice(id, w) {
  switch (id) {
    case 1:
      return (
        HARDWARE.every(
          (_, i) => w.parts[i] === (i < 3 ? "Phần cứng" : "Phần mềm"),
        ) && w.safe === "Chờ lưu xong rồi thoát đúng cách"
      );
    case 2:
      return w.typed === "Tin hoc 4";
    case 3:
      return (
        w.viewed.includes(0) &&
        w.viewed.includes(1) &&
        w.events.includes("audio") &&
        w.formsText === "Văn bản" &&
        w.formsAudio === "Âm thanh" &&
        w.formsImage === "Hình ảnh"
      );
    case 4:
      return (
        w.result === 0 &&
        w.query.trim().length >= 2 &&
        w.finding.trim().length >= 15
      );
    case 5:
      return (
        w.events.includes("copy-paste") &&
        w.events.includes("cut-paste") &&
        w.events.includes("rename") &&
        w.events.includes("delete") &&
        w.files.some((f) => f.name === "Ghi-chu.txt" && f.parent === "root") &&
        w.files.some((f) => f.name === "Bai-cua-em.txt" && f.parent === "d") &&
        !w.files.some((f) => f.id === "b")
      );
    case 6:
      return [
        "Được phép",
        "Được phép",
        "Không được phép",
        "Không được phép",
      ].every((a, i) => w.answers[i] === a);
    case 7:
      return (
        w.slides.length >= 2 &&
        w.slides.every((s) => s.title.trim() && s.text.trim()) &&
        w.slides.some((s) => s.image || s.photo) &&
        w.slides.some((s) => /[À-ỹ]/.test(s.title + s.text)) &&
        w.exported &&
        w.events.includes("close")
      );
    case 8:
      return (
        w.slides.length >= 2 &&
        w.slides.some(
          (s) =>
            s.bullets &&
            s.text.split("\n").filter(Boolean).length >= 2 &&
            (s.bold || s.italic) &&
            s.size !== 24 &&
            s.color !== "#53387f",
        ) &&
        w.exported
      );
    case 9:
      return (
        w.slides.length >= 2 &&
        w.slides.some((s) => s.transition !== "none") &&
        w.events.includes("preview-next") &&
        w.exported
      );
    case 10:
      return (
        w.text.trim().length >= 25 &&
        /[A-ZÀ-Ỹ]/.test(w.text) &&
        /[à-ỹ]/.test(w.text) &&
        w.events.includes("delete-text") &&
        w.exported
      );
    case 11:
      return (
        ["open", "copy", "cut", "paste", "undo"].every((x) =>
          w.events.includes(x),
        ) &&
        (w.photo || w.image) &&
        w.fileName &&
        w.fileName !== "Mau-van-ban" &&
        w.exported
      );
    case 12:
      return (
        w.media.play &&
        w.media.pause &&
        w.media.volume &&
        w.finding.trim().length >= 25
      );
    case 13:
      return [0, 1, 2].every((i) => w.typedDone.includes(i));
    case 14:
      return ["robot-open", "run", "robot-close"].every((x) =>
        w.events.includes(x),
      );
    case 15:
      return (
        w.sprites[0].blocks[0]?.type === "flag" &&
        ["move", "say"].every((t) =>
          w.sprites[0].blocks.some((b) => b.type === t),
        ) &&
        w.events.includes("block-delete") &&
        w.runs.includes(0)
      );
    case 16:
      return (
        w.idea.trim().length >= 8 &&
        w.sprites.some(
          (s, i) =>
            s.blocks[0]?.type === "flag" &&
            s.blocks.length >= 3 &&
            w.runs.includes(i),
        ) &&
        w.exported
      );
    case 17:
      return (
        w.idea.trim().length >= 8 &&
        w.sprites.length === 2 &&
        w.sprites.every(
          (s, i) =>
            s.blocks[0]?.type === "flag" &&
            s.blocks.some((b) => b.type === "say") &&
            w.runs.includes(i),
        ) &&
        w.exported
      );
    default:
      return false;
  }
}
function handlePractice(action, b) {
  if (!activeStudent() || app.view !== "practice") return;
  const w = currentWork(),
    i = Number(b.dataset.index);
  try {
    if (action === "lab-check") {
      const pass = validatePractice(LESSON_ID, w);
      w.feedback = pass
        ? "✓ Em đã hoàn thành hoạt động. Tiếp tục thử thách nhé!"
        : "Chưa đủ yêu cầu. Em đọc nhiệm vụ phía trên và kiểm tra từng bước nhé.";
      if (pass) lessonRecord().practice = true;
      audioCue(Boolean(pass));
    } else if (action === "lab-reset") {
      stopProgram();
      lessonRecord().work = freshWork(LESSON_ID);
    } else if (action === "type-exercise") {
      w.exercise = i;
      w.typed = "";
    } else if (action === "type-check") {
      if (w.typed === TYPE_TARGETS[w.exercise]) {
        if (!w.typedDone.includes(w.exercise)) w.typedDone.push(w.exercise);
        notify("✓ Đã hoàn thành lượt gõ này.");
        audioCue(true);
      } else notify("Em soát lại chữ hoa, khoảng trắng và kí hiệu nhé.");
    } else if (action === "web-page") {
      w.page = i;
      if (!w.viewed.includes(i)) w.viewed.push(i);
    } else if (action === "web-audio") {
      playTone(660);
      w.events.push("audio");
      notify("Đây là thông tin âm thanh.");
    } else if (action === "search-run") {
      const q = normalizeText(w.query).trim();
      w.results =
        q.length < 2
          ? []
          : SEARCH_PAGES.map((p, i) => ({
              i,
              score: q
                .split(/\s+/)
                .filter(
                  (t) =>
                    t.length > 1 &&
                    normalizeText(p.title + " " + p.text).includes(t),
                ).length,
            }))
              .filter((x) => x.score)
              .sort((a, b) => b.score - a.score)
              .map((x) => x.i);
      w.result = null;
    } else if (action === "search-open") {
      w.result = i;
    } else if (action === "file-select") {
      w.selected = b.dataset.id;
    } else if (action === "file-open") {
      w.folder = b.dataset.id;
      w.selected = "";
    } else if (action.startsWith("file-")) fileOperation(w, action);
    else if (action === "slide-add") {
      if (w.slides.length >= 10)
        throw Error("Tối đa 10 trang trong bài thực hành.");
      w.slides.push(freshSlide());
      w.index = w.slides.length - 1;
      w.exported = false;
    } else if (action === "slide-delete") {
      if (w.slides.length === 1) throw Error("Giữ lại ít nhất một trang nhé.");
      w.slides.splice(w.index, 1);
      w.index = Math.max(0, w.index - 1);
      w.exported = false;
    } else if (action === "slide-select") {
      w.index = i;
    } else if (
      ["slide-bold", "slide-italic", "slide-bullets"].includes(action)
    ) {
      const key = action.slice(6);
      w.slides[w.index][key] = !w.slides[w.index][key];
      w.exported = false;
    } else if (action === "preview-next" || action === "preview-prev") {
      w.preview = Math.max(
        0,
        Math.min(
          w.slides.length - 1,
          (w.preview ?? w.index) + (action === "preview-next" ? 1 : -1),
        ),
      );
      const s = w.slides[w.preview],
        p = document.querySelector("#slide-preview");
      p.innerHTML = slideHTML(s);
      p.className = "slide-preview transition-" + s.transition;
      void p.offsetWidth;
      p.querySelector("article").style.animation =
        s.transition === "fade"
          ? "slideFade .7s ease"
          : s.transition === "slide"
            ? "slideAcross .7s ease"
            : "";
      document.querySelector("#preview-status").textContent =
        `Xem trước: Trang ${w.preview + 1}/${w.slides.length}`;
      if (action === "preview-next" && w.preview > 0)
        w.events.push("preview-next");
      persistCourse();
      return;
    } else if (action === "slide-close") {
      w.events.push("close");
      persistCourse();
      app.view = "home";
      render();
      return;
    } else if (action === "slide-open") {
      w.events.push("open");
      notify("Bản nháp đã được mở.");
    } else if (action === "slide-export") {
      exportSlides(w);
      w.exported = true;
    } else if (action === "text-open") {
      w.undo.push(w.text);
      w.text =
        "TRƯỜNG EM\nEm yêu ngôi trường của em. Chúng em chăm sóc cây xanh và giữ lớp học sạch đẹp.";
      w.fileName = "Mau-van-ban";
      w.events.push("open");
      w.exported = false;
    } else if (
      action === "text-copy" ||
      action === "text-cut" ||
      action === "text-delete" ||
      action === "text-paste"
    )
      textOperation(w, action);
    else if (action === "text-undo") {
      if (w.undo.length) {
        w.text = w.undo.pop();
        w.events.push("undo");
        w.exported = false;
      }
    } else if (action === "text-export" || action === "text-txt") {
      if (!w.text.trim()) throw Error("Em viết nội dung trước khi lưu nhé.");
      const name = (w.fileName || "Bai-viet-cua-em").replace(
        /[\\/:*?"<>|]/g,
        "-",
      );
      if (action === "text-txt")
        saveDownload(
          new Blob(["\uFEFF" + w.text], { type: "text/plain;charset=utf-8" }),
          name + ".txt",
        );
      else
        exportProduct(
          name,
          `<article>${documentPreview(w)}</article>`,
          "Sản phẩm học tập Tin học 4",
        );
      w.exported = true;
    } else if (action === "block-add") addBlock(w, b.dataset.type);
    else if (action === "block-delete") {
      stopProgram();
      w.runs = [];
      w.sprites[w.active].blocks.splice(i, 1);
      w.events.push("block-delete");
      w.exported = false;
    } else if (action === "block-up" || action === "block-down") {
      stopProgram();
      w.runs = [];
      const arr = w.sprites[w.active].blocks,
        to = i + (action === "block-up" ? -1 : 1);
      if (to >= 0 && to < arr.length) [arr[i], arr[to]] = [arr[to], arr[i]];
      w.exported = false;
    } else if (action === "sprite-select") {
      stopProgram();
      w.active = i;
    } else if (action === "sprite-add") {
      stopProgram();
      w.runs = [];
      if (w.sprites.length >= 2)
        throw Error("Hoạt động này dùng tối đa hai nhân vật.");
      w.sprites.push({
        name: "Thỏ Bông",
        emoji: "🐰",
        x: 25,
        y: 70,
        angle: 0,
        speech: "",
        blocks: [],
      });
      w.active = 1;
      w.exported = false;
    } else if (action === "sprite-delete") {
      stopProgram();
      w.runs = [];
      if (w.sprites.length === 1) throw Error("Giữ lại ít nhất một nhân vật.");
      w.sprites.splice(w.active, 1);
      w.active = 0;
      w.exported = false;
    } else if (action === "robot-open") {
      stopProgram();
      w.runs = [];
      w.sprites[0].name = "Robot";
      w.sprites[0].emoji = "🤖";
      w.sprites[0].blocks = [
        { type: "flag", value: 0 },
        { type: "move", value: 40 },
        { type: "say", value: "Xin chào, mình là Robot!" },
      ];
      w.events.push("robot-open");
    } else if (action === "robot-close") {
      stopProgram();
      w.sprites[0].name = "Robot";
      w.sprites[0].emoji = "🤖";
      w.sprites[0].blocks = [];
      w.sprites[0].speech = "";
      w.events.push("robot-close");
    } else if (action === "program-run") {
      runProgram(w);
      return;
    } else if (action === "program-stop") {
      stopProgram();
      document.querySelector("#program-status").textContent = "Đã dừng.";
      persistCourse();
      return;
    } else if (action === "program-save") {
      saveDownload(
        new Blob(
          [
            JSON.stringify(
              {
                app: "tin-hoc-4-khoi-lenh",
                version: 1,
                idea: w.idea,
                backdrop: w.backdrop,
                sprites: w.sprites,
              },
              null,
              2,
            ),
          ],
          { type: "application/json" },
        ),
        "Du-an-khoi-lenh-Bai-" + lesson.number + ".json",
      );
      w.exported = true;
    } else return;
    persistCourse();
    render();
  } catch (error) {
    notify(error.message);
  }
}
function textOperation(w, action) {
  const area = document.querySelector("#document-text"),
    a = area.selectionStart,
    b = area.selectionEnd,
    selected = w.text.slice(a, b);
  if (["text-copy", "text-cut", "text-delete"].includes(action) && !selected)
    throw Error("Em bôi đen phần văn bản cần thao tác trước nhé.");
  if (action === "text-copy") {
    w.textClip = selected;
    w.events.push("copy");
    return;
  }
  if (action === "text-paste" && !w.textClip)
    throw Error("Em sao chép hoặc cắt trước khi dán.");
  w.undo.push(w.text);
  if (w.undo.length > 20) w.undo.shift();
  if (action === "text-cut") {
    w.textClip = selected;
    w.text = w.text.slice(0, a) + w.text.slice(b);
    w.events.push("cut");
  }
  if (action === "text-delete") {
    w.text = w.text.slice(0, a) + w.text.slice(b);
    w.events.push("delete-text");
  }
  if (action === "text-paste") {
    w.text = w.text.slice(0, a) + w.textClip + w.text.slice(b);
    w.events.push("paste");
  }
  w.exported = false;
}
function practiceInput(t) {
  const w = currentWork();
  if (t.id === "typing-input") {
    w.typed = t.value;
    document.querySelector("#typing-feedback").textContent = typingFeedback(
      w.typed,
      LESSON_ID === 13 ? TYPE_TARGETS[w.exercise] : "Tin hoc 4",
    );
  }
  if (t.id === "search-query") w.query = t.value;
  if (["search-finding", "media-note"].includes(t.id)) w.finding = t.value;
  if (t.id === "file-name") w.newName = t.value;
  if (t.id === "slide-title" || t.id === "slide-text") {
    w.slides[w.index][t.id === "slide-title" ? "title" : "text"] = t.value;
    w.exported = false;
    document.querySelector("#slide-preview").innerHTML = slideHTML(
      w.slides[w.index],
    );
  }
  if (t.id === "document-text") {
    const prev = w.text;
    if (t.value.length < prev.length) w.events.push("delete-text");
    w.text = t.value;
    w.exported = false;
    document.querySelector("#document-preview").innerHTML = documentPreview(w);
  }
  if (t.id === "document-name") {
    w.fileName = t.value;
    w.exported = false;
  }
  if (t.id === "program-idea") {
    w.idea = t.value;
    w.exported = false;
  }
  if (t.dataset.blockValue !== undefined) {
    stopProgram();
    w.runs = [];
    const bl = w.sprites[w.active].blocks[Number(t.dataset.blockValue)];
    bl.value = bl.type === "say" ? t.value : Number(t.value);
    w.exported = false;
  }
  persistCourse();
}
async function practiceChange(t) {
  const w = currentWork();
  if (t.dataset.work) {
    const parts = t.dataset.work.split(".");
    if (parts.length === 2) w[parts[0]][parts[1]] = t.value;
    else w[parts[0]] = t.value;
  }
  const fields = {
    "slide-image": "image",
    "slide-font": "font",
    "slide-size": "size",
    "slide-color": "color",
    "slide-transition": "transition",
  };
  if (fields[t.id]) {
    w.slides[w.index][fields[t.id]] = ["slide-image", "slide-size"].includes(
      t.id,
    )
      ? Number(t.value)
      : t.value;
    if (t.id === "slide-image") delete w.slides[w.index].photo;
    w.exported = false;
  }
  if (t.id === "document-image") {
    w.image = Number(t.value);
    delete w.photo;
    w.exported = false;
  }
  if (t.id === "program-backdrop") {
    stopProgram();
    w.backdrop = t.value;
    w.exported = false;
  }
  if (t.id === "lab-image") {
    const file = t.files?.[0];
    if (!file) return;
    if (
      !["image/png", "image/jpeg", "image/webp"].includes(file.type) ||
      file.size > 3e6
    ) {
      notify("Chọn ảnh PNG, JPEG hoặc WebP không quá 3 MB.");
      return;
    }
    try {
      const data = await new Promise((resolve, reject) => {
        const f = new FileReader();
        f.onload = () => resolve(f.result);
        f.onerror = reject;
        f.readAsDataURL(file);
      });
      const image = await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = data;
      });
      const canvas = document.createElement("canvas"),
        scale = Math.min(1, 700 / Math.max(image.width, image.height));
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      canvas
        .getContext("2d")
        .drawImage(image, 0, 0, canvas.width, canvas.height);
      const photo = canvas.toDataURL("image/jpeg", 0.75);
      if (photo.length > 200000) throw Error();
      if ([7, 8, 9].includes(LESSON_ID)) w.slides[w.index].photo = photo;
      else w.photo = photo;
      w.exported = false;
    } catch {
      notify("Chưa đọc được ảnh. Thử ảnh khác nhé.");
      return;
    }
  }
  if (t.id === "text-file") {
    const f = t.files?.[0];
    if (!f) return;
    if (f.size > 100000) {
      notify("Chọn tệp TXT nhỏ hơn 100 KB.");
      return;
    }
    w.text = (await f.text()).slice(0, 5000);
    w.fileName = f.name.replace(/\.txt$/i, "");
    w.events.push("open");
    w.exported = false;
  }
  persistCourse();
  render();
}
function exportSlides(w) {
  const body = w.slides
    .map(
      (s) =>
        `<section class="slide transition-${s.transition}">${slideHTML(s, true)}</section>`,
    )
    .join("");
  const html = `<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bài trình chiếu của em</title><style>body{font-family:Arial;background:#e9f5ff;margin:0;padding:20px}article{background:white;max-width:960px;min-height:450px;padding:40px;margin:auto;border-radius:24px}article img{max-width:45%;max-height:260px;float:right}h3{font-size:1.6em}p{white-space:pre-wrap}button{padding:14px;font-size:18px;margin:10px}.transition-fade{animation:fade .6s}.transition-slide{animation:slide .6s}@keyframes fade{from{opacity:0}to{opacity:1}}@keyframes slide{from{transform:translateX(60px);opacity:0}to{transform:translateX(0);opacity:1}}[hidden]{display:none!important}</style>${body}<nav><button onclick="step(-1)">Trang trước</button><button onclick="step(1)">Trang sau</button></nav><script>let index=0;const pages=[...document.querySelectorAll('.slide')];function show(){pages.forEach((p,i)=>{p.hidden=i!==index;if(i===index){p.style.animation='none';void p.offsetWidth;p.style.animation='';}})}function step(d){index=Math.max(0,Math.min(pages.length-1,index+d));show()}document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});show();<\/script></html>`;
  saveDownload(
    new Blob([html], { type: "text/html;charset=utf-8" }),
    "Bai-trinh-chieu-" + lesson.number + ".html",
  );
}
function bindPracticeEvents() {
  const root = document.querySelector("#course-app");
  root.addEventListener("dragstart", (e) => {
    const b = e.target.closest("[data-block]");
    if (b) e.dataTransfer.setData("text/plain", b.dataset.block);
  });
  root.addEventListener("dragover", (e) => {
    if (e.target.closest("#block-drop")) e.preventDefault();
  });
  root.addEventListener("drop", (e) => {
    if (!activeStudent() || !e.target.closest("#block-drop")) return;
    e.preventDefault();
    addBlock(currentWork(), e.dataTransfer.getData("text/plain"));
    persistCourse();
    render();
  });
  for (const [event, key] of [
    ["play", "play"],
    ["pause", "pause"],
    ["volumechange", "volume"],
  ])
    root.addEventListener(
      event,
      (e) => {
        if (e.target.id === "culture-video" && activeStudent()) {
          currentWork().media[key] = true;
          const status = document.querySelector("#media-status");
          if (status)
            status.textContent = ["play", "pause", "volume"]
              .map(
                (k) =>
                  `${currentWork().media[k] ? "✓" : "○"} ${{ play: "Đã phát", pause: "Đã tạm dừng", volume: "Đã đổi âm lượng" }[k]}`,
              )
              .join(" · ");
          persistCourse();
        }
      },
      true,
    );
  window.addEventListener("pagehide", stopProgram);
}
