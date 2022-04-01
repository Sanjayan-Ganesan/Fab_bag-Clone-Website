document.querySelector("form").addEventListener("submit", signin);

  var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));

  function signin(event) {
    event.preventDefault();
    var pass = document.querySelector("#pass").value;
    var user = document.querySelector("#email").value;
var count = 0;
    for (var i = 0; i < regdUsers.length; i++) {
      console.log(regdUsers[i].emailadd, regdUsers[i].password);
      if (regdUsers[i].emailadd == user && regdUsers[i].password == pass) {
        count = 0;
      }else{
          count++;
      }
    }
    if(count == 0){
        alert("login success");
        window.location.href = "/components/index.html";
    }else{
        alert("Your Id is Not Found");
        window.location.href="/components/index.html";
    }
  }