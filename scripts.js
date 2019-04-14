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
}

contactsModalBtn.addEventListener("click", openModal);
contactsModalBtn2.addEventListener("click", openModal);
contBackdrop.addEventListener("click", closeModal);

// let sendBtn = document.querySelector(".sendBtn");
// let buttonText = document.querySelector(".tick");

// const tickMark =
//   '<svg width="58" height="45" viewBox="0 0 58 45" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="nonzero" d="M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65"/></svg>';

// buttonText.innerHTML = "Send";

// sendBtn.addEventListener("click", function() {
//   if (buttonText.innerHTML === "Send") {
//     buttonText.innerHTML = tickMark;
//     this.classList.toggle("button__circle");
//   }
// });

//Router scripts

const links = document.querySelectorAll(".nav-switchers");
const btnLinks = document.querySelectorAll(".btn-readmore");

const articles = document.querySelectorAll("article");

function pageSwitcher(handler) {
  handler.forEach(link => {
    link.addEventListener("click", event => {
      articles.forEach(article => {
        article.className = "";
        if (article.id == "home" && link.id == "home-link") {
          article.className = "container-fluently show";
        }
        if (article.id == "about-me" && link.id == "about-me-link") {
          article.className = "container-fluently show";
        }
        if (article.id == "services" && link.id == "services-link") {
          article.className = "show";
        }
        if (article.id == "portfolio" && link.id == "portfolio-link") {
          article.className = "container-fluently show";
        }
      });
    });
  });
}
pageSwitcher(links);
pageSwitcher(btnLinks);

//Send letter

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let letter = document.querySelector("#textarea");
let formInputs = document.querySelector(".form-inputs");

nameInput.addEventListener("change", function() {
  nameTruth = false;

  if (this.value.length > 2) {
    this.className = "form-control form-inputs";
    nameTruth = true;
  } else {
    this.className = "form-control form-inputs error-input";
  }
});

emailInput.addEventListener("change", function() {
  emailTruth = false;

  if (this.value.length > 5) {
    this.className = "form-control form-inputs";
    emailTruth = true;
  } else {
    this.className = "form-control form-inputs error-input";
  }
});

let sendBtn = document.querySelector(".sendBtn");
// sendBtn.disabled = true;

letter.addEventListener("change", function() {
  letterTruth = false;

  if (this.value.length > 10) {
    this.className = "form-control form-inputs";
    letterTruth = true;
  } else {
    this.className = "form-control form-inputs error-input";
  }
});

// formInputs.addEventListener("change", function() {
//   if (letterTruth == true && emailTruth == true && nameTruth == true) {
//     sendBtn.disabled = false;
//   } else {
//     sendBtn.disabled = true;
//   }
// });

sendBtn.addEventListener("click", sendLetter);

function sendLetter() {
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    letter: letter.value
  };

  axios
    .post(
      "https://my-personal-9e097.firebaseio.com/contacts.json",

      user
    )
    .then(response => {
      alert("Success");
    })
    .catch(error => {
      alert("error");
    });
}
