const pickColor = () => {
  const random = Math.floor(Math.random() * colors.length)
  return colors[random]
}


const generateRandomColor = () => {
//pick r,g,b colors
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


const generateRandomColors = (num) => {

  let output = [];
  for (let i=0; i<num; i++) {
    output.push(generateRandomColor())
  }
  return output
}


const changeColors = (color) => {
  squares.forEach((square) => {
    square.style.backgroundColor=color;

  })
}


let numSquares=6;



const squares = document.querySelectorAll(".square");
const colorDisplay=document.getElementById("colorDisplay");
const message=document.getElementById("message");
const title=document.querySelector("h1");
const resetButton= document.getElementById("resetButton");
const easyButton = document.getElementById("easyButton");
const hardButton = document.getElementById("hardButton");


colors = generateRandomColors(numSquares);
let pickedColor=pickColor();



colorDisplay.textContent=pickedColor;


//reset button
resetButton.addEventListener("click", function() {
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  title.style.backgroundColor="black";
  message.textContent="";
  this.textContent= "New Colors";
  for (let i=0; i<colors.length; i++) {
    squares[i].style.backgroundColor=colors[i];
  }

})

//easy buttom
easyButton.addEventListener("click", function() {
  this.classList.add("selected");
  easyButton.classList.remove("selected");
  numSquares=3;
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for (let i=0; i<squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor=colors[i];
    }else {
      squares[i].style.backgroundColor= "black";
    }
  }
})

//hardButton
hardButton.addEventListener("click", function() {
  this.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares=6;
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for(let i=0; i<squares.length;i++) {
    squares[i].style.backgroundColor=colors[i];
  }
})

for (let i=0; i < squares.length; i++) {
  squares[i].style.backgroundColor=colors[i];

  //click listner

  squares[i].addEventListener("click", function() {

    const clickedColor=this.style.backgroundColor;

    if(clickedColor===pickedColor) {
      message.textContent= "Correct!";
      changeColors(pickedColor);
      title.style.backgroundColor=pickedColor;
      resetButton.textContent="Play Again!";
    }else {
      this.style.backgroundColor = "black";
      message.textContent="You suck!";
    }
  })
};
