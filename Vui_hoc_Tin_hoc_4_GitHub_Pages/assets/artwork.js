// Original vector scenery: stays sharp on all screens and works offline.
function worldScenery() {
  return `<svg class="worldScenery" viewBox="0 0 640 540" aria-hidden="true" focusable="false"><defs><linearGradient id="worldSky" x2="0" y2="1"><stop stop-color="#caf7ff"/><stop offset="1" stop-color="#f0e8ff"/></linearGradient><linearGradient id="worldHill"><stop stop-color="#5bccaa"/><stop offset="1" stop-color="#a5e8c3"/></linearGradient></defs><path fill="url(#worldSky)" d="M60 240C25 90 160 20 290 48c130-77 280 15 286 150 80 125-22 270-148 282H176C72 468 25 355 60 240Z"/><circle cx="495" cy="111" r="42" fill="#ffe389"/><g fill="#fff" opacity=".94"><path d="M80 142c-12-30 31-51 52-29 28-20 65 9 43 32Z"/><path d="M400 220c-13-25 22-46 42-28 31-13 54 14 40 30Z"/></g><path d="M38 430Q177 340 305 427q155-90 310 8v64H38Z" fill="url(#worldHill)"/><path d="M240 499q22-58 91-80l43 14q-47 18-53 66Z" fill="#ffebb0"/><g transform="translate(53 290)"><path d="m0 34 63-43 62 43Z" fill="#9871d7"/><rect x="10" y="33" width="107" height="95" rx="9" fill="#fff7df"/><rect x="53" y="77" width="24" height="51" rx="8" fill="#94d6db"/><g fill="#ffc764"><rect x="25" y="51" width="18" height="24" rx="4"/><rect x="86" y="51" width="18" height="24" rx="4"/></g><circle cx="63" cy="28" r="10" fill="#fff"/><path d="M63 21v8l5 3" fill="none" stroke="#8060a9" stroke-width="3"/></g><g transform="translate(500 305)"><path d="M21 118V49" stroke="#95815f" stroke-width="11" stroke-linecap="round"/><path d="M21 66C-47 56-14-15 22 4c50-32 84 58 27 66Z" fill="#50bd9d"/><circle cx="5" cy="30" r="6" fill="#ffe496"/><circle cx="43" cy="44" r="6" fill="#ffe496"/></g><g fill="#fff0b5"><path d="m220 90 5 14 15 1-12 10 4 14-12-8-12 8 4-14-12-10 15-1Z"/><circle cx="590" cy="280" r="7"/><circle cx="58" cy="260" r="5"/></g><g stroke="#40a785" stroke-width="4"><path d="M112 484v-25m14 20v-14m334 20v-32"/></g><g fill="#ffb8cb"><circle cx="112" cy="455" r="10"/><circle cx="460" cy="450" r="12"/></g><g fill="#b596f0"><circle cx="126" cy="462" r="8"/><circle cx="420" cy="477" r="8"/></g></svg>`;
}
function courseMascotSVG() {
  return `<svg viewBox="0 0 210 220" aria-hidden="true"><defs><linearGradient id="mit-body" x2="0" y2="1"><stop stop-color="#d1f6dd"/><stop offset="1" stop-color="#95d6ba"/></linearGradient></defs><path d="M105 34V15" stroke="#74b79b" stroke-width="8" stroke-linecap="round"/><circle cx="105" cy="12" r="9" fill="#ffc26b"/><rect x="28" y="35" width="154" height="106" rx="29" fill="url(#mit-body)" stroke="#71b59b" stroke-width="7"/><rect x="40" y="47" width="130" height="82" rx="22" fill="#edfff1"/><ellipse cx="78" cy="80" rx="6" ry="10" fill="#436b58"/><ellipse cx="132" cy="80" rx="6" ry="10" fill="#436b58"/><ellipse cx="61" cy="103" rx="12" ry="5" fill="#f3b8bc"/><ellipse cx="149" cy="103" rx="12" ry="5" fill="#f3b8bc"/><path d="M94 102q11 11 22 0" fill="none" stroke="#436b58" stroke-width="4" stroke-linecap="round"/><rect x="54" y="153" width="102" height="49" rx="19" fill="#c2ebcd" stroke="#71b59b" stroke-width="6"/><path d="M105 168c-10-12-20 3 0 16 20-13 10-28 0-16Z" fill="#ffda7e"/><path d="m35 158-12 30m151-30 13 30M71 211h17m35 0h17" stroke="#79b59b" stroke-width="10" stroke-linecap="round"/></svg>`;
}
function lessonIllustration(id) {
  const palettes = [
    ["#d8f8f1", "#1a9a8b"],
    ["#e7e5ff", "#7757cb"],
    ["#ffe6ee", "#d84686"],
    ["#fff1cf", "#d99017"],
  ];
  const [bg, c] = palettes[(id - 1) % 4];
  const computer = `<rect x="60" y="30" width="175" height="116" rx="15" fill="#fff" stroke="${c}" stroke-width="5"/><rect x="72" y="43" width="151" height="86" rx="7" fill="${bg}"/><path d="M133 148v16h-30m30 0h41m-1-16v16h24" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`;
  const keyboard = `<rect x="35" y="68" width="240" height="85" rx="17" fill="white" stroke="${c}" stroke-width="5"/>${Array.from({ length: 24 }, (_, i) => `<rect x="${48 + (i % 8) * 27}" y="${80 + Math.floor(i / 8) * 21}" width="20" height="15" rx="4" fill="${i > 7 && i < 16 ? c : bg}"/>`).join("")}<rect x="109" y="143" width="90" height="10" rx="4" fill="${c}"/>`;
  const folders = `<path d="M36 65V44q0-8 8-8h55l20 20h102q12 0 12 12v76H36Z" fill="#ffc858" stroke="#d99518" stroke-width="4"/><path d="M46 79h195l-18 73H29Z" fill="#ffdf88"/><rect x="126" y="38" width="65" height="97" rx="7" fill="white" transform="rotate(12 126 38)"/><path d="M141 61h40m-36 15h35m-31 15h24" stroke="${c}" stroke-width="5"/>`;
  const blocks = `${[0, 1, 2].map((i) => `<path d="M62 ${39 + i * 39}h23v7h20v-7h107v33h-107v7h-20v-7H62Z" fill="${["#ffc33d", "#5878eb", "#a567dd"][i]}"/><path d="M126 ${55 + i * 39}h57" stroke="white" stroke-width="6" stroke-linecap="round"/>`).join("")}<circle cx="248" cy="117" r="24" fill="white"/><path d="m241 104 18 13-18 13Z" fill="${c}"/>`;
  let inner =
    computer +
    `<circle cx="146" cy="85" r="24" fill="${c}"/><path d="m137 85 7 8 14-18" stroke="white" stroke-width="6" fill="none"/>`;
  if ([2, 13].includes(id)) inner = keyboard;
  if (id === 5) inner = folders;
  if (id >= 14) inner = blocks;
  if ([3, 4].includes(id))
    inner =
      computer +
      `<circle cx="152" cy="78" r="26" fill="white" stroke="${c}" stroke-width="6"/><path d="m172 99 22 23" stroke="${c}" stroke-width="10" stroke-linecap="round"/><path d="M98 56h22m-22 15h15" stroke="${c}" stroke-width="4"/>`;
  if (id === 6)
    inner = `<path d="M150 25q35 23 79 24v52q-9 54-79 76-70-22-79-76V49q44-1 79-24" fill="white" stroke="${c}" stroke-width="5"/><rect x="125" y="82" width="53" height="46" rx="9" fill="${c}"/><path d="M134 82V70a17 17 0 0 1 34 0v12" stroke="${c}" stroke-width="8" fill="none"/>`;
  if ([7, 8, 9].includes(id))
    inner =
      computer +
      `<path d="M90 63h61m-61 15h45" stroke="${c}" stroke-width="7" stroke-linecap="round"/><rect x="168" y="62" width="40" height="48" rx="5" fill="#ffce61"/><path d="m172 103 14-19 18 19" fill="#47ad86"/>`;
  if ([10, 11].includes(id))
    inner = `<rect x="74" y="21" width="139" height="156" rx="12" fill="white" stroke="${c}" stroke-width="4"/><path d="M95 55h92m-92 23h72m-72 23h92m-92 23h61m-61 23h49" stroke="${c}" stroke-width="7" stroke-linecap="round"/><path d="m203 127 34-60 15 9-34 60-22 12Z" fill="#ffc95f" stroke="#cc8c26" stroke-width="3"/>`;
  if (id === 12)
    inner = `<path d="M48 152V83h194v69" fill="#ffda68" stroke="#cc9b24" stroke-width="4"/><path d="m33 86 112-61 112 61Z" fill="#d27565"/><rect x="128" y="110" width="36" height="42" fill="#af7460"/><path d="M75 85v-30m145 30v-30" stroke="${c}" stroke-width="3"/><ellipse cx="75" cy="59" rx="13" ry="18" fill="#ed6785"/><ellipse cx="220" cy="59" rx="13" ry="18" fill="#ed6785"/><path d="M34 167h220" stroke="${c}" stroke-width="5"/>`;
  return `<svg class="lesson-art-svg" viewBox="0 0 300 200" role="img" aria-label="Minh họa học tập Tin học"><ellipse cx="151" cy="105" rx="140" ry="83" fill="${bg}"/><circle cx="27" cy="37" r="6" fill="#ffc95f"/><path d="m267 25 3 10 11 3-11 3-3 10-3-10-10-3 10-3Z" fill="${c}" opacity=".6"/>${inner}<circle cx="267" cy="167" r="7" fill="#f28bb5"/></svg>`;
}
