document.querySelector("form").addEventListener("submit", formSubmit);
var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];
function formSubmit(event) {
  event.preventDefault();
  var f_name = document.querySelector("#f_name").value;
  var l_name = document.querySelector("#l_name").value;
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;

  var userData = {
    first: f_name,
    last: l_name,
    emailadd: email,
    password: pass,
  };

  userStack.push(userData);

  console.log(userStack);
  localStorage.setItem("userDataBase", JSON.stringify(userStack));
  alert("Your Account has been Successfully Created");
  window.location.href = "signin.html";
}