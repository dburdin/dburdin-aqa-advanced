//! В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

//! Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом <https://jsonplaceholder.typicode.com/todos/1>
//! Функція повинна повертати як результат Promise що повертає об’єкт todo

//! Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом <https://jsonplaceholder.typicode.com/users/1>
//! Функція повинна повертати як результат Promise що повертає об’єкт user

//! Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
//! Присвойте значення отримані від цих виразів до змінних

const getTodo = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .catch((error) => console.log('Oops. Something gone wrong: ' + error.message));
};

const getUser = () => {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => res.json())
    .catch((error) => console.log('Oops. Something gone wrong: ' + error.message));
};

const allResults = Promise.all([getTodo(), getUser()]);
const raceResult = Promise.race([getTodo(), getUser()]);

allResults.then((data) => console.log(data));
raceResult.then((data) => console.log(data));
