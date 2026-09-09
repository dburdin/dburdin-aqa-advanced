const getTodo = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await res.json();
  } catch (error) {
    console.log('Oops. Something gone wrong: ' + error.message);
  }
};

const getUser = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return await res.json();
  } catch (error) {
    console.log('Oops. Something gone wrong: ' + error.message);
  }
};

const allResults = Promise.all([getTodo(), getUser()]);
const raceResult = Promise.race([getTodo(), getUser()]);

allResults.then((data) => console.log(data));
raceResult.then((data) => console.log(data));
