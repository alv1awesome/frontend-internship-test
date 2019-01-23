/* Here goes your JS code */

window.addEventListener("DOMContentLoaded", () => {
  const btnOpen = document.getElementById("show-popup-form");
  const btnClose = document.querySelector(".popup__close-btn");
  const popup = document.querySelector(".popup");

  const showPoup = () => popup.classList.add("is-visible");
  const hidePopup = () => popup.classList.remove("is-visible");

  btnClose.addEventListener("click", hidePopup);
  btnOpen.addEventListener("click", showPoup);
});
