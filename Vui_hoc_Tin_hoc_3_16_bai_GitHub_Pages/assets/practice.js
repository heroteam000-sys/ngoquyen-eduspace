// Each lesson has a real browser interaction. OS actions are explicitly simulated.
const PRACTICE_DEFAULTS = {
  2: { power: false, volume: 3, channel: 1, actions: [] },
  3: { parts: {} },
  4: { distance: 60, posture: "", order: [] },
  5: { typed: "" },
  6: { article: "", visited: [], safe: "" },
  7: { placements: {}, selected: null },
  8: { open: [], found: [] },
  9: {
    folders: [{ id: "hoc", name: "Hoc-tap", parent: "root" }],
    current: "root",
    selected: null,
    history: [],
    events: [],
  },
  10: { placements: {}, selected: null, message: "" },
  11: {
    slides: [{ title: "", text: "", image: "🌱" }],
    index: 0,
    exported: false,
  },
  12: { planet: 2, visited: [], order: [] },
  13: { mouse: {}, selected: false },
  14: { order: [] },
  15: { rain: false, dry: true, art: false, answers: {} },
  16: {
    order: [],
    recipient: "",
    message: "",
    color: "#eee4ff",
    exported: false,
  },
};
const SORT_ITEMS = [
  ["📚", "Truyện", "Sách"],
  ["📖", "Sách Tin học", "Sách"],
  ["✏️", "Bút chì", "Đồ dùng"],
  ["📏", "Thước", "Đồ dùng"],
  ["⚽", "Quả bóng", "Đồ chơi"],
  ["🧸", "Gấu bông", "Đồ chơi"],
];
const PRIVACY_ITEMS = [
  ["🔑", "Mật khẩu", "Cần bảo vệ"],
  ["🏠", "Địa chỉ nhà", "Cần bảo vệ"],
  ["☎️", "Số điện thoại gia đình", "Cần bảo vệ"],
  ["📘", "Tên bài học", "Có thể trao đổi"],
  ["🌳", "Kiến thức về cây xanh", "Có thể trao đổi"],
  ["🪐", "Tên các hành tinh", "Có thể trao đổi"],
];
const PARTS = [
  ["Màn hình", "Hiển thị chữ và hình ảnh", "🖥️"],
  ["Thân máy", "Chứa bộ phận xử lí", "🧰"],
  ["Bàn phím", "Nhập chữ và số", "⌨️"],
  ["Chuột", "Điều khiển con trỏ", "🖱️"],
];
const PLANETS = [
  [
    "Sao Thủy",
    "#a6a1a0",
    "Hành tinh gần Mặt Trời nhất và nhỏ nhất trong tám hành tinh.",
  ],
  ["Sao Kim", "#e7bd75", "Hành tinh nóng nhất trong Hệ Mặt Trời."],
  [
    "Trái Đất",
    "#52b6d1",
    "Hành tinh chúng ta đang sống, có đất liền và đại dương.",
  ],
  ["Sao Hỏa", "#dc7864", "Thường được gọi là hành tinh đỏ."],
  ["Sao Mộc", "#cba98c", "Hành tinh lớn nhất trong Hệ Mặt Trời."],
  ["Sao Thổ", "#d9c89b", "Nổi bật với hệ vành đai gồm chủ yếu các hạt băng."],
  ["Sao Thiên Vương", "#8fd3d4", "Một hành tinh ở xa, có màu xanh nhạt."],
  [
    "Sao Hải Vương",
    "#5f85dc",
    "Hành tinh xa Mặt Trời nhất trong tám hành tinh.",
  ],
];
const BUTTERFLY = [
  "🥚 Trứng",
  "🐛 Sâu bướm",
  "🟤 Nhộng",
  "🦋 Bướm trưởng thành",
];
const BAG_STEPS = [
  "Xem thời khóa biểu ngày mai",
  "Chọn sách vở và đồ dùng cần thiết",
  "Xếp đồ vào cặp gọn gàng",
  "Kiểm tra lại trước khi kết thúc",
];
const PROJECT_STEPS = [
  "Xác định người nhận và lời chúc",
  "Dùng máy tính trình bày thiệp",
  "Kiểm tra rồi lưu sản phẩm",
];
function currentWork() {
  const record = lessonRecord();
  if (!record.work) record.work = structuredClone(PRACTICE_DEFAULTS[LESSON_ID]);
  return record.work;
}
function sequenceHTML(steps, order, action = "sequence-add") {
  // Consistently shuffled visual order, independent of the correct order.
  const visual = steps.map((_, i) => (i + 2) % steps.length);
  return `<p class="hint">Chọn các thẻ theo thứ tự. Có thể làm lại trước khi kiểm tra.</p><div class="sequence-pool">${visual.map((i) => button(escapeHTML(steps[i]), action, `data-index="${i}" ${order.includes(i) ? "disabled" : ""}`)).join("")}</div><ol class="sequence-slots">${steps.map((_, i) => `<li>${order[i] === undefined ? "Chọn bước " + (i + 1) : escapeHTML(steps[order[i]])}</li>`).join("")}</ol>${button("Làm lại thứ tự", "sequence-clear", 'class="secondary"')}`;
}
function sortingHTML(items, groups, work) {
  return `<p class="hint">Kéo thẻ vào nhóm; hoặc chọn một thẻ rồi chọn nhóm. Có thể chuyển lại trước khi kiểm tra.</p><div class="sorting-pool">${items.map(([icon, name], i) => `<button draggable="true" data-drag="${i}" data-action="sort-select" data-index="${i}" class="sort-item ${work.selected === i ? "chosen" : ""}" aria-pressed="${work.selected === i}">${icon} ${escapeHTML(name)}<small>${escapeHTML(work.placements[i] || "Chưa xếp")}</small></button>`).join("")}</div><div class="sort-bins">${groups
    .map(
      (group) =>
        `<button class="sort-bin" data-drop="${escapeHTML(group)}" data-action="sort-place" data-group="${escapeHTML(group)}"><strong>${escapeHTML(group)}</strong><span>${
          items
            .filter((_, i) => work.placements[i] === group)
            .map(([icon, name]) => icon + " " + escapeHTML(name))
            .join("<br>") || "Đặt thẻ vào đây"
        }</span></button>`,
    )
    .join("")}</div>`;
}
function practiceHTML() {
  if (!activeStudent())
    return joinView("Nhập tên và lớp để giữ sản phẩm thực hành của em.");
  const w = currentWork();
  let content = "";
  if (LESSON_ID === 2)
    content = `<div class="tv"><div class="tv-screen ${w.power ? "on" : ""}">${w.power ? `<span>${["🌳", "🪐", "🌊"][w.channel - 1]}</span><b>Kênh ${w.channel}</b><small>Âm lượng ${w.volume}</small>` : "Tivi đang tắt"}</div><div class="remote">${button(w.power ? "Tắt tivi" : "Bật tivi", "tv-power")}${button("Tăng âm lượng", "tv-volume")}${button("Đổi kênh", "tv-channel")}</div></div><div class="flow"><span>Tiếp nhận: nút em bấm</span><span>Xử lí: tivi thực hiện lệnh</span><span>Kết quả: màn hình / âm lượng đổi</span></div><p>Nhiệm vụ: bật tivi, đổi kênh và tăng âm lượng ít nhất một lần.</p>`;
  if (LESSON_ID === 3)
    content = `<div class="parts-grid">${PARTS.map(([name, role, icon], i) => `<label class="part"><span>${icon}</span><b>${role}</b><select data-part="${i}"><option value="">Chọn tên bộ phận</option>${["Chuột", "Màn hình", "Thân máy", "Bàn phím"].map((option) => `<option ${w.parts[i] === option ? "selected" : ""}>${option}</option>`).join("")}</select></label>`).join("")}</div><p class="hint">Bộ máy tính được biểu diễn đơn giản để ghép tên và chức năng. Máy tính bảng dùng màn hình cảm ứng để nhận thao tác chạm.</p>`;
  if (LESSON_ID === 4)
    content = `<div class="posture"><span>🧒 🖥️</span><label>Khoảng cách mắt – màn hình: <output id="distance-value">${w.distance}</output> cm<input id="distance" type="range" min="20" max="110" value="${w.distance}"></label><label>Tư thế<select id="posture"><option value="">Em chọn…</option><option value="straight" ${w.posture === "straight" ? "selected" : ""}>Lưng thẳng, chân thoải mái</option><option value="bend" ${w.posture === "bend" ? "selected" : ""}>Cúi sát, vặn người</option></select></label></div><h3>Sắp xếp cách tắt máy</h3>${sequenceHTML(["Lưu công việc đang làm", "Chọn lệnh Shut down", "Chờ máy tắt hoàn toàn"], w.order)}<p class="simulation">Mô phỏng quy trình; trang web không bật hoặc tắt máy tính thật.</p>`;
  if (LESSON_ID === 5)
    content = `<div class="typing"><p>Mẫu cần gõ: <strong class="typing-target">asdf jkl;</strong></p><label>Gõ vào đây bằng bàn phím<input id="typing-input" value="${escapeHTML(w.typed)}" maxlength="40" autocomplete="off" spellcheck="false" placeholder="Đặt tay đúng rồi bắt đầu"></label><p id="typing-feedback">${typingFeedback(w.typed)}</p><div class="keyboard">${["1234567890", "QWERTYUIOP", "ASDFGHJKL;", "ZXCVBNM"].map((row) => `<div>${[...row].map((key) => `<span class="key ${"FJ".includes(key) ? "home-key" : ""}">${key}</span>`).join("")}</div>`).join("")}</div><p class="hint">Trái: út A · áp út S · giữa D · trỏ F. Phải: trỏ J · giữa K · áp út L · út ;. Ngón cái gõ dấu cách. Ứng dụng kiểm tra kí tự, giáo viên quan sát ngón tay.</p></div>`;
  if (LESSON_ID === 6)
    content = `<div class="mini-browser"><div class="browser-bar">🔒 Thư viện khám phá mô phỏng · Nội dung có sẵn</div><div class="web-topics">${[
      ["tree", "🌳 Cây xanh"],
      ["space", "🪐 Hệ Mặt Trời"],
      ["music", "🎵 Âm thanh"],
    ]
      .map(([id, name]) => button(name, "web-open", `data-id="${id}"`))
      .join(
        "",
      )}</div><article class="web-article">${webArticle(w.article)}</article></div><label>Gặp quảng cáo lạ xin tải tệp để nhận quà, em chọn gì?<select id="web-safe"><option value="">Em chọn…</option><option value="ask" ${w.safe === "ask" ? "selected" : ""}>Dừng lại và hỏi người lớn</option><option value="download" ${w.safe === "download" ? "selected" : ""}>Tải ngay</option></select></label><p>Đã mở ${w.visited.length}/3 chủ đề.</p>`;
  if (LESSON_ID === 7)
    content = sortingHTML(SORT_ITEMS, ["Sách", "Đồ dùng", "Đồ chơi"], w);
  if (LESSON_ID === 8)
    content = `<p>Tìm hai tệp: <b>Cay-xanh.png</b> và <b>Gioi-thieu.html</b>.</p><div class="tree-view">${treeBranch(
      "Hoc-tap",
      [
        [
          "Tin-hoc",
          [
            ["Tranh", ["Cay-xanh.png", "Bien.png"]],
            ["Trinh-chieu", ["Gioi-thieu.html"]],
          ],
        ],
        ["Toan", ["Bai-tap.txt"]],
      ],
      w,
    )}</div><p class="hint">Đường đi: Hoc-tap / Tin-hoc / Tranh / Cay-xanh.png.</p><p>Đã tìm: ${w.found.map(escapeHTML).join(", ") || "Chưa có"}</p>`;
  if (LESSON_ID === 9) content = fileManagerHTML(w);
  if (LESSON_ID === 10)
    content = `${sortingHTML(PRIVACY_ITEMS, ["Cần bảo vệ", "Có thể trao đổi"], w)}<div class="fake-message"><h3>📩 Tin nhắn mô phỏng</h3><p>“Em đã trúng quà! Hãy gửi mật khẩu và địa chỉ nhà.”</p><div class="actions">${button("Không gửi, báo người lớn", "privacy-safe", 'class="secondary"')}${button("Gửi thông tin ngay", "privacy-unsafe")}</div><p>${w.message === "safe" ? "✓ Em đã chọn bảo vệ thông tin." : w.message === "unsafe" ? "Hãy dừng lại: không cung cấp thông tin riêng cho người lạ." : ""}</p></div>`;
  if (LESSON_ID === 11) content = slideEditorHTML(w);
  if (LESSON_ID === 12)
    content = `<div class="solar-system"><p class="hint">Sơ đồ không theo tỉ lệ kích thước hoặc khoảng cách thật.</p><div class="planet-row"><span class="sun">☀️</span>${PLANETS.map(([name, color], i) => `<button style="--planet:${color}" class="planet ${w.planet === i ? "selected" : ""}" data-action="planet" data-index="${i}" aria-pressed="${w.planet === i}"><i></i><span>${name}</span></button>`).join("")}</div><article class="planet-info"><h3>${PLANETS[w.planet][0]}</h3><p>${PLANETS[w.planet][2]}</p></article><p>Em đã chọn xem ${w.visited.length}/8 hành tinh. Hãy khám phá ít nhất ba hành tinh.</p></div><h3>Vòng đời bướm</h3>${sequenceHTML(BUTTERFLY, w.order)}`;
  if (LESSON_ID === 13) content = mousePracticeHTML(w);
  if (LESSON_ID === 14)
    content = `<h3>Chuẩn bị cặp sách cho ngày mai</h3>${sequenceHTML(BAG_STEPS, w.order)}<p class="hint">Tự hỏi: em cần thông tin nào trước khi chọn sách vở?</p>`;
  if (LESSON_ID === 15)
    content = `<p>Đổi trạng thái các điều kiện, quan sát và chọn việc làm. Để hoàn thành, hãy trả lời đúng cả ba tình huống.</p><div class="conditions">${[
      [
        "rain",
        "🌧️ Trời đang mưa",
        "Mang áo mưa",
        "Không cần mang áo mưa theo điều kiện này",
      ],
      [
        "dry",
        "🌱 Đất trong chậu khô",
        "Tưới cây phù hợp",
        "Chưa cần tưới thêm",
      ],
      [
        "art",
        "🎨 Ngày mai có tiết Mĩ thuật",
        "Chuẩn bị đồ vẽ",
        "Xem lịch để chuẩn bị môn khác",
      ],
    ]
      .map(
        ([key, label, yes, no]) =>
          `<article><label><input type="checkbox" data-condition="${key}" ${w[key] ? "checked" : ""}>${label}</label><p>Điều kiện hiện tại: <b>${w[key] ? "ĐÚNG" : "KHÔNG ĐÚNG"}</b></p><select data-condition-answer="${key}"><option value="">Chọn hành động</option><option value="yes" ${w.answers[key] === "yes" ? "selected" : ""}>${yes}</option><option value="no" ${w.answers[key] === "no" ? "selected" : ""}>${no}</option></select></article>`,
      )
      .join("")}</div>`;
  if (LESSON_ID === 16)
    content = `<h3>Kế hoạch tạo thiệp</h3>${sequenceHTML(PROJECT_STEPS, w.order)}<div class="card-editor"><label>Người nhận<input id="card-recipient" value="${escapeHTML(w.recipient)}" maxlength="60" placeholder="Ví dụ: Cô giáo"></label><label>Lời chúc<textarea id="card-message" maxlength="400" placeholder="Viết lời chúc của em">${escapeHTML(w.message)}</textarea></label><label>Màu nền<input id="card-color" type="color" value="${w.color}"></label><div id="card-preview">${greetingHTML(w)}</div>${button("Tải thiệp HTML", "card-export")}</div>`;
  return `<section class="panel"><div class="panel-heading"><div><span class="eyebrow">PHÒNG THỰC HÀNH</span><h2>${lesson.title}</h2></div><span class="pill">${lessonRecord().practice ? "✓ Đã hoàn thành" : "Cùng thử nhé"}</span></div><p>${lesson.task}</p>${content}<div id="practice-feedback" class="feedback" role="status"></div><div class="actions practice-actions">${button("Kiểm tra nhiệm vụ", "practice-check", 'class="primary"')}${button("Làm lại khu thực hành", "practice-reset", 'class="ghost"')}</div><aside class="real-task"><b>Trên thiết bị thật / cùng người lớn</b><p>${lesson.real}</p></aside></section>`;
}
function typingFeedback(value) {
  const target = "asdf jkl;";
  let correct = 0;
  for (let i = 0; i < Math.min(value.length, target.length); i++)
    if (value[i] === target[i]) correct++;
  return `${correct}/${target.length} kí tự đúng vị trí. ${value === target ? "✓ Đã gõ đúng cả nhóm." : "Ưu tiên gõ đúng, không cần nhanh."}`;
}
function webArticle(id) {
  if (id === "tree")
    return '<span class="article-art">🌱 🌿 🌳</span><h3>Cây xanh quanh em</h3><p>Cây cần ánh sáng, nước và điều kiện phù hợp để phát triển. Em chăm sóc cây theo hướng dẫn.</p><small>Thông tin dạng hình ảnh và chữ.</small>';
  if (id === "space")
    return '<span class="article-art">☀️ 🌍 🪐</span><h3>Khám phá bầu trời</h3><p>Trái Đất là một trong tám hành tinh của Hệ Mặt Trời.</p><small>Hình ảnh và chữ giúp em tìm hiểu.</small>';
  if (id === "music")
    return `<span class="article-art">🎵</span><h3>Giai điệu nhỏ</h3><p>Nhấn nút để nghe âm thanh được tạo trên thiết bị.</p>${button("Nghe giai điệu", "audio-demo")}<small>Chữ, hình minh họa và âm thanh.</small>`;
  return "<p>Chọn một chủ đề để mở nội dung phù hợp với lứa tuổi.</p>";
}
function treeBranch(name, children, w, path = "") {
  const key = path + "/" + name;
  const open = w.open.includes(key);
  return `<div class="tree-branch">${button((open ? "📂 " : "📁 ") + name, "tree-toggle", `data-path="${key}" aria-expanded="${open}"`)}${open ? `<div class="tree-children">${children.map((item) => (Array.isArray(item) ? treeBranch(item[0], item[1], w, key) : button("📄 " + item, "tree-file", `data-name="${item}"`))).join("")}</div>` : ""}</div>`;
}
function fileManagerHTML(w) {
  const folder = w.folders.find((f) => f.id === w.current);
  const children = w.folders.filter((f) => f.parent === w.current);
  return `<div class="file-manager"><div class="file-toolbar"><b>📂 ${folder ? escapeHTML(folder.name) : "Khu thực hành"}</b>${button("Về cấp ngoài", "folder-up", w.current === "root" ? "disabled" : "")}${button("Hoàn tác", "folder-undo", w.history.length ? "" : "disabled")}</div><div class="file-list">${children.map((f) => `<div class="folder-item ${w.selected === f.id ? "selected" : ""}">${button("📁 " + escapeHTML(f.name), "folder-select", `data-id="${f.id}" aria-pressed="${w.selected === f.id}"`)}${button("Mở", "folder-open", `data-id="${f.id}" class="ghost"`)}</div>`).join("") || "<p>Thư mục này đang trống.</p>"}${w.current === "hoc" ? button("📄 Mở Bai-mau.txt", "file-view", 'class="demo-file"') : ""}</div><label>Tên thư mục<input id="folder-name" maxlength="50" placeholder="Bai-tap, Tin-hoc hoặc Nhap"></label><div class="actions">${button("Tạo thư mục", "folder-create")}${button("Đổi tên thư mục đã chọn", "folder-rename", w.selected ? "" : "disabled")}${button("Xóa thư mục đã chọn", "folder-delete", w.selected ? "" : "disabled")}</div></div><p>Nhiệm vụ: mở <b>Hoc-tap</b> để xem tệp <b>Bai-mau.txt</b>, rồi trở về cấp ngoài; tạo <b>Bai-tap</b>, đổi tên thành <b>Tin-hoc</b>; tạo thư mục <b>Nhap</b> rồi xóa nó.</p><p class="simulation">Chỉ thao tác trong mô hình trên web; không ảnh hưởng dữ liệu máy thật. Có nút Hoàn tác.</p>`;
}
function slideEditorHTML(w) {
  const slide = w.slides[w.index];
  return `<div class="slide-editor"><div class="slide-tabs">${w.slides.map((_, i) => button("Trang " + (i + 1), "slide-select", `data-index="${i}" aria-pressed="${w.index === i}"`)).join("")}${button("＋ Thêm trang", "slide-add", w.slides.length >= 5 ? "disabled" : "")}</div><div class="editor-fields"><label>Tiêu đề<input id="slide-title" maxlength="80" value="${escapeHTML(slide.title)}" placeholder="Gioi thieu ban than"></label><label>Nội dung<textarea id="slide-text" maxlength="350" placeholder="Viet mot vai dong ve em">${escapeHTML(slide.text)}</textarea></label><label>Hình minh họa<select id="slide-image">${["🌱", "🖥️", "📚", "🦋", "🌍", "🎨"].map((image) => `<option ${slide.image === image ? "selected" : ""}>${image}</option>`).join("")}</select></label><label>Hoặc chèn ảnh từ máy<input id="slide-upload" type="file" accept="image/*"><small>Ảnh chỉ xử lí trên máy này; tối đa 3 MB, được thu nhỏ trước khi lưu.</small></label></div><div id="slide-preview">${slideHTML(slide)}</div><div class="actions">${button("Xem trang trước", "slide-prev", w.index === 0 ? "disabled" : "")}${button("Xem trang sau", "slide-next", w.index === w.slides.length - 1 ? "disabled" : "")}${button("Tải bài trình chiếu HTML", "slide-export", 'class="primary"')}</div><p class="hint">Có thể tạo 2–5 trang. Bài mẫu dùng chữ không dấu để phù hợp yêu cầu cơ bản; công cụ cũng hỗ trợ tiếng Việt có dấu.</p></div>`;
}
function slideHTML(slide) {
  return `<article class="slide">${slide.photo && /^data:image\/(jpeg|png);base64,/.test(slide.photo) ? `<img src="${slide.photo}" alt="Ảnh minh họa do người học chọn">` : `<span>${slide.image}</span>`}<h3>${escapeHTML(slide.title || "Tiêu đề của em")}</h3><p>${escapeHTML(slide.text || "Nội dung ngắn gọn của trang").replace(/\n/g, "<br>")}</p></article>`;
}
function greetingHTML(w) {
  return `<article class="greeting" style="background:${/^#[0-9a-f]{6}$/i.test(w.color) ? w.color : "#eee4ff"}"><span>💐</span><h3>Thân gửi ${escapeHTML(w.recipient || "người em yêu quý")}</h3><p>${escapeHTML(w.message || "Lời chúc của em sẽ xuất hiện ở đây.").replace(/\n/g, "<br>")}</p><small>Từ ${escapeHTML(activeStudent()?.name || "em")}</small></article>`;
}
function mousePracticeHTML(w) {
  return `<div class="mouse-tasks"><p>${Object.keys(w.mouse).length}/6 thao tác đã thực hiện bằng chuột. Nháy phải trong khung sẽ được ghi nhận và không mở trình đơn của trình duyệt.</p><div class="mouse-board"><button id="mouse-move" class="mouse-target">① Đưa con trỏ vào đây ${w.mouse.move ? "✓" : ""}</button><button data-action="mouse-click" class="mouse-target">② Nháy trái ${w.mouse.click ? "✓" : ""}</button><button id="mouse-double" class="mouse-target">③ Nháy đúp ${w.mouse.double ? "✓" : ""}</button><button id="mouse-right" class="mouse-target">④ Nháy phải ${w.mouse.right ? "✓" : ""}</button></div><div class="mouse-drag-row"><button draggable="true" data-mouse-drag="true" data-action="mouse-select" class="mouse-object" aria-pressed="${w.selected}">⭐ Kéo ngôi sao</button><button data-mouse-drop="true" data-action="mouse-drop" class="mouse-destination">⑤ Thả vào hộp ${w.mouse.drag ? "✓" : ""}</button></div><div id="mouse-scroll" tabindex="0" aria-label="Vùng luyện cuộn chuột"><div><b>⑥ Cuộn bằng bánh xe trong khung này</b><p>Giữ con trỏ trong khung và cuộn để tìm dòng cuối.</p><p>Chuột giúp em điều khiển con trỏ.</p><p>Thao tác chậm, nhẹ nhàng và chính xác.</p><p>Hãy cuộn tiếp trong khung.</p><strong>🌈 Em đã đến cuối khung!</strong></div></div><p>${w.mouse.scroll ? "✓ Đã cuộn chuột đến cuối khung." : "Chưa hoàn thành nhiệm vụ cuộn."}</p><details><summary>Em đang dùng màn hình cảm ứng?</summary><p>Có thể chạm nút và chạm ngôi sao rồi chạm hộp để khám phá. Những thao tác thay thế không được ghi là đã luyện đủ chuột thật.</p></details></div>`;
}
function practicePassed(w, id = LESSON_ID) {
  if (id === 2)
    return ["power", "channel", "volume"].every((a) => w.actions.includes(a));
  if (id === 3) return PARTS.every(([name], i) => w.parts[i] === name);
  if (id === 4)
    return (
      w.distance >= 50 &&
      w.distance <= 80 &&
      w.posture === "straight" &&
      ordered(w.order, 3)
    );
  if (id === 5) return w.typed === "asdf jkl;";
  if (id === 6) return w.visited.length === 3 && w.safe === "ask";
  if (id === 7)
    return SORT_ITEMS.every((item, i) => w.placements[i] === item[2]);
  if (id === 8)
    return ["Cay-xanh.png", "Gioi-thieu.html"].every((n) =>
      w.found.includes(n),
    );
  if (id === 9)
    return (
      [
        "open:Bai-mau.txt",
        "create:Bai-tap",
        "rename:Tin-hoc",
        "create:Nhap",
        "delete:Nhap",
      ].every((e) => w.events.includes(e)) &&
      w.folders.some((f) => f.name === "Tin-hoc") &&
      !w.folders.some((f) => f.name === "Nhap")
    );
  if (id === 10)
    return (
      PRIVACY_ITEMS.every((item, i) => w.placements[i] === item[2]) &&
      w.message === "safe"
    );
  if (id === 11)
    return (
      w.slides.length >= 2 &&
      w.slides.every((s) => s.title.trim() && s.text.trim() && s.image) &&
      w.exported
    );
  if (id === 12) return w.visited.length >= 3 && ordered(w.order, 4);
  if (id === 13)
    return ["move", "click", "double", "right", "drag", "scroll"].every(
      (k) => w.mouse[k],
    );
  if (id === 14) return ordered(w.order, 4);
  if (id === 15)
    return ["rain", "dry", "art"].every(
      (k) => w.answers[k] === (w[k] ? "yes" : "no"),
    );
  if (id === 16)
    return (
      ordered(w.order, 3) &&
      w.recipient.trim() &&
      w.message.trim() &&
      w.exported
    );
  return false;
}
function ordered(order, n) {
  return order.length === n && order.every((value, index) => value === index);
}
function folderSnapshot(w) {
  w.history.push(
    JSON.stringify({
      folders: w.folders,
      current: w.current,
      events: w.events,
    }),
  );
  if (w.history.length > 20) w.history.shift();
}
function handlePractice(action, b) {
  if (!activeStudent() || !PRACTICE_DEFAULTS[LESSON_ID]) return false;
  const w = currentWork(),
    index = Number(b.dataset.index);
  if (action === "practice-check") {
    const passed = practicePassed(w);
    if (passed) {
      lessonRecord().practice = true;
      lessonRecord().updatedAt = new Date().toISOString();
      persistCourse();
      render();
    }
    const feedback = document.querySelector("#practice-feedback");
    feedback.className = "feedback " + (passed ? "success" : "try");
    feedback.textContent = passed
      ? "🎉 Em đã hoàn thành đúng nhiệm vụ! Kết quả đã được giữ lại."
      : "🌱 Nhiệm vụ chưa đủ hoặc còn chỗ chưa đúng. Xem yêu cầu và thử lại nhé.";
    feedback.scrollIntoView({ block: "nearest", behavior: "smooth" });
    audioCue(passed);
    return true;
  }
  if (action === "practice-reset") {
    lessonRecord().work = structuredClone(PRACTICE_DEFAULTS[LESSON_ID]);
    persistCourse();
    render();
    return true;
  }
  if (action === "tv-power") {
    w.power = !w.power;
    w.actions.push("power");
  } else if (action === "tv-volume") {
    if (!w.power) {
      notify("Em bật tivi trước nhé.");
      return true;
    }
    w.volume = Math.min(10, w.volume + 1);
    w.actions.push("volume");
    playTone(440);
  } else if (action === "tv-channel") {
    if (!w.power) {
      notify("Em bật tivi trước nhé.");
      return true;
    }
    w.channel = (w.channel % 3) + 1;
    w.actions.push("channel");
  } else if (action === "sequence-add") {
    if (!w.order.includes(index)) w.order.push(index);
  } else if (action === "sequence-clear") w.order = [];
  else if (action === "web-open") {
    w.article = b.dataset.id;
    if (!w.visited.includes(w.article)) w.visited.push(w.article);
  } else if (action === "audio-demo") {
    playTone(523);
    setTimeout(() => playTone(659), 180);
    setTimeout(() => playTone(784), 360);
    return true;
  } else if (action === "sort-select") w.selected = index;
  else if (action === "sort-place") {
    if (w.selected === null) {
      notify("Em chọn một thẻ trước nhé.");
      return true;
    }
    w.placements[w.selected] = b.dataset.group;
    w.selected = null;
  } else if (action === "tree-toggle") {
    const path = b.dataset.path;
    w.open = w.open.includes(path)
      ? w.open.filter((p) => p !== path)
      : [...w.open, path];
  } else if (action === "tree-file") {
    if (["Cay-xanh.png", "Gioi-thieu.html"].includes(b.dataset.name)) {
      if (!w.found.includes(b.dataset.name)) w.found.push(b.dataset.name);
      notify("Đã tìm thấy " + b.dataset.name);
    } else notify("Đây chưa phải tệp được yêu cầu.");
  } else if (action === "folder-select") w.selected = b.dataset.id;
  else if (action === "folder-open") {
    w.current = b.dataset.id;
    w.selected = null;
  } else if (action === "file-view") {
    w.events.push("open:Bai-mau.txt");
    persistCourse();
    notify(
      "Bai-mau.txt: Chào em! Đây là nội dung của tệp mẫu trong thư mục Hoc-tap.",
    );
    return true;
  } else if (action === "folder-up") {
    w.current = w.folders.find((f) => f.id === w.current)?.parent || "root";
    w.selected = null;
  } else if (
    ["folder-create", "folder-rename", "folder-delete"].includes(action)
  ) {
    const name = document
        .querySelector("#folder-name")
        .value.trim()
        .slice(0, 50),
      selected = w.folders.find((f) => f.id === w.selected);
    if (action !== "folder-delete" && (!name || /[\\/:*?"<>|]/.test(name))) {
      notify('Tên cần rõ ràng và không chứa \\ / : * ? " < > |.');
      return true;
    }
    if (action !== "folder-create" && !selected) {
      notify("Em chọn thư mục trước nhé.");
      return true;
    }
    if (
      action !== "folder-delete" &&
      w.folders.some(
        (f) =>
          f.parent === w.current && f.name === name && f.id !== selected?.id,
      )
    ) {
      notify("Tên thư mục đã có ở đây.");
      return true;
    }
    if (w.folders.length >= 40 && action === "folder-create") {
      notify("Khu thực hành chứa tối đa 40 thư mục.");
      return true;
    }
    folderSnapshot(w);
    if (action === "folder-create") {
      w.folders.push({ id: makeId(), name, parent: w.current });
      w.events.push("create:" + name);
    }
    if (action === "folder-rename") {
      selected.name = name;
      w.events.push("rename:" + name);
    }
    if (action === "folder-delete") {
      const ids = new Set([selected.id]);
      let oldSize;
      do {
        oldSize = ids.size;
        w.folders.forEach((f) => {
          if (ids.has(f.parent)) ids.add(f.id);
        });
      } while (ids.size !== oldSize);
      w.folders = w.folders.filter((f) => !ids.has(f.id));
      w.events.push("delete:" + selected.name);
      w.selected = null;
    }
  } else if (action === "folder-undo") {
    const snapshot = w.history.pop();
    if (snapshot) {
      Object.assign(w, JSON.parse(snapshot));
      w.selected = null;
    }
  } else if (action === "privacy-safe") w.message = "safe";
  else if (action === "privacy-unsafe") w.message = "unsafe";
  else if (action === "slide-select") w.index = index;
  else if (action === "slide-add") {
    if (w.slides.length < 5) {
      w.slides.push({ title: "", text: "", image: "🌱" });
      w.index = w.slides.length - 1;
      w.exported = false;
    }
  } else if (action === "slide-prev") w.index = Math.max(0, w.index - 1);
  else if (action === "slide-next")
    w.index = Math.min(w.slides.length - 1, w.index + 1);
  else if (action === "slide-export") {
    if (!w.slides.every((s) => s.title.trim() && s.text.trim())) {
      notify("Em điền tiêu đề và nội dung cho từng trang trước nhé.");
      return true;
    }
    const pages = w.slides.map(slideHTML).join("");
    exportProduct(
      "Bai-trinh-chieu-cua-em",
      pages,
      "Dùng phím trái/phải hoặc nút để chuyển trang.",
      true,
    );
    w.exported = true;
  } else if (action === "planet") {
    w.planet = index;
    if (!w.visited.includes(index)) w.visited.push(index);
  } else if (action === "mouse-click") {
    if (app.lastPointer === "mouse") w.mouse.click = true;
    else notify("Đây là thao tác chạm; em dùng chuột thật để luyện nháy trái.");
  } else if (action === "mouse-select") {
    w.selected = true;
    notify("Đã chọn ngôi sao. Kéo bằng chuột hoặc chạm hộp để thử.");
  } else if (action === "mouse-drop") {
    if (w.selected) {
      w.selected = false;
      notify(
        "Đã đặt bằng thao tác thay thế. Em kéo bằng chuột để hoàn thành kĩ năng kéo thả.",
      );
    }
  } else if (action === "card-export") {
    if (!w.recipient.trim() || !w.message.trim()) {
      notify("Em viết người nhận và lời chúc trước nhé.");
      return true;
    }
    exportProduct(
      "Thiep-cua-em",
      greetingHTML(w),
      "Sản phẩm học tập của " + activeStudent().name,
    );
    w.exported = true;
  } else return false;
  persistCourse();
  render();
  return true;
}
function bindPracticeEvents() {
  const root = document.querySelector("#course-app");
  root.addEventListener("pointerdown", (e) => {
    app.lastPointer = e.pointerType;
  });
  root.addEventListener("pointerover", (e) => {
    if (
      e.target.closest("#mouse-move") &&
      e.pointerType === "mouse" &&
      LESSON_ID === 13 &&
      activeStudent()
    ) {
      currentWork().mouse.move = true;
      persistCourse();
      e.target.textContent = "① Di chuyển con trỏ ✓";
    }
  });
  root.addEventListener("dblclick", (e) => {
    if (
      e.target.closest("#mouse-double") &&
      app.lastPointer === "mouse" &&
      LESSON_ID === 13
    ) {
      currentWork().mouse.double = true;
      persistCourse();
      e.target.textContent = "③ Nháy đúp ✓";
    }
  });
  root.addEventListener("contextmenu", (e) => {
    if (e.target.closest("#mouse-right") && LESSON_ID === 13) {
      e.preventDefault();
      if (app.lastPointer === "mouse") {
        currentWork().mouse.right = true;
        persistCourse();
        e.target.textContent = "④ Nháy phải ✓";
      } else
        notify(
          "Nhấn giữ là thao tác cảm ứng; hãy luyện nút phải bằng chuột thật.",
        );
    }
  });
  root.addEventListener(
    "wheel",
    (e) => {
      if (e.target.closest("#mouse-scroll") && LESSON_ID === 13)
        app.wheelUsed = true;
    },
    { passive: true },
  );
  root.addEventListener(
    "scroll",
    (e) => {
      if (
        e.target.id === "mouse-scroll" &&
        app.wheelUsed &&
        e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 8
      ) {
        currentWork().mouse.scroll = true;
        persistCourse();
      }
    },
    { capture: true, passive: true },
  );
  root.addEventListener("dragstart", (e) => {
    const item = e.target.closest("[data-drag],[data-mouse-drag]");
    if (!item) return;
    e.dataTransfer.setData("text/plain", item.dataset.drag ?? "mouse-star");
    app.dragging = item.dataset.drag ?? "mouse-star";
  });
  root.addEventListener("dragover", (e) => {
    if (e.target.closest("[data-drop],[data-mouse-drop]")) e.preventDefault();
  });
  root.addEventListener("drop", (e) => {
    const bin = e.target.closest("[data-drop],[data-mouse-drop]");
    if (!bin) return;
    e.preventDefault();
    const value = e.dataTransfer.getData("text/plain");
    const w = currentWork();
    if (
      bin.dataset.mouseDrop !== undefined &&
      value === "mouse-star" &&
      LESSON_ID === 13
    ) {
      w.mouse.drag = true;
    } else if (
      bin.dataset.drop &&
      /^[0-5]$/.test(value) &&
      [7, 10].includes(LESSON_ID)
    ) {
      w.placements[Number(value)] = bin.dataset.drop;
      w.selected = null;
    }
    app.dragging = null;
    persistCourse();
    render();
  });
}
