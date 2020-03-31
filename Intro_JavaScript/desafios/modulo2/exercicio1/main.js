var containerElement = document.querySelector('div#app');

function addBox() {
  var divElement = document.createElement('div');
  divElement.setAttribute('class', 'box');

  divElement.style.width = 100;
  divElement.style.height = 100;
  divElement.style.margin = 3;
  divElement.style.backgroundColor = '#f00';

  containerElement.appendChild(divElement);
}
