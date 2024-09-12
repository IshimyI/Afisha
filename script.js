document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger-menu_button");
  const burgerNav = document.querySelector(".burger-menu_nav");
  const overlay = document.querySelector(".burger-menu_overlay");

  if (burgerButton && burgerNav && overlay) {
    function toggleMenu() {
      burgerNav.classList.toggle("active");
      overlay.classList.toggle("active");
    }

    burgerButton.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });

    overlay.addEventListener("click", toggleMenu);
  } else {
    console.error("One or more elements are missing from the DOM.");
  }
});

const btns = document.querySelectorAll(".grid-item");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("click");
    if (btn.style.backgroundColor === "green") {
      btn.style.backgroundColor = null;
    } else {
      btn.style.backgroundColor = "green";
    }
  });
});

const arrowPrev = document.querySelector(".arrow-prev");
arrowPrev.addEventListener("click", () => {
  console.log("click1");
  addEventListener;
});

const arrowNext = document.querySelector(".arrow-next");
arrowNext.addEventListener("click", () => {
  console.log("click2");
});
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

let currentMonthIndex = 6;

const month = document.querySelector(".months");
if (
  arrowPrev.addEventListener("click", () => {
    currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
    month.textContent = months[currentMonthIndex];
  })
);

if (
  arrowNext.addEventListener("click", () => {
    currentMonthIndex = (currentMonthIndex + 1) % months.length;
    month.textContent = months[currentMonthIndex];
  })
);
