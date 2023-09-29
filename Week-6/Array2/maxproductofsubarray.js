function maxproductofsubaaray(size, arr) {
  let maxproduct = arr[0];
  let minproduct = arr[0];
  let result = arr[0];
  for (let i = 1; i < size; i++) {
    let premin = minproduct;
    let premax = maxproduct;
    maxproduct = Math.max(arr[i], premin * arr[i], premax * arr[i]);
    minproduct = Math.min(arr[i], premin * arr[i], premax * arr[i]);
    result = Math.max(result, maxproduct);
  }

  return result;
}

console.log(maxproductofsubaaray(5, [2, 3, -2, 4, 5]));
console.log(maxproductofsubaaray(4, [-1, -2, -3, -4]));
