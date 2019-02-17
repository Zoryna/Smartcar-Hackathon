//open Smartcar authorization dialog
var url = "https://shrouded-ravine-72981.herokuapp.com/";

/* var testGet = document.getElementById("test-get-button");
testGet.addEventListener("click", function() {
  getFromServer(url);
});

var testPost = document.getElementById("test-post-button");
testPost.addEventListener("click", function() {
  sendToServer(url);
}); */
var connectYourCar = document.getElementById("connect-your-car");
connectYourCar.addEventListener("click", function() {
  smartcar.openDialog();
});

const smartcar = new Smartcar({
  clientId: "a6496c45-e5f7-459e-bfef-5efc6282e74e",
  redirectUri:
    "https://javascript-sdk.smartcar.com/redirect-2.0.0?app_origin=https://shrouded-ravine-72981.herokuapp.com",
  scope: ["read_vehicle_info", "read_odometer"],
  onComplete: function(err, code) {
    if (err) {
      // handle errors from the authorization flow (i.e. user denies access)
      console.log(err);
    }
    // handle the returned code by sending it to server
    sendToServer(url, code);
  }
});

function getFromServer(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-heading").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function sendToServer(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = xhr.responseText;
      console.log(response);
    }
  };
  var data = JSON.stringify({ email: "hey@mail.com", password: "101010" });
  xhr.send(data);
}
