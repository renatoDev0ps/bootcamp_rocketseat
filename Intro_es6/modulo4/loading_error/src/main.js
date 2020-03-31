import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);

      console.log(response.data);
    } catch (err) {
      console.log('Erro na API')
    }
  }
}

Api.getUserInfo('renatoDev0ps');
//Api.getUserInfo('renatoDev0ps123');

// desafios
const delay = () => new Promise((resolve) => { setTimeout(() => { resolve('Ok') }, 1000)});

const umPorSegundo = async () => {
  console.log(await delay());
  console.log(await delay());
  console.log(await delay());
}

umPorSegundo();

class Github {
  static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log('Repositorio nao existe!');
      })
  }
}

Github.getRepositories('renatoDev0ps/cloudcamp');
Github.getRepositories('rocketseat/dslkvmskv');