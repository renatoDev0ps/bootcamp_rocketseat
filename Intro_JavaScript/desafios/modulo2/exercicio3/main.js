var nomes = ["Renato", "Glenda", "Caroline"];

var listElement = document.querySelector('#app ul');

function renderNames() {
  for (nome of nomes) {
    var liElement = document.createElement('li');
    var liText = document.createTextNode(nome);

    liElement.appendChild(liText);
    listElement.appendChild(liElement);
  }
}

renderNames();