"use strict";
let englishPlayer = null,
  englishTimer = null,
  englishToken = 0;
function audioKey(s) {
  return String(s).toLowerCase().replace(/’/g, "'").replace(/\s+/g, " ").trim();
}
function stopEnglish() {
  englishToken++;
  if (englishTimer) {
    clearInterval(englishTimer);
    englishTimer = null;
  }
  if (englishPlayer) englishPlayer.pause();
}
function stopProgram() {
  stopEnglish();
}
async function playEnglish(text) {
  stopEnglish();
  const token = englishToken,
    clip = AUDIO_BANK[audioKey(text)];
  if (!clip) {
    notify("Chưa có âm thanh cho câu này. Em luyện cùng thầy cô nhé.");
    return false;
  }
  try {
    if (!englishPlayer) {
      englishPlayer = new Audio(BASE + "assets/english-audio.mp3");
      englishPlayer.preload = "auto";
      englishPlayer.id = "english-player";
      englishPlayer.hidden = true;
      document.body.appendChild(englishPlayer);
    }
    const a = englishPlayer;
    if (a.readyState < 1)
      await new Promise((resolve, reject) => {
        a.addEventListener("loadedmetadata", resolve, { once: true });
        a.addEventListener("error", reject, { once: true });
        a.load();
      });
    if (token !== englishToken) return false;
    a.playbackRate = [0.8, 1, 1.1].includes(courseDB.settings.englishRate)
      ? courseDB.settings.englishRate
      : 1;
    a.volume = Math.max(
      0.05,
      Math.min(1, Number(courseDB.settings.volume) || 0.5),
    );
    a.currentTime = clip[0];
    const end = clip[0] + clip[1];
    const trim = () => {
      if (token !== englishToken || a.currentTime >= end) {
        a.pause();
        clearInterval(englishTimer);
        englishTimer = null;
      }
    };
    a.ontimeupdate = trim;
    await a.play();
    if (token !== englishToken) {
      a.pause();
      return false;
    }
    englishTimer = setInterval(trim, 25);
    return true;
  } catch {
    if (token !== englishToken) return false;
    notify(
      "Chưa phát được âm thanh. Em mở website trong thẻ riêng, kiểm tra loa và thử lại nhé.",
    );
    return false;
  }
}
function cleanAnswer(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[’‘]/g, "'")
    .replace(/[.,!?]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\bcolors?\b/g, (m) => (m === "colors" ? "colours" : "colour"))
    .replace(/schoolbag/g, "school bag");
}
const GAME_INFO = [
  ["match", "🧩", "Matching friends", "Ghép cặp từ và nghĩa"],
  ["listen", "🎧", "Listen and choose", "Nghe rồi chọn từ"],
  ["spell", "✏️", "Little spellers", "Gõ từ theo gợi ý"],
  ["build", "🧱", "Build a sentence", "Xếp thẻ thành câu"],
  ["read", "📖", "Read and choose", "Đọc đoạn ngắn và chọn"],
  ["picture", "🖼️", "Picture words", "Nhìn tranh, chọn từ"],
];
function freshWork() {
  return {
    deck: 0,
    showMeaning: true,
    games: {},
    run: null,
    selectedLeft: null,
    pairs: [],
    mistakes: 0,
    speaking: [],
    feedback: "",
  };
}
function currentWork() {
  const r = lessonRecord();
  if (!r.work) r.work = freshWork();
  return r.work;
}
function practicePassed(w) {
  return (
    Object.values(w.games || {}).filter(
      (g) => g.total > 0 && g.correct / g.total >= 0.6,
    ).length >= 3
  );
}
function uniqueWords(words) {
  const arts = new Set();
  return words.filter((v) => {
    if (arts.has(v.art)) return false;
    arts.add(v.art);
    return true;
  });
}
function practiceHTML() {
  if (!activeStudent())
    return joinView("Nhập tên và lớp để giữ thành tích luyện tập nhé.");
  const w = currentWork();
  if (w.run) return gameHTML(w);
  const v = lesson.vocab[w.deck % lesson.vocab.length],
    completed = Object.values(w.games).filter(
      (g) => g.total > 0 && g.correct / g.total >= 0.6,
    ).length;
  return `<section class="lab-banner english-lab"><div><span class="eyebrow">PLAY & PRACTISE · ${lesson.label}</span><h2>Let's learn and play!</h2><p>${lesson.task}</p></div>${lessonIllustration(lesson.id)}</section><div class="practice-stats"><span>🌟 ${completed}/6 trò đạt từ 60%</span><span>🏅 ${lessonRecord().practice ? "Đã đạt dấu thực hành" : "Đạt ít nhất 3 trò khác nhau"}</span></div><section class="panel flash-section"><div><span class="eyebrow">FLASHCARD TIME</span><h2>Thẻ từ biết nói</h2><p>Thẻ ${w.deck + 1}/${lesson.vocab.length} · Bấm nghe và nhắc lại.</p><div class="actions">${button("Thẻ trước", "deck-prev")}${button("Thẻ tiếp", "deck-next")}${button(w.showMeaning ? "Ẩn nghĩa" : "Hiện nghĩa", "deck-flip")}${button("🎲 Thẻ bất ngờ", "deck-spin")}</div></div><article class="big-flashcard">${wordArt(v.art)}<h3 lang="en">${escapeHTML(v.word)}</h3><p>${w.showMeaning ? escapeHTML(v.vi) : "Em thử nhớ nghĩa nhé!"}</p>${button("🔊 Listen & repeat", "en-play", `data-text="${escapeHTML(v.word)}" class="primary"`)}</article></section><section><div class="section-title"><div><span class="eyebrow">CHOOSE YOUR GAME</span><h2>Em muốn chơi trò nào?</h2></div></div><div class="game-library">${GAME_INFO.map(
    ([id, icon, title, vi]) => {
      const g = w.games[id];
      return `<button class="game-tile game-${id}" data-action="game-start" data-game="${id}"><span class="game-bubble">${icon}</span><h3 lang="en">${title}</h3><p>${vi}</p><b>${g ? `⭐ Tốt nhất ${g.correct}/${g.total}` : "Cùng thử nhé!"}</b></button>`;
    },
  ).join(
    "",
  )}</div></section><section class="panel speaking-card"><span class="eyebrow">SPEAK WITH A FRIEND</span><h2>Nghe và luyện nói theo</h2><p>Tự luyện hoặc đổi vai cùng bạn. Dấu bên dưới là tự ghi nhận đã luyện, không phải điểm phát âm.</p>${lesson.patterns.map((p, i) => `<article class="speaking-line"><div><b lang="en">${escapeHTML(p.q)}</b><p lang="en">${escapeHTML(p.a)}</p></div><div class="actions">${button("🔊 Nghe câu mẫu", "en-play", `data-text="${escapeHTML(p.a)}"`)}${button(w.speaking.includes(i) ? "✓ Đã luyện nói" : "Em đã luyện nói", "speak-done", `data-index="${i}"`)}</div></article>`).join("")}</section><section class="panel next-action"><div><h2>Ready for a challenge?</h2><p>Thử thách ${lesson.quiz.length} câu có giải thích giúp em ôn lại.</p></div>${button("🚀 Bắt đầu thử thách", "view", 'data-view="quiz" class="primary"')}</section><p class="hint">Âm thanh tổng hợp tham khảo, không phải bản thu SGK. Ứng dụng không thu âm và không tự chấm phát âm.</p>`;
}
function makeChoices(correct, others) {
  return mix([
    correct,
    ...mix([...new Set(others.filter((x) => x !== correct))]).slice(0, 3),
  ]);
}
function makeRun(id) {
  if(!GAME_INFO.some(g=>g[0]===id)) return;
  stopEnglish();
  const w = currentWork();
  w.run = {
    id,
    index: 0,
    correct: 0,
    answered: false,
    feedback: "",
    done: false,
    heard: false,
    selected: null,
    typed: "",
    order: [],
    questions: [],
  };
  const run = w.run;
  if (id === "match") {
    const pool = uniqueWords(lesson.vocab);
    run.items = mix(pool).slice(0, Math.min(4, pool.length));
    run.left = mix(run.items.map((_, i) => i));
    run.right = mix(run.items.map((_, i) => i));
    run.pairs = [];
    run.leftPick = null;
    run.mistakes = 0;
    run.total = run.items.length;
    return;
  }
  if (["listen", "spell", "picture"].includes(id)) {
    const pool = lesson.vocab;
    run.questions = mix(pool)
      .slice(0, 4)
      .map((v) => ({
        word: v.word,
        vi: v.vi,
        art: v.art,
        options: makeChoices(
          v.word,
          pool.map((x) => x.word),
        ),
        answer: v.word,
      }));
  }
  if (id === "build") {
    const candidates = [
      lesson.patterns[0].q,
      lesson.patterns[0].a,
      lesson.patterns[1].q,
      lesson.patterns[1].a,
    ].filter((s) => s.split(" ").length >= 3);
    run.questions = mix([...new Set(candidates)])
      .slice(0, 3)
      .map((sentence) => ({
        sentence,
        tokens: sentence.split(" "),
        tiles: mix(sentence.split(" ").map((word, i) => ({ word, i }))),
        answer: sentence,
      }));
  }
  if (id === "read") {
    const text = cleanAnswer(lesson.reading),
      found = lesson.vocab.filter((v) => text.includes(cleanAnswer(v.word)));
    const rows = [];
    for (const v of found.slice(0, 2)) {
      rows.push({
        q: "Trong đoạn đọc, từ “" + v.word + "” có nghĩa là gì?",
        answer: v.vi,
        options: makeChoices(
          v.vi,
          COURSE_LESSONS.flatMap((l) => l.vocab.map((x) => x.vi)),
        ),
      });
    }
    const lines = lesson.reading.split("\n").filter(Boolean),
      other = COURSE_LESSONS.filter((l) => l.id !== LESSON_ID)
        .map((l) => l.reading.split("\n")[0])
        .filter((x) => !lesson.reading.includes(x));
    rows.push({
      q: "Dòng nào xuất hiện trong đoạn đọc?",
      answer: lines[0],
      options: makeChoices(lines[0], other),
    });
    const present = lesson.patterns
      .flatMap((p) => [
        { en: p.q, vi: p.qvi },
        { en: p.a, vi: p.avi },
      ])
      .filter((p) => text.includes(cleanAnswer(p.en)));
    if (present.length) {
      const p = present[0];
      rows.push({
        q: "Câu trong đoạn đọc “" + p.en + "” có nghĩa là gì?",
        answer: p.vi,
        options: makeChoices(
          p.vi,
          COURSE_LESSONS.flatMap((l) =>
            l.patterns.flatMap((x) => [x.qvi, x.avi]),
          ),
        ),
      });
    }
    while (rows.length < 4) {
      const line = lines[rows.length % lines.length];
      rows.push({
        q: "Chọn dòng được viết trong đoạn đọc.",
        answer: line,
        options: makeChoices(line, other),
      });
    }
    run.questions = rows.slice(0, 4);
  }
  run.total = run.questions.length;
}
function gameHTML(w) {
  const run = w.run,
    info = GAME_INFO.find((g) => g[0] === run.id);
  if (run.done)
    return `<section class="panel game-result"><span class="result-confetti">🎉</span><span class="eyebrow">WELL DONE FOR TRYING!</span><h1>${info[2]}</h1><p>${info[3]}</p><div class="game-score">${run.correct}<small>/${run.total}</small></div><p>${run.correct / run.total >= 0.6 ? "🌟 Trò chơi này đã đạt dấu luyện tập!" : "Mỗi lần thử giúp em nhớ thêm. Chơi lại để luyện nhé!"}</p><div class="actions">${button("Chơi lại", "game-start", `data-game="${run.id}" class="primary"`)}${button("Chọn trò khác", "game-exit")}${button("Làm thử thách", "view", 'data-view="quiz"')}</div></section>`;
  return `<section class="panel game-screen"><div class="game-heading"><div><span class="eyebrow">${lesson.label} · ${info[2]}</span><h1>${info[3]}</h1></div>${button("Chọn trò khác", "game-exit", 'class="ghost"')}</div><div class="progress"><i style="width:${((run.id === "match" ? run.pairs.length : run.index) / run.total) * 100}%"></i></div><p class="game-counter">${run.id === "match" ? `Đã ghép ${run.pairs.length}/${run.total} cặp` : `Câu ${run.index + 1}/${run.total}`}</p>${run.id === "match" ? matchingHTML(run) : roundHTML(run)}<p class="game-feedback feedback ${run.lastCorrect ? "success" : "try"}" role="status">${escapeHTML(run.feedback || "Sẵn sàng chưa? Bắt đầu nhé!")}</p></section>`;
}
function matchingHTML(run) {
  return `<p>Chọn một từ ở cột trái, rồi chọn nghĩa phù hợp ở cột phải. Các cặp đúng sẽ ở lại cùng nhau.</p><div class="matching-board"><div>${run.left.map((i) => button(run.items[i].word, "match-left", `data-index="${i}" class="match-card ${run.leftPick === i ? "picked" : ""}" ${run.pairs.includes(i) ? "disabled" : ""} lang="en"`)).join("")}</div><div>${run.right.map((i) => button(run.items[i].vi, "match-right", `data-index="${i}" class="match-card" ${run.pairs.includes(i) ? "disabled" : ""}`)).join("")}</div></div>`;
}
function roundHTML(run) {
  const q = run.questions[run.index];
  let body = "";
  if (run.id === "listen")
    body = `<div class="listen-orb">🎧</div><p>Nghe rồi chọn từ/cụm từ em nghe được.</p>${button("🔊 Listen again", "round-listen", 'class="primary listen-again"')}<p id="heard-status" class="hint">${run.heard ? "✓ Đã phát âm thanh. Em chọn đáp án nhé." : "Bấm Listen để nghe trước khi chọn."}</p><div class="answer-grid">${q.options.map((o, i) => button(escapeHTML(o), "round-choice", `data-index="${i}" class="quiz-option" ${run.answered ? "disabled" : ""} lang="en"`)).join("")}</div>`;
  if (run.id === "picture")
    body = `<div class="picture-question">${wordArt(q.art)}</div><p class="picture-hint">Gợi ý nghĩa: <b>${escapeHTML(q.vi)}</b>${lesson.unit === 1 ? ` · Từ có ${q.word.replace(/\s/g, "").length} chữ cái` : ""}</p><div class="answer-grid">${q.options.map((o, i) => button(escapeHTML(o), "round-choice", `data-index="${i}" class="quiz-option" ${run.answered ? "disabled" : ""} lang="en"`)).join("")}</div>`;
  if (run.id === "spell") {
    const hint = q.word
      .split("")
      .map((c, i) => (c === " " ? " / " : i === 0 ? c : "_"))
      .join(" ");
    body = `<div class="picture-question">${wordArt(q.art)}</div><p>${escapeHTML(q.vi)}</p><p class="spelling-hint" lang="en">${escapeHTML(hint)}</p><form id="spelling-form"><label>Gõ từ tiếng Anh<input id="spelling-answer" autocomplete="off" autocapitalize="off" spellcheck="false" value="${escapeHTML(run.typed)}" ${run.answered ? "disabled" : ""}></label><button class="primary" type="submit" ${run.answered ? "disabled" : ""}>Kiểm tra từ</button></form>`;
  }
  if (run.id === "build")
    body = `<p>Bấm hoặc kéo thẻ vào khay để xếp thành câu đúng. Dùng hết các thẻ.</p><div id="sentence-tray" class="sentence-tray" aria-label="Khay xếp câu">${run.order.map((index, i) => button(escapeHTML(q.tokens[index]), "tile-remove", `data-index="${i}" class="word-tile in-tray" ${run.answered ? "disabled" : ""} lang="en"`)).join("") || "<span>Thả hoặc chọn thẻ từ vào đây…</span>"}</div><div class="word-tray">${q.tiles.map((t) => button(escapeHTML(t.word), "tile-add", `data-index="${t.i}" data-word-index="${t.i}" draggable="true" class="word-tile" ${run.order.includes(t.i) || run.answered ? "disabled" : ""} lang="en"`)).join("")}</div><div class="actions">${button("Bỏ thẻ cuối", "tile-undo", run.answered ? "disabled" : "")}${button("Kiểm tra câu", "round-check", `class="primary" ${run.answered ? "disabled" : ""}`)}</div>`;
  if (run.id === "read")
    body = `<div class="mini-reading" lang="en">${escapeHTML(lesson.reading).replace(/\n/g, "<br>")}</div><h2>${escapeHTML(q.q)}</h2><div class="answer-grid">${q.options.map((o, i) => button(escapeHTML(o), "round-choice", `data-index="${i}" class="quiz-option" ${run.answered ? "disabled" : ""}`)).join("")}</div>`;
  if (run.answered)
    body += `<div class="round-explanation"><b>${run.lastCorrect ? "✓ Đúng rồi!" : "Mình xem lại nhé!"}</b><p>Đáp án: <span lang="en">${escapeHTML(q.answer)}</span></p>${run.id !== "read" ? button("🔊 Nghe đáp án", "en-play", `data-text="${escapeHTML(q.answer)}"`) : ""}${button(run.index === run.total - 1 ? "Xem kết quả" : "Câu tiếp theo", "round-next", 'class="primary"')}</div>`;
  return body;
}
function saveGame(run) {
  const w = currentWork(),
    prev = w.games[run.id],
    result = {
      correct: run.correct,
      total: run.total,
      date: new Date().toISOString(),
    };
  if (!prev || result.correct / result.total >= prev.correct / prev.total)
    w.games[run.id] = result;
  if (practicePassed(w)) lessonRecord().practice = true;
  persistCourse();
}
function finishRun(run) {
  run.done = true;
  saveGame(run);
  audioCue(run.correct / run.total >= 0.6);
}
function answerRound(value) {
  const run = currentWork().run;
  if (!run || run.done || run.answered) return false;
  if (run.id === "listen" && !run.heard) {
    notify("Em bấm Listen và nghe trước khi chọn nhé.");
    return false;
  }
  const q = run.questions[run.index];
  if (run.id === "build" && run.order.length !== q.tokens.length) {
    notify("Em dùng đủ các thẻ rồi kiểm tra nhé.");
    return false;
  }
  const expected = run.id === "build" ? q.sentence : q.answer;
  const right = cleanAnswer(value) === cleanAnswer(expected);
  run.answered = true;
  run.lastCorrect = right;
  run.feedback = right
    ? "Great! Em làm đúng rồi."
    : "Không sao, xem đáp án rồi cùng nhớ lại nhé.";
  if (right) run.correct++;
  stopEnglish();
  audioCue(right);
  return true;
}
function nextRound() {
  const run = currentWork().run;
  if (!run || !run.answered || run.done) return;
  if (run.index === run.total - 1) finishRun(run);
  else {
    run.index++;
    run.answered = false;
    run.heard = false;
    run.feedback = "";
    run.typed = "";
    run.order = [];
    run.selected = null;
  }
}
async function handlePractice(action, b) {
  if (action === "en-play") {
    await playEnglish(b.dataset.text);
    return;
  }
  if (!activeStudent() || app.view !== "practice") return;
  const w = currentWork(),
    run = w.run,
    i = Number(b.dataset.index);
  if (action === "game-start") {
    makeRun(b.dataset.game);
  } else if (action === "game-exit") {
    stopEnglish();
    w.run = null;
  } else if (action === "deck-prev" || action === "deck-next") {
    stopEnglish();
    w.deck =
      (w.deck + (action === "deck-next" ? 1 : -1) + lesson.vocab.length) %
      lesson.vocab.length;
  } else if (action === "deck-spin") {
    stopEnglish();
    w.deck = Math.floor(Math.random() * lesson.vocab.length);
    w.showMeaning = false;
  } else if (action === "deck-flip") w.showMeaning = !w.showMeaning;
  else if (action === "speak-done") {
    if (!w.speaking.includes(i)) w.speaking.push(i);
  } else if (action === "match-left") {
    if (!run || run.done || run.pairs.includes(i)) return;
    run.leftPick = i;
  } else if (action === "match-right") {
    if (!run || run.done || run.leftPick === null || run.pairs.includes(i))
      return;
    const ok = run.leftPick === i;
    run.lastCorrect = ok;
    if (ok) {
      run.pairs.push(i);
      run.feedback = "✓ " + run.items[i].word + " — " + run.items[i].vi;
    } else {
      run.mistakes++;
      run.feedback = "Chưa khớp. Em xem lại thẻ từ và thử tiếp nhé.";
    }
    run.leftPick = null;
    audioCue(ok);
    if (run.pairs.length === run.total) {
      run.correct = Math.max(0, run.total - run.mistakes);
      finishRun(run);
    }
  } else if (action === "round-listen") {
    if (!run || run.done || run.answered) return;
    const current = run.index,
      ok = await playEnglish(run.questions[current].word);
    if (ok && currentWork().run === run && run.index === current) {
      run.heard = true;
      persistCourse();
      const status = document.querySelector("#heard-status");
      if (status)
        status.textContent = "✓ Đã phát âm thanh. Em chọn đáp án nhé.";
    }
    return;
  } else if (action === "round-choice") {
    if (!run || run.done) return;
    const q = run.questions[run.index];
    if (!answerRound(q.options[i])) return;
  } else if (action === "tile-add") {
    if (!run || run.id !== "build" || run.answered || run.order.includes(i))
      return;
    run.order.push(i);
  } else if (action === "tile-remove") {
    if (!run || run.answered) return;
    run.order.splice(i, 1);
  } else if (action === "tile-undo") {
    if (!run || run.answered) return;
    run.order.pop();
  } else if (action === "round-check") {
    if (!run || run.answered) return;
    const q = run.questions[run.index];
    if (!answerRound(run.order.map((j) => q.tokens[j]).join(" "))) return;
  } else if (action === "round-next") {
    stopEnglish();
    nextRound();
  } else return;
  persistCourse();
  render();
}
function practiceInput(t) {
  const run = currentWork().run;
  if (t.id === "spelling-answer" && run && !run.answered) {
    run.typed = t.value;
    persistCourse();
  }
}
async function practiceChange(t) {
  if (t.id === "english-rate") {
    courseDB.settings.englishRate = Number(t.value);
    persistCourse();
  }
}
function bindPracticeEvents() {
  const root = document.querySelector("#course-app");
  root.addEventListener("submit", (e) => {
    if (e.target.id === "spelling-form") {
      e.preventDefault();
      const run = currentWork().run;
      if (run && answerRound(run.typed)) {
        persistCourse();
        render();
      }
    }
  });
  root.addEventListener("dragstart", (e) => {
    const t = e.target.closest("[data-word-index]");
    if (t && !t.disabled)
      e.dataTransfer.setData("text/plain", t.dataset.wordIndex);
  });
  root.addEventListener("dragover", (e) => {
    if (e.target.closest("#sentence-tray")) e.preventDefault();
  });
  root.addEventListener("drop", (e) => {
    if (!e.target.closest("#sentence-tray")) return;
    e.preventDefault();
    const i = Number(e.dataTransfer.getData("text/plain")),
      r = currentWork().run;
    if (
      !Number.isInteger(i) ||
      i < 0 ||
      !r ||
      r.id !== "build" ||
      i >= r.questions[r.index].tokens.length
    )
      return;
    handlePractice("tile-add", { dataset: { index: String(i) } });
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopEnglish();
  });
  window.addEventListener("pagehide", stopEnglish);
}
