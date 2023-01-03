const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmpassword");
const fullname = document.getElementById("fullname");
const phone = document.getElementById("phone");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  // if (checkRequired(fullname) == false && checkRequired(username) == false && checkRequired(email) == false && checkRequired(phone) == false && checkRequired(password) == false && checkRequired(password2) == false) {
  window.location.href = "../index_sesudahLogin.html";
  // }
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkPasswordsMatch(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, "Password do not match");
  }
}

function checkLength(input, min, max) {
  if (input.value.length <= min) {
    showError(input, `${getFieldName(input)} must be more than ${min} characters`);
  } else if (input.value.length >= max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([fullname, username, email, phone, password, password2]);
  checkLength(fullname, 2, 50);
  checkLength(username, 3, 50);
  checkLength(password, 6, 25);
  checkLength(phone, 10, 13);
  checkEmail(email);
  if (password2.value !== "") {
    checkPasswordsMatch(password, password2);
  }
});
