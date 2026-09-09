class TodoService {
  async getTodo() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      return await res.json();
    } catch (error) {
      console.log('Oops. Something gone wrong: ' + error.message);
    }
  }
}

class UserService {
  async getUser() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      return await res.json();
    } catch (error) {
      console.log('Oops. Something gone wrong: ' + error.message);
    }
  }
}

const todoService = new TodoService();
const userService = new UserService();

todoService.getTodo().then((todo) => console.log(todo));
userService.getUser().then((user) => console.log(user));
