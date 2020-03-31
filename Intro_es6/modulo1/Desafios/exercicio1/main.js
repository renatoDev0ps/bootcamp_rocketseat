class Usuario {
  constructor() {
    this.email = '';
    this.senha = '';
    this.admin = false;
  }

  isAdmin() {
    if (this.admin) {
      return true;
    } else {
      return false;
    }
  }
}

class Admin extends Usuario {
  constructor() {
    super();

    this.admin = true;
  }
}

const user1 = new Usuario();
user1.email = 'renatodevops@gmail.com';
user1.senha = 'helohim33';
console.log(user1);
console.log(user1.isAdmin());

const admin1 = new Admin();
admin1.email = 'renatodevops@gmail.com';
admin1.senha = 'helohim33';
console.log(admin1);
console.log(admin1.isAdmin());
