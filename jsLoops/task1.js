const averageGrade = 85;

if (averageGrade < 60) {
  console.log('Незадовільно');
} else if (averageGrade <= 70) {
  console.log('Задовільно');
} else if (averageGrade <= 80) {
  console.log('Добре');
} else if (averageGrade <= 90) {
  console.log('Дуже добре');
} else if (averageGrade <= 100) {
  console.log('Відмінно');
} else {
  console.log(
    'Введіть значення із діапазону від 0 до 100. Поточна середня оцінка: ' + averageGrade
  );
}
