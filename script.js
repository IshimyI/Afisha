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
