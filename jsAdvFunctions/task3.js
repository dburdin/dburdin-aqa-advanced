const divide = (numerator, denominator) => {
  const isNumeratorNumber = typeof numerator === 'number' && !Number.isNaN(numerator);
  const isDenominatorNumber = typeof denominator === 'number' && !Number.isNaN(denominator);

  if (denominator === 0) throw new Error('Знаменник дорівнює 0');
  if (!isNumeratorNumber) throw new Error('Чисельник не є числом');
  if (!isDenominatorNumber) throw new Error('Знаменник не є числом');

  return numerator / denominator;
};

try {
  console.log(divide(10, 2));
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Робота завершена');
}

console.log('---------------');

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Робота завершена');
}

console.log('---------------');

try {
  console.log(divide(10, '0'));
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Робота завершена');
}

console.log('---------------');

try {
  console.log(divide(NaN, 2));
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Робота завершена');
}
