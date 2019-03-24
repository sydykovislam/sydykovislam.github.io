let contactsModalBtn = document.querySelector(".contacts-div");
let contactsModal = document.querySelector(".contacts-modal");
let contBackdrop = document.querySelector(".backdrop");

function openModal() {
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  // document.contactsModal.style.top = scrollHeight + "px";

  contactsModal.className = "contacts-modal modal-on";
  contBackdrop.className = "backdrop modal-on";
}
function closeModal() {
  contactsModal.className = "contacts-modal modal-off";
  contBackdrop.className = "backdrop modal-off";
}

contactsModalBtn.addEventListener("click", openModal);
contBackdrop.addEventListener("click", closeModal);
