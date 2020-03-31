var ulElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

const getUserName = name => {
  var user = inputElement.value;
  if (!user) {
    renderError();
  }
  renderLoading();

  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      listRepos(response.data);
    })
    .catch(error => {
      renderError(error);
    });
  inputElement.value = '';
}

const listRepos = repositories => {
  ulElement.innerHTML = '';

  for (repo of repositories) {
    const liElement = document.createElement('li');
    const repoName = document.createTextNode(repo.name);

    liElement.appendChild(repoName);
    ulElement.appendChild(liElement);
  }
}

function renderLoading(loading) {
  ulElement.innerHTML = '';
  var loadLiElement = document.createElement('li');
  var textLoading = document.createTextNode('Carregando...');
  loadLiElement.appendChild(textLoading);
  ulElement.appendChild(loadLiElement);
}

function renderError(loading) {
  ulElement.innerHTML = '';
  var user = inputElement.value;
  var msgEmpty = !user ? "Preencha o campo de busca" : "Erro ao efetuar busca";

  var errorLiElement = document.createElement('li');
  var textMsgElement = document.createTextNode(msgEmpty);
  errorLiElement.style.color = "F00";
  errorLiElement.appendChild(textMsgElement);
  ulElement.appendChild(errorLiElement);
}

buttonElement.onclick = getUserName;