/* Here goes your JS code */

window.addEventListener("DOMContentLoaded", () => {
  const btnOpen = document.getElementById("show-popup-form");
  const btnClose = document.querySelector(".popup__close-btn");
  const popup = document.querySelector(".popup");
  const form = document.querySelector(".popup__form");

  const showPoup = () => popup.classList.add("is-visible");
  const hidePopup = () => popup.classList.remove("is-visible");

  const displaySuccesMsg = () => {
    const sectionMain = document.querySelector(".main");
    btnOpen.style.display = "none";
    const msg = document.createElement("h1");
    msg.style.fontFamily = "Lobster, cursive";
    msg.style.fontSize = "42px";
    msg.textContent = "Thank You!";
    sectionMain.appendChild(msg);
  };

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
    } else {
      setTimeout(() => {
        hidePopup();
        displaySuccesMsg();
      }, 3000);
    }
  };

  form.addEventListener("submit", formSubmit);
  btnClose.addEventListener("click", hidePopup);
  btnOpen.addEventListener("click", showPoup);
});
