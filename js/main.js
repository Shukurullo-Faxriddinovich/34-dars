var even = [];
var odd = [];

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elButton = document.querySelector(".form__button");
var elStrong = document.querySelector(".text");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if(isNaN(elInput.value)){
    elStrong.textContent = "so'z kiritish mumkin emas";
    elInput.value = "";
  }
  else if(elInput.value.length == 0){
    elStrong.textContent = "qiymat kiritish shart";
    elInput.value = "";
  }

  else if (elInput.value % 2 == 0){
    elStrong.textContent = "Juft son: " + elInput.value;
    even.push(elInput.value)
    console.log(even)
    elInput.value = "";
  }
  
  else{
    elStrong.textContent = "Toq son: " + elInput.value;
    odd.push(elInput.value)
    console.log(odd);
    elInput.value = "";
  }
});