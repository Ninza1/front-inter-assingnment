
let images = document.getElementById("slider-img");

let imgArr = ["bg5.jpg", "bg6.jpg", "bg7.jpg", "bg9.jpg"]
let i = 0;
function slider() {
    console.log("run func")
    if (i > imgArr.length - 1) {
        i = 0;
    }
    images.src = `./images/${imgArr[i]}`
    i++
    setTimeout(() => {
        slider();
    }, 3000);
}
slider()

// header =================
let nav = document.getElementById("nav");

function menuOpen() {
        nav.style.left = "50%"
}
function menuClose() {
        nav.style.left = "100%"
}



