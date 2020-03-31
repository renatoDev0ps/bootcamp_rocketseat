const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Ok') }, 2000);
});

const execPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

// async function execPromise() {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// }

execPromise();

// minhaPromise().then(response => {
//   console.log(response);
// });