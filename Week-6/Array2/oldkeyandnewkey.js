function oldkeynewkey(arr, oldkey, newkey) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == oldkey) {
      arr[i] = newkey;
    }
  }

  return arr;
}

console.log(oldkeynewkey([1, 2, 3, 2, 4, 2, 5], 2, 6));
console.log(oldkeynewkey([5, 5, 5, 5], 5, 2));
