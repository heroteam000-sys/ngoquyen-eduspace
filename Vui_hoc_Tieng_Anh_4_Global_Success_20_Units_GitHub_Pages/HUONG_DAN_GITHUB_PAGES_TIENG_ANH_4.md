# Đưa Vui học Tiếng Anh 4 lên GitHub Pages

**Trường Tiểu học Ngô Quyền** · Thực hiện ứng dụng: **Trần Thị Quỳnh Trâm – Hồ Thị Cẩm Diêu**.

## Cách dễ nhất: bản đã dựng sẵn

1. Tải và giải nén `Vui_hoc_Tieng_Anh_4_Global_Success_20_Units_GitHub_Pages.zip`.
2. Đăng nhập GitHub. Tạo kho mới, ví dụ `vui-hoc-tieng-anh-4`, chọn Public.
3. Trong kho, chọn **Add file → Upload files**. Kéo toàn bộ **nội dung bên trong** thư mục đã giải nén: `index.html`, `assets`, `unit-1` đến `unit-20`, `review-1` đến `review-4`, các tệp hướng dẫn và giấy phép. Không tải chính tệp ZIP và không bọc chúng trong một thư mục cấp ngoài.
4. Chọn **Commit changes** để lưu.
5. Vào **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
6. Chọn nhánh **main**, thư mục **/(root)**, bấm **Save**.
7. Chờ GitHub hoàn tất triển khai, mở liên kết **Visit site** trong trang Pages. Đây là liên kết để gửi học sinh. Khi cập nhật, tải lại các tệp thay đổi, lưu và đợi triển khai lại.

Nếu dùng tên tài khoản `heroteam000-sys` và đúng tên kho ở trên, địa chỉ dự kiến là `https://heroteam000-sys.github.io/vui-hoc-tieng-anh-4/`. Đây chỉ là cấu trúc địa chỉ dự kiến; lấy liên kết thực tế từ Visit site sau khi GitHub triển khai.

## Nếu chưa chạy đúng

- Trang trắng/404: kiểm tra `index.html` có ở ngay gốc kho, Pages đã chọn đúng nhánh và /(root), xem Actions để biết đợt triển khai đã xong chưa.
- Mất ảnh/trò chơi/âm thanh: tải đủ thư mục assets và các thư mục bài. Giữ nguyên tên và chữ hoa/chữ thường.
- Nghe không phát: bấm nút nghe, bật loa và kiểm tra âm lượng. Mở trang trong thẻ trình duyệt riêng. Tệp âm thanh nằm tại assets/english-audio.mp3.
- Giấy khen: mở mục Giấy khen, chờ ảnh hiện rồi bấm Tải PNG hoặc Tải PDF A4. Có thể lưu bản mẫu; điểm thật chỉ xuất hiện sau khi làm thử thách bài tương ứng.
- Điểm không hiện ở máy khác: điểm lưu riêng mỗi trình duyệt. Xuất JSON ở Thành tích rồi nhập sang máy mới.

## Phạm vi học liệu

Đủ 20 Units, 4 Review & Extension activities (sau mỗi năm Unit), 248 câu hỏi và tám dạng trò chơi. Âm thanh là giọng tổng hợp tham khảo, không phải bản thu chính thức SGK; không tự chấm phát âm. Bài tập được biên soạn bổ trợ theo từ vựng/mẫu câu của sách. Không có thu phí, khóa API, tài khoản học sinh trực tuyến hoặc đồng bộ điểm máy chủ.

## Dùng mã nguồn / Google AI Studio

Giải nén bản `Ma_nguon_Tieng_Anh_4_Global_Success_20_Units.zip`. Nhập các tệp dự án vào môi trường hỗ trợ dự án web; tham khảo AI_STUDIO_PROMPT.md. Chạy npm run build để tạo dist, npm test để kiểm tra, npm run dev để xem. Giao diện AI Studio có thể thay đổi; bản GitHub Pages đã dựng sẵn không cần bước này.
