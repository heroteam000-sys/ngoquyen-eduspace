function certificatePdf(canvas) {
  const image = Uint8Array.from(
    atob(canvas.toDataURL("image/jpeg", 0.96).split(",")[1]),
    (char) => char.charCodeAt(0),
  );
  const encode = (text) => new TextEncoder().encode(text);
  const chunks = [];
  let size = 0;
  const append = (part) => {
    chunks.push(part);
    size += part.length;
  };
  const positions = [0];
  append(encode("%PDF-1.4\n"));
  const object = (number, contents) => {
    positions[number] = size;
    append(encode(`${number} 0 obj\n${contents}\nendobj\n`));
  };
  object(1, "<< /Type /Catalog /Pages 2 0 R >>");
  object(2, "<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  object(
    3,
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 841.89 595.28] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>",
  );
  positions[4] = size;
  append(
    encode(
      `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.length} >>\nstream\n`,
    ),
  );
  append(image);
  append(encode("\nendstream\nendobj\n"));
  const commands = "q\n817.89 0 0 578.38 12 8.45 cm\n/Im0 Do\nQ\n";
  object(
    5,
    `<< /Length ${encode(commands).length} >>\nstream\n${commands}endstream`,
  );
  const xref = size;
  append(encode("xref\n0 6\n0000000000 65535 f \n"));
  for (let index = 1; index <= 5; index++)
    append(encode(`${String(positions[index]).padStart(10, "0")} 00000 n \n`));
  append(
    encode(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`),
  );
  return new Blob(chunks, { type: "application/pdf" });
}
