import aboutImageSrc from "./restaurant-interior.jpg";

function aboutLoad() {

    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    

    const aboutDiv = document.createElement("div");
    contentDiv.append(aboutDiv);
    aboutDiv.setAttribute("id", "about");

    const aboutHeadline = document.createElement("h1");
    aboutHeadline.textContent = "About Us";

    const aboutImage = document.createElement("img");
    aboutImage.src = aboutImageSrc;

    // Story
    const storySection = document.createElement("div");
    storySection.classList.add("about-section");

    const storyHeadline = document.createElement("h2");
    storyHeadline.textContent = "Our Story";

    const storyText = document.createElement("p");
    storyText.textContent = "Founded in [Year], [Restaurant Name] has become a beacon for sushi lovers around the world. What started as a humble family-run restaurant in the heart of [City/Location] has grown into an internationally acclaimed dining destination. We take pride in blending traditional Japanese techniques with modern culinary innovations to create an unforgettable experience.";

    storySection.append(storyHeadline, storyText);

    // Philosophy

    const philosophySection = document.createElement("div");
    philosophySection.classList.add("about-section");

    const philosophyHeadline = document.createElement("h2");
    philosophyHeadline.textContent = "Our philosophy";

    const philosophyText = document.createElement("p");
    philosophyText.textContent = "At [Restaurant Name], we believe sushi is more than just food — it’s an art form. Every ingredient we use is carefully selected for its quality, freshness, and flavor. Our master chefs are dedicated to perfecting their craft, ensuring every bite tells a story of tradition, innovation, and passion.";

    philosophySection.append(philosophyHeadline, philosophyText);

    // Why choose us

    const whyUsSection = document.createElement("div");
    whyUsSection.classList.add("about-section");

    const whyUsHeadline = document.createElement("h2");
    whyUsHeadline.textContent = "Why Choose Us?";

    const whyUsText = document.createElement("p");
    whyUsText.textContent = "- Award-winning chefs with decades of experience<br>- Fresh, sustainable ingredients sourced daily<br>- A curated selection of premium sake and beverages<br>- A cozy, inviting atmosphere for unforgettable dining";

    whyUsSection.append(whyUsHeadline, whyUsText);

    // Visit us

    const visitUs = document.createElement("div");
    visitUs.classList.add("cta");

    const visitUsHeadline = document.createElement("h2");
    visitUsHeadline.textContent = "Visit Us Today!";

    const visitUsButton = document.createElement("button");
    visitUsButton.textContent = "Make a Reservation";

    visitUs.append(visitUsHeadline, visitUsButton);

    aboutDiv.append(aboutHeadline, aboutImage, storySection, philosophySection, visitUs);

}

export default aboutLoad;