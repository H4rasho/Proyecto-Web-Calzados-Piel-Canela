const image = document.querySelector('.product-box__img');

image.addEventListener('mousemove', function(e){
    let width = image.offsetWidth;
    let height = image.offsetheight;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    let bgPosX = (mouseX / width *100);
    let bgPosY = (mouseY / width *100);
    image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
});
image.addEventListener('mouseleave', function () {
    image.style.backgroundPosition = "center";
});