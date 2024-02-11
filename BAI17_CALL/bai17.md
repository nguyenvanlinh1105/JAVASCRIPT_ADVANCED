# Fn.call() giúp gọi hàm và bind this tới đối tượng khác, mặc định là window object 
# Fn.call() không trả ra hàm mới, nó gọi luôn hàm sau khi bind this (Fn.bind() thì chỉ bind this nhưng không gọi hàm)
# Fn.call() dùng để mượn hàm, function borrowing 
# Fn.call có thể dùng để kế thừa properties&method từ 1 constructor khác 