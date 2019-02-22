var link = document.querySelector(".address-btn");
var write = document.querySelector(".write");
var close = write.querySelector(".write-close");
var form = write.querySelector("form");
var name = write.querySelector("[name=name]");
var email = write.querySelector("[name=email]");
var message = write.querySelector("[name=message]");

var isStorageSupport = true;
var nameStorage = "";
var emailStorage = "";
  
try {
  nameStorage = localStorage.getItem("name");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt){
  evt.preventDefault();
  write.classList.add("write-show");

  if (nameStorage) {
    name.value = nameStorage;
    email.value = emailStorage;
    message.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  write.classList.remove("write-show");
  write.classList.remove("write-error");
});

form.addEventListener("submit", function(evt){
  if (!name.value || !email.value || !message.value) {
  evt.preventDefault();
  write.classList.remove("write-error");
  write.offsetWidth = write.offsetWidth;
  write.classList.add("write-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (write.classList.contains("write-show")) {
      write.classList.remove("write-show");
      write.classList.remove("write-error");
    }
  }
});