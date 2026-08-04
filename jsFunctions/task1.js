function calcArea(width, height) {
  return width * height;
}

const calcAreaExpr = function (width, height) {
  return width * height;
};

const calcAreaArrow = (width, height) => width * height;

console.log('🚀 ~ calcArea:', calcArea(5, 10));
console.log('🚀 ~ calcAreaExpr:', calcAreaExpr(5, 10));
console.log('🚀 ~ calcAreaArrow:', calcAreaArrow(5, 10));
