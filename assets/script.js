// Initialize Swiper 
let body = document.getElementsByTagName('body')[0];
let bar = document.getElementById('bars');
let menu = document.getElementById('mobileMenu');
bar.addEventListener("click", openMobile);

function openMobile(){
    body.classList.toggle("hiddenOverflow");
    menu.classList.toggle("displayMobile");
}