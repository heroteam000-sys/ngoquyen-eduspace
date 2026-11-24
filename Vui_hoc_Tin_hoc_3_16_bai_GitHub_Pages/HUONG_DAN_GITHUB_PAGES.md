# Đưa cả website Tin học 3 lên GitHub Pages

Trường Tiểu học Ngô Quyền · Trần Thị Quỳnh Trâm và Hồ Thị Cẩm Diêu.

## Quan trọng: dùng cả bộ, không chỉ một tệp

Bản này gồm trang chủ và 16 thư mục bài học. Sau khi giải nén **Vui_hoc_Tin_hoc_3_16_bai_GitHub_Pages.zip**, thầy thấy:

| Tệp / thư mục | Công dụng |
|---|---|
| `index.html` | Trang chủ chọn 16 bài |
| `assets/` | Mã chạy, nội dung, giao diện và phông chữ dùng chung |
| `bai-1/index.html` | Bài 1 đã hoàn thiện, đầy đủ 10 trò chơi |
| `bai-2/index.html` … `bai-16/index.html` | 15 bài còn lại, mỗi bài có kiến thức, thực hành và thử thách |
| `.nojekyll` | Cấu hình xuất bản web tĩnh |
| `FONT-LICENSE.txt` | Giấy phép phông chữ |

**Giữ nguyên tên và cấu trúc các thư mục.** Không đổi tất cả các tệp thành một tên trong cùng thư mục. Không tải nguyên ZIP lên kho rồi mong website tự giải nén.

## 1. Giải nén và kiểm tra

Nháy chuột phải ZIP → Extract All / Giải nén tất cả. Mở thư mục đã giải nén rồi nháy đúp `index.html` để xem. Chọn Bài 2 và thử chuyển về trang chủ. Nếu Windows ẩn đuôi tệp, `index` có thể đã là `index.html`; không thêm đuôi lần nữa.

## 2. Tải lên kho GitHub

1. Đăng nhập GitHub bằng tài khoản của thầy.
2. Mở kho **Vui-hoc-Tin-hoc-3** đã tạo. Nếu chưa tạo, dùng https://github.com/new, chọn Public, bật README rồi Create repository.
3. Trong trang Code, chọn **Add file → Upload files**.
4. Mở thư mục đã giải nén. Chọn **các mục bên trong** gồm `index.html`, `assets`, `bai-1` … `bai-16`, tệp giấy phép và `.nojekyll` nếu đang hiện; kéo thả vào vùng tải lên của GitHub.
5. Không kéo cả thư mục bao ngoài, vì có thể làm trang chủ nằm sai cấp. Khi xem danh sách, cần thấy `index.html`, `assets/...`, `bai-1/index.html`, v.v. chứ không phải `Ten-thu-muc-bao-ngoai/index.html`.
6. Chờ tải xong, nhập mô tả “Đăng website Tin học 3 gồm 16 bài học”, chọn commit vào nhánh main nếu có rồi **Commit changes**.
7. Nếu kho đã có `index.html` cũ, tải bản mới vào đúng vị trí để cập nhật; không tạo `index(1).html`. Các tệp khác đã có không cần xóa nếu không gây xung đột.

Bộ xuất bản dưới 100 tệp, phù hợp thao tác tải qua giao diện GitHub. Nếu không chọn được thư mục trong hộp thoại, dùng cách kéo thả các thư mục từ File Explorer.

## 3. Bật Pages

Trong chính kho này, chọn **Settings → Pages**:

| Mục | Chọn |
|---|---|
| Source | Deploy from a branch |
| Branch | main |
| Folder | /(root) |

Nhấn Save. Chờ GitHub triển khai rồi tải lại trang Settings → Pages. Lấy đường link tại **Your site is live at… / Visit site** để chia sẻ.

Địa chỉ thường theo dạng `https://TEN-TAI-KHOAN.github.io/Vui-hoc-Tin-hoc-3/`. Đây chỉ là mẫu; dùng đúng địa chỉ GitHub báo sau khi xuất bản. Mỗi bài có đường dẫn con `/bai-1/`, `/bai-2/`…

## Nếu có lỗi

- **404:** kiểm tra `index.html` ở thư mục gốc và cấu hình main + /(root); chờ triển khai xong.
- **Trang không có màu hoặc nút không chạy:** kiểm tra đã tải đủ `assets/`; không đổi tên các tệp bên trong.
- **Chỉ mở được trang chủ:** kiểm tra đủ các thư mục `bai-1` đến `bai-16` và tệp `index.html` trong từng thư mục.
- **Vẫn thấy bản cũ:** chờ triển khai xong, sau đó tải lại bằng Ctrl+F5.
- **Điểm cũ không xuất hiện:** website GitHub là địa chỉ mới nên có dữ liệu trình duyệt riêng. Xuất JSON từ nơi học cũ rồi nhập lại. JSON Bài 1 cũ nhập tại Bài 1; JSON toàn chương trình nhập tại Thành tích ở trang chủ.

## Nội dung và chức năng

- 16 bài theo 6 chủ đề của mục lục đã cung cấp.
- Bài 1 giữ nguyên ngân hàng 162 câu hỏi/tình huống và 10 trò chơi.
- Bài 2–16: mỗi bài 3 phần kiến thức, phòng thực hành theo nội dung riêng, 8 câu hỏi bốn lựa chọn (120 câu mới), giải thích và ôn câu sai.
- Hồ sơ chung cho các bài trên cùng website và trình duyệt. Điểm thử thách mỗi bài quy đổi về 100, toàn bộ tối đa 1.600 điểm. Điểm trò chơi riêng của Bài 1 vẫn xem trong Bài 1.
- Giấy khen/giấy chứng nhận theo từng bài: xem mẫu, PNG và PDF A4 trực tiếp. Hoàn thành thử thách để ghi kết quả thật, kể cả lượt chưa đạt điểm cao; giấy ghi nhận tham gia và cố gắng.
- Bài 11 xuất sản phẩm trình chiếu HTML; Bài 16 xuất thiệp HTML. Không giả định đây là tệp PowerPoint.
- Các thao tác tắt máy, quản lí thư mục trong bài là mô phỏng an toàn; không thay đổi ổ đĩa hoặc tắt máy thật. Bài 13 cần chuột thật để luyện đủ thao tác, có cách khám phá bằng cảm ứng nhưng không tự nhận là thao tác chuột.
- Tên/lớp và kết quả lưu tại máy người dùng; không có máy chủ tổng hợp điểm tự động. Có xuất/nhập JSON và CSV để giáo viên tổng hợp.
- Giọng đọc tiếng Việt phụ thuộc thiết bị; chữ và hoạt động vẫn sử dụng được khi không có giọng.

Nguồn đối chiếu chương trình: https://sachdientu.nxbgd.vn/thu-vien-so/doc-sach/sgv-tin-hoc-3.4484742358
Kiến thức hành tinh: https://science.nasa.gov/solar-system/planets/
GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Bản giao diện minh họa mới

- Trang chủ có bìa SGK Tin học 3 do thầy cung cấp, phối màu cam, xanh trời và xanh ngọc.
- Có 16 tranh SVG tự biên soạn theo nội dung bài học, luôn sắc nét khi thay đổi kích thước. Bài 1 có thêm bìa sách nhỏ và tranh tình huống.
- Các trò chơi, thực hành, lưu hồ sơ, điểm và giấy khen giữ tương thích với bản trước trên cùng website. Không đổi khóa lưu dữ liệu.
- Hình bìa trong `assets/book-cover.png` thuộc tài liệu SGK của Nhà xuất bản Giáo dục Việt Nam. Tranh minh họa trong ứng dụng do ứng dụng tự biên soạn, không phải tranh trích nguyên SGK.
- Khi cập nhật website cũ: tải lại `index.html`, **toàn bộ** `assets` và `bai-1` … `bai-16`; không chỉ thay riêng trang chủ. Không đổi địa chỉ kho để hồ sơ cũ tiếp tục dùng trên cùng trình duyệt.
- Kết quả lưu riêng từng trình duyệt, không tự đồng bộ giữa máy. Nên xuất JSON trước khi cập nhật hoặc chuyển máy.
