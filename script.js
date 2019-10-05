var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "#$%&'()*+,-./:;<=>?@[]^_{|}~";
var charString ="";
var pwd = "";
var charNum = document.getElementById("charNum");
var numBox = document.querySelector("input[name=num]");
var symBox = document.querySelector("input[name=sym]");
var upLtrBox = document.querySelector("input[name=up-ltr]");
var lowLtrBox = document.querySelector("input[name=low-ltr]");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPW");

numBox.addEventListener("change", function() {
    if(this.checked) {
        charString = charString + num;
    }
});
symBox.addEventListener("change", function() {
    if(this.checked) {
        charString = charString + sym;
    }
});
upLtrBox.addEventListener("change", function() {
    if(this.checked) {
        charString = charString + upChar;
    }
});
lowLtrBox.addEventListener("change", function() {
    if(this.checked) {
        charString = charString + lowChar;
    }
});
function password(){
    for (var i = 0; i < charNum.value; i++) {
        pwd = pwd + charString.charAt(Math.floor(Math.random() * Math.floor((charString.length) - 1)));
   
   yourPw.value = pwd;
    }
}