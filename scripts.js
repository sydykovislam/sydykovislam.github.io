let contactsModalBtn = document.querySelector(".contacts-div");
let contactsModalBtn2 = document.querySelector("#contacts-nav-btn");
let contactsModal = document.querySelector(".contacts-modal");
let contBackdrop = document.querySelector(".backdrop");

function openModal() {
  contactsModal.className = "contacts-modal modal-on";
  contBackdrop.className = "backdrop backdrop-on";
}
function closeModal() {
  contactsModal.className = "contacts-modal modal-off";
  contBackdrop.className = "backdrop backdrop-off";

  buttonText.innerHTML = "Send";
  sendBtn.classList.toggle("button__circle");
}

contactsModalBtn.addEventListener("click", openModal);
contactsModalBtn2.addEventListener("click", openModal);
contBackdrop.addEventListener("click", closeModal);

let sendBtn = document.querySelector(".button");
let buttonText = document.querySelector(".tick");

const tickMark =
  '<svg width="58" height="45" viewBox="0 0 58 45" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="nonzero" d="M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65"/></svg>';

buttonText.innerHTML = "Send";

sendBtn.addEventListener("click", function() {
  if (buttonText.innerHTML === "Send") {
    buttonText.innerHTML = tickMark;
    this.classList.toggle("button__circle");
  }
});
