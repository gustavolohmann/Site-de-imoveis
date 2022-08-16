const btn_mobile = document.getElementById("btn_mobile");
const btn_mobile_hidden = document.getElementById("btn_hidden");
const menu = document.querySelector(".cabecalho_navegacao");



function hideMenu() {

    if (btn_mobile) {
        btn_mobile.addEventListener("click", () => {
            menu.classList.add("ativaMenu");
        });
    }
    if (btn_mobile_hidden) {

        btn_mobile_hidden.addEventListener("click", () => {
            menu.classList.remove("ativaMenu");
        });
    }

}

hideMenu();


const imgCarrosuel = document.getElementById("img-carrosuel");
const car = [
    '../img-car/home-moderna-2.jpg',
    '../img-car/home-moderna-3.jpg',
    '../img-car/home-moderna-4.jpg',
    '../img-car/home-moderna-5.jpg',
    '../img-car/home-moderna-1.jpg'
];
const changeImgFirst = document.getElementById("change-img-first");
const changeImgSecond = document.getElementById("change-img-second");
let count = 0;
let size = car.length;

function carousel() {
    if (size) {
        count++;
    }
    if (count == size) {
        count = 0;
    }
    imgCarrosuel.src = car[count];
}

changeImgSecond.addEventListener("click", () => {
    carousel();
    imgCarrosuel.classList.add("class-animation-slide");


});
//setInterval(, 2000);

//setInterval(carousel,1000);