import sushiImage from "./sushi.jpg";


function pageLoad() {

    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Best Sushi restaurant in the world!";
    headline.classList.add("headline");
    
    const img = document.createElement("img");
    img.src = sushiImage;
    img.classList.add("sushi-image");
    img.style.width = "700px";
    img.style.height = "auto";
    
    const text = document.createElement("p");
    text.textContent = "Step into a world of exquisite flavors and unparalleled craftsmanship at [Restaurant Name], where sushi transcends food and becomes an art form. Nestled in the heart of [City/Location], our award-winning sushi restaurant combines the finest, freshest ingredients with the precision of time-honored techniques. Every bite tells a story — from the melt-in-your-mouth otoro to the delicate umami of uni, each dish is meticulously prepared by master chefs dedicated to perfection. Pair your meal with our curated selection of sake and immerse yourself in an unforgettable culinary journey. Experience sushi as it was meant to be. Reserve your table today and discover why we’re celebrated as the best sushi restaurant in the world."
    text.classList.add("restaurant-text");

    contentDiv.append(headline, img, text);
}

export default pageLoad;
