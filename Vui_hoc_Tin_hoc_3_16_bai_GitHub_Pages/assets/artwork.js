// Original vector scenery: stays sharp on all screens and works offline.
function worldScenery() {
  return `<svg class="worldScenery" viewBox="0 0 640 540" aria-hidden="true" focusable="false"><defs><linearGradient id="worldSky" x2="0" y2="1"><stop stop-color="#caf7ff"/><stop offset="1" stop-color="#f0e8ff"/></linearGradient><linearGradient id="worldHill"><stop stop-color="#5bccaa"/><stop offset="1" stop-color="#a5e8c3"/></linearGradient></defs><path fill="url(#worldSky)" d="M60 240C25 90 160 20 290 48c130-77 280 15 286 150 80 125-22 270-148 282H176C72 468 25 355 60 240Z"/><circle cx="495" cy="111" r="42" fill="#ffe389"/><g fill="#fff" opacity=".94"><path d="M80 142c-12-30 31-51 52-29 28-20 65 9 43 32Z"/><path d="M400 220c-13-25 22-46 42-28 31-13 54 14 40 30Z"/></g><path d="M38 430Q177 340 305 427q155-90 310 8v64H38Z" fill="url(#worldHill)"/><path d="M240 499q22-58 91-80l43 14q-47 18-53 66Z" fill="#ffebb0"/><g transform="translate(53 290)"><path d="m0 34 63-43 62 43Z" fill="#9871d7"/><rect x="10" y="33" width="107" height="95" rx="9" fill="#fff7df"/><rect x="53" y="77" width="24" height="51" rx="8" fill="#94d6db"/><g fill="#ffc764"><rect x="25" y="51" width="18" height="24" rx="4"/><rect x="86" y="51" width="18" height="24" rx="4"/></g><circle cx="63" cy="28" r="10" fill="#fff"/><path d="M63 21v8l5 3" fill="none" stroke="#8060a9" stroke-width="3"/></g><g transform="translate(500 305)"><path d="M21 118V49" stroke="#95815f" stroke-width="11" stroke-linecap="round"/><path d="M21 66C-47 56-14-15 22 4c50-32 84 58 27 66Z" fill="#50bd9d"/><circle cx="5" cy="30" r="6" fill="#ffe496"/><circle cx="43" cy="44" r="6" fill="#ffe496"/></g><g fill="#fff0b5"><path d="m220 90 5 14 15 1-12 10 4 14-12-8-12 8 4-14-12-10 15-1Z"/><circle cx="590" cy="280" r="7"/><circle cx="58" cy="260" r="5"/></g><g stroke="#40a785" stroke-width="4"><path d="M112 484v-25m14 20v-14m334 20v-32"/></g><g fill="#ffb8cb"><circle cx="112" cy="455" r="10"/><circle cx="460" cy="450" r="12"/></g><g fill="#b596f0"><circle cx="126" cy="462" r="8"/><circle cx="420" cy="477" r="8"/></g></svg>`;
}
function courseMascotSVG() {
  return `<svg viewBox="0 0 210 220" aria-hidden="true"><defs><linearGradient id="mit-body" x2="0" y2="1"><stop stop-color="#d1f6dd"/><stop offset="1" stop-color="#95d6ba"/></linearGradient></defs><path d="M105 34V15" stroke="#74b79b" stroke-width="8" stroke-linecap="round"/><circle cx="105" cy="12" r="9" fill="#ffc26b"/><rect x="28" y="35" width="154" height="106" rx="29" fill="url(#mit-body)" stroke="#71b59b" stroke-width="7"/><rect x="40" y="47" width="130" height="82" rx="22" fill="#edfff1"/><ellipse cx="78" cy="80" rx="6" ry="10" fill="#436b58"/><ellipse cx="132" cy="80" rx="6" ry="10" fill="#436b58"/><ellipse cx="61" cy="103" rx="12" ry="5" fill="#f3b8bc"/><ellipse cx="149" cy="103" rx="12" ry="5" fill="#f3b8bc"/><path d="M94 102q11 11 22 0" fill="none" stroke="#436b58" stroke-width="4" stroke-linecap="round"/><rect x="54" y="153" width="102" height="49" rx="19" fill="#c2ebcd" stroke="#71b59b" stroke-width="6"/><path d="M105 168c-10-12-20 3 0 16 20-13 10-28 0-16Z" fill="#ffda7e"/><path d="m35 158-12 30m151-30 13 30M71 211h17m35 0h17" stroke="#79b59b" stroke-width="10" stroke-linecap="round"/></svg>`;
}

// Original illustrations for the 16 Grade 3 lessons, independent of textbook artwork.
function gradeThreeArt(id) {
  const colors = [
    "#e87538",
    "#358aa7",
    "#50a187",
    "#a06bbd",
    "#c48125",
    "#5278bf",
  ];
  const c = colors[(id - 1) % 6];
  const box = (x, y, w, h, fill = "#fff", r = 12) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
  const line = (x, y, a, b, col = c, width = 5) =>
    `<path d="M${x} ${y}L${a} ${b}" stroke="${col}" stroke-width="${width}" stroke-linecap="round" fill="none"/>`;
  const star = (x, y, s = 1) =>
    `<path d="m${x} ${y} ${4 * s} ${11 * s} ${11 * s} ${4 * s}-${11 * s} ${4 * s}-${4 * s} ${11 * s}-${4 * s}-${11 * s}-${11 * s}-${4 * s} ${11 * s}-${4 * s}Z" fill="#ffc85f"/>`;
  const monitor =
    box(83, 47, 184, 122, c, 16) +
    box(93, 57, 164, 100, "#fff", 9) +
    box(146, 170, 57, 10, c, 4) +
    line(175, 169, 175, 189, c, 8) +
    box(132, 189, 86, 9, c, 4);
  const folder = (x, y, fill = "#ffd76e") =>
    `<path d="M${x} ${y + 12}v-17q0-7 7-7h36l12 13h49q9 0 9 9v62H${x}Z" fill="${fill}"/><path d="M${x - 7} ${y + 18}h127l-14 59H${x - 13}Z" fill="#ffe8a3"/>`;
  const letter = (x, y, ch, col = c) =>
    box(x, y, 36, 32, "#fff", 7) +
    `<text x="${x + 18}" y="${y + 23}" text-anchor="middle" fill="${col}" font-family="Arial" font-size="19" font-weight="bold">${ch}</text>`;
  let scene = "";
  if (id === 1)
    scene =
      box(75, 36, 57, 138, "#4c6273", 18) +
      [0, 1, 2]
        .map(
          (n) =>
            `<circle cx="103" cy="${62 + n * 41}" r="15" fill="${["#f77e78", "#ffd76e", "#78cda5"][n]}"/>`,
        )
        .join("") +
      line(103, 174, 103, 201, "#4c6273", 9) +
      `<path d="M193 105a55 55 0 0 1 110 0q-14-17-27 0-14-17-28 0-14-17-28 0-14-17-27 0" fill="#f3ac67"/><path d="M248 100v62q0 24-23 17" fill="none" stroke="#b88358" stroke-width="6" stroke-linecap="round"/><g fill="#75b9d6"><ellipse cx="192" cy="42" rx="4" ry="8"/><ellipse cx="221" cy="31" rx="4" ry="8"/><ellipse cx="283" cy="34" rx="4" ry="8"/></g>`;
  if (id === 2)
    scene =
      monitor +
      `<circle cx="175" cy="105" r="32" fill="#e0f5ef"/><path d="M157 105q-9-14 6-19 3-14 17-7 18-5 22 11 13 8 0 20 0 15-15 13-16 8-20-8-14 1-10-10" fill="${c}"/>` +
      box(28, 92, 40, 50, "#ffd76e", 9) +
      line(39, 106, 58, 106, "white", 4) +
      line(39, 118, 54, 118, "white", 4) +
      box(285, 89, 47, 48, "#9fd2bc", 10) +
      `<path d="m296 114 9 8 16-20" stroke="white" stroke-width="5" fill="none"/>`;
  if (id === 3)
    scene =
      monitor +
      box(104, 71, 142, 64, "#d8f2f7", 5) +
      `<path d="m116 125 29-34 22 20 19-14 38 28Z" fill="#80c9ad"/><circle cx="215" cy="84" r="9" fill="#ffd36c"/>` +
      box(51, 191, 191, 27, "#c9dce9", 8) +
      Array.from({ length: 12 }, (_, i) =>
        box(61 + (i % 6) * 29, 197 + Math.floor(i / 6) * 9, 21, 5, "#fff", 2),
      ).join("") +
      box(279, 167, 33, 47, "#fff", 16) +
      line(295, 174, 295, 185, c, 3);
  if (id === 4)
    scene =
      box(166, 54, 120, 77, c, 10) +
      box(176, 64, 100, 55, "#dff1fa", 5) +
      line(224, 131, 224, 153, c, 7) +
      box(143, 150, 169, 12, "#c68c64", 4) +
      line(158, 163, 158, 212, "#aa7959", 7) +
      line(296, 163, 296, 212, "#aa7959", 7) +
      `<circle cx="93" cy="76" r="23" fill="#f4cba2"/><path d="M70 73q-5-38 31-23 19 5 13 25l-14-15-30 13" fill="#566476"/><path d="M77 103q26-13 40 9l16 48H70Z" fill="#7dbfc6"/><path d="m112 120 38 23h31" stroke="#f4cba2" stroke-width="12" stroke-linecap="round" fill="none"/><path d="M78 161h44l-2 43h28" stroke="#617db0" stroke-width="16" stroke-linejoin="round" fill="none"/>` +
      line(59, 128, 59, 183, "#b1906f", 8) +
      line(58, 183, 123, 183, "#b1906f", 8) +
      line(67, 184, 67, 214, "#b1906f", 6);
  if (id === 5)
    scene =
      box(33, 58, 291, 132, c, 18) +
      Array.from({ length: 20 }, (_, i) =>
        letter(
          45 + (i % 7) * 39,
          70 + Math.floor(i / 7) * 37,
          [
            "Q",
            "W",
            "E",
            "R",
            "T",
            "Y",
            "U",
            "A",
            "S",
            "D",
            "F",
            "G",
            "H",
            "J",
            "Z",
            "X",
            "C",
            "V",
            "B",
            "N",
          ][i],
          i === 10 || i === 13 ? "#e26535" : c,
        ),
      ).join("") +
      box(121, 185, 110, 12, "#ffd775", 5) +
      line(170, 134, 182, 134, "#e26535", 3) +
      line(287, 134, 299, 134, "#e26535", 3);
  if (id === 6)
    scene =
      monitor +
      `<circle cx="175" cy="104" r="38" fill="#deefff" stroke="${c}" stroke-width="3"/><ellipse cx="175" cy="104" rx="15" ry="38" fill="none" stroke="${c}" stroke-width="3"/>${[85, 104, 123].map((y) => line(143, y, 207, y, c, 2)).join("")}` +
      `<path d="m290 40 8 15 19-10 5 14-29 9-13-22Z" fill="#ffd471"/>` +
      box(32, 143, 33, 36, "#a4d7c2", 8);
  if (id === 7)
    scene =
      box(55, 70, 247, 12, "#c9996c", 4) +
      box(55, 139, 247, 12, "#c9996c", 4) +
      box(55, 206, 247, 12, "#c9996c", 4) +
      Array.from({ length: 15 }, (_, i) => {
        const x = 68 + (i % 5) * 43,
          y = 26 + Math.floor(i / 5) * 67,
          col = ["#85bace", "#e5a176", "#b0a2d4", "#80bf9d", "#f4d16e"][i % 5];
        return (
          box(x, y, 31, 43, col, 4) +
          line(x + 7, y + 11, x + 24, y + 11, "#ffffffb0", 3)
        );
      }).join("");
  if (id === 8)
    scene =
      folder(124, 39) +
      line(179, 116, 179, 142, c, 4) +
      line(71, 142, 290, 142, c, 4) +
      line(71, 142, 71, 158, c, 4) +
      line(290, 142, 290, 158, c, 4) +
      box(31, 157, 79, 45, "#b7dfe7", 10) +
      box(140, 157, 79, 45, "#d9c9ef", 10) +
      box(249, 157, 79, 45, "#bce3c5", 10) +
      line(178, 142, 178, 158, c, 4);
  if (id === 9)
    scene =
      folder(48, 81) +
      folder(217, 115, "#b8dfe9") +
      box(155, 33, 58, 79, "#fff", 8) +
      line(167, 52, 201, 52, c, 4) +
      line(167, 64, 196, 64, c, 4) +
      line(167, 76, 201, 76, c, 4) +
      `<path d="M175 124q12 39 40 28" stroke="${c}" stroke-width="5" fill="none" stroke-dasharray="6 8"/>`;
  if (id === 10)
    scene =
      `<path d="M178 28q43 28 101 29v64q-14 59-101 89-84-30-98-89V57q57-1 98-29" fill="#fff" stroke="${c}" stroke-width="5"/>` +
      box(145, 100, 65, 52, c, 9) +
      `<path d="M155 100V82a23 23 0 0 1 46 0v18" fill="none" stroke="${c}" stroke-width="7"/><circle cx="178" cy="121" r="5" fill="#fff"/>` +
      line(178, 121, 178, 133, "white", 4) +
      star(42, 75, 0.8) +
      star(300, 167, 0.7);
  if (id === 11)
    scene =
      box(65, 38, 203, 144, "#b0d5e5", 15) +
      box(82, 52, 203, 144, c, 15) +
      box(93, 63, 181, 121, "#fff", 7) +
      line(111, 86, 182, 86, c, 7) +
      line(111, 106, 167, 106, c, 5) +
      box(196, 80, 58, 73, "#ffe1a1", 8) +
      `<path d="m202 144 17-28 11 16 10-11 10 23Z" fill="#88c8a5"/>` +
      line(176, 199, 176, 214, c, 7) +
      box(142, 215, 68, 7, c, 3);
  if (id === 12)
    scene =
      `<circle cx="127" cy="112" r="66" fill="#fff4c5"/><circle cx="127" cy="112" r="44" fill="#81c4df"/><path d="m99 83 26-11 11 24-15 17-18-7 7 24-19-4m39-13 21 2 9 20-19 17" fill="#78b99c"/><ellipse cx="127" cy="112" rx="95" ry="26" fill="none" stroke="#b5b3df" stroke-width="3" transform="rotate(-28 127 112)"/><ellipse cx="267" cy="91" rx="29" ry="39" fill="#f6ba96" transform="rotate(-25 267 91)"/><ellipse cx="308" cy="91" rx="29" ry="39" fill="#e3b3d7" transform="rotate(25 308 91)"/><ellipse cx="267" cy="137" rx="24" ry="27" fill="#ffd775"/><ellipse cx="307" cy="137" rx="24" ry="27" fill="#b6dfc8"/>` +
      line(287, 84, 287, 157, "#6f7d8f", 9) +
      line(284, 84, 274, 70, "#6f7d8f", 3) +
      line(290, 84, 301, 70, "#6f7d8f", 3);
  if (id === 13)
    scene = `<rect x="85" y="37" width="119" height="171" rx="58" fill="#fff" stroke="${c}" stroke-width="5"/><path d="M144 39v57m-56 4h113" stroke="${c}" stroke-width="4"/><rect x="133" y="63" width="22" height="34" rx="11" fill="#a9daca"/><path d="m238 123 6 63 15-19 20 27 16-11-20-27 24-6Z" fill="#ffcf6b" stroke="#ce9b45" stroke-width="4"/><path d="m224 113-13-9m29-7-4-14m16 23 14-9" stroke="#e28f55" stroke-width="4" stroke-linecap="round"/>`;
  if (id === 14)
    scene = [0, 1, 2]
      .map(
        (n) =>
          box(
            31 + n * 106,
            66,
            89,
            115,
            ["#c5e8d8", "#d6def6", "#ffe4ab"][n],
            16,
          ) +
          `<circle cx="${75 + n * 106}" cy="104" r="22" fill="#fff"/><text x="${75 + n * 106}" y="113" text-anchor="middle" font-size="24" font-family="Arial" font-weight="bold" fill="${c}">${n + 1}</text>` +
          line(53 + n * 106, 146, 97 + n * 106, 146, "#fff", 6) +
          line(60 + n * 106, 159, 90 + n * 106, 159, "#fff", 5),
      )
      .join("");
  if (id === 15)
    scene =
      box(40, 44, 125, 152, "#deeffa", 18) +
      box(191, 44, 125, 152, "#fff1ca", 18) +
      `<path d="M65 116a37 37 0 0 1 74 0q-12-11-24 0-13-11-25 0-13-11-25 0" fill="#91bfd7"/>` +
      line(101, 114, 101, 158, "#85797e", 5) +
      `<circle cx="253" cy="106" r="29" fill="#ffc65c"/><path d="m254 62 0-11m0 109v-11m44-43h13m-114 0h13m12-32-9-9m73 73 9 9" stroke="#e7b148" stroke-width="4" stroke-linecap="round"/><path d="m70 174 10 8 20-19m126 11 10 8 20-19" fill="none" stroke="#6d9e80" stroke-width="5"/>`;
  if (id === 16)
    scene =
      monitor +
      box(108, 72, 134, 69, "#fff3d6", 8) +
      `<path d="m116 85 59 38 59-38" fill="none" stroke="#efbc73" stroke-width="4"/><path d="M168 88c-21-22-32 8 7 29 39-21 27-51 7-29l-7 7Z" fill="#eb9eac"/>` +
      star(45, 57, 0.8) +
      star(298, 169, 0.6);
  const labels = [
    "Thông tin và quyết định",
    "Xử lí thông tin",
    "Máy tính và em",
    "Làm việc với máy tính",
    "Sử dụng bàn phím",
    "Khám phá thông tin trên Internet",
    "Sắp xếp để dễ tìm",
    "Sơ đồ hình cây",
    "Thực hành với tệp và thư mục",
    "Bảo vệ thông tin",
    "Bài trình chiếu",
    "Thế giới tự nhiên",
    "Sử dụng chuột",
    "Thực hiện công việc",
    "Công việc theo điều kiện",
    "Máy tính giúp em",
  ];
  return `<svg class="grade3-illustration" viewBox="0 0 360 240" role="img" aria-label="Minh họa ${labels[id - 1] || "Tin học 3"}"><ellipse cx="179" cy="122" rx="166" ry="103" fill="${["#fff0e5", "#e6f6fc", "#e7f6ee", "#f1eafb", "#fff3dc", "#e8effb"][(id - 1) % 6]}"/><ellipse cx="181" cy="213" rx="118" ry="9" fill="${c}" opacity=".09"/>${star(25, 21, 0.6)}<circle cx="323" cy="45" r="5" fill="#8ac9b0"/>${scene}<circle cx="29" cy="183" r="5" fill="#eb9eac"/>${star(315, 207, 0.5)}</svg>`;
}
