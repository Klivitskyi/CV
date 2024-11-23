function changeColor() {
    document.getElementById('box1').style.left = '200px';
}

document.addEventListener("scroll", function() {
    const header = document.querySelector(".sticky-header");

    if (window.scrollY > 50){
        header.style.height = "45px"
        header.style.transition = "all 0.3s ease-in-out"
    }
    else {
        header.style.height = "60px"
    }
})