/* Here goes your JS code */

window.addEventListener("DOMContentLoaded", () => {
  const btnOpen = document.getElementById("show-popup-form");
  const btnClose = document.querySelector(".popup__close-btn");
  const popup = document.querySelector(".popup");
  const form = document.querySelector(".popup__form");

  const showPoup = () => popup.classList.add("is-visible");
  const hidePopup = () => popup.classList.remove("is-visible");

  const formSubmit = e => {
    e.preventDefault();
    const emailInput = document.getElementById("popupEmail").value;
    const passwordInput = document.getElementById("popupPassword").value;
    const checkboxInput = document.getElementById("popupCheckbox").checked;

    if (!emailInput && !passwordInput && !checkboxInput) {
      alert("Please fill all the fields");
    } else if (!emailInput) {
      alert("Please fill email field");
    } else if (!passwordInput) {
      alert("Please fill password field");
    } else if (!checkboxInput) {
      alert("Please accept the terms and conditions");
    }
  };

  form.addEventListener("submit", formSubmit);
  btnClose.addEventListener("click", hidePopup);
  btnOpen.addEventListener("click", showPoup);
});
