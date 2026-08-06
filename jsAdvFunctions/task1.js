const handleEven = () => console.log('Number is even');
const handleOdd = () => console.log('Number is odd');
const handleNum = (number, even, odd) => (number % 2 === 0 ? even() : odd());

handleNum(2, handleEven, handleOdd);
