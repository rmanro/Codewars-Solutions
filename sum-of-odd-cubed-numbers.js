// https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript

function cubeOdd(arr) {
  let notNums = arr.filter(num => typeof num !== 'number');
  if (notNums.length > 0) return undefined;
  let numbers = arr.map(num => Math.pow(num, 3));
  const odd = numbers.filter(num => (num % 2 !== 0));
  if (odd.length === 0) return 0;
  return odd.reduce((acc, num) => acc + num);
}
