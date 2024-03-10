// Đối tượng lưu trữ số lượt truy cập
let userCount = 0;

// Chức năng khi click vào nút mua hàng
function buyNow() {
    alert("Bạn đã thêm sản phẩm vào giỏ hàng!");
}

// Chức năng hiển thị số lượt truy cập cùng lúc
function updateOnlineUsers() {
    userCount++;
    document.getElementById("user-count").textContent = userCount;
}

// Chức năng khi click vào nút liên hệ Zalo
function contactZalo() {
    alert("Liên hệ Zalo(091.339.1484) để biết thêm chi tiết!");
}

// Cập nhật số lượt truy cập mỗi 5 giây
setInterval(updateOnlineUsers, 10000);
