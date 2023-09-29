function calcWordFrequencies() {
  let input = prompt();
  input = input.toLocaleLowerCase();
  let arr = input.split(' ');
  let frqmap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (frqmap.has(arr[i])) {
      frqmap.set(arr[i], frqmap.get(arr[i]) + 1);
    } else {
      frqmap.set(arr[i], 1);
    }
  }

  console.log(frqmap);
}
