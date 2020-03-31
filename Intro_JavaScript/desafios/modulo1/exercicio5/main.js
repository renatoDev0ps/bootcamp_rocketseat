var users = [
  {
    nome: "Renato",
    skills: ["javascript", "docker", "jenkins"]
  },
  {
    nome: "Glenda",
    skills: ["pedagogia", "psicologia"]
  }
];

function showUsers(users) {
  for (user of users) {
    console.log(`O ${user.nome} possui as habilidades: ${user.skills}`);
  }
}

var result = showUsers(users);