https://www.codewars.com/kata/csv-representation-of-array/train/javascript

function toCsvText(array) {
  let result = '';
  for (let i=0;i<array.length-1;i++){
    result += (array[i].join() + '\n');
  }
  return result += array[array.length-1];
}
