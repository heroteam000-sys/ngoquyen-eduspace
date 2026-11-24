"use strict";
let runToken = 0,
  richSelection = null,
  dragItem = null;
const JOBS = ["Viết thư mời", "Vẽ thiệp", "Tạo trang chiếu", "Tìm thông tin"];
const JOB_ANS = ["Soạn thảo văn bản", "Đồ họa", "Trình chiếu", "Trình duyệt"];
const LIB_PAGES = [
  {
    title: "Giờ mở cửa",
    text: "THÔNG TIN MẪU: Thư viện trong hoạt động mô phỏng mở từ 7 giờ 30 đến 16 giờ 30, từ thứ Hai đến thứ Sáu.",
  },
  {
    title: "Hướng dẫn mượn sách",
    text: "THÔNG TIN MẪU: Mang thẻ bạn đọc, chọn sách và đăng kí mượn tại bàn thư viện. Giữ sách sạch và trả đúng hẹn.",
  },
  {
    title: "Góc cây xanh",
    text: "Góc lớp ít nắng cần loại cây phù hợp điều kiện ánh sáng và cách chăm sóc. Hỏi giáo viên hoặc người có kinh nghiệm trước khi chọn.",
  },
];
function stopProgram() {
  runToken++;
}
function clearRichSelection() {
  richSelection = null;
}
function freshWork() {
  return {
    answers: {},
    events: [],
    feedback: "",
    query: "",
    results: [],
    opened: [],
    page: -1,
    note: "",
    files: [
      { id: "sample", name: "Bai-viet.txt", parent: "root", kind: "file" },
    ],
    folder: "root",
    selected: "",
    newName: "",
    history: [],
    html: "",
    textClip: "",
    undo: [],
    image: 0,
    layout: "inline",
    imageWidth: 160,
    fileName: "Bai-viet-cua-em",
    exported: false,
    art: {
      bg: "#eaf8ff",
      color: "#268ec9",
      shapes: [],
      selected: "",
      history: [],
      title: "",
      tool: "rect",
    },
    media: {},
    order: [],
    steps: [],
    plan: "",
    idea: "",
    backdrop: "garden",
    blocks: [],
    target: "root",
    inputs: { a: 3, b: 4, answer: 5 },
    vars: { a: 0, b: 0, diem: 0, lan: 0, traloi: 0 },
    sprite: { x: 40, y: 130, angle: 0, speech: "", costume: 0 },
    trail: [],
    trace: [],
    runs: [],
    loopKinds: [],
    branches: [],
    expressionRuns: [],
    ran: false,
    edited: false,
    runInput: "",
    maze: { x: 0, y: 0, done: false },
  };
}
function currentWork() {
  const r = lessonRecord();
  if (!r.work) r.work = freshWork();
  return r.work;
}
function opts(items, value) {
  return items
    .map(
      (x) =>
        `<option value="${escapeHTML(x)}" ${String(x) === String(value) ? "selected" : ""}>${escapeHTML(x)}</option>`,
    )
    .join("");
}
function choice(label, key, items, value) {
  return `<label>${escapeHTML(label)}<select data-answer="${key}"><option value="">Chọn câu trả lời</option>${opts(items, value)}</select></label>`;
}
function practiceHTML() {
  if (!activeStudent())
    return joinView("Nhập tên và lớp để lưu hành trình của em.");
  const w = currentWork();
  return `<section class="lab-banner"><div><span class="eyebrow">XƯỞNG THỰC HÀNH · BÀI ${lesson.number}</span><h2>${lesson.title}</h2><p>${lesson.task}</p></div>${lessonIllustration(LESSON_ID)}</section><section class="panel lab-panel">${labBody(w)}<p id="lab-feedback" class="feedback ${lessonRecord().practice ? "success" : "try"}" role="status">${escapeHTML(w.feedback || (lessonRecord().practice ? "✓ Đã ghi nhận hoạt động web của em." : "Làm từng bước, rồi kiểm tra nhé."))}</p><div class="actions">${button("✓ Kiểm tra thực hành", "lab-check", 'class="primary"')}${button("Làm lại hoạt động", "lab-reset")}${button("Thử thách 8 câu", "view", 'data-view="quiz" class="secondary"')}</div></section><section class="panel real-world"><h2>🌱 Cùng thầy cô thực hiện</h2><p>${lesson.real}</p></section>`;
}
function labBody(w) {
  if (LESSON_ID === 1)
    return `<h2>💻 Máy tính giúp em</h2><div class="sort-grid">${JOBS.map((j, i) => choice(j, String(i), JOB_ANS, w.answers[i])).join("")}</div>${choice("Khi dùng máy tính, em nên…", "safe", ["Cân bằng thời gian và kiểm tra thông tin", "Tin mọi thông tin và dùng liên tục"], w.answers.safe)}<details><summary>🎮 Thử điều khiển Mít vượt mê cung</summary><p>Dùng các nút di chuyển hoặc phím mũi tên khi chọn bản đồ để đưa Mít tới ngôi sao.</p><div id="maze" class="maze" tabindex="0" aria-label="Bản đồ mê cung điều khiển bằng phím mũi tên">${mazeHTML(w)}</div><div class="actions">${[
      ["left", "Trái"],
      ["right", "Phải"],
      ["up", "Lên"],
      ["down", "Xuống"],
    ]
      .map(([a, t]) => button(t, "maze-" + a))
      .join(
        "",
      )}</div><p>${w.maze.done ? "⭐ Đã đến đích!" : "Lách qua ô tường màu xanh đậm."}</p></details>`;
  if (LESSON_ID === 2 || LESSON_ID === 3) return searchLab(w);
  if (LESSON_ID === 4) return folderLab(w);
  if (LESSON_ID === 5)
    return `<h2>🛡️ Dùng nội dung có trách nhiệm</h2><div class="sort-grid">${["Dùng ảnh được cấp phép và ghi nguồn đúng điều kiện", "Nhận tranh của bạn là của mình", "Ghi nguồn nhưng dùng nội dung chưa được phép", "Tự vẽ tranh cho sản phẩm của mình"].map((x, i) => choice(x, String(i), ["Phù hợp", "Chưa phù hợp"], w.answers[i])).join("")}</div><label>Dòng ghi nguồn cho ảnh được phép dùng<textarea id="source-note" placeholder="Tác giả: … · Nguồn: … · Điều kiện: …">${escapeHTML(w.note)}</textarea></label><p class="hint">Ví dụ này luyện cách ghi nguồn; khi dùng ảnh thật cần kiểm tra giấy phép thật. Không tự ý xem thư hoặc nội dung riêng tư của người khác.</p>`;
  if ([6, 7].includes(LESSON_ID)) return richLab(w);
  if ([8, 9].includes(LESSON_ID)) return artLab(w);
  if ([10, 11].includes(LESSON_ID)) return craftLab(w);
  return codeLab(w);
}
const MAZE_WALLS = [2, 7, 12, 10, 16, 18];
function mazeHTML(w) {
  return Array.from(
    { length: 25 },
    (_, i) =>
      `<span class="maze-cell ${MAZE_WALLS.includes(i) ? "wall" : ""}">${w.maze.y * 5 + w.maze.x === i ? "🤖" : i === 24 ? "⭐" : ""}</span>`,
  ).join("");
}
function searchLab(w) {
  return `<h2>${LESSON_ID === 2 ? "🌐 Website thư viện mẫu" : "🧭 Tìm thông tin để chọn cây"}</h2><p>${LESSON_ID === 2 ? "Tìm giờ mở cửa và hướng dẫn mượn sách. Nội dung giờ và quy định dưới đây chỉ dùng cho mô phỏng." : "Nhiệm vụ: chọn cây cho góc lớp ít nắng. Tìm thông tin liên quan và giải thích lựa chọn."}</p><div class="mock-browser"><div class="address">thuvien-hoc-tap · Website mô phỏng nội bộ</div><div class="search-row"><input id="search-query" aria-label="Từ khóa tìm trong website" value="${escapeHTML(w.query)}" placeholder="Từ khóa: giờ, mượn sách, cây…">${button("Tìm trong website", "search-run", 'class="primary"')}</div><div class="actions">${LIB_PAGES.map((p, i) => button(p.title, "search-open", `data-index="${i}"`)).join("")}</div>${w.searched ? `<div class="search-results">${w.results.map((i) => button(LIB_PAGES[i].title, "search-open", `data-index="${i}" class="search-result"`)).join("") || "<p>Chưa có kết quả. Thử từ khóa ngắn hơn nhé.</p>"}</div>` : ""}${w.page >= 0 ? `<article class="result-page"><h3>${LIB_PAGES[w.page].title}</h3><p>${LIB_PAGES[w.page].text}</p><small>Nguồn: học liệu mẫu tự biên soạn</small></article>` : ""}</div>${LESSON_ID === 3 ? choice("Chọn nguồn cần tham khảo thêm", "source", ["Giáo viên và hướng dẫn chăm cây phù hợp", "Chỉ dựa vào quảng cáo chậu đẹp", "Thông tin trò chơi không liên quan"], w.answers.source) : ""}<label>${LESSON_ID === 2 ? "Ghi giờ mở cửa và điều kiện mượn sách tìm được" : "Nêu thông tin còn cần biết và lí do lựa chọn"}<textarea id="search-note" maxlength="1000">${escapeHTML(w.note)}</textarea></label>${button("Tải thẻ chia sẻ thông tin", "share-note", 'class="secondary"')}<p class="hint">Thẻ tải về để chia sẻ theo hướng dẫn của giáo viên; ứng dụng không tự gửi thông tin cho người khác.</p>`;
}
function folderLab(w) {
  const f = w.files.find((x) => x.id === w.folder);
  return `<h2>🌳 Xây cây thư mục</h2><p>Tạo Hoc-tap trong thư mục gốc, bên trong có Toan và Tin-hoc. Chuyển Bai-viet.txt vào Tin-hoc rồi tìm lại bằng một phần tên.</p><div class="folder-layout"><aside class="folder-tree">${treeHTML(w, "root")}</aside><section><p><b>Đang ở: ${escapeHTML(f?.name || "Thư mục gốc")}</b></p><div class="actions">${button("Về gốc", "folder-root")}${button("Tạo thư mục", "folder-new")}${button("Cắt mục đã chọn", "folder-cut")}${button("Dán", "folder-paste")}${button("Đổi tên", "folder-rename")}${button("Xóa", "folder-delete")}${button("Hoàn tác", "folder-undo")}</div><label>Tên thư mục / tên mới<input id="folder-name" maxlength="60" value="${escapeHTML(w.newName)}"></label><div class="file-grid">${
    w.files
      .filter((x) => x.parent === w.folder)
      .map(
        (x) =>
          `<div class="file-tile ${w.selected === x.id ? "selected" : ""}">${button(`${x.kind === "folder" ? "📁" : "📄"} ${escapeHTML(x.name)}`, "folder-select", `data-id="${x.id}"`)}${x.kind === "folder" ? button("Mở", "folder-open", `data-id="${x.id}"`) : ""}</div>`,
      )
      .join("") || "<p>Thư mục trống.</p>"
  }</div></section></div><label>Tìm tên hoặc một phần tên<input id="folder-search" value="${escapeHTML(w.query)}" placeholder="Ví dụ: Bai-viet"></label>${button("Tìm mục", "folder-find")}<div class="search-results">${(
    w.found || []
  )
    .map((id) => {
      const f = w.files.find((x) => x.id === id);
      return f
        ? button(
            "📄 " + f.name + " · " + filePath(w, f),
            "folder-result",
            `data-id="${id}"`,
          )
        : "";
    })
    .join("")}</div>`;
}
function filePath(w, f) {
  const names = [f.name],
    seen = new Set([f.id]);
  while (f.parent !== "root") {
    f = w.files.find((x) => x.id === f.parent);
    if (!f || seen.has(f.id)) break;
    seen.add(f.id);
    names.unshift(f.name);
  }
  return names.join("/");
}
function treeHTML(w, parent, depth = 0) {
  if (depth > 8) return "";
  return `<ul>${parent === "root" ? "<li><b>📁 Thư mục gốc</b></li>" : ""}${w.files
    .filter((f) => f.parent === parent)
    .map(
      (f) =>
        `<li>${escapeHTML(f.kind === "folder" ? "📁 " + f.name : "📄 " + f.name)}${f.kind === "folder" ? treeHTML(w, f.id, depth + 1) : ""}</li>`,
    )
    .join("")}</ul>`;
}
function folderOp(w, action, b) {
  const f = w.files.find((x) => x.id === w.selected),
    snapshot = () => {
      w.history.push(JSON.stringify(w.files));
      if (w.history.length > 20) w.history.shift();
    };
  if (action === "folder-root") {
    w.folder = "root";
    w.selected = "";
    return;
  }
  if (action === "folder-select") {
    w.selected = b.dataset.id;
    return;
  }
  if (action === "folder-open") {
    w.folder = b.dataset.id;
    w.selected = "";
    return;
  }
  if (action === "folder-cut") {
    if (!f) throw Error("Em chọn một mục trước nhé.");
    w.cut = f.id;
    return;
  }
  if (action === "folder-new" || action === "folder-rename") {
    const n = cleanString(w.newName, 60);
    if (!n || /[\\/:*?"<>|]/.test(n))
      throw Error(
        'Chọn tên rõ nghĩa, không trống và không có kí tự \\ / : * ? " < > |.',
      );
    if (
      w.files.some(
        (x) => x.parent === w.folder && x.name === n && x.id !== f?.id,
      )
    )
      throw Error("Đã có mục cùng tên ở đây.");
    if (action === "folder-rename" && !f) throw Error("Chọn mục cần đổi tên.");
    snapshot();
    if (action === "folder-new") {
      if (w.files.length >= 80) throw Error("Tối đa 80 mục trong hoạt động.");
      w.files.push({ id: makeId(), name: n, parent: w.folder, kind: "folder" });
    } else f.name = n;
    w.newName = "";
    return;
  }
  if (action === "folder-paste") {
    const src = w.files.find((x) => x.id === w.cut);
    if (!src) throw Error("Chọn và cắt một mục trước khi dán.");
    let p = w.folder;
    while (p !== "root") {
      if (p === src.id)
        throw Error("Không đặt thư mục vào chính nó hoặc nhánh con.");
      p = w.files.find((x) => x.id === p)?.parent || "root";
    }
    if (w.files.some((x) => x.parent === w.folder && x.name === src.name))
      throw Error("Đích đã có mục cùng tên.");
    snapshot();
    src.parent = w.folder;
    w.cut = null;
    w.events.push("move");
    return;
  }
  if (action === "folder-delete") {
    if (!f) throw Error("Chọn mục muốn xóa.");
    snapshot();
    const ids = new Set([f.id]);
    for (let i = 0; i < w.files.length; i++)
      w.files.forEach((x) => {
        if (ids.has(x.parent)) ids.add(x.id);
      });
    w.files = w.files.filter((x) => !ids.has(x.id));
    w.selected = "";
    return;
  }
  if (action === "folder-undo") {
    if (w.history.length) {
      w.files = JSON.parse(w.history.pop());
      w.folder = "root";
      w.cut = null;
      w.selected = "";
    }
    return;
  }
  if (action === "folder-find") {
    const q = normalizeText(w.query).trim();
    w.found = q
      ? w.files
          .filter((x) => normalizeText(x.name).includes(q))
          .map((x) => x.id)
      : [];
    if (w.found.includes("sample")) w.events.push("find");
    return;
  }
  if (action === "folder-result") {
    const target = w.files.find((x) => x.id === b.dataset.id);
    if (target) {
      w.folder = target.parent;
      w.selected = target.id;
    }
    return;
  }
}
function richLab(w) {
  return `<h2>📝 Xưởng văn bản</h2><p>Chọn chữ trong vùng soạn trước khi định dạng, sao chép hoặc cắt. Đây là công cụ học tập mô phỏng.</p><div class="actions">${button("Mở văn bản mẫu", "doc-open")}${button("B · Đậm", "doc-bold")}${button("I · Nghiêng", "doc-italic")}${button("Đổi phông", "doc-font")}${button("Đổi màu chữ", "doc-color")}${button("Tăng cỡ chữ", "doc-size")}${button("Sao chép", "doc-copy")}${button("Cắt", "doc-cut")}${button("Dán", "doc-paste")}${button("Hoàn tác", "doc-undo")}</div><div class="rich-editor" id="rich-doc" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Vùng soạn văn bản">${w.html}</div><p class="hint">Bôi đen một cụm từ bằng chuột hoặc bàn phím, rồi chọn nút. Ảnh được bố trí trong bản xem trước phía dưới.</p><div class="sort-grid"><label>Tên tệp<input id="doc-name" maxlength="60" value="${escapeHTML(w.fileName)}"></label><label>Chèn ảnh<select id="doc-image"><option value="0">Chưa chèn</option>${[1, 4, 5, 8, 9].map((i) => `<option value="${i}" ${Number(w.image) === i ? "selected" : ""}>${{ 1: "Máy tính sáng tạo", 4: "Cây thư mục", 5: "Tôn trọng tác giả", 8: "Bảng vẽ", 9: "Tấm thiệp" }[i]}</option>`).join("")}</select></label><label>Bố trí ảnh<select id="doc-layout">${[
    ["inline", "Cùng dòng / riêng dòng"],
    ["left", "Ảnh trái, chữ bao quanh"],
    ["right", "Ảnh phải, chữ bao quanh"],
  ]
    .map(
      ([v, t]) =>
        `<option value="${v}" ${w.layout === v ? "selected" : ""}>${t}</option>`,
    )
    .join(
      "",
    )}</select></label><label>Chiều rộng ảnh<input id="doc-width" type="range" min="90" max="280" value="${w.imageWidth}"></label></div><div class="document-preview" id="doc-preview">${docPreview(w)}</div><div class="actions">${button("Tải văn bản HTML", "doc-export", 'class="secondary"')}${button("Tải nội dung TXT", "doc-txt")}</div>`;
}
function docPlain(w) {
  return w.html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .trim();
}
function svgData(id) {
  return (
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      lessonIllustration(id).replace(
        "<svg",
        '<svg xmlns="http://www.w3.org/2000/svg" width="310" height="220"',
      ),
    )
  );
}
function docPreview(w) {
  return `<article class="doc-page">${w.image ? `<img alt="Minh họa văn bản" src="${svgData(Number(w.image))}" style="width:${w.imageWidth}px;max-width:80%;${w.layout === "inline" ? "display:block;" : "float:" + w.layout + ";margin:0 16px 12px;"}">` : ""}<div>${w.html || "<p>Văn bản sẽ hiện ở đây.</p>"}</div><div style="clear:both"></div></article>`;
}
function richRange() {
  const root = document.querySelector("#rich-doc");
  if (
    !root ||
    !richSelection ||
    !root.contains(richSelection.commonAncestorContainer)
  )
    throw Error("Em chọn phần chữ trong vùng soạn trước nhé.");
  return richSelection;
}
function saveRich(w) {
  const root = document.querySelector("#rich-doc");
  w.html = root.innerHTML.slice(0, 18000);
  w.exported = false;
  persistCourse();
  const p = document.querySelector("#doc-preview");
  if (p) p.innerHTML = docPreview(w);
}
function richOp(w, action) {
  if (action === "doc-open") {
    w.undo.push(w.html);
    w.html =
      "<p>THƯ MỜI</p><p>Kính mời các bạn tham gia Ngày hội đọc sách của lớp.</p><p>Chúng mình cùng đọc sách, trao đổi và giữ gìn sách sạch đẹp.</p><p>Thời gian: theo thông báo của giáo viên. Địa điểm: thư viện trường.</p>";
    w.fileName = "Mau-thu-moi";
    w.events.push("open");
    w.exported = false;
    return true;
  }
  if (action === "doc-undo") {
    if (w.undo.length) {
      w.html = w.undo.pop();
      w.events.push("undo");
      w.exported = false;
    }
    return true;
  }
  if (action === "doc-export" || action === "doc-txt") {
    if (docPlain(w).length < 10) throw Error("Em viết nội dung trước khi lưu.");
    const name = (w.fileName || "Bai-viet").replace(/[\\/:*?"<>|]/g, "-");
    if (action === "doc-export")
      exportProduct(name, docPreview(w), "Sản phẩm học tập Tin học 5");
    else
      saveDownload(
        new Blob([document.querySelector("#rich-doc").innerText], {
          type: "text/plain;charset=utf-8",
        }),
        name + ".txt",
      );
    w.exported = true;
    return true;
  }
  const r = richRange();
  if (action === "doc-copy") {
    if (r.collapsed) throw Error("Chọn chữ để sao chép.");
    w.textClip = r.toString();
    w.events.push("copy");
    notify("✓ Đã sao chép phần chữ trong ứng dụng.");
    persistCourse();
    return false;
  }
  if (action === "doc-paste") {
    if (!w.textClip) throw Error("Sao chép hoặc cắt trước khi dán.");
    w.undo.push(w.html);
    r.deleteContents();
    const t = document.createTextNode(w.textClip);
    r.insertNode(t);
    r.setStartAfter(t);
    r.collapse(true);
    w.events.push("paste");
  } else if (action === "doc-cut") {
    if (r.collapsed) throw Error("Chọn chữ để cắt.");
    w.undo.push(w.html);
    w.textClip = r.toString();
    r.deleteContents();
    w.events.push("cut");
  } else {
    if (r.collapsed) throw Error("Bôi đen chữ trước khi định dạng.");
    w.undo.push(w.html);
    const span = document.createElement("span");
    if (action === "doc-bold") span.style.fontWeight = "800";
    if (action === "doc-italic") span.style.fontStyle = "italic";
    if (action === "doc-color") span.style.color = "#137dce";
    if (action === "doc-size") span.style.fontSize = "26px";
    if (action === "doc-font") span.style.fontFamily = "Georgia";
    span.appendChild(r.extractContents());
    r.insertNode(span);
    r.selectNodeContents(span);
    w.events.push(action.slice(4));
  }
  if (w.undo.length > 20) w.undo.shift();
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(r);
  richSelection = r.cloneRange();
  saveRich(w);
  return false;
}
function artLab(w) {
  return `<h2>🎨 Studio đồ họa của em</h2><p>Thêm hình, chọn rồi kéo để di chuyển. Có thể vẽ nét tự do bằng chuột hoặc dùng nút hình và các ô tọa độ. Bản vẽ dùng đối tượng SVG.</p><div class="actions">${button("Hình chữ nhật", "art-rect")}${button("Hình elip", "art-ellipse")}${button("Nét tự do", "art-pen", `aria-pressed="${w.art.tool === "pen"}"`)}${button("Chọn và kéo", "art-select")}${button("Sao chép hình", "art-copy")}${button("Xóa hình", "art-delete")}${button("Hoàn tác", "art-undo")}</div><div class="sort-grid"><label>Lời nhắn / tiêu đề<input id="art-title" maxlength="80" value="${escapeHTML(w.art.title)}" placeholder="Ví dụ: CẢM ƠN THẦY CÔ"></label><label>Màu tô / nét<input id="art-color" type="color" value="${w.art.color}"></label><label>Màu nền<input id="art-bg" type="color" value="${w.art.bg}"></label><label>Chọn hình<select id="art-selected"><option value="">Chọn đối tượng</option>${w.art.shapes.map((s, i) => `<option value="${s.id}" ${w.art.selected === s.id ? "selected" : ""}>Hình ${i + 1}: ${s.type === "rect" ? "Chữ nhật" : s.type === "ellipse" ? "Elip" : "Nét vẽ"}</option>`).join("")}</select></label></div><svg id="art-board" class="art-board" viewBox="0 0 640 400" role="img" aria-label="Bản vẽ có thể kéo các hình">${artInner(w, true)}</svg>${selectedArtControls(w)}<div class="actions">${button("Tải tranh SVG", "art-svg", 'class="secondary"')}${button("Tải ảnh PNG", "art-png", 'class="primary"')}</div><p class="hint">Nút sao chép giữ hình rời để di chuyển; không mô phỏng mọi chế độ của Paint. Màu tô đổi trên đối tượng đang chọn.</p>`;
}
function artInner(w, select = false) {
  return `<rect width="640" height="400" rx="22" fill="${w.art.bg}"/>${w.art.shapes
    .map((s) => {
      const attr = select ? `data-shape-id="${s.id}" class="art-object"` : "";
      let item =
        s.type === "rect"
          ? `<rect ${attr} x="${s.x}" y="${s.y}" width="${s.width}" height="${s.height}" rx="12" fill="${s.color}"/>`
          : s.type === "ellipse"
            ? `<ellipse ${attr} cx="${s.x + s.width / 2}" cy="${s.y + s.height / 2}" rx="${s.width / 2}" ry="${s.height / 2}" fill="${s.color}"/>`
            : `<path ${attr} d="${s.points.map((p, i) => (i ? "L" : "M") + p[0] + "," + p[1]).join(" ")}" fill="none" stroke="${s.color}" stroke-width="5" stroke-linecap="round"/>`;
      if (select && w.art.selected === s.id && s.type !== "path")
        item += `<rect x="${s.x - 4}" y="${s.y - 4}" width="${s.width + 8}" height="${s.height + 8}" fill="none" stroke="#163965" stroke-width="2" stroke-dasharray="6 5" pointer-events="none"/>`;
      return item;
    })
    .join(
      "",
    )}<text x="320" y="65" text-anchor="middle" font-family="Arial" font-size="27" font-weight="bold" fill="#1b3c63">${escapeHTML(w.art.title)}</text>`;
}
function selectedArtControls(w) {
  const s = w.art.shapes.find((x) => x.id === w.art.selected);
  if (!s || s.type === "path") return "";
  return `<div class="art-properties">${[
    ["x", "Ngang", 0, 520],
    ["y", "Dọc", 80, 320],
    ["width", "Rộng", 15, 300],
    ["height", "Cao", 15, 240],
  ]
    .map(
      ([k, t, min, max]) =>
        `<label>${t}<input data-art-prop="${k}" type="number" min="${min}" max="${max}" value="${Math.round(s[k])}"></label>`,
    )
    .join("")}</div>`;
}
function artSnap(w) {
  w.art.history.push(JSON.stringify(w.art.shapes));
  if (w.art.history.length > 25) w.art.history.shift();
}
function artOp(w, action) {
  if (action === "art-pen") {
    w.art.tool = "pen";
    w.art.selected = "";
    return;
  }
  if (action === "art-select") {
    w.art.tool = "select";
    return;
  }
  if (action === "art-rect" || action === "art-ellipse") {
    artSnap(w);
    const s = {
      id: makeId(),
      type: action.slice(4),
      x: 70 + ((w.art.shapes.length * 25) % 350),
      y: 110 + ((w.art.shapes.length * 15) % 150),
      width: 110,
      height: 85,
      color: w.art.color,
    };
    w.art.shapes.push(s);
    w.art.selected = s.id;
    w.art.tool = "select";
    w.events.push(s.type);
    w.exported = false;
    return;
  }
  if (action === "art-undo") {
    if (w.art.history.length) w.art.shapes = JSON.parse(w.art.history.pop());
    w.art.selected = "";
    w.exported = false;
    return;
  }
  const s = w.art.shapes.find((x) => x.id === w.art.selected);
  if (action === "art-copy") {
    if (!s) throw Error("Chọn một hình để sao chép.");
    artSnap(w);
    const n = JSON.parse(JSON.stringify(s));
    n.id = makeId();
    if (n.type !== "path") {
      n.x = Math.min(510, n.x + 25);
      n.y = Math.min(310, n.y + 20);
    }
    w.art.shapes.push(n);
    w.art.selected = n.id;
    w.events.push("copy-shape");
    w.exported = false;
    return;
  }
  if (action === "art-delete") {
    if (!s) throw Error("Chọn hình muốn xóa.");
    artSnap(w);
    w.art.shapes = w.art.shapes.filter((x) => x.id !== s.id);
    w.art.selected = "";
    w.events.push("delete-shape");
    w.exported = false;
    return;
  }
}
async function exportArt(w, png) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 640 400">${artInner(w)}</svg>`;
  if (!png) {
    saveDownload(
      new Blob([svg], { type: "image/svg+xml;charset=utf-8" }),
      "Tranh-Tin-hoc-5.svg",
    );
  } else {
    const img = await new Promise((resolve, reject) => {
      const im = new Image();
      im.onload = () => resolve(im);
      im.onerror = reject;
      im.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    });
    const c = document.createElement("canvas");
    c.width = 1280;
    c.height = 800;
    c.getContext("2d").drawImage(img, 0, 0);
    const blob = await new Promise((resolve) => c.toBlob(resolve, "image/png"));
    if (!blob) throw Error("Chưa tạo được ảnh.");
    saveDownload(blob, "Tranh-Tin-hoc-5.png");
  }
  w.exported = true;
  persistCourse();
  notify("✓ Ảnh đã sẵn sàng để tải.");
}
const CRAFT_STEPS = {
  10: [
    "Chuẩn bị một tờ giấy vuông",
    "Gấp đôi theo đường chéo",
    "Gấp hai góc về đỉnh để tạo nếp",
    "Gấp một lớp đỉnh xuống, gài hai góc vào nếp",
  ],
  11: [
    "Chuẩn bị hộp giấy sạch và giấy màu",
    "Nhờ người lớn xử lí phần cắt nếu cần",
    "Dán giấy màu và trang trí hộp",
    "Kiểm tra hộp đứng vững và đựng được bút",
  ],
};
function craftLab(w) {
  return `<h2>🎬 ${LESSON_ID === 10 ? "Gấp thẻ đánh dấu góc" : "Hộp đựng bút từ hộp giấy"}</h2><p>Video minh họa tự biên soạn. Xem, tạm dừng và tua lại trước khi thực hiện. Phần dùng dụng cụ khó cần người lớn hỗ trợ.</p><video id="craft-video" controls preload="metadata" playsinline poster="${BASE}assets/craft-${LESSON_ID}.png"><source src="${BASE}assets/craft-${LESSON_ID}.mp4" type="video/mp4"></video><div class="actions">${button("▶ Phát", "video-play")}${button("Ⅱ Tạm dừng", "video-pause")}${button("Lùi 5 giây", "video-back")}${button("Tiến 5 giây", "video-next")}${button("Xem lại từ đầu", "video-replay")}</div><p id="media-status" class="hint">${mediaStatus(w)}</p><details><summary>Nội dung và các bước của video</summary><ol>${CRAFT_STEPS[LESSON_ID].map((t) => `<li>${t}</li>`).join("")}</ol></details><h3>Xếp các bước theo thứ tự</h3><div class="actions">${[2, 0, 3, 1].map((i) => button(`${i + 1}. ${CRAFT_STEPS[LESSON_ID][i]}`, "craft-step", `data-index="${i}" ${w.order.includes(i) ? "disabled" : ""}`)).join("")}</div><ol>${w.order.map((i) => `<li>${CRAFT_STEPS[LESSON_ID][i]}</li>`).join("")}</ol>${button("Xếp lại", "craft-order-reset")}<label>${LESSON_ID === 10 ? "Vật liệu và cách làm an toàn" : "Kế hoạch: vật liệu, cách làm và công dụng"}<textarea id="craft-plan" maxlength="1500">${escapeHTML(w.plan)}</textarea></label><p class="simulation-note">Web ghi nhận việc xem và chuẩn bị. Giáo viên quan sát sản phẩm thủ công thật trước khi đánh giá việc hoàn thành thực hành.</p>${button("Tải kế hoạch TXT", "craft-save", 'class="secondary"')}`;
}
function mediaStatus(w) {
  return ["play", "pause", "seek"]
    .map(
      (k) =>
        `${w.media[k] ? "✓" : "○"} ${{ play: "Đã phát", pause: "Đã tạm dừng", seek: "Đã tua" }[k]}`,
    )
    .join(" · ");
}
const BLOCKS = {
  flag: ["🚩 Khi bấm cờ xanh", "event"],
  move: ["Di chuyển", "motion"],
  turn: ["Xoay", "motion"],
  say: ["Nói", "looks"],
  wait: ["Đợi", "control"],
  costume: ["Đổi trang phục", "looks"],
  pen: ["Đặt bút", "pen"],
  repeat: ["Lặp", "control"],
  branch: ["Nếu… thì", "control"],
  ask: ["Hỏi và nhận số nhập", "sensing"],
  set: ["Đặt biến", "variable"],
  change: ["Thay đổi biến", "variable"],
};
const VARS = ["diem", "lan", "a", "b", "traloi"];
function newBlock(type) {
  if (type === "repeat")
    return {
      type,
      kind: "count",
      times: "4",
      variable: "lan",
      op: ">=",
      threshold: "5",
      body: [
        { type: "move", value: "50" },
        { type: "turn", value: "90" },
      ],
    };
  if (type === "branch")
    return {
      type,
      variable: "diem",
      op: ">=",
      threshold: "5",
      hasElse: true,
      yes: [{ type: "say", value: "Chúc mừng em!" }],
      no: [{ type: "say", value: "Cùng cố gắng nhé!" }],
    };
  return {
    type,
    value:
      type === "say"
        ? "Xin chào!"
        : type === "move"
          ? "40"
          : type === "turn"
            ? "90"
            : type === "wait"
              ? "0.2"
              : type === "set"
                ? "0"
                : "1",
    variable: "diem",
  };
}
function blockAt(w, path) {
  let obj = w.blocks;
  for (const part of String(path).split(".")) {
    if (/^\d+$/.test(part)) obj = obj[Number(part)];
    else if (["body", "yes", "no"].includes(part)) obj = obj[part];
    else throw Error("Vị trí khối không hợp lệ.");
    if (obj === undefined) throw Error("Khối không còn ở vị trí này.");
  }
  return obj;
}
function blockArray(w, path) {
  if (path === "root") return w.blocks;
  const a = blockAt(w, path);
  if (!Array.isArray(a)) throw Error("Vùng lệnh không hợp lệ.");
  return a;
}
function flattenBlocks(list) {
  return list.flatMap((b) => [
    b,
    ...(b.body ? flattenBlocks(b.body) : []),
    ...(b.yes ? flattenBlocks(b.yes) : []),
    ...(b.no ? flattenBlocks(b.no) : []),
  ]);
}
function targetOptions(list, prefix = "") {
  let rows = [];
  list.forEach((b, i) => {
    const p = prefix + i;
    if (p.split(".").length < 6) {
      if (b.body) rows.push([p + ".body", "Thân lặp · khối " + p]);
      if (b.yes) rows.push([p + ".yes", "Nhánh thì · khối " + p]);
      if (b.no && b.hasElse)
        rows.push([p + ".no", "Nhánh nếu không · khối " + p]);
    }
    if (b.body) rows.push(...targetOptions(b.body, p + ".body."));
    if (b.yes) rows.push(...targetOptions(b.yes, p + ".yes."));
    if (b.no && b.hasElse) rows.push(...targetOptions(b.no, p + ".no."));
  });
  return rows;
}
function codeInput(path, key, value, label, numeric = false) {
  return `<label>${label}<input data-code-path="${path}" data-code-key="${key}" value="${escapeHTML(value)}" maxlength="120" ${numeric ? 'inputmode="decimal"' : ""}></label>`;
}
function codeSelect(path, key, value, label, items) {
  return `<label>${label}<select data-code-path="${path}" data-code-key="${key}">${items.map(([v, t]) => `<option value="${v}" ${String(v) === String(value) ? "selected" : ""}>${t}</option>`).join("")}</select></label>`;
}
function conditionControls(b, p) {
  return (
    codeSelect(
      p,
      "variable",
      b.variable,
      "Biến",
      VARS.map((x) => [x, x]),
    ) +
    codeSelect(p, "op", b.op, "So sánh", [
      [">=", "≥"],
      [">", ">"],
      ["=", "="],
      ["<", "<"],
      ["<=", "≤"],
      ["!=", "≠"],
    ]) +
    codeInput(p, "threshold", b.threshold, "Vế phải / biểu thức")
  );
}
function blockHTML(list, prefix = "") {
  return list
    .map((b, i) => {
      const p = prefix + i;
      let body = "";
      if (["move", "turn", "say", "wait", "set", "change"].includes(b.type)) {
        if (["set", "change"].includes(b.type))
          body += codeSelect(
            p,
            "variable",
            b.variable,
            "Biến",
            VARS.map((v) => [v, v]),
          );
        body += codeInput(
          p,
          "value",
          b.value,
          b.type === "say" ? "Lời nói" : "Giá trị / biểu thức",
        );
      }
      if (b.type === "repeat")
        body +=
          codeSelect(p, "kind", b.kind, "Kiểu lặp", [
            ["count", "Số lần biết trước"],
            ["forever", "Liên tục"],
            ["until", "Đến khi điều kiện đúng"],
          ]) +
          (b.kind === "count"
            ? codeInput(p, "times", b.times, "Số lần")
            : b.kind === "until"
              ? conditionControls(b, p)
              : "") +
          `<div class="code-nest"><small>THÂN LẶP</small>${blockHTML(b.body, p + ".body.") || "<p>Chọn vùng thêm khối rồi thêm lệnh vào thân.</p>"}</div>`;
      if (b.type === "branch")
        body +=
          conditionControls(b, p) +
          codeSelect(p, "hasElse", b.hasElse, "Dạng nhánh", [
            ["true", "Nếu – thì – nếu không"],
            ["false", "Nếu – thì"],
          ]) +
          `<div class="code-nest"><small>THÌ</small>${blockHTML(b.yes, p + ".yes.")}</div>` +
          (b.hasElse
            ? `<div class="code-nest"><small>NẾU KHÔNG</small>${blockHTML(b.no, p + ".no.")}</div>`
            : "");
      return `<div class="code-block ${BLOCKS[b.type][1]}"><b>${BLOCKS[b.type][0]}</b>${body}<div class="block-actions">${button("Lên", "block-up", `data-path="${p}"`)}${button("Xuống", "block-down", `data-path="${p}"`)}${button("Xóa", "block-delete", `data-path="${p}"`)}</div></div>`;
    })
    .join("");
}
function codeLab(w) {
  return `<h2>🧩 Phòng lập trình trực quan</h2><p>Ghép khối và chạy chương trình. Chọn vùng để thêm lệnh vào thân lặp hoặc nhánh. Đây là mô phỏng bổ trợ học Scratch, có tệp JSON riêng.</p><label>Kịch bản / ý tưởng<input id="code-idea" maxlength="350" value="${escapeHTML(w.idea)}" placeholder="Nhân vật nào, làm gì, khi nào?"></label><div class="code-inputs">${[
    ["a", "Cạnh a"],
    ["b", "Cạnh b"],
    ["answer", "Số nhập / câu trả lời"],
  ]
    .map(
      ([k, t]) =>
        `<label>${t}<input data-code-input="${k}" type="number" min="-1000" max="1000" value="${w.inputs[k]}"></label>`,
    )
    .join("")}<label>Nền<select id="code-backdrop">${[
    ["garden", "Khu vườn"],
    ["space", "Vũ trụ"],
    ["sea", "Đại dương"],
  ]
    .map(
      ([v, t]) =>
        `<option value="${v}" ${w.backdrop === v ? "selected" : ""}>${t}</option>`,
    )
    .join("")}</select></label></div><div class="actions">${[
    ["sequence", "Mẫu tuần tự"],
    ["count", "Mẫu lặp 4 lần"],
    ["forever", "Mẫu lặp liên tục"],
    ["until", "Mẫu lặp đến khi"],
    ["branch", "Mẫu rẽ nhánh"],
    ["variable", "Mẫu biến"],
    ["expression", "Mẫu biểu thức"],
  ]
    .map(([v, t]) => button(t, "code-template", `data-template="${v}"`))
    .join(
      "",
    )}</div><div class="block-workspace"><aside class="block-palette"><h3>Khối lệnh</h3><label>Vùng thêm khối<select id="code-target"><option value="root">Cuối chương trình</option>${targetOptions(
    w.blocks,
  )
    .map(
      ([v, t]) =>
        `<option value="${v}" ${w.target === v ? "selected" : ""}>${t}</option>`,
    )
    .join("")}</select></label>${Object.entries(BLOCKS)
    .map(
      ([k, [label, color]]) =>
        `<button class="code-block ${color}" draggable="true" data-action="block-add" data-block="${k}" data-type="${k}">${label}</button>`,
    )
    .join(
      "",
    )}</aside><section id="code-drop" class="block-stack"><h3>Chương trình của em</h3>${blockHTML(w.blocks) || "<p>Thêm cờ xanh rồi chọn các lệnh.</p>"}</section><section class="stage-column"><h3>Sân khấu và biến</h3><svg id="code-stage" viewBox="0 0 360 240" class="code-stage backdrop-${w.backdrop}" role="img" aria-label="Sân khấu chương trình">${codeStage(w)}</svg><div id="code-vars" class="variable-board">${varsHTML(w)}</div><div class="actions">${button("🚩 Chạy", "code-run", 'class="primary"')}${button("■ Dừng", "code-stop")}</div><p id="code-status" role="status">${w.ran ? "Đã có lượt chạy. Em đối chiếu với ý tưởng nhé." : "Sẵn sàng"}</p><p class="hint">Lặp liên tục chạy đến khi bấm Dừng; mô phỏng tự dừng bảo vệ sau 30 giây. Mỗi lượt chạy đặt lại biến và vết bút.</p><details><summary>Nhật kí chạy</summary><ol id="code-log">${w.trace
    .slice(-12)
    .map((t) => `<li>${escapeHTML(t)}</li>`)
    .join(
      "",
    )}</ol></details></section></div><div class="actions">${button("Tải dự án JSON", "code-save", 'class="secondary"')}</div><p class="hint">Biến dùng được: a, b, diem, lan, traloi. Biểu thức dùng số, + - * / và ngoặc. Nút hỏi nhận số từ ô “Số nhập”; kết quả được lưu ở traloi.</p>`;
}
function varsHTML(w) {
  return VARS.map(
    (k) => `<span><b>${k}</b> ${Math.round(w.vars[k] * 100) / 100}</span>`,
  ).join("");
}
function codeStage(w) {
  const s = w.sprite;
  return `<rect width="360" height="240" rx="18" fill="${w.backdrop === "space" ? "#263759" : w.backdrop === "sea" ? "#bdeaff" : "#e1f3e9"}"/><circle cx="313" cy="40" r="23" fill="#ffd76e"/>${w.trail.map((t) => `<path d="M${t[0]} ${t[1]}L${t[2]} ${t[3]}" stroke="#3089bb" stroke-width="3"/>`).join("")}<text x="${s.x}" y="${s.y}" font-size="35" text-anchor="middle">${["🐱", "🦊", "🐰"][s.costume % 3]}</text>${s.speech ? `<rect x="20" y="8" width="265" height="37" rx="13" fill="white"/><text x="152" y="32" text-anchor="middle" font-family="Arial" font-size="14" fill="#264c6f">${escapeHTML(s.speech.slice(0, 32))}</text>` : ""}`;
}
function calculate(expression, vars) {
  const raw = String(expression).toLowerCase().replace(/\s+/g, "");
  if (raw.length > 120 || !raw) throw Error("Biểu thức trống hoặc quá dài.");
  const tokens = raw.match(/\d+(?:\.\d+)?|[a-z]+|[()+*\/-]/g) || [];
  if (tokens.join("") !== raw || tokens.length > 80)
    throw Error("Biểu thức chỉ dùng số, biến được hỗ trợ và + - * / ( ).");
  let pos = 0,
    depth = 0;
  function primary() {
    if (++depth > 25) throw Error("Biểu thức lồng quá nhiều.");
    const t = tokens[pos++];
    let n;
    if (t === "-") n = -primary();
    else if (t === "+") n = primary();
    else if (t === "(") {
      n = sum();
      if (tokens[pos++] !== ")") throw Error("Thiếu dấu ngoặc đóng.");
    } else if (VARS.includes(t)) n = vars[t];
    else if (t !== undefined && /^\d/.test(t)) n = Number(t);
    else throw Error("Biến hoặc giá trị chưa hợp lệ.");
    depth--;
    return n;
  }
  function product() {
    let n = primary();
    while (["*", "/"].includes(tokens[pos])) {
      const op = tokens[pos++],
        b = primary();
      if (op === "/" && b === 0) throw Error("Không chia cho 0.");
      n = op === "*" ? n * b : n / b;
    }
    return n;
  }
  function sum() {
    let n = product();
    while (["+", "-"].includes(tokens[pos])) {
      const op = tokens[pos++],
        b = product();
      n = op === "+" ? n + b : n - b;
    }
    return n;
  }
  const n = sum();
  if (pos !== tokens.length || !Number.isFinite(n) || Math.abs(n) > 1e6)
    throw Error("Kiểm tra lại biểu thức hoặc giá trị quá lớn.");
  return n;
}
function testCondition(b, vars) {
  const a = vars[b.variable],
    v = calculate(b.threshold, vars);
  return (
    {
      ">=": () => a >= v,
      ">": () => a > v,
      "=": () => a === v,
      "<": () => a < v,
      "<=": () => a <= v,
      "!=": () => a !== v,
    }[b.op]?.() || false
  );
}
function loadTemplate(w, name) {
  stopProgram();
  const flag = { type: "flag" },
    move = { type: "move", value: "50" },
    say = { type: "say", value: "Xin chào!" };
  let blocks = [flag, move, { type: "turn", value: "90" }, say];
  if (name === "count") blocks = [flag, { type: "pen" }, newBlock("repeat")];
  if (name === "forever")
    blocks = [
      flag,
      {
        type: "repeat",
        kind: "forever",
        body: [
          { type: "costume" },
          { type: "turn", value: "15" },
          { type: "wait", value: "0.2" },
        ],
      },
    ];
  if (name === "until")
    blocks = [
      flag,
      { type: "set", variable: "lan", value: "0" },
      {
        type: "repeat",
        kind: "until",
        variable: "lan",
        op: ">=",
        threshold: "5",
        body: [
          { type: "change", variable: "lan", value: "1" },
          { type: "costume" },
        ],
      },
    ];
  if (name === "branch")
    blocks = [
      flag,
      { type: "ask" },
      { type: "set", variable: "diem", value: "traloi" },
      newBlock("branch"),
    ];
  if (name === "variable")
    blocks = [
      flag,
      { type: "ask" },
      { type: "set", variable: "diem", value: "traloi" },
      { type: "change", variable: "diem", value: "2" },
      say,
    ];
  if (name === "expression")
    blocks = [
      flag,
      { type: "set", variable: "diem", value: "(a+b)*2" },
      { ...newBlock("branch"), threshold: "10" },
    ];
  w.blocks = blocks;
  w.target = "root";
  w.exported = false;
  w.ran = false;
  w.events.push("template-" + name);
}
function invalidateCode(w) {
  stopProgram();
  w.ran = false;
  w.exported = false;
  w.edited = true;
}
async function runCode(w) {
  stopProgram();
  const token = runToken,
    person = activeStudent()?.id,
    start = Date.now();
  w.ran = false;
  w.trace = [];
  w.vars = {
    a: Number(w.inputs.a) || 0,
    b: Number(w.inputs.b) || 0,
    diem: 0,
    lan: 0,
    traloi: 0,
  };
  w.sprite = { x: 70, y: 140, angle: 0, speech: "", costume: 0 };
  w.trail = [];
  let pen = false,
    steps = 0;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  function check() {
    if (
      token !== runToken ||
      activeStudent()?.id !== person ||
      app.view !== "practice"
    )
      throw Error("STOP");
    if (Date.now() - start > 30000)
      throw Error("Mô phỏng đã tự dừng sau 30 giây.");
  }
  function paint() {
    const stage = document.querySelector("#code-stage");
    if (!stage) throw Error("STOP");
    stage.innerHTML = codeStage(w);
    document.querySelector("#code-vars").innerHTML = varsHTML(w);
    document.querySelector("#code-log").innerHTML = w.trace
      .slice(-12)
      .map((t) => `<li>${escapeHTML(t)}</li>`)
      .join("");
    document.querySelector("#code-status").textContent =
      "Đang chạy · " + steps + " lệnh";
  }
  async function execute(list) {
    for (const b of list) {
      check();
      steps++;
      w.trace.push(BLOCKS[b.type][0]);
      if (w.trace.length > 180) w.trace.shift();
      if (b.type === "flag") continue;
      if (b.type === "ask") w.vars.traloi = Number(w.inputs.answer) || 0;
      if (b.type === "set") w.vars[b.variable] = calculate(b.value, w.vars);
      if (b.type === "change") {
        w.vars[b.variable] += calculate(b.value, w.vars);
        if (Math.abs(w.vars[b.variable]) > 1e6)
          throw Error("Giá trị biến quá lớn.");
      }
      if (b.type === "move") {
        const n = calculate(b.value, w.vars),
          x = w.sprite.x,
          y = w.sprite.y,
          rad = (w.sprite.angle * Math.PI) / 180;
        w.sprite.x = Math.max(15, Math.min(345, x + Math.cos(rad) * n));
        w.sprite.y = Math.max(65, Math.min(225, y + Math.sin(rad) * n));
        if (pen) {
          w.trail.push([x, y, w.sprite.x, w.sprite.y]);
          if (w.trail.length > 300) w.trail.shift();
        }
      }
      if (b.type === "turn") w.sprite.angle += calculate(b.value, w.vars);
      if (b.type === "say") w.sprite.speech = b.value;
      if (b.type === "costume") w.sprite.costume++;
      if (b.type === "pen") pen = true;
      if (b.type === "branch") {
        const yes = testCondition(b, w.vars);
        if (!w.branches.includes(yes)) w.branches.push(yes);
        await execute(yes ? b.yes : b.hasElse ? b.no : []);
      }
      if (b.type === "repeat") {
        let count = 0,
          max =
            b.kind === "count"
              ? Math.max(
                  0,
                  Math.min(12, Math.floor(calculate(b.times, w.vars))),
                )
              : Infinity;
        while (count < max) {
          check();
          if (b.kind === "until" && testCondition(b, w.vars)) break;
          await execute(b.body);
          count++;
          if (count >= 1 && !w.loopKinds.includes(b.kind))
            w.loopKinds.push(b.kind);
          if (!b.body.length) await sleep(120);
        }
      }
      paint();
      if (b.type === "wait")
        await sleep(
          Math.max(80, Math.min(1500, calculate(b.value, w.vars) * 1000)),
        );
      else await sleep(100);
    }
  }
  try {
    if (w.blocks[0]?.type !== "flag")
      throw Error("Đặt khối cờ xanh ở đầu chương trình.");
    await execute(w.blocks);
    check();
    w.ran = true;
    document.querySelector("#code-status").textContent =
      "✓ Chương trình đã chạy xong.";
    audioCue(true);
  } catch (e) {
    if (e.message !== "STOP") {
      notify(e.message);
      const s = document.querySelector("#code-status");
      if (s) s.textContent = e.message;
    }
    if (steps > 2 && token !== runToken) w.ran = true;
  } finally {
    if (activeStudent()?.id === person) {
      if (steps > 2) {
        const signature = JSON.stringify(w.inputs);
        if (!w.runs.includes(signature)) w.runs.push(signature);
        if (
          flattenBlocks(w.blocks).some(
            (b) => b.type === "set" && /[+*/()-]/.test(b.value || ""),
          ) &&
          !w.expressionRuns.includes(signature)
        )
          w.expressionRuns.push(signature);
      }
      persistCourse();
    }
  }
}
function validatePractice(id, w) {
  switch (id) {
    case 1:
      return (
        JOB_ANS.every((v, i) => w.answers[i] === v) &&
        w.answers.safe === "Cân bằng thời gian và kiểm tra thông tin"
      );
    case 2:
      return (
        w.searched &&
        w.opened.includes(0) &&
        w.opened.includes(1) &&
        w.note.trim().length >= 25 &&
        w.events.includes("share")
      );
    case 3:
      return (
        w.opened.includes(2) &&
        w.answers.source === "Giáo viên và hướng dẫn chăm cây phù hợp" &&
        w.note.trim().length >= 30
      );
    case 4: {
      const h = w.files.find(
          (f) => f.name === "Hoc-tap" && f.parent === "root",
        ),
        t = w.files.find((f) => f.name === "Tin-hoc" && f.parent === h?.id);
      return (
        !!h &&
        !!t &&
        w.files.some((f) => f.name === "Toan" && f.parent === h.id) &&
        w.files.some((f) => f.id === "sample" && f.parent === t.id) &&
        w.events.includes("find")
      );
    }
    case 5:
      return (
        ["Phù hợp", "Chưa phù hợp", "Chưa phù hợp", "Phù hợp"].every(
          (v, i) => w.answers[i] === v,
        ) && w.note.trim().length >= 20
      );
    case 6:
      return (
        w.events.includes("bold") &&
        w.events.includes("color") &&
        w.image &&
        w.layout !== "inline" &&
        w.imageWidth !== 160 &&
        w.exported
      );
    case 7:
      return (
        ["open", "copy", "cut", "paste", "undo"].every((x) =>
          w.events.includes(x),
        ) &&
        w.image &&
        w.fileName !== "Mau-thu-moi" &&
        docPlain(w).length > 35 &&
        w.exported
      );
    case 8:
      return (
        w.art.shapes.some((x) => x.type === "rect") &&
        w.art.shapes.some((x) => x.type === "ellipse") &&
        ["move-shape", "copy-shape", "delete-shape"].every((x) =>
          w.events.includes(x),
        ) &&
        w.exported
      );
    case 9:
      return (
        w.art.title.trim().length >= 8 &&
        w.art.shapes.length >= 2 &&
        w.art.bg !== "#eaf8ff" &&
        w.exported
      );
    case 10:
    case 11:
      return (
        w.media.play &&
        w.media.pause &&
        w.media.seek &&
        w.order.join(",") === "0,1,2,3" &&
        w.plan.trim().length >= 40
      );
    case 12:
      return (
        w.ran &&
        w.blocks[0]?.type === "flag" &&
        w.blocks.length >= 4 &&
        w.events.includes("reorder") &&
        w.runs.length >= 1
      );
    case 13:
      return ["count", "forever", "until"].every((k) =>
        w.loopKinds.includes(k),
      );
    case 14:
      return (
        ["count", "forever", "until"].every((k) => w.loopKinds.includes(k)) &&
        w.exported
      );
    case 15:
      return w.ran && w.branches.includes(true) && w.branches.includes(false);
    case 16:
      return (
        w.ran &&
        ["ask", "set", "change"].every((t) =>
          flattenBlocks(w.blocks).some((b) => b.type === t),
        ) &&
        w.runs.length >= 2 &&
        w.exported
      );
    case 17:
      return (
        w.ran &&
        w.expressionRuns.length >= 2 &&
        flattenBlocks(w.blocks).some((b) => b.type === "branch") &&
        w.exported
      );
    case 18:
      return (
        w.idea.trim().length >= 20 &&
        w.ran &&
        flattenBlocks(w.blocks).length >= 5 &&
        flattenBlocks(w.blocks).some((b) =>
          ["branch", "repeat"].includes(b.type),
        ) &&
        w.edited &&
        w.exported
      );
    default:
      return false;
  }
}
async function handlePractice(action, b) {
  if (!activeStudent() || app.view !== "practice") return;
  const w = currentWork(),
    i = Number(b.dataset.index);
  try {
    if (action === "lab-check") {
      const ok = Boolean(validatePractice(LESSON_ID, w));
      w.feedback = ok
        ? [10, 11].includes(LESSON_ID)
          ? "✓ Đã hoàn thành chuẩn bị trên web. Thầy cô tiếp tục quan sát sản phẩm thật."
          : "✓ Đã hoàn thành hoạt động. Tiếp tục thử thách nhé!"
        : "Chưa đủ yêu cầu. Em xem nhiệm vụ và kiểm tra từng bước nhé.";
      if (ok) lessonRecord().practice = true;
      audioCue(ok);
    } else if (action === "lab-reset") {
      stopProgram();
      lessonRecord().work = freshWork();
    } else if (action === "search-run") {
      const q = normalizeText(w.query).trim();
      w.searched = true;
      w.results =
        q.length < 2
          ? []
          : LIB_PAGES.map((p, i) => ({
              i,
              n: q
                .split(/\s+/)
                .filter(
                  (t) =>
                    t.length > 1 &&
                    normalizeText(p.title + " " + p.text).includes(t),
                ).length,
            }))
              .filter((x) => x.n)
              .sort((a, b) => b.n - a.n)
              .map((x) => x.i);
    } else if (action === "search-open") {
      w.page = i;
      if (!w.opened.includes(i)) w.opened.push(i);
    } else if (action === "share-note") {
      if (w.note.trim().length < 20)
        throw Error("Ghi điều em tìm được trước khi tải thẻ.");
      saveDownload(
        new Blob(
          [
            w.note +
              "\nNguồn: Website thư viện mô phỏng trong Vui học Tin học 5.",
          ],
          { type: "text/plain;charset=utf-8" },
        ),
        "The-chia-se-thong-tin.txt",
      );
      w.events.push("share");
    } else if (action.startsWith("folder-")) folderOp(w, action, b);
    else if (action.startsWith("doc-")) {
      const redraw = richOp(w, action);
      if (!redraw) return;
    } else if (action === "art-png" || action === "art-svg") {
      await exportArt(w, action === "art-png");
      return;
    } else if (action.startsWith("art-")) artOp(w, action);
    else if (action.startsWith("video-")) {
      const video = document.querySelector("#craft-video");
      if (action === "video-play")
        video.play().catch(() => notify("Bấm Phát trên video để bắt đầu nhé."));
      if (action === "video-pause") video.pause();
      if (action === "video-back")
        video.currentTime = Math.max(0, video.currentTime - 5);
      if (action === "video-next")
        video.currentTime = Math.min(
          Math.max(0, video.duration - 0.1),
          video.currentTime + 5,
        );
      if (action === "video-replay") video.currentTime = 0;
      return;
    } else if (action === "craft-step") {
      if (!w.order.includes(i)) w.order.push(i);
    } else if (action === "craft-order-reset") w.order = [];
    else if (action === "craft-save") {
      saveDownload(
        new Blob([w.plan], { type: "text/plain;charset=utf-8" }),
        "Ke-hoach-thu-cong.txt",
      );
    } else if (action === "code-template") loadTemplate(w, b.dataset.template);
    else if (action === "block-add") {
      const type = b.dataset.type;
      if (!BLOCKS[type]) return;
      if (flattenBlocks(w.blocks).length >= 50)
        throw Error("Tối đa 50 khối trong hoạt động này.");
      invalidateCode(w);
      blockArray(w, w.target).push(newBlock(type));
    } else if (["block-delete", "block-up", "block-down"].includes(action)) {
      const path = b.dataset.path,
        parts = path.split("."),
        index = Number(parts.pop()),
        arr = blockArray(w, parts.length ? parts.join(".") : "root");
      invalidateCode(w);
      if (action === "block-delete") arr.splice(index, 1);
      else {
        const to = index + (action === "block-up" ? -1 : 1);
        if (to >= 0 && to < arr.length) {
          [arr[index], arr[to]] = [arr[to], arr[index]];
          w.events.push("reorder");
        }
      }
      w.target = "root";
    } else if (action === "code-run") {
      runCode(w);
      return;
    } else if (action === "code-stop") {
      stopProgram();
      w.ran = w.trace.length > 2;
      document.querySelector("#code-status").textContent =
        "Đã dừng. Em có thể chỉnh và chạy lại.";
      persistCourse();
      return;
    } else if (action === "code-save") {
      saveDownload(
        new Blob(
          [
            JSON.stringify(
              {
                app: "tin-hoc-5-khoi-lenh",
                version: 1,
                idea: w.idea,
                backdrop: w.backdrop,
                inputs: w.inputs,
                blocks: w.blocks,
              },
              null,
              2,
            ),
          ],
          { type: "application/json" },
        ),
        "Du-an-Tin-hoc-5-Bai-" + lesson.number + ".json",
      );
      w.exported = true;
    } else if (action.startsWith("maze-")) {
      const [dx, dy] = {
        left: [-1, 0],
        right: [1, 0],
        up: [0, -1],
        down: [0, 1],
      }[action.slice(5)];
      const x = w.maze.x + dx,
        y = w.maze.y + dy;
      if (
        x >= 0 &&
        x < 5 &&
        y >= 0 &&
        y < 5 &&
        !MAZE_WALLS.includes(y * 5 + x)
      ) {
        w.maze.x = x;
        w.maze.y = y;
        w.maze.done = x === 4 && y === 4;
      }
    } else return;
    persistCourse();
    render();
  } catch (error) {
    notify(error.message);
  }
}
function practiceInput(t) {
  const w = currentWork();
  if (["search-query", "folder-search"].includes(t.id)) w.query = t.value;
  if (["search-note", "source-note"].includes(t.id)) w.note = t.value;
  if (t.id === "folder-name") w.newName = t.value;
  if (t.id === "rich-doc") {
    saveRich(w);
    return;
  }
  if (t.id === "doc-name") {
    w.fileName = t.value;
    w.exported = false;
  }
  if (t.id === "doc-width") {
    w.imageWidth = Number(t.value);
    w.exported = false;
    document.querySelector("#doc-preview").innerHTML = docPreview(w);
  }
  if (t.id === "art-title") {
    w.art.title = t.value;
    w.exported = false;
    document.querySelector("#art-board").innerHTML = artInner(w, true);
  }
  if (t.id === "craft-plan") w.plan = t.value;
  if (t.id === "code-idea") {
    w.idea = t.value;
    w.exported = false;
  }
  if (t.dataset.codeInput) {
    w.inputs[t.dataset.codeInput] = Math.max(
      -1000,
      Math.min(1000, Number(t.value) || 0),
    );
    w.exported = false;
    stopProgram();
    w.ran = false;
  }
  if (t.dataset.codePath) {
    const bl = blockAt(w, t.dataset.codePath);
    if (["value", "times", "threshold"].includes(t.dataset.codeKey)) {
      bl[t.dataset.codeKey] = t.value;
      invalidateCode(w);
    }
  }
  if (t.dataset.artProp) {
    const s = w.art.shapes.find((x) => x.id === w.art.selected);
    if (s) {
      s[t.dataset.artProp] = Math.max(0, Math.min(520, Number(t.value) || 0));
      w.events.push("move-shape");
      w.exported = false;
      document.querySelector("#art-board").innerHTML = artInner(w, true);
    }
  }
  persistCourse();
}
async function practiceChange(t) {
  const w = currentWork();
  if (t.dataset.answer) w.answers[t.dataset.answer] = t.value;
  if (t.id === "doc-image") {
    w.image = Number(t.value);
    w.exported = false;
  }
  if (t.id === "doc-layout") {
    w.layout = t.value;
    w.exported = false;
  }
  if (t.id === "art-color") {
    w.art.color = t.value;
    const s = w.art.shapes.find((x) => x.id === w.art.selected);
    if (s) s.color = t.value;
    w.exported = false;
  }
  if (t.id === "art-bg") {
    w.art.bg = t.value;
    w.exported = false;
  }
  if (t.id === "art-selected") {
    w.art.selected = t.value;
    w.art.tool = "select";
  }
  if (t.id === "code-backdrop") {
    w.backdrop = t.value;
    invalidateCode(w);
  }
  if (t.id === "code-target") w.target = t.value;
  if (t.dataset.codePath) {
    const b = blockAt(w, t.dataset.codePath),
      k = t.dataset.codeKey;
    if (["kind", "variable", "op", "hasElse"].includes(k)) {
      b[k] = k === "hasElse" ? t.value === "true" : t.value;
      invalidateCode(w);
    }
  }
  persistCourse();
  render();
}
function boardPoint(e, svg) {
  const r = svg.getBoundingClientRect();
  return [
    Math.max(0, Math.min(640, ((e.clientX - r.left) / r.width) * 640)),
    Math.max(0, Math.min(400, ((e.clientY - r.top) / r.height) * 400)),
  ];
}
function bindPracticeEvents() {
  const root = document.querySelector("#course-app");
  document.addEventListener("selectionchange", () => {
    const editor = document.querySelector("#rich-doc"),
      s = window.getSelection?.();
    if (
      editor &&
      s?.rangeCount &&
      editor.contains(s.getRangeAt(0).commonAncestorContainer)
    )
      richSelection = s.getRangeAt(0).cloneRange();
  });
  root.addEventListener("pointerdown", (e) => {
    const btn = e.target.closest('[data-action^="doc-"]');
    if (btn && btn.dataset.action !== "doc-open") e.preventDefault();
    const board = e.target.closest("#art-board");
    if (!board || !activeStudent()) return;
    const w = currentWork(),
      [x, y] = boardPoint(e, board);
    artSnap(w);
    if (w.art.tool === "pen") {
      const shape = {
        id: makeId(),
        type: "path",
        points: [[x, y]],
        color: w.art.color,
      };
      w.art.shapes.push(shape);
      w.art.selected = shape.id;
      dragItem = { id: shape.id, pen: true };
    } else {
      const item = e.target.closest("[data-shape-id]");
      if (!item) return;
      const s = w.art.shapes.find((v) => v.id === item.dataset.shapeId);
      if (!s || s.type === "path") return;
      w.art.selected = s.id;
      dragItem = { id: s.id, dx: x - s.x, dy: y - s.y };
    }
    board.setPointerCapture?.(e.pointerId);
    e.preventDefault();
  });
  root.addEventListener("pointermove", (e) => {
    const board = e.target.closest("#art-board");
    if (!board || !dragItem) return;
    const w = currentWork(),
      s = w.art.shapes.find((v) => v.id === dragItem.id);
    if (!s) return;
    const [x, y] = boardPoint(e, board);
    if (dragItem.pen) {
      if (s.points.length < 600) s.points.push([x, y]);
    } else {
      s.x = Math.max(0, Math.min(640 - s.width, x - dragItem.dx));
      s.y = Math.max(80, Math.min(400 - s.height, y - dragItem.dy));
    }
    dragItem.moved = true;
    w.exported = false;
    board.innerHTML = artInner(w, true);
  });
  root.addEventListener("pointerup", () => {
    if (dragItem && activeStudent()) {
      if (dragItem.moved) currentWork().events.push("move-shape");
      dragItem = null;
      persistCourse();
      render();
    }
  });
  root.addEventListener("pointercancel", () => {
    dragItem = null;
  });
  root.addEventListener("dragstart", (e) => {
    const b = e.target.closest("[data-block]");
    if (b) e.dataTransfer.setData("text/plain", b.dataset.block);
  });
  root.addEventListener("dragover", (e) => {
    if (e.target.closest("#code-drop")) e.preventDefault();
  });
  root.addEventListener("drop", (e) => {
    if (!activeStudent() || !e.target.closest("#code-drop")) return;
    e.preventDefault();
    handlePractice("block-add", {
      dataset: { type: e.dataTransfer.getData("text/plain") },
    });
  });
  root.addEventListener("paste", (e) => {
    if (e.target.id === "rich-doc") {
      e.preventDefault();
      const text = e.clipboardData.getData("text/plain").slice(0, 5000),
        s = window.getSelection();
      if (s?.rangeCount) {
        const r = s.getRangeAt(0);
        r.deleteContents();
        const n = document.createTextNode(text);
        r.insertNode(n);
        r.setStartAfter(n);
        r.collapse(true);
        saveRich(currentWork());
      }
    }
  });
  for (const [event, key] of [
    ["play", "play"],
    ["pause", "pause"],
    ["seeking", "seek"],
  ])
    root.addEventListener(
      event,
      (e) => {
        if (e.target.id === "craft-video" && activeStudent()) {
          const w = currentWork();
          w.media[key] = true;
          const status = document.querySelector("#media-status");
          if (status) status.textContent = mediaStatus(w);
          persistCourse();
        }
      },
      true,
    );
  root.addEventListener("keydown", (e) => {
    if (
      e.target.id === "maze" &&
      ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
    ) {
      e.preventDefault();
      handlePractice("maze-" + e.key.slice(5).toLowerCase(), { dataset: {} });
      document.querySelector("#maze")?.focus();
    }
  });
  window.addEventListener("pagehide", stopProgram);
}
