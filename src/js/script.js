function setCircleBGC(color) {
    const circleColor = document.querySelector('.circle')
    circleColor.style.background = color; 
}

function ChangeProductImg(image) {
    document.querySelector('.product').src = image
}

function menuOpenClose() {
    let menuIcon = document.querySelector('.menu_icon');
    let menu = document.querySelector('.menu');

    menuIcon.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}