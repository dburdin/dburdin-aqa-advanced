const car1 = {
  brand: 'Audi',
  model: 'Q7',
  year: 2026,
};

const car2 = {
  brand: 'BMW',
  model: 'X7',
  owner: 'Mango',
};

const car3 = { ...car1, ...car2 };
console.log('🚀 ~ car3:', car3);
