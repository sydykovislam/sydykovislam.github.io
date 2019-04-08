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

let sendBtn = document.querySelector(".sendBtn");
sendBtn.addEventListener("click", sendLetter);

function sendLetter() {
  const user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    letter: document.querySelector("#textarea").value
  };

  if (user.name.length > 5 && user.email.length > 5 && user.letter.length > 5) {
    axios
      .post(
        "https://my-personal-9e097.firebaseio.com/contacts.json",
        // name: "Islam",
        // email: "islamsydykov",
        // letter: "lakjd;fkjas"

        user
      )
      .then(response => {
        alert("Success");
      })
      .catch(error => {
        alert("error");
      });
  } else {
    alert("Fill all the data, please");
  }
}
