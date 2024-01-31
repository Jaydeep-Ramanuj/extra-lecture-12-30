let userName = document.getElementById("username-input");
let email = document.getElementById("email-input");
let pass = document.getElementById("pass-input");
let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(userName.value);
  console.log(email.value);
  console.log(pass.value);

  checkEmail();
  checkPass();
});

function checkEmail() {
  let emailVal = email.value;
  if (
    emailVal.includes("@") &&
    emailVal.includes(".") &&
    emailVal.length > 3 &&
    emailVal.length < 20
  ) {
    console.log("Yes it is in email format");
  } else {
    console.log("No it isn't in email format");
  }
}

// console.log(userName.value.toUpperCase());

function checkUppercase(value) {
  //   console.log(Array.from(value));

  let flag = false;

  Array.from(value).forEach(function (character, index) {
    // console.log(Array.from(value)[index]);
    // console.log(character.toUpperCase());
    // console.log(Array.from(value)[index] == character.toUpperCase());

    if (!flag) {
      if (Array.from(value)[index] == character.toUpperCase()) {
        flag = true;
        // console.log(flag);
        // return true;
      } else {
        flag = false;
        // return false;
      }
    }
  });
  //   console.log(flag);
  if (flag) return true;
}

function checkIfSymbolExist(value) {
  let specialCharactersList = "!@#$%^&*";

  let flag = false;
  Array.from(value).forEach(function (character) {
    if (!flag) {
      if (specialCharactersList.includes(character)) {
        flag = true;
      }
    }
  });
  //   console.log(flag);
  if (flag) return true;
}

checkIfSymbolExist("aaa#$!");
// console.log(checkUppercase("somethIng"));
function checkPass() {
  let passVal = pass.value;
  //   console.log(passVal);
  let passLen = passVal.length;
  if (
    passLen > 6 &&
    passLen < 16 &&
    checkUppercase(passVal) &&
    checkIfSymbolExist(passVal)
  ) {
    console.log("Valid");
  } else {
    console.log("Not valid");
  }
}
