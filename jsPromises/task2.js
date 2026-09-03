//! В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

//! Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом <https://jsonplaceholder.typicode.com/todos/1>
//! Функція повинна повертати як результат Promise що повертає об’єкт todo

//! Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом <https://jsonplaceholder.typicode.com/users/1>
//! Функція повинна повертати як результат Promise що повертає об’єкт user

//! Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
//! Присвойте значення отримані від цих виразів до змінних

const first = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((error) => console.log('Opps. Something gone wrong' + error.message));

const second = fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((error) => console.log('Opps. Something gone wrong' + error.message));

Promise.all([first, second]);
Promise.race([first, second]);
