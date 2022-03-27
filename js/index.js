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