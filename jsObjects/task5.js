const users = [
  {
    name: 'Олександр',
    email: 'oleksandr@gmail.com',
    age: 28,
    city: 'Київ',
    isActive: true,
  },
  {
    name: 'Марія',
    email: 'maria.uk@gmail.com',
    age: 34,
    city: 'Львів',
    isActive: false,
  },
  {
    name: 'Іван',
    email: 'ivan_i@ukr.net',
    age: 22,
    city: 'Одеса',
    isActive: true,
  },
];

for (const el of users) {
  const { name, email, age, city, isActive } = el;
  console.log(name, email, age, city, isActive);
}
