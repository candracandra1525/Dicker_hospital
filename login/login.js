const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
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
    showError(input, `${getFieldName(input)} can't be null, must be more than ${min} characters`);
  } else if (input.value.length >= max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// function checknull(input) {
//     if(input.username == null) {
//         showError(
//             input,
//             `${getFieldName(input)} username/email can't be null`
//         );
//     }
//     else if (input.password = null) {
//         showError(
//             input,
//             `${getFieldName(input)} password can't be null`
//         );
//     }
//     else {
//         showSuccess(input);
//     }
// }

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, password]);
  checkLength(username, 6, 25);
  checkLength(password, 6, 25);
  checkPasswordsMatch(password1);
  //   checkEmail(email);
  //   if (password2.value !== "") {
  //     checkPasswordsMatch(password, password2);
  //   }
});
