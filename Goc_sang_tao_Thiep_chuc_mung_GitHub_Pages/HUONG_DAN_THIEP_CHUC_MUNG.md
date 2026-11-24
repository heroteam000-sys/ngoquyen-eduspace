# Xưởng thiệp nhỏ – Ngô Quyền EduSpace

Trường Tiểu học Ngô Quyền. Thực hiện: Trần Thị Quỳnh Trâm và Hồ Thị Cẩm Diêu.

## Mở và sử dụng

Giải nén bản chạy sẵn rồi mở `index.html` bằng Chrome hoặc Edge. Toàn bộ font, mẫu, mã giao diện và công cụ xuất ảnh/PDF nằm trong một tệp, không cần cài thư viện hoặc nhập API key. Các chức năng thiết kế và xuất tệp hoạt động khi không có mạng; việc lưu trên trình duyệt có thể khác nhau khi mở bằng đường dẫn file hoặc chế độ riêng tư, vì vậy nên tải JSON để giữ thiết kế.

1. Chọn một trong sáu mẫu: sinh nhật, tri ân thầy cô, năm mới, chúc mừng, gia đình, tình bạn.
2. Nhập người nhận, tiêu đề, lời chúc, tên người gửi, lớp và dòng nhắn cuối. Nút Gợi ý khác chọn một trong ba lời chúc đã biên soạn cho chủ đề; đây không phải dịch vụ AI.
3. Chọn màu, kiểu chữ, cỡ chữ và khổ thiệp ngang/dọc/vuông. Có thể ẩn dòng tên trường. Mẫu mới đổi họa tiết và màu; nội dung người dùng đã sửa được giữ lại, nội dung còn ở dạng mẫu sẽ đổi theo chủ đề.
4. Nếu muốn thêm ảnh, mở mục Thêm ảnh của em, chọn JPG/PNG tối đa 8 MB. Ảnh được thu gọn trên thiết bị, khung thiệp lấy phần giữa ảnh. Có nút bỏ ảnh. Ảnh không được gửi lên máy chủ.
5. Tải PNG, PDF A4 hoặc in. PNG: ngang 1600×1200, dọc 1200×1600, vuông 1400×1400. PDF có một trang A4 và giữ nguyên tỉ lệ, có lề; không kéo méo thiệp.
6. Lưu vào bộ sưu tập để mở lại trên trình duyệt này (tối đa 12 thiết kế). Hoàn tác/làm lại áp dụng cho phiên đang mở. Tải JSON để chuyển thiết kế sang máy khác rồi dùng Mở bản thiết kế JSON.

Bản nháp tự lưu sau khi sửa. Nếu trình duyệt hết chỗ hoặc không cho lưu, ứng dụng thông báo; PNG/PDF/JSON vẫn có thể tải. Không có tự đăng sản phẩm, đồng bộ bộ sưu tập hoặc tự gửi thiệp qua email/mạng xã hội.

## Đưa lên GitHub Pages độc lập

Tạo kho Public, đưa tệp `index.html` và giấy phép font lên gốc kho. Trong Settings → Pages, chọn Deploy from a branch → main → /(root) → Save. Đợi triển khai và lấy liên kết thật tại Visit site. Không tải chính tệp ZIP lên thay cho các tệp bên trong.

## Ghép vào Ngô Quyền EduSpace

Trong cùng kho website EduSpace, tạo đường dẫn:

`goc-sang-tao/thiep-chuc-mung/index.html`

Sao chép `index.html` của ứng dụng này vào đó. Chỉ cần một tệp này để chạy ứng dụng, giữ tệp giấy phép font kèm dự án.

Ở trang chủ EduSpace, thay nút mở công cụ thiệp nhỏ hiện tại:

```html
<button class="button primary" data-open="studio-dialog">🎨 Tạo thiệp của em</button>
```

bằng liên kết mở ứng dụng mới:

```html
<a class="button primary" href="goc-sang-tao/thiep-chuc-mung/index.html">🎨 Tạo thiệp chúc mừng</a>
```

Nếu sửa từ mã nguồn EduSpace, đặt ứng dụng tại `portal/goc-sang-tao/thiep-chuc-mung/index.html`, sửa `portal/index.html`, rồi chạy npm run build. Nếu sửa trực tiếp bộ GitHub Pages đã dựng sẵn, đặt vào đúng thư mục ở gốc kho và sửa index.html tại gốc kho.

Để thêm nút quay về trong ứng dụng khi đã ghép đúng đường dẫn trên, chèn ngay sau thẻ `<body>`:

```html
<a href="../../index.html" style="display:block;padding:12px 24px;color:#8060a5;font:700 14px Arial">Về Ngô Quyền EduSpace</a>
```

Đường dẫn quay về này dành cho vị trí goc-sang-tao/thiep-chuc-mung; nếu đặt thư mục khác phải điều chỉnh cho phù hợp.

## Chỉnh mã nguồn / Google AI Studio

Mã nguồn có trong ZIP riêng: src/index.html, style.css, model.js, draw.js, pdf.js và app.js. Node.js 22 trở lên, không cần npm install: chạy npm run build để tạo dist/index.html; npm test để kiểm tra; npm run dev để xem bản web. Có câu lệnh cho AI Studio trong CAU_LENH_THIEP_CHUC_MUNG.md.
