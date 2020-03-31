var containerElement = document.querySelector('div#app');
var buttonElement = document.querySelector('#app button');
var divElement;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addBox() {
  divElement = document.createElement('div');
  divElement.setAttribute('class', 'box');

  divElement.style.width = 100;
  divElement.style.height = 100;
  divElement.style.margin = 3;
  divElement.style.backgroundColor = '#f00';

  divElement.onmouseover = function() {
    divElement.style.backgroundColor = getRandomColor();
  };

  containerElement.appendChild(divElement);
}
buttonElement.onclick = addBox;
