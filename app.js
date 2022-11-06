const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
   nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
   nav.classList.remove("menu-btn");
});

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
   input.addEventListener("blur", (event) => {
      if (event.target.value) {
         input.classList.add("is-valid");
      } else {
         input.classList.remove("is-valid");
      }
   });
});
