// Put your solution here
const nums = [1, 3, 5, 7];

divideArray(nums);

function divideArray(numbers) {
  let evenNums = [];
  let oddNums = [];

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % 2 == 0
      ? evenNums.push(numbers[i])
      : oddNums.push(numbers[i]);
  }
  console.log(
    'Even numbers : ' + (!evenNums.length ? 'None' : evenNums)
  );
  console.log(
    'Odd numbers : ' + (!oddNums.length ? 'None' : oddNums)
  );
}
