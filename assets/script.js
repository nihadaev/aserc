// Initialize Swiper 
let body = document.getElementsByTagName('body')[0];
let bar = document.getElementById('bars');
let menu = document.getElementById('mobileMenu');
bar.addEventListener("click", openMobile);

function openMobile(){
    body.classList.toggle("hiddenOverflow");
    menu.classList.toggle("displayMobile");
}

function printSection(){
    var printwin = window.open("");
    printwin.document.write(document.getElementsByClassName("main-center_side")[0].innerHTML);
    printwin.print();
}

let printBtn = document.getElementsByClassName('print')[0];
printBtn.addEventListener("click", printSection);