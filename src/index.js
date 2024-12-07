import "./styles.css";
import pageLoad from "./page-load.js";
import menuLoad from "./menu.js";
import aboutLoad from "./about.js"

function loadTabs() {
    const homeButton = document.querySelector("#home-btn");
    homeButton.addEventListener("click", () => {
        pageLoad();
    })

    const menuButton = document.querySelector("#menu-btn");
    menuButton.addEventListener("click", () => {
        menuLoad();
    })

    const aboutButton = document.querySelector("#about-btn");
    aboutButton.addEventListener("click", () => {
        aboutLoad();
    })
}

pageLoad();
loadTabs();



