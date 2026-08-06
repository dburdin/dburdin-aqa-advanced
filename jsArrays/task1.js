const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

function countNumbers(array) {
  let positiveNumbers = 0;
  let zeroNumbers = 0;
  let negativeNumbers = 0;

  for (const el of array) {
    if (el > 0) {
      positiveNumbers += 1;
    } else if (el < 0) {
      negativeNumbers += 1;
    } else {
      zeroNumbers += 1;
    }
  }

  console.log(`Кількість позитивних чисел ${positiveNumbers}`);
  console.log(`Кількість негативних чисел ${negativeNumbers}`);
  console.log(`Кількість нульових чисел ${zeroNumbers}`);
}

countNumbers(numbers);
н;
