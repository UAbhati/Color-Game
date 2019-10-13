var numSquare = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var square = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();
function init(){
  setupModeButton();
  setupSquares();
  resetMode();
}
function setupModeButton(){
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click",function(){
       modeButton[0].classList.remove("selected");
       modeButton[1].classList.remove("selected");
       this.classList.add("selected");
       this.textContent === "Easy" ? numSquare =3: numSquare = 6;
       resetMode();
    });
  }
}
function setupSquares(){
  for (var i = 0; i < square.length; i++) {
      square[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
              reset.textContent = "Play Again!";
              message.textContent = "Correct";
              changeColor(clickedColor);
              h1.style.background = clickedColor;
            }
            else {
              this.style.backgroundColor = "#232323";
               message.textContent = "Try Again";
            }
      });
  }
}
function resetMode(){
  colors = generateRandomColor(numSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors";
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
          square[i].style.display = "block";
          square[i].style.backgroundColor = colors[i];
        }
        else {
          square[i].style.display = "none";
        }
  }
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
}

colorDisplay.textContent = pickedColor;

reset.addEventListener("click",function(){
  resetMode();
});

function changeColor(color){
  for (var i = 0; i < square.length; i++) {
   square[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}
function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
