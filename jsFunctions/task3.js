const checkOrder = (available, ordered) => {
  if (ordered === 0) return 'Your order is empty';
  if (ordered > available) return 'Your order is too large, we don’t have enough goods.';
  return 'Your order is accepted';
};

console.log('🚀 ~ checkOrder case 1:', checkOrder(5, 0));
console.log('🚀 ~ checkOrder case 2:', checkOrder(5, 6));
console.log('🚀 ~ checkOrder case 3:', checkOrder(5, 2));
