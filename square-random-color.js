// Access the HTML Elements
const btn = document.querySelector('#btn');
const section = document.querySelector('#section-canvas');

// Create the var with all possible cases of a digit's Hex Color 
var letters = "0123456789ABCDEF";

// Function to create a square
var createShape = () => {
  // Creates a square using the canvas element
  var shape = `<canvas id="myCanvas-${Math.random()}" class="shape"></canvas>`;

  // Adds it to the section on webpage.
  section.innerHTML += shape;
}

// Makes a Random Color
function getRandomColor() {
  // Reset color, for make another random color
  let color = "#";
  // loop inside the var letters, and each lap it add a letter or number, for in final, result in a Hex Color
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Each time that you click the button, create a new square
btn.addEventListener('click', createShape);

// Using parent container to listen for child events, changing the color of each square when hover it
section.addEventListener('mouseover', (event) => {
  if (event.target.nodeName === 'CANVAS') {
    var square = document.getElementById(`${event.target.id}`);
    square.style.backgroundColor = `${getRandomColor()}`;
  }
})