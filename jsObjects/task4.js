const person = {
  firstName: 'Alex',
  lastName: 'Mango',
  age: 55,
};

person.email = 'mango-alex@gmail.com';
delete person.age;

console.log('🚀 ~ person:', person);
