import salmonNigiriSrc from "./salmon-nigiri.jpg";
import tunaNigiriSrc from "./tuna-nigiri.jpg";
import californiaRollSrc from "./california-roll.jpg";
import dragonRollSrc from "./dragon-roll.jpg";

function menuLoad() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const menuDiv = document.createElement("div");
    contentDiv.append(menuDiv);
    menuDiv.setAttribute("id", "menu");

    const menuHeadline = document.createElement("h1");
    menuHeadline.textContent = "Our menu";

    // Nigiri
    const nigiriSection = document.createElement("div");
    nigiriSection.classList.add("menu-section");

    const nigiriHeadline = document.createElement("h2");
    nigiriHeadline.textContent = "Nigiri"

    // Salmon
    const salmonNigiri = document.createElement("div");
    salmonNigiri.classList.add("menu-item");

    const salmonNigiriImg = document.createElement("img");
    salmonNigiriImg.src = salmonNigiriSrc;

    const salmonNigiriInfo = document.createElement("div");
    salmonNigiriInfo.classList.add("menu-item-info");

    const salmonNigiriName = document.createElement("div");
    salmonNigiriName.textContent = "Salmon Nigiri";
    salmonNigiriName.classList.add("menu-item-name");

    const salmonNigiriPrice = document.createElement("div");
    salmonNigiriPrice.textContent = "$6.50";
    salmonNigiriPrice.classList.add("menu-item-price");


    // Tuna
    const tunaNigiri = document.createElement("div");
    tunaNigiri.classList.add("menu-item");

    const tunaNigiriImg = document.createElement("img");
    tunaNigiriImg.src = tunaNigiriSrc;
    const tunaNigiriInfo = document.createElement("div");
    tunaNigiriInfo.classList.add("menu-item-info");

    const tunaNigiriName = document.createElement("div");
    tunaNigiriName.textContent = "Salmon Nigiri";
    tunaNigiriName.classList.add("menu-item-name");

    const tunaNigiriPrice = document.createElement("div");
    tunaNigiriPrice.textContent = "$6.50";
    tunaNigiriPrice.classList.add("menu-item-price");

    // Nigiri append chain
    nigiriSection.append(nigiriHeadline, salmonNigiri, tunaNigiri);

    salmonNigiri.append(salmonNigiriImg, salmonNigiriInfo);
    salmonNigiriInfo.append(salmonNigiriName, salmonNigiriPrice);

    tunaNigiri.append(tunaNigiriImg, tunaNigiriInfo);
    tunaNigiriInfo.append(tunaNigiriName, tunaNigiriPrice);



    // Rolls
    const rollsSection = document.createElement("div");
    rollsSection.classList.add("menu-section")

    const rollsHeadline = document.createElement("h2");
    rollsHeadline.textContent = "Rolls"

    // California
    const californiaRoll = document.createElement("div");
    californiaRoll.classList.add("menu-item");

    const californiaRollImg = document.createElement("img");
    californiaRollImg.src = californiaRollSrc;
    const californiaRollInfo = document.createElement("div");
    californiaRollInfo.classList.add("menu-item-info");

    const californiaRollName = document.createElement("div");
    californiaRollName.textContent = "California Roll";
    californiaRollName.classList.add("menu-item-name");

    const californiaRollPrice = document.createElement("div");
    californiaRollPrice.textContent = "$7.50";
    californiaRollPrice.classList.add("menu-item-price");

    // Dragon

    const dragonRoll = document.createElement("div");
    dragonRoll.classList.add("menu-item");

    const dragonRollImg = document.createElement("img");
    dragonRollImg.src = dragonRollSrc;
    const dragonRollInfo = document.createElement("div");
    dragonRollInfo.classList.add("menu-item-info");

    const dragonRollName = document.createElement("div");
    dragonRollName.textContent = "Dragon Roll";
    dragonRollName.classList.add("menu-item-name");

    const dragonRollPrice = document.createElement("div");
    dragonRollPrice.textContent = "$12.00";
    dragonRollPrice.classList.add("menu-item-price");

    // Rolls append chain
    rollsSection.append(rollsHeadline, californiaRoll, dragonRoll);

    californiaRoll.append(californiaRollImg, californiaRollInfo);
    californiaRollInfo.append(californiaRollName, californiaRollPrice);

    dragonRoll.append(dragonRollImg, dragonRollInfo);
    dragonRollInfo.append(dragonRollName, dragonRollPrice);

    // Sections append chain
    menuDiv.append(menuHeadline, nigiriSection, rollsSection);
}

export default menuLoad;