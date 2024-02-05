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
