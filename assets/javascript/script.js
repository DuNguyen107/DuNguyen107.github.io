const adressbtn = document.querySelector('#address-form');
const adressclose = document.querySelector('#address-close');
adressbtn.addEventListener("click", function () { //them 1 su kien
    document.querySelector('.address-form').style.display = 'flex';
    document.body.style.overflow = 'hidden';
})
adressclose.addEventListener("click", function () {//them 1 su kien
    document.querySelector('.address-form').style.display = 'none';
    document.body.style.overflow = 'auto';
})
// banner
document.querySelector('.big-banner .ti-close').addEventListener('click', function () {
    document.querySelector('.big-banner').style.display = 'none';
});
//slide danh sách sản phẩm
// Khai báo biến index ban đầu
let index = 0;

const rightbtn2 = document.querySelector('.ti-angel-right-2');
const leftbtn2 = document.querySelector('.ti-angel-left-2');
const imgNuber2 = document.querySelectorAll('.slider-product-one-content-items');

// Cập nhật trạng thái của các nút
function updateButtonState() {
    // Vô hiệu hóa nút trái nếu đang ở đầu danh sách
    if (index === 0) {
        leftbtn2.disabled = true;
    } else {
        leftbtn2.disabled = false;
    }

    // Vô hiệu hóa nút phải nếu đang ở cuối danh sách
    if (index === imgNuber2.length - 1) {
        rightbtn2.disabled = true;
    } else {
        rightbtn2.disabled = false;
    }
}
// Gọi hàm cập nhật trạng thái ban đầu
updateButtonState();

// Sự kiện click cho nút bên phải
rightbtn2.addEventListener("click", function () {
    if (index < imgNuber2.length - 2) {
        index = index + 1;
        document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
        updateButtonState();
    }
});

// Sự kiện click cho nút bên trái
leftbtn2.addEventListener("click", function () {
    if (index > 0) {
        index = index - 1;
        document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
        updateButtonState();
    }
});

// slile quang cao
const slideContent = document.querySelector('.slider-content');
const imgs = document.querySelectorAll('.slider-content img');
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
let current = 0
const length = imgs.length - 1;
const handleChangeSlide = () => {
    if (current == length - 1) {
        current = 0
        let width = imgs[0].offsetWidth
        slideContent.style.transform = `translateX(0px)`
    } else {
        current++
        let width = imgs[0].offsetWidth
        slideContent.style.transform = `translateX(${width * -1 * current}px)`
    }
}

btnRight.addEventListener('click', () => {
    handleChangeSlide()
})
btnLeft.addEventListener('click', () => {
    if (current == 0) {
        current = length - 1
        let width = imgs[0].offsetWidth
        slideContent.style.transform = `translateX(${width * -1 * current}px)`
    } else {
        current--
        let width = imgs[0].offsetWidth
        slideContent.style.transform = `translateX(${width * -1 * current}px)`
    }
})

//close slide
const slideclose = document.querySelector('.slider-close');
slideclose.addEventListener("click", function () {//them 1 su kien
    document.querySelector('.slider').style.display = 'none';
})

//về công ty
const viewMoreBtn = document.querySelector('.view-more-btn');
const hiddenItems = document.querySelectorAll('.hidden-item');
let isExpanded = false;

viewMoreBtn.addEventListener('click', () => {
    hiddenItems.forEach(item => {
        if (isExpanded) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });

    isExpanded = !isExpanded;
    viewMoreBtn.innerHTML = isExpanded ? 'Thu gọn<i class="ti-angle-up"></i>' : 'Xem thêm<i class="ti-angle-down"></i>';
});

// nav menu
document.querySelectorAll('.products-tabs li').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
        // Xóa lớp active khỏi tất cả các thẻ
        document.querySelectorAll('.products-tabs li').forEach(li => {
            li.classList.remove('active');
        });
        // Thêm lớp active vào thẻ được nhấp
        this.classList.add('active');
    });
});
// countdown
let countdownDuration = 7200; // 7200 giây tương đương 2 tiếng

// Cập nhật countdown mỗi giây
const x = setInterval(function () {
    // Tính toán giờ, phút, giây từ countdownDuration
    const hours = Math.floor((countdownDuration % (3600 * 24)) / 3600);
    const minutes = Math.floor((countdownDuration % 3600) / 60);
    const seconds = countdownDuration % 60;

    // Hiển thị kết quả trong các label
    document.getElementById("hour").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minute").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("second").innerHTML = String(seconds).padStart(2, '0');

    // Giảm countdownDuration mỗi giây
    countdownDuration--;

    // Nếu countdownDuration bằng 0, đặt lại về 2 tiếng
    if (countdownDuration < 0) {
        countdownDuration = 7200; // Reset về 7200 giây (2 tiếng)
    }
}, 1000);