function courseMascotSVG() {
  return `<svg viewBox="0 0 210 220" aria-hidden="true"><path d="m38 66 6-35 38 25m47-1 37-24 7 42" fill="#69c9c4"/><ellipse cx="105" cy="126" rx="73" ry="80" fill="#69c9c4"/><path d="M52 90q53-38 106 0v57q-53 54-106 0Z" fill="#fff7dd"/><circle cx="78" cy="101" r="27" fill="white" stroke="#168a95" stroke-width="5"/><circle cx="133" cy="101" r="27" fill="white" stroke="#168a95" stroke-width="5"/><circle cx="83" cy="104" r="7" fill="#39415f"/><circle cx="128" cy="104" r="7" fill="#39415f"/><path d="m98 127 8 13 9-13Z" fill="#f3af54"/><path d="M39 120q-30 22-13 47l22-18m122-30q32 22 17 46l-25-17" fill="#35a8ae"/><path d="M58 161q23-9 47 3 25-12 48-3v39q-23-7-48 4-23-11-47-4Z" fill="#ffd171" stroke="#e3a640" stroke-width="3"/><path d="M105 165v38" stroke="#e3a640" stroke-width="3"/><path d="M75 215h18m25 0h18" stroke="#d7a059" stroke-width="8" stroke-linecap="round"/><path d="m156 30 3 10 11 3-11 3-3 10-3-10-10-3 10-3Z" fill="#ffd46d"/></svg>`;
}
function worldScenery() {
  return `<svg class="english-world" viewBox="0 0 700 500" aria-hidden="true"><ellipse cx="352" cy="254" rx="325" ry="219" fill="#e6f8f3"/><path d="M90 259a261 261 0 0 1 522 0" fill="none" stroke="#ffe5b3" stroke-width="35"/><path d="M119 259a232 232 0 0 1 464 0" fill="none" stroke="#f4d7e5" stroke-width="24"/><path d="M142 259a209 209 0 0 1 418 0" fill="none" stroke="#c7e8ef" stroke-width="21"/><g fill="white"><ellipse cx="100" cy="294" rx="59" ry="24"/><ellipse cx="610" cy="290" rx="60" ry="25"/><circle cx="80" cy="272" r="27"/><circle cx="119" cy="270" r="32"/><circle cx="590" cy="268" r="28"/><circle cx="630" cy="270" r="25"/></g><g fill="#ffd477"><path d="m78 77 4 14 15 4-15 4-4 14-4-14-15-4 15-4Z"/><path d="m629 76 4 12 14 4-14 4-4 12-4-12-14-4 14-4Z"/></g><path d="M54 423q131-51 299 0 154-43 294 2v35H54Z" fill="#a7daca"/><g stroke="#75b8a2" stroke-width="4"><path d="M78 420v-30m12 36v-18m510 18v-28"/></g><g fill="#e9aec4"><circle cx="78" cy="386" r="12"/><circle cx="600" cy="395" r="13"/></g></svg>`;
}
function classicWordArt(key) {
  key = String(key);
  const R = (x, y, w, h, c, r = 10) =>
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}"/>`,
    C = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`,
    L = (x, y, a, b, c = "#6687a4", w = 5) =>
      `<path d="M${x} ${y}L${a} ${b}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" fill="none"/>`,
    T = (s, x = 140, y = 115, size = 35, c = "#55728d") =>
      `<text x="${x}" y="${y}" text-anchor="middle" font-family="Arial" font-size="${size}" font-weight="bold" fill="${c}">${escapeHTML(s)}</text>`;
  const bg = "#edf6fc",
    ink = "#55728d",
    teal = "#74bfae",
    pink = "#e9a7be",
    yellow = "#f4ca74",
    blue = "#8abbd6";
  let s = "";
  const eyes = (x = 140, y = 93) =>
    C(x - 15, y, 3, "#45536a") +
    C(x + 15, y, 3, "#45536a") +
    `<path d="M${x - 10} ${y + 16}q10 10 20 0" fill="none" stroke="#b87f6d" stroke-width="3" stroke-linecap="round"/>`;
  const face = (color = "#f1c7a5", hair = "#75645e") =>
    C(140, 92, 39, color) +
    `<path d="M102 88q-3-55 43-38 42-3 33 44l-17-27-59 21" fill="${hair}"/>` +
    eyes();
  const person = (type = "normal") =>
    face() +
    `<path d="M118 132q22-11 44 0l13 44h-70Z" fill="${teal}"/>` +
    L(120, 174, 116, 192, ink, 9) +
    L(160, 174, 166, 192, ink, 9);
  const book =
    R(77, 45, 128, 132, teal, 11) +
    R(90, 45, 108, 122, "#fffbec", 6) +
    L(104, 69, 183, 69, "#bbd4d0", 4) +
    L(104, 87, 170, 87, "#bbd4d0", 4) +
    L(104, 105, 183, 105, "#bbd4d0", 4) +
    R(115, 124, 53, 30, "#cfe9ec", 5);
  const table =
    R(61, 95, 158, 16, "#c8a176", 5) +
    L(77, 110, 70, 177, "#b18b67", 8) +
    L(204, 110, 212, 177, "#b18b67", 8);
  const chair =
    R(94, 37, 88, 73, blue, 11) +
    R(88, 111, 102, 15, "#8aa6c4", 5) +
    L(101, 126, 94, 179, ink, 7) +
    L(177, 126, 186, 179, ink, 7) +
    L(102, 106, 102, 67, ink, 6) +
    L(177, 106, 177, 67, ink, 6);
  const ball = (col = yellow) =>
    C(140, 106, 58, col) +
    `<path d="M82 106h116M140 48q-40 58 0 116m0-116q40 58 0 116" stroke="#7c705d" stroke-width="3" fill="none"/>`;
  if (/^\d+$/.test(key))
    s = C(140, 106, 70, "#fff4d3") + T(key, 140, 130, 75, "#ba8b3e");
  const colorMap = {
    black: "#343b48",
    blue: "#6aa8d8",
    brown: "#a77e60",
    green: "#85b794",
    orange: "#edac68",
    red: "#dc7a83",
    white: "#ffffff",
    yellow: "#f4d477",
  };
  if (colorMap[key])
    s = `<rect x="69" y="40" width="142" height="140" rx="29" fill="${colorMap[key]}" stroke="#c2cfdb" stroke-width="3"/><path d="M95 64h35" stroke="#ffffff88" stroke-width="7" stroke-linecap="round"/>`;
  if (["hello", "goodbye", "thanks"].includes(key))
    s =
      `<path d="M105 141V77q0-12 10-12t10 12V48q0-11 10-11t10 11v25-31q0-11 10-11t10 11v34-20q0-11 10-11t10 11v63q7-20 17-15 10 5 1 22-18 64-64 44-34-9-50-38-8-15 1-19 10-5 20 22" fill="#f1c6a4" stroke="#dba98a" stroke-width="2"/><path d="M70 54q-17 24-3 48m135-51q19 24 5 45" fill="none" stroke="#a7cbdc" stroke-width="5" stroke-linecap="round"/>` +
      (key === "thanks"
        ? C(221, 145, 19, pink) + T("♥", 221, 152, 21, "white")
        : "");
  if (
    [
      "friend",
      "teacher",
      "man",
      "woman",
      "father",
      "mother",
      "brother",
      "sister",
      "doctor",
      "nurse",
      "cook",
      "driver",
      "farmer",
      "singer",
      "worker",
    ].includes(key)
  ) {
    s = person();
    if (["teacher", "friend"].includes(key))
      s =
        R(53, 29, 173, 78, "#8cb7a8", 10) +
        T("A B C", 140, 74, 29, "white") +
        person();
    if (["man", "father", "driver", "worker"].includes(key))
      s = s.replace("#74bfae", "#8bafd1");
    if (["woman", "mother", "sister", "nurse"].includes(key))
      s = s.replace("#74bfae", "#d2a4c6");
    if (["doctor", "nurse"].includes(key))
      s =
        person().replace("#74bfae", "#fff") +
        R(154, 140, 17, 5, "#db8892", 1) +
        R(160, 134, 5, 17, "#db8892", 1);
    if (key === "cook")
      s =
        person() +
        R(104, 42, 74, 17, "white", 5) +
        C(119, 33, 17, "white") +
        C(141, 26, 20, "white") +
        C(161, 34, 17, "white");
    if (key === "farmer")
      s =
        person() +
        `<ellipse cx="140" cy="54" rx="55" ry="10" fill="${yellow}"/>` +
        R(117, 27, 46, 27, yellow, 8);
    if (key === "worker")
      s =
        person() +
        `<path d="M102 63a38 38 0 0 1 76 0Z" fill="${yellow}"/>` +
        L(96, 64, 184, 64, yellow, 8);
    if (key === "driver")
      s += `<circle cx="140" cy="159" r="32" fill="none" stroke="#6b7a8d" stroke-width="8"/>`;
    if (key === "singer")
      s += L(190, 111, 182, 163, ink, 6) + C(193, 102, 12, ink);
    if (key === "man") s += T("Mr", 221, 167, 25);
    if (key === "woman") s += T("Ms", 221, 167, 25);
  }
  if (["ear", "eye", "face", "hair", "mouth", "nose"].includes(key)) {
    s = face();
    if (key === "ear")
      s = C(101, 100, 13, yellow) + C(179, 100, 13, yellow) + s;
    if (key === "eye")
      s +=
        C(125, 93, 8, yellow) +
        C(155, 93, 8, yellow) +
        C(125, 93, 3, ink) +
        C(155, 93, 3, ink);
    if (key === "nose")
      s += `<path d="m140 89-7 18h14Z" fill="#e9a27d" stroke="#d18d69" stroke-width="2"/>`;
    if (key === "mouth")
      s += `<ellipse cx="140" cy="116" rx="15" ry="9" fill="#d98292"/>`;
    if (key === "hair")
      s += `<path d="M103 82q-4-48 42-33 40-2 32 42l-17-25-57 16Z" fill="#b49155"/>`;
    if (key === "face")
      s += `<circle cx="140" cy="95" r="47" stroke="${yellow}" fill="none" stroke-width="5" stroke-dasharray="7 5"/>`;
  }
  if (key === "hand")
    s = `<path d="M102 152V78q0-10 10-10t10 10V50q0-10 10-10t10 10v28-37q0-10 10-10t10 10v37-23q0-10 10-10t10 10v69q7-20 18-12 7 8-1 24-22 48-55 42-36-2-49-26Z" fill="#f1c7a5" stroke="#d3aa8d" stroke-width="3"/>`;
  if (["book", "notebook", "reading", "openbook"].includes(key)) s = book;
  if (key === "closebook")
    s =
      R(81, 38, 121, 148, blue, 10) +
      R(92, 42, 12, 139, "#5b93bd", 3) +
      T("ABC", 153, 107, 27, "white");
  if (key === "pencil" || key === "pen" || key === "writing")
    s =
      `<g transform="rotate(28 140 110)">${R(125, 35, 31, 116, key === "pen" ? blue : yellow, 7)}<path d="m125 150 16 36 15-36Z" fill="#e5c8ab"/><path d="m136 175 5 11 5-11Z" fill="#586372"/>${R(125, 27, 31, 19, pink, 5)}</g>` +
      (key === "writing" ? L(60, 180, 174, 180, teal, 4) : "");
  if (key === "eraser")
    s = `<g transform="rotate(-15 140 110)">${R(75, 74, 135, 65, pink, 10)}${R(139, 74, 71, 65, "#f2eee6", 10)}${L(139, 77, 139, 135, "#dbcbd0", 3)}</g>`;
  if (key === "ruler")
    s =
      R(39, 75, 202, 56, yellow, 7) +
      Array.from({ length: 14 }, (_, i) =>
        L(52 + i * 13, 77, 52 + i * 13, i % 2 ? 91 : 101, "#b48e4e", 2),
      ).join("");
  if (key === "pencilcase")
    s =
      R(45, 67, 190, 81, blue, 25) +
      L(61, 93, 216, 93, "#fff", 4) +
      C(216, 96, 8, yellow) +
      L(216, 99, 221, 115, ink, 3);
  if (key === "schoolbag")
    s =
      `<path d="M109 52V36q31-22 62 0v16" fill="none" stroke="#69a593" stroke-width="9"/>` +
      R(78, 47, 126, 138, teal, 25) +
      R(93, 114, 97, 53, "#a7dbca", 14) +
      L(104, 133, 178, 133, "#65a492", 4) +
      C(176, 145, 5, yellow);
  if (key === "chair" || key === "sitdown") s = chair;
  if (["table", "desk", "classroom"].includes(key))
    s =
      table +
      (key === "desk" ? R(79, 119, 53, 27, "#dfbd94", 5) : "") +
      (key === "classroom"
        ? R(76, 30, 132, 59, teal, 7) + T("ABC", 142, 71, 29, "white")
        : "");
  if (key === "lamp")
    s =
      `<path d="m106 43-30 68h128l-31-68Z" fill="${yellow}"/>` +
      L(140, 112, 140, 177, ink, 8) +
      R(105, 176, 70, 11, ink, 5);
  if (key === "bed" || key === "bedroom")
    s =
      R(48, 76, 184, 83, "#a2c9d6", 13) +
      R(48, 68, 38, 89, "#c3dce2", 9) +
      R(89, 80, 54, 31, "#fff9e9", 10) +
      R(90, 115, 142, 44, pink, 5) +
      L(60, 158, 60, 180, ink, 7) +
      L(220, 158, 220, 180, ink, 7);
  if (["door", "comein", "goout"].includes(key)) {
    s =
      R(90, 30, 104, 157, "#aabedb", 10) +
      R(104, 43, 76, 141, "#dfbe94", 4) +
      C(165, 118, 5, "#c08d56");
    if (key !== "door")
      s +=
        L(
          key === "comein" ? 38 : 235,
          118,
          key === "comein" ? 118 : 200,
          118,
          teal,
          9,
        ) +
        `<path d="m${key === "comein" ? 118 : 235} 118-14-11v22Z" fill="${teal}"/>`;
  }
  if (key === "window")
    s =
      R(67, 42, 150, 136, "#a2cbe0", 10) +
      R(79, 54, 126, 112, "#e6f8fc", 5) +
      L(142, 54, 142, 166, "#97b4c8", 7) +
      L(79, 109, 205, 109, "#97b4c8", 7);
  if (key === "house")
    s =
      `<path d="m40 94 101-64 101 64Z" fill="#d8a0ae"/>` +
      R(58, 94, 168, 94, "#fff1d3", 6) +
      R(118, 132, 44, 56, teal, 6) +
      R(79, 113, 29, 32, blue, 5) +
      R(173, 113, 29, 32, blue, 5);
  if (["livingroom", "bathroom", "kitchen"].includes(key)) {
    s = R(47, 38, 187, 151, "#e3ecee", 12);
    if (key === "livingroom")
      s +=
        R(63, 99, 159, 65, pink, 15) +
        R(80, 81, 54, 52, "#efc3d1", 14) +
        R(148, 81, 54, 52, "#efc3d1", 14) +
        L(78, 166, 78, 180, ink, 7) +
        L(207, 166, 207, 180, ink, 7);
    if (key === "bathroom")
      s +=
        `<path d="M66 111h151q-3 61-74 61-69 0-77-61" fill="white"/>` +
        L(88, 112, 88, 85, blue, 7) +
        `<path d="M88 85q0-20 22-20" fill="none" stroke="${blue}" stroke-width="7"/>`;
    if (key === "kitchen")
      s +=
        R(64, 105, 154, 74, "#badbcb", 6) +
        C(102, 132, 16, "#f5eedc") +
        C(181, 132, 16, "#f5eedc") +
        R(97, 55, 95, 46, "#c5cbd3", 7) +
        `<path d="M105 50q-8-13 0-22m29 21q-8-13 0-22m29 21q-8-13 0-22" stroke="#bbd5df" stroke-width="4" fill="none"/>`;
  }
  if (
    [
      "artroom",
      "computerroom",
      "musicroom",
      "library",
      "gym",
      "playground",
    ].includes(key)
  ) {
    s = R(42, 33, 196, 151, "#fff9eb", 12);
    if (key === "library")
      s +=
        Array.from({ length: 12 }, (_, i) =>
          R(
            63 + (i % 6) * 27,
            58 + Math.floor(i / 6) * 60,
            19,
            48,
            [teal, pink, blue, yellow][i % 4],
            3,
          ),
        ).join("") +
        L(55, 111, 226, 111, "#b19476", 7) +
        L(55, 173, 226, 173, "#b19476", 7);
    if (key === "computerroom")
      s +=
        R(72, 65, 136, 83, blue, 10) +
        R(82, 74, 116, 62, "#d8f0f4", 5) +
        L(140, 148, 140, 164, ink, 7) +
        R(105, 166, 70, 8, ink, 4);
    if (key === "artroom")
      s +=
        `<path d="M88 148V61h108v87Z" fill="white" stroke="${ink}" stroke-width="4"/><circle cx="116" cy="92" r="13" fill="${yellow}"/><path d="m91 141 32-36 30 27 20-17 21 26Z" fill="${teal}"/>` +
        L(102, 151, 89, 179, ink, 6) +
        L(185, 151, 198, 179, ink, 6);
    if (key === "musicroom") s += T("♫", 142, 145, 99, "#b89acb");
    if (key === "gym")
      s +=
        C(140, 113, 47, yellow) +
        L(93, 113, 187, 113, ink, 3) +
        L(140, 66, 140, 160, ink, 3);
    if (key === "playground")
      s +=
        L(81, 166, 117, 56, blue, 9) +
        L(117, 56, 197, 166, pink, 11) +
        L(65, 166, 216, 166, teal, 6);
  }
  if (["big", "small"].includes(key))
    s =
      R(
        key === "big" ? 63 : 112,
        key === "big" ? 52 : 101,
        key === "big" ? 155 : 59,
        key === "big" ? 125 : 48,
        teal,
        15,
      ) + C(219, 57, 10, yellow);
  if (["new", "old"].includes(key))
    s =
      R(80, 39, 122, 143, key === "new" ? blue : "#bbc4bc", 10) +
      (key === "new"
        ? T("✦", 214, 67, 34, "#e4b25b")
        : L(94, 72, 126, 113, "#859287", 4) +
          L(154, 133, 188, 154, "#859287", 4));
  if (["football", "basketball", "volleyball"].includes(key))
    s =
      ball(
        key === "football"
          ? "#f7f5e9"
          : key === "basketball"
            ? "#eab47a"
            : "#a8cce3",
      ) +
      (key === "football"
        ? `<path d="m140 83 21 14-8 25h-26l-8-25Z" fill="#647181"/>`
        : "");
  if (["badminton", "tabletennis"].includes(key))
    s =
      `<ellipse cx="114" cy="87" rx="34" ry="45" fill="${key === "badminton" ? "#e2eff2" : pink}" stroke="${ink}" stroke-width="5" transform="rotate(27 114 87)"/>` +
      L(98, 126, 74, 177, ink, 10) +
      C(196, 97, 19, "#fff") +
      (key === "badminton"
        ? `<path d="m181 83 3-32 26 14-9 25Z" fill="#d6e3e8"/>`
        : "");
  if (key === "chess" || key === "wordpuzzle")
    s =
      R(64, 38, 152, 142, "#f7efdb", 10) +
      Array.from({ length: 16 }, (_, i) =>
        R(
          75 + (i % 4) * 33,
          48 + Math.floor(i / 4) * 30,
          31,
          28,
          key === "chess"
            ? (i + Math.floor(i / 4)) % 2
              ? blue
              : "#fff"
            : i % 3
              ? blue
              : "#fff",
          2,
        ),
      ).join("") +
      (key === "chess"
        ? T("♞", 143, 134, 61, ink)
        : T("A B", 140, 122, 32, ink));
  if (
    [
      "cycling",
      "skating",
      "skipping",
      "running",
      "walking",
      "dancing",
      "singing",
      "listening",
      "drawing",
      "painting",
      "swimming",
      "cooking",
      "speak",
      "standup",
      "chat",
      "climbing",
      "counting",
      "swinging",
      "watchingtv",
    ].includes(key)
  ) {
    s = person();
    if (["running", "walking"].includes(key))
      s +=
        L(105, 168, 78, 182, ink, 9) +
        L(172, 168, 198, key === "running" ? 145 : 183, ink, 9) +
        L(63, 119, 88, 119, blue, 4);
    if (key === "cycling")
      s =
        C(83, 165, 30, "#fff") +
        C(203, 165, 30, "#fff") +
        `<path d="m83 165 44-60 35 60H83l49-39 71 39-31-76" fill="none" stroke="${teal}" stroke-width="6"/>` +
        C(144, 58, 22, "#f1c7a5") +
        L(144, 83, 129, 118, blue, 14);
    if (key === "skating")
      s +=
        C(105, 199, 7, ink) +
        C(123, 199, 7, ink) +
        C(162, 199, 7, ink) +
        C(181, 199, 7, ink);
    if (key === "skipping")
      s += `<ellipse cx="140" cy="127" rx="91" ry="79" stroke="${pink}" stroke-width="4" fill="none"/>`;
    if (["dancing", "singing", "listening"].includes(key))
      s += T("♫", 215, 81, 40, "#ba99ca") + T("♪", 64, 111, 33, "#ba99ca");
    if (key === "listening")
      s +=
        `<path d="M98 94a42 42 0 0 1 84 0" fill="none" stroke="${ink}" stroke-width="8"/>` +
        R(94, 89, 13, 32, ink, 5) +
        R(174, 89, 13, 32, ink, 5);
    if (["drawing", "painting"].includes(key))
      s +=
        R(55, 147, 171, 44, "#fff9e5", 8) +
        L(165, 145, 194, 111, ink, 6) +
        (key === "painting" ? C(192, 112, 9, pink) : "");
    if (key === "swimming")
      s += `<path d="M42 161q20-14 40 0t40 0t40 0t40 0t40 0M42 180q20-14 40 0t40 0t40 0t40 0t40 0" fill="none" stroke="${blue}" stroke-width="11"/>`;
    if (key === "cooking")
      s +=
        R(62, 139, 159, 40, "#b6c4cf", 10) +
        L(54, 144, 36, 144, ink, 6) +
        L(227, 144, 244, 144, ink, 6);
    if (key === "speak" || key === "chat")
      s +=
        `<path d="M187 38h59v43h-36l-18 16V81h-5Z" fill="#dbeef6"/>` +
        T("…", 217, 65, 27, ink);
    if (key === "climbing" || key === "swinging")
      s +=
        L(81, 18, 81, 190, "#b1a17d", 5) +
        L(199, 18, 199, 190, "#b1a17d", 5) +
        L(81, 187, 199, 187, "#b1a17d", 8);
    if (key === "counting") s += T("1 2 3", 142, 32, 25, ink);
    if (key === "watchingtv")
      s =
        R(46, 37, 188, 125, ink, 13) +
        R(58, 49, 164, 101, "#bde2e8", 6) +
        L(116, 163, 102, 184, ink, 8) +
        L(165, 163, 179, 184, ink, 8);
  }
  if (["car", "bus", "truck", "train"].includes(key)) {
    s =
      R(43, 94, 196, 61, blue, 14) +
      R(69, 57, key === "bus" ? 150 : 105, 65, teal, 13) +
      R(82, 68, 38, 33, "#eaf7f9", 6) +
      R(130, 68, 34, 33, "#eaf7f9", 6) +
      C(85, 157, 23, ink) +
      C(198, 157, 23, ink) +
      C(85, 157, 10, "#e9e8df") +
      C(198, 157, 10, "#e9e8df");
    if (key === "truck") s += R(40, 52, 111, 75, yellow, 6);
    if (key === "train")
      s += R(44, 36, 28, 44, ink, 3) + C(54, 20, 13, "#d8e5e9");
  }
  if (key === "plane")
    s = `<path d="m38 116 90-12 14-71 18-5 7 76 76-7 9 15-88 18-21 47-14 2 4-46-83-4Z" fill="${blue}" stroke="#6c9fb8" stroke-width="3"/>`;
  if (key === "ship")
    s =
      `<path d="M49 127h183l-39 48H84Z" fill="${blue}"/>` +
      R(95, 86, 102, 43, "#fff1cc", 7) +
      R(122, 54, 34, 33, pink, 5) +
      L(43, 186, 237, 186, teal, 7);
  if (key === "kite" || key === "flyingkite")
    s = `<path d="m143 25 66 63-66 69-65-69Z" fill="${yellow}"/><path d="m143 25 66 63h-66Z" fill="${pink}"/><path d="m143 88 66 0-66 69Z" fill="${blue}"/><path d="M143 157q-35 30 4 46" fill="none" stroke="#b99ca4" stroke-width="3"/>`;
  if (
    [
      "beans",
      "bread",
      "chickenfood",
      "eggs",
      "fishfood",
      "meat",
      "rice",
    ].includes(key)
  ) {
    s = `<ellipse cx="140" cy="122" rx="97" ry="64" fill="white" stroke="#c4d9e2" stroke-width="6"/>`;
    if (key === "rice")
      s +=
        `<path d="M80 125q7-67 60-57 58-8 62 57Z" fill="#f1e6c9"/>` +
        Array.from({ length: 12 }, (_, i) =>
          L(
            100 + (i % 4) * 24,
            92 + Math.floor(i / 4) * 12,
            106 + (i % 4) * 24,
            88 + Math.floor(i / 4) * 12,
            "white",
            3,
          ),
        ).join("");
    if (key === "bread")
      s +=
        `<ellipse cx="140" cy="114" rx="67" ry="38" fill="#d7ab72" transform="rotate(-15 140 114)"/>` +
        L(106, 91, 117, 113, "#f4d9aa", 7) +
        L(139, 82, 150, 104, "#f4d9aa", 7) +
        L(170, 78, 181, 100, "#f4d9aa", 7);
    if (key === "beans")
      s += Array.from(
        { length: 9 },
        (_, i) =>
          `<ellipse cx="${94 + (i % 3) * 39}" cy="${94 + Math.floor(i / 3) * 21}" rx="19" ry="9" fill="${teal}" transform="rotate(-15 ${94 + (i % 3) * 39} ${94 + Math.floor(i / 3) * 21})"/>`,
      ).join("");
    if (key === "eggs")
      s += `<ellipse cx="112" cy="116" rx="29" ry="43" fill="#f7ecd4"/><ellipse cx="175" cy="113" rx="29" ry="43" fill="#fff7e4"/>`;
    if (key === "chickenfood" || key === "meat")
      s += `<ellipse cx="125" cy="115" rx="49" ry="35" fill="#d4a17e"/><path d="m162 115 37-24 10 11-37 27Z" fill="#f0dfc4"/>`;
    if (key === "fishfood")
      s +=
        `<ellipse cx="143" cy="114" rx="54" ry="31" fill="${blue}"/><path d="m91 113-33-28v57Z" fill="${blue}"/>` +
        C(169, 107, 4, ink);
  }
  if (["juice", "milk", "water"].includes(key))
    s = `<path d="M91 55h100l-12 126h-76Z" fill="${key === "juice" ? yellow : key === "milk" ? "#fffcf2" : "#b7ddeb"}" stroke="#91b8cc" stroke-width="4"/><path d="m154 108 16-80h23" fill="none" stroke="#bd94b6" stroke-width="5" stroke-linecap="round"/>`;
  if (
    [
      "cat",
      "dog",
      "rabbit",
      "bird",
      "goldfish",
      "parrot",
      "elephant",
      "horse",
      "monkey",
      "peacock",
      "tiger",
      "teddy",
      "toy",
    ].includes(key)
  ) {
    const co =
      key === "cat"
        ? "#dfbf8d"
        : key === "dog"
          ? "#b9987a"
          : key === "tiger"
            ? "#eab370"
            : key === "elephant"
              ? "#a9bdcd"
              : key === "rabbit"
                ? "#fbf6e7"
                : key === "parrot"
                  ? "#86bc9d"
                  : key === "bird"
                    ? "#8ebdd6"
                    : "#cdb090";
    s =
      C(140, 116, 48, co) +
      C(140, 77, 42, co) +
      C(123, 74, 4, ink) +
      C(156, 74, 4, ink) +
      `<path d="m135 91 5 6 6-6Z" fill="#bd8390"/>` +
      `<path d="M131 105q9 8 18 0" stroke="${ink}" stroke-width="3" fill="none"/>`;
    if (["cat", "tiger"].includes(key))
      s +=
        `<path d="m103 51 4-30 24 20m19-1 25-19 3 33" fill="${co}"/>` +
        L(95, 95, 118, 99, ink, 2) +
        L(165, 99, 188, 95, ink, 2);
    if (key === "dog")
      s += `<ellipse cx="101" cy="73" rx="16" ry="31" fill="#92775f"/><ellipse cx="178" cy="73" rx="16" ry="31" fill="#92775f"/>`;
    if (key === "rabbit")
      s += `<ellipse cx="121" cy="31" rx="13" ry="36" fill="${co}" stroke="#e4d9ca" stroke-width="2"/><ellipse cx="158" cy="31" rx="13" ry="36" fill="${co}" stroke="#e4d9ca" stroke-width="2"/>`;
    if (key === "tiger")
      s +=
        L(125, 47, 132, 62, ink, 4) +
        L(150, 47, 146, 62, ink, 4) +
        L(103, 82, 116, 86, ink, 4) +
        L(166, 85, 178, 80, ink, 4);
    if (key === "elephant")
      s += `<ellipse cx="94" cy="86" rx="26" ry="37" fill="${co}"/><ellipse cx="185" cy="86" rx="26" ry="37" fill="${co}"/><path d="M140 99v48q0 31 25 17" fill="none" stroke="${co}" stroke-width="20" stroke-linecap="round"/>`;
    if (key === "horse")
      s += `<ellipse cx="140" cy="103" rx="32" ry="23" fill="#ad8e77"/><path d="m115 44 3-25 15 21m21 0 13-20 4 28" fill="#ad8e77"/>`;
    if (key === "monkey" || key === "teddy" || key === "toy")
      s +=
        C(101, 64, 17, co) +
        C(177, 64, 17, co) +
        C(140, 97, 25, "#ebd5b8") +
        C(123, 74, 4, ink) +
        C(156, 74, 4, ink);
    if (["bird", "parrot"].includes(key))
      s +=
        `<path d="m166 83 30 12-30 12Z" fill="${yellow}"/><ellipse cx="117" cy="120" rx="25" ry="30" fill="${key === "parrot" ? "#639f7f" : "#6a9fba"}"/>` +
        L(122, 157, 119, 178, "#b0946d", 5) +
        L(154, 157, 159, 178, "#b0946d", 5);
    if (key === "goldfish")
      s =
        `<ellipse cx="146" cy="107" rx="66" ry="45" fill="${yellow}"/><path d="m83 107-38-39v78Z" fill="#e7b664"/>` +
        C(176, 97, 5, ink) +
        `<path d="m123 64 18-24 23 24" fill="#e7b664"/>`;
    if (key === "peacock")
      s =
        Array.from(
          { length: 7 },
          (_, i) =>
            `<ellipse cx="${68 + i * 24}" cy="${65 + Math.abs(i - 3) * 12}" rx="20" ry="55" fill="${i % 2 ? teal : "#95cbb0"}"/><circle cx="${68 + i * 24}" cy="${55 + Math.abs(i - 3) * 12}" r="10" fill="${blue}"/>`,
        ).join("") +
        `<ellipse cx="141" cy="142" rx="29" ry="42" fill="#69a9bf"/>` +
        C(141, 94, 18, "#69a9bf") +
        C(148, 91, 3, ink);
  }
  if (!s)
    s =
      R(65, 47, 150, 126, "#d9d1ee", 21) +
      T(
        key.replace(/([a-z])([A-Z])/g, "$1 $2").slice(0, 12),
        140,
        121,
        23,
        "#7f719a",
      );
  return `<svg class="word-art" viewBox="0 0 280 210" role="img" aria-label="Tranh minh họa ${escapeHTML(key)}"><ellipse cx="140" cy="108" rx="129" ry="96" fill="${bg}"/><ellipse cx="140" cy="187" rx="83" ry="8" fill="#b8d6e7" opacity=".28"/>${s}</svg>`;
}
function lessonIllustration(id) {
  const l = COURSE_LESSONS.find((x) => x.id === id);
  if (!l) return wordArt("hello");
  const picks =
    l.kind === "review" ? ["book", "kite", "cat"] : l.vocab.map((v) => v.art);
  return `<svg class="lesson-art-svg" viewBox="0 0 420 240" role="img" aria-label="Minh họa ${escapeHTML(l.label)}"><ellipse cx="214" cy="126" rx="197" ry="107" fill="${["#e5f5ee", "#e8f0fc", "#fff1d7", "#f5e8f5"][l.topic - 1]}"/><g transform="translate(-7 15) scale(.64)">${wordArt(picks[0]).replace("<svg", '<svg x="0" y="0" width="280" height="210"')}</g><g transform="translate(148 60) scale(.59)">${wordArt(picks[1] || picks[0]).replace("<svg", '<svg x="0" y="0" width="280" height="210"')}</g><g transform="translate(266 4) scale(.49)">${wordArt(picks[2] || picks[0]).replace("<svg", '<svg x="0" y="0" width="280" height="210"')}</g><path d="m36 34 3 9 10 3-10 3-3 10-3-10-9-3 9-3Z" fill="#f2c56e"/><circle cx="385" cy="177" r="5" fill="#b1a1d4"/></svg>`;
}

const EN4_ICONS = {"America": "🇺🇸", "Australia": "🇦🇺", "Britain": "🇬🇧", "Japan": "🇯🇵", "Tokyo": "🇯🇵", "Malaysia": "🇲🇾", "Singapore": "🇸🇬", "Thailand": "🇹🇭", "Bangkok": "🇹🇭", "Viet Nam": "🇻🇳", "London": "🌉", "Sydney": "⛵", "getup": "⏰", "o'clock": "⏰", "breakfast": "🥣", "do housework": "🧹", "clean the floor": "🧹", "school": "🏫", "study at school": "🏫", "building": "🏫", "birthday": "🎂", "party": "🎂", "chips": "🍟", "grapes": "🍇", "jam": "🍓", "lemonade": "🍋", "play the guitar": "🎸", "play the piano": "🎹", "city": "🏙️", "mountains": "⛰️", "town": "🏘️", "village": "🏡", "garden": "🌷", "art": "🎨", "painter": "🎨", "English": "📚", "Vietnamese": "📚", "English teacher": "📚", "history and geography": "🌏", "maths": "🔢", "maths teacher": "🔢", "music": "🎵", "science": "🔬", "IT": "💻", "PE": "⚽", "sports day": "⚽", "beach": "🏖️", "campsite": "🏕️", "countryside": "🌾", "last": "⏮️", "yesterday": "⏮️", "road": "🛣️", "street": "🛣️", "busy": "🚦", "live": "🏠", "noisy": "📣", "quiet": "🤫", "actor": "🎭", "office worker": "🧑‍💼", "policeman": "👮", "factory": "🏭", "farm": "🚜", "hospital": "🏥", "nursing home": "🏡", "wash the clothes": "👚", "wash the dishes": "🍽️", "help with the cooking": "🥗", "cinema": "🎬", "shopping centre": "🛍️", "gift shop": "🛍️", "sports centre": "🏟️", "swimming pool": "🏊", "do yoga": "🧘", "tennis": "🎾", "cloudy": "☁️", "rainy": "🌧️", "sunny": "☀️", "weather": "🌤️", "windy": "🌬️", "bakery": "🥐", "bookshop": "📚", "food stall": "🍜", "water park": "🎢", "turn": "↪️", "turn round": "↪️", "crocodiles": "🐊", "giraffes": "🦒", "hippos": "🦛", "lions": "🦁", "dance beautifully": "🩰", "roar loudly": "🦁", "run quickly": "🏃", "sing merrily": "🐦", "building a campfire": "🔥", "dancing around the campfire": "💃", "playing card games": "🃏", "playing tug of war": "🪢", "putting up a tent": "⛺", "singing songs": "🎶", "taking a photo": "📸", "telling a story": "📖"};
function wordArt(key){
 key=String(key);let content='';
 const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
 const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
 const number={'fifteen':'15','thirty':'30','forty-five':'45','thousand':'1000','dong':'₫'};
 const icon=EN4_ICONS[key];
 if(icon) content=`<circle cx="140" cy="103" r="75" fill="#fff4d7"/><text x="140" y="139" text-anchor="middle" font-size="94" font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif">${icon}</text><circle cx="53" cy="54" r="7" fill="#ffd16d"/><path d="m225 144 4 10 11 4-11 4-4 10-4-10-11-4 11-4Z" fill="#72c9cb"/>`;
 if(months.includes(key)||days.includes(key)){const month=months.indexOf(key)+1,day=days.indexOf(key);content=`<rect x="63" y="31" width="154" height="151" rx="19" fill="white" stroke="#b8d9dc" stroke-width="3"/><path d="M64 66V48q0-17 18-17h116q18 0 18 17v18Z" fill="#f39170"/><path d="M96 21v29m88-29v29" stroke="#147c89" stroke-width="8" stroke-linecap="round"/><text x="140" y="116" text-anchor="middle" font-size="${month?48:25}" fill="#146d81" font-weight="bold">${month||(['Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy','Chủ nhật'][day])}</text><text x="140" y="151" text-anchor="middle" font-size="17" fill="#587880">${month?'THÁNG':'TRONG TUẦN'}</text>`;}
 if(number[key])content=`<rect x="50" y="39" width="180" height="131" rx="28" fill="#d1f2ef"/><text x="140" y="127" text-anchor="middle" font-weight="bold" font-size="65" fill="#127a8c">${number[key]}</text>`;
 if(['go straight','left','right','turn left','turn right','stop'].includes(key)) {const stop=key==='stop',left=key.includes('left'),right=key.includes('right');content=stop?`<path d="M105 28h70l49 49v61l-49 49h-70l-49-49V77Z" fill="#e57171" stroke="white" stroke-width="5"/><path d="M91 108h98" stroke="white" stroke-width="13"/>`:`<rect x="65" y="26" width="150" height="160" rx="20" fill="#228caa"/><path d="M140 160V76${left?'H95':right?'H185':'V48'}" stroke="white" stroke-width="15" fill="none" stroke-linejoin="round"/><path d="${left?'m114 51-27 25 27 25':right?'m167 51 27 25-27 25':'m114 75 26-29 26 29'}" stroke="white" stroke-width="12" fill="none" stroke-linecap="round"/>`;}
 if(['behind','between','near','opposite'].includes(key)){const x=key==='near'?185:140;content=`<rect x="60" y="65" width="62" height="102" rx="9" fill="#7db5d0"/><rect x="178" y="65" width="62" height="102" rx="9" fill="#7db5d0"/>${key==='opposite'?'<path d="M58 112h185" stroke="white" stroke-width="35"/><path d="M58 112h185" stroke="#e4bc5a" stroke-width="3" stroke-dasharray="13 8"/>':''}<circle cx="${x}" cy="${key==='behind'?47:129}" r="23" fill="#f3a67e"/><circle cx="${x-6}" cy="${key==='behind'?44:126}" r="2" fill="#304d68"/><circle cx="${x+6}" cy="${key==='behind'?44:126}" r="2" fill="#304d68"/>`;}
 if(['skirt','T-shirt'].includes(key))content=key==='skirt'?'<path d="M106 43h68l37 127H69Z" fill="#efa894" stroke="#d47d79" stroke-width="3"/><path d="M105 43h70v19h-70Z" fill="#d77f88"/><path d="m123 64-13 103m46-103 14 103" stroke="#f7d9ca" stroke-width="5"/>':'<path d="m106 37-57 38 27 39 25-12v76h79v-76l25 12 27-39-57-38q-35 27-69 0Z" fill="#6abfc7" stroke="#268f9a" stroke-width="3"/><path d="M111 38q30 44 59 0" stroke="white" stroke-width="7" fill="none"/>';
 if(['at noon','in the afternoon','in the evening','in the morning'].includes(key)){let hr=key==='at noon'?12:key==='in the afternoon'?3:key==='in the evening'?8:7;content=`<circle cx="140" cy="107" r="76" fill="white" stroke="#3d9fae" stroke-width="10"/><circle cx="140" cy="107" r="5" fill="#14576e"/><path d="M140 107V52M140 107L${140+38*Math.sin(hr*Math.PI/6)} ${107-38*Math.cos(hr*Math.PI/6)}" stroke="#14576e" stroke-width="7" stroke-linecap="round"/>${[12,3,6,9].map((n,i)=>`<text x="${140+56*Math.sin(i*Math.PI/2)}" y="${114-56*Math.cos(i*Math.PI/2)}" text-anchor="middle" font-size="18" fill="#14576e">${n}</text>`).join('')}`;}
 if(['big','short','slim','tall','long','round'].includes(key)){const tall=key==='tall',slim=key==='slim';content=`<rect x="54" y="36" width="170" height="149" rx="23" fill="#fff1d8"/><path d="M78 59v104m-8-104h16m-16 104h16" stroke="#9bb8bf" stroke-width="3"/><ellipse cx="147" cy="${tall?64:89}" rx="${key==='big'?30:22}" ry="24" fill="#f1c4a2"/><path d="M124 ${tall?89:114}h46l${slim?0:13} 46h-${slim?46:72}Z" fill="#61b6bd"/><path d="M135 160v16m23-16v16" stroke="#4c7793" stroke-width="9"/>${key==='round'?'<circle cx="198" cy="65" r="14" fill="none" stroke="#dd9873" stroke-width="4"/>':''}`;}
 if(!content)return classicWordArt(key);
 return `<svg class="word-art" viewBox="0 0 280 210" role="img" aria-label="Tranh minh họa ${escapeHTML(key)}"><ellipse cx="140" cy="108" rx="130" ry="98" fill="#e7f6f7"/><ellipse cx="140" cy="187" rx="84" ry="8" fill="#acd7dc" opacity=".4"/>${content}</svg>`;
}
