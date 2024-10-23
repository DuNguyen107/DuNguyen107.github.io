const adressbtn = document.querySelector('#address-form');
const adressclose = document.querySelector('#address-close');
adressbtn.addEventListener("click", function () {//them 1 su kien
    document.querySelector('.address-form').style.display = 'flex';
})
adressclose.addEventListener("click", function () {//them 1 su kien
    document.querySelector('.address-form').style.display = 'none';
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
    if (index < imgNuber2.length - 1) {
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