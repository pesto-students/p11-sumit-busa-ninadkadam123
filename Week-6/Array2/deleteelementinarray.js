function deleteelementinarray(arr) {
  let elemetarr = arr.filter((i) => {
    if (i % 2 == 0 || i % 3 == 0) {
      return false;
    } else {
      return true;
    }
  });

  return elemetarr;
}

console.log(deleteelementinarray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
