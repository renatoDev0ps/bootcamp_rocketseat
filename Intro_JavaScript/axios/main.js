axios.get('https://api.github.com/users/renatoDev0ps')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });