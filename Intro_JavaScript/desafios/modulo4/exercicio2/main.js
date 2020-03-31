var divElements =document.querySelector('div#app');
var ulElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

const getUser = name => {
  var user = inputElement.value;
  if (!user) {
    alert("Preencha o campo");
  }
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      renderRepo(response.data);
    })
    .catch(error => {
      alert("Nao foi possivel encontrar sua busca!");
      console.warn(error);
    });
}

const renderRepo = repositorios => {
  console.log("TCL: repositories", repositorios);
  ulElement.innerHTML = '';
  
  for (repo of repositorios) {
    const reponame = document.createTextNode(repo.name);
    const repoItem = document.createElement('li');

    repoItem.appendChild(reponame);
    ulElement.appendChild(repoItem);
  }
}

buttonElement.onclick = getUser;
