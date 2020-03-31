var nomes = ["Renato", "Glenda", "Caroline"];

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function renderNames() {
  listElement.innerHTML = '';

  for (nome of nomes) {
    var liElement = document.createElement('li');
    var liText = document.createTextNode(nome);

    liElement.appendChild(liText);
    listElement.appendChild(liElement);
  }
}

renderNames();

function addName() {
  var inputText = inputElement.value;

  nomes.push(inputText);
  inputElement.value = '';
  renderNames();
}

buttonElement.onclick = addName;