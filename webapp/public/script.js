history.scrollRestoration = "manual";
window.scrollTo(0, 0);

const exploreBtn = document.querySelector(".node.button");
const cardlines = document.querySelectorAll(".card-line");
const confBtn = document.querySelector(".config-file-button");
const main = document.querySelector("main");
const confFile = document.querySelector(".config-file");
const accordions = document.querySelectorAll(".accordion");

function goToFeatures() {
  main.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openAccordion(accordion) {
  accordions.forEach((item) => {
    item.classList.remove("active");
    item.nextElementSibling.style.maxHeight = null;
  });
  accordion.classList.add("active");
  const content = accordion.nextElementSibling;
  content.style.maxHeight = content.scrollHeight + "px";
}


if (exploreBtn) {
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    goToFeatures();
  });
}

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const isOpen = accordion.classList.contains("active");
    if (isOpen) {
      accordion.classList.remove("active");
      accordion.nextElementSibling.style.maxHeight = null;
    } else {
      openAccordion(accordion);
    }
    goToFeatures();
  });
});

cardlines.forEach((cardline) => {
  cardline.addEventListener("click", () => {
    const section = document.getElementById(cardline.dataset.target);
    if (!section) 
      return;
    openAccordion(section.querySelector(".accordion"));
    goToFeatures();
  });
});

if (confBtn) {
  confBtn.addEventListener("click", (e) => {
    e.preventDefault();
    confFile.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
