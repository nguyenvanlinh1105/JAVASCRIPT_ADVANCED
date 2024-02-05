# Strict mode : báo lỗi hoặc ngăn chặn khi sử dụng những đoạn mã không an toàn hay dễ gay nhầm lẫn 
# Cách sử dụng 
    1. Thêm "use strict"; vào đầu file.js 
    2. thêm "use strict"; vào ngay sau thẻ mở <script>
    3. Thêm "use strict"; vào đầu phạm vi hàm 
# Đặc trưng
    - Không thể khai bao biến mà không sử dụng từ khóa var, let, const
    - ví dụ: 
        fullName:'Nguyen Van An'// tạo ra biế //fullName ở phạm vi global 
        function testfunc(){
            age = 18; tạo ra biến ở phạm vi globel 
        }
- Báo lỗi khi gắn lại giá trị cho thuộc tính có writable : false
- Báo lỗi khi hàm có tham số trùng tên 
- Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block 
- Không thể đặt tên biến tên hàm bằng từ khóa "nhạy cảm của ngôn ngữ"

# Công dụng 
1. Tránh quên từ khoa khai báo biên s
2. Tránh trùng tên biến dẫn tới lỗi logic 
3. Sử dụng bộ nhớ hiệu quả vì tránh được tạo biến global 