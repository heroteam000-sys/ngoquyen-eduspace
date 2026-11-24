function courseMascotSVG() {
  return `<svg viewBox="0 0 210 220" aria-hidden="true"><defs><linearGradient id="mit-body" x2="0" y2="1"><stop stop-color="#d1f6dd"/><stop offset="1" stop-color="#95d6ba"/></linearGradient></defs><path d="M105 34V15" stroke="#74b79b" stroke-width="8" stroke-linecap="round"/><circle cx="105" cy="12" r="9" fill="#ffc26b"/><rect x="28" y="35" width="154" height="106" rx="29" fill="url(#mit-body)" stroke="#71b59b" stroke-width="7"/><rect x="40" y="47" width="130" height="82" rx="22" fill="#edfff1"/><ellipse cx="78" cy="80" rx="6" ry="10" fill="#436b58"/><ellipse cx="132" cy="80" rx="6" ry="10" fill="#436b58"/><ellipse cx="61" cy="103" rx="12" ry="5" fill="#f3b8bc"/><ellipse cx="149" cy="103" rx="12" ry="5" fill="#f3b8bc"/><path d="M94 102q11 11 22 0" fill="none" stroke="#436b58" stroke-width="4" stroke-linecap="round"/><rect x="54" y="153" width="102" height="49" rx="19" fill="#c2ebcd" stroke="#71b59b" stroke-width="6"/><path d="M105 168c-10-12-20 3 0 16 20-13 10-28 0-16Z" fill="#ffda7e"/><path d="m35 158-12 30m151-30 13 30M71 211h17m35 0h17" stroke="#79b59b" stroke-width="10" stroke-linecap="round"/></svg>`;
}
function worldScenery() {
  return `<svg class="tech-world" viewBox="0 0 600 520" aria-hidden="true"><defs><radialGradient id="techGlow"><stop stop-color="#36d8ed" stop-opacity=".4"/><stop offset="1" stop-color="#36d8ed" stop-opacity="0"/></radialGradient></defs><circle cx="300" cy="255" r="250" fill="url(#techGlow)"/><g fill="none" stroke="#6ac9e5" stroke-width="1.6" opacity=".45"><ellipse cx="300" cy="260" rx="260" ry="170" transform="rotate(-25 300 260)"/><ellipse cx="300" cy="260" rx="240" ry="180" transform="rotate(45 300 260)"/><path d="M20 120h110v65h80m380 175h-100v-54h-75M50 410h93v-65m375-260h-98v68"/></g><g fill="#85e6ec"><circle cx="130" cy="120" r="5"/><circle cx="490" cy="360" r="5"/><circle cx="420" cy="85" r="5"/></g><g fill="#ffdc73"><path d="m515 95 5 14 15 5-15 5-5 14-5-14-15-5 15-5Z"/><circle cx="55" cy="310" r="6"/><circle cx="492" cy="440" r="4"/></g><rect x="48" y="184" width="64" height="64" rx="17" fill="#ffffff18" stroke="#77d4e0"/><path d="m66 211 11 11 20-23" fill="none" stroke="#8cf1ce" stroke-width="6" stroke-linecap="round"/><rect x="450" y="298" width="75" height="66" rx="16" fill="#ffffff14" stroke="#77d4e0"/><path d="m469 322 11-8m-11 8 11 8m26-16 11 8-11 8" fill="none" stroke="#8cf1ce" stroke-width="4"/></svg>`;
}
function lessonIllustration(id) {
  const colors = [
    "#208bb9",
    "#776ac8",
    "#27a69d",
    "#d8992f",
    "#b972ac",
    "#3d86c4",
  ];
  const c = colors[(id - 1) % 6],
    bg = ["#dff3fc", "#ece8fc", "#dff6ef", "#fff1d6", "#fbe6f4", "#e3efff"][
      (id - 1) % 6
    ];
  const rect = (x, y, w, h, fill, r = 10) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
  const line = (x, y, a, b, co = c, width = 4) =>
    `<path d="M${x} ${y}L${a} ${b}" stroke="${co}" stroke-width="${width}" stroke-linecap="round" fill="none"/>`;
  const computer =
    rect(59, 39, 187, 124, c, 15) +
    rect(69, 49, 167, 102, "#fff", 8) +
    line(153, 166, 153, 188, c, 7) +
    rect(115, 187, 79, 8, c, 4);
  let s =
    computer +
    rect(86, 67, 45, 29, "#c4e8de", 6) +
    rect(145, 67, 72, 11, "#a9d7ed", 5) +
    rect(145, 85, 54, 9, "#ffd97e", 4) +
    rect(86, 112, 131, 19, bg, 5);
  if ([2, 3].includes(id))
    s =
      computer +
      `<circle cx="147" cy="94" r="29" fill="${bg}" stroke="${c}" stroke-width="5"/><path d="m169 116 24 22" stroke="${c}" stroke-width="9" stroke-linecap="round"/>` +
      line(91, 65, 111, 65, c, 5) +
      line(91, 79, 108, 79, c, 3);
  if (id === 4)
    s = `<path d="M109 51v-17h44l13 16h57q8 0 8 8v48H109Z" fill="#ffd16e"/>${line(167, 109, 167, 135, c, 3)}${line(53, 135, 273, 135, c, 3)}${[53, 164, 273].map((x, i) => line(x, 135, x, 153, c, 3) + rect(x - 36, 153, 72, 44, ["#aad6eb", "#b7dccc", "#d2c4f0"][i], 8)).join("")}`;
  if (id === 5)
    s = `<path d="M154 25q38 27 91 29v57q-9 57-91 83-80-26-89-83V54q49-2 89-29" fill="white" stroke="${c}" stroke-width="4"/><circle cx="154" cy="103" r="40" fill="${bg}"/><text x="154" y="124" text-anchor="middle" font-family="Arial" font-size="58" fill="${c}">©</text>`;
  if ([6, 7].includes(id))
    s =
      rect(72, 22, 151, 176, "#fff", 12) +
      line(91, 53, 202, 53, c, 8) +
      line(91, 77, 151, 77, c, 4) +
      line(91, 94, 151, 94, c, 4) +
      rect(165, 73, 40, 57, "#ffda80", 6) +
      `<path d="m170 121 13-25 17 25Z" fill="#7cbca0"/>` +
      line(91, 144, 202, 144, c, 4) +
      line(91, 161, 190, 161, c, 4) +
      line(91, 179, 174, 179, c, 4);
  if ([8, 9].includes(id))
    s =
      rect(36, 35, 230, 150, "#fff", 15) +
      rect(48, 48, 205, 124, bg, 7) +
      `<circle cx="90" cy="94" r="24" fill="#ffc75d"/><path d="m65 150 56-59 39 41 29-30 45 48Z" fill="#8bc9b3"/>` +
      rect(167, 70, 63, 13, c, 5) +
      line(165, 91, 220, 91, c, 5) +
      `<path d="m226 174 36-61 15 9-37 61-22 13Z" fill="#f4ba68" stroke="#cc9046" stroke-width="3"/>`;
  if (id === 10)
    s =
      `<path d="m154 29 81 80-81 80-81-80Z" fill="#95cbd7"/><path d="m73 109 81 80 81-80Z" fill="#c6e8ed"/><path d="m108 142 46-49 46 49" fill="#88b8ce"/><path d="m111 143 43 43 43-43Z" fill="#e7f5f3"/>` +
      line(154, 29, 154, 188, "#7aaabb", 2);
  if (id === 11)
    s = `<path d="m89 91 98-17 49 28-95 27Z" fill="#fff0b5"/><path d="M89 91v91l52 28v-81Z" fill="#d5aa7d"/><path d="m141 129 95-27v89l-95 19Z" fill="#a6d8cf"/>${[128, 159, 188].map((x, i) => `<path d="m${x} ${103 - i * 4} -7-64 11-3 8 63Z" fill="${["#9c91d5", "#e99db9", "#86bccc"][i]}"/>`).join("")}<path d="m141 129 95-27v89l-95 19Z" fill="#9ccdc4"/>`;
  if (id >= 12) {
    const count = id === 13 || id === 14 ? 4 : 3;
    s = [...Array(count)]
      .map(
        (_, i) =>
          `<path d="M54 ${32 + i * 38}h23v6h21v-6h144v32H98v6H77v-6H54Z" fill="${["#ffc45b", "#4f91d7", "#a17bd2", "#e3a15e"][i]}"/>` +
          line(119, 48 + i * 38, 208, 48 + i * 38, "#fff", 5),
      )
      .join("");
    if ([13, 14].includes(id))
      s += `<path d="M261 56q51 63 0 117m0 0 3-20m-3 20 20-4" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`;
    if (id === 15) s += `<path d="m263 78 27 27-27 27-27-27Z" fill="#8fd9ca"/>`;
    if ([16, 17].includes(id))
      s +=
        rect(226, 135, 65, 35, "#ffc373", 9) +
        `<text x="257" y="159" text-anchor="middle" font-size="22" font-family="Arial" fill="#6b4a22">${id === 16 ? "x = 5" : "a+b"}</text>`;
    if (id === 18)
      s += `<path d="m266 44 24 27-11 53-27-20Z" fill="#8cd9cf"/><circle cx="271" cy="75" r="10" fill="white"/><path d="m257 126 7 22 14-17" fill="#ffc46c"/>`;
  }
  return `<svg class="lesson-art-svg" viewBox="0 0 310 220" role="img" aria-label="Minh họa ${escapeArtTitle(id)}"><ellipse cx="155" cy="112" rx="147" ry="100" fill="${bg}"/><circle cx="280" cy="34" r="5" fill="#edb652"/><path d="m28 33 3 8 9 3-9 3-3 9-3-9-8-3 8-3Z" fill="${c}" opacity=".5"/>${s}<circle cx="24" cy="179" r="5" fill="#89caba"/></svg>`;
}
function escapeArtTitle(id) {
  return (
    [
      "Máy tính giúp em",
      "Tìm trong website",
      "Thông tin giải quyết vấn đề",
      "Cây thư mục",
      "Tôn trọng tác giả",
      "Định dạng và bố trí ảnh",
      "Soạn thảo",
      "Công cụ đồ họa",
      "Thiệp số",
      "Gấp giấy theo video",
      "Hộp đựng bút",
      "Tuần tự",
      "Cấu trúc lặp",
      "Thực hành lặp",
      "Rẽ nhánh",
      "Biến",
      "Biểu thức",
      "Từ kịch bản đến chương trình",
    ][id - 1] || "Tin học 5"
  );
}
