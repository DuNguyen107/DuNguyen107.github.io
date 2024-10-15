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
