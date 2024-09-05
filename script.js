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

const arrow1 = document.querySelector(".arrow1");
arrow1.addEventListener("click", () => {
  console.log("click1");
  addEventListener;
});

const arrow2 = document.querySelector(".arrow2");
arrow2.addEventListener("click", () => {
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
  arrow1.addEventListener("click", () => {
    currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
    month.textContent = months[currentMonthIndex];
  })
);

if (
  arrow2.addEventListener("click", () => {
    currentMonthIndex = (currentMonthIndex + 1) % months.length;
    month.textContent = months[currentMonthIndex];
  })
);
