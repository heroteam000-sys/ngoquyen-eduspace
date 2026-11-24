function courseCertificateView() {
  const chosen =
      COURSE_LESSONS.find((l) => l.id === app.certificateLesson) ||
      COURSE_LESSONS[0],
    person = activeStudent(),
    result = person?.lessons?.[chosen.id]?.quiz;
  return `<section class="section-title"><div><span class="eyebrow">GHI NHẬN SỰ CỐ GẮNG CỦA EM</span><h1>Giấy khen học tập</h1><p>${result ? "Giấy ghi kết quả tốt nhất của hồ sơ đang học." : "Em có thể xem mẫu ngay. Hoàn thành thử thách để nhận giấy có kết quả thật."}</p></div></section><div class="certificate-layout"><aside class="panel certificate-controls"><h2>🎨 Góc giấy khen</h2><label>Bài học<select id="certificate-lesson">${COURSE_LESSONS.map((l) => `<option value="${l.id}" ${l.id === chosen.id ? "selected" : ""}>${l.label}. ${l.title}</option>`).join("")}</select></label><label>Loại giấy<select id="certificate-type"><option ${app.certificateType === "GIẤY KHEN" ? "selected" : ""}>GIẤY KHEN</option><option ${app.certificateType === "GIẤY CHỨNG NHẬN" ? "selected" : ""}>GIẤY CHỨNG NHẬN</option></select></label><p><b>${person ? escapeHTML(person.name) : "Tên học sinh"}</b><br>Lớp ${person ? escapeHTML(person.className) : "3/…"}</p><p class="feedback ${result ? "success" : "try"}">${result ? `Kết quả tốt nhất: ${result.correct}/${result.total} câu đúng` : "BẢN XEM TRƯỚC · Chưa có kết quả bài này"}</p><a id="course-png" class="button primary">Tải ảnh PNG</a><a id="course-pdf" class="button secondary">Tải PDF A4</a>${button("In giấy khen", "certificate-print")}${button("Đổi hồ sơ học sinh", "join", 'class="ghost"')}<p class="hint">PDF được tạo trực tiếp, không cần hộp thoại in. Nếu khung nhúng chặn tải, mở website trong thẻ riêng.</p></aside><section class="panel certificate-preview"><div class="panel-heading"><b>🎖️ ${result ? "Giấy khen của em" : "Mẫu giấy khen"}</b><span>A4 nằm ngang</span></div><img id="course-certificate-image" alt="${result ? "Giấy khen" : "Mẫu giấy khen"} ${chosen.label}"><p id="certificate-status" role="status">Đang tạo giấy…</p></section></div>`;
}
function drawCertificate() {
  const chosen =
      COURSE_LESSONS.find((l) => l.id === app.certificateLesson) ||
      COURSE_LESSONS[0],
    person = activeStudent(),
    result = person?.lessons?.[chosen.id]?.quiz;
  const canvas = document.createElement("canvas");
  canvas.width = 2200;
  canvas.height = 1556;
  const c = canvas.getContext("2d");
  if (!c) throw Error("Thiết bị chưa hỗ trợ tạo ảnh.");
  c.fillStyle = "#fffdf7";
  c.fillRect(0, 0, 2200, 1556);
  const gradient = c.createLinearGradient(0, 0, 2200, 1556);
  gradient.addColorStop(0, "#7044ca");
  gradient.addColorStop(0.5, "#cfb7f4");
  gradient.addColorStop(1, "#329d8f");
  c.strokeStyle = gradient;
  c.lineWidth = 14;
  c.strokeRect(42, 42, 2116, 1472);
  c.strokeStyle = "#d4b45d";
  c.lineWidth = 3;
  c.strokeRect(62, 62, 2076, 1432);
  c.textAlign = "center";
  const text = (
    value,
    y,
    size = 36,
    color = "#67517a",
    bold = false,
    max = 1900,
  ) => {
    let s = size;
    do {
      c.font = `${bold ? "bold " : ""}${s}px Arial`;
      if (c.measureText(value).width <= max) break;
      s -= 2;
    } while (s > 24);
    c.fillStyle = color;
    c.fillText(value, 1100, y);
  };
  text(SCHOOL_NAME.toLocaleUpperCase("vi"), 165, 40, "#5c456e", true);
  text("★", 285, 105, "#d6ac43", true);
  text(app.certificateType, 405, 90, "#7340bb", true);
  text("GHI NHẬN SỰ CỐ GẮNG VÀ TINH THẦN HAM HỌC", 465, 28);
  text("Thân tặng em", 545, 30);
  text(person?.name || "Tên học sinh", 635, 76, "#2a887c", true, 1750);
  text("Học sinh lớp " + (person?.className || "3/…"), 700, 38);
  text(
    result
      ? "Đã hoàn thành hoạt động học tập trực tuyến"
      : "Mẫu giấy dành cho hoạt động học tập trực tuyến",
    790,
    34,
  );
  text(
    "Chủ điểm " + chosen.topic + ". " + COURSE_TOPICS[chosen.topic - 1],
    860,
    34,
    "#69517e",
    true,
  );
  text(
    chosen.kind === "review"
      ? chosen.label
      : chosen.label + ". " + chosen.title,
    925,
    44,
    "#673b9d",
    true,
  );
  text("Tiếng Anh 3 · Bộ sách Global Success", 980, 30);
  c.fillStyle = "#e9f6ec";
  c.fillRect(410, 1020, 1380, 85);
  text(
    result
      ? `Thử thách tốt nhất: ${result.correct}/${result.total} câu đúng`
      : "Chưa có kết quả thử thách của bài học",
    1075,
    34,
    "#34816c",
    true,
  );
  text("Chúc em luôn tò mò, chăm chỉ và sáng tạo!", 1170, 31, "#866a95");
  c.textAlign = "left";
  c.font = "30px Arial";
  c.fillStyle = "#83648d";
  c.fillText(
    "Ngày " +
      new Date().toLocaleDateString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
    160,
    1305,
  );
  c.textAlign = "right";
  c.font = "25px Arial";
  c.fillText("THỰC HIỆN ỨNG DỤNG", 2010, 1260);
  c.font = "bold 34px Arial";
  c.fillText(COURSE_AUTHORS[0], 2010, 1310);
  c.fillText(COURSE_AUTHORS[1], 2010, 1360);
  if (!result) {
    c.save();
    c.translate(1100, 800);
    c.rotate(-0.28);
    c.textAlign = "center";
    c.fillStyle = "#7640b221";
    c.font = "bold 110px Arial";
    c.fillText("BẢN XEM TRƯỚC", 0, 0);
    c.restore();
  }
  return canvas;
}
function refreshCourseCertificate() {
  try {
    const canvas = drawCertificate(),
      png = canvas.toDataURL("image/png"),
      pdf = URL.createObjectURL(certificatePdf(canvas));
    app.certificateUrls.forEach((url) =>
      setTimeout(() => URL.revokeObjectURL(url), 60000),
    );
    app.certificateUrls = [pdf];
    document.querySelector("#course-certificate-image").src = png;
    const name =
      "Giay-khen-Tieng-Anh-3-Bai-" +
      COURSE_LESSONS.find((l) => l.id === app.certificateLesson).number;
    for (const [id, url, ext] of [
      ["course-png", png, "png"],
      ["course-pdf", pdf, "pdf"],
    ]) {
      const a = document.getElementById(id);
      a.href = url;
      a.download = name + "." + ext;
    }
    document.querySelector("#certificate-status").textContent =
      "✓ Ảnh và PDF đã sẵn sàng để tải.";
  } catch (error) {
    document.querySelector("#certificate-status").textContent =
      "Chưa tạo được giấy: " + error.message;
  }
}
