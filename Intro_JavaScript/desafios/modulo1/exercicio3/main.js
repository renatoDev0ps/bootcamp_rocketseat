var skills = [
  'javascript', 'reactjs', 'react native'
];

function haveSkill(skills) {
  for (skill of skills) {
    if (skill === 'javascript') {
      return true;
    } else {
      return false;
    }
  }
}

var resultado = haveSkill(skills);
console.log(resultado);