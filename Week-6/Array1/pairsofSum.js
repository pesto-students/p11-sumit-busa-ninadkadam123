function pairsofsum(arr, sum) {
  let pairs = new Array();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum == arr[i] + arr[j]) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

console.log(pairsofsum([2, 4, 6, 8, 10], 12));
