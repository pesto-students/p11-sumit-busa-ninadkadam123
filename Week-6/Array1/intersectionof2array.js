function intersectionofArray(str1, str2) {
  let set = new Set(str1.split(',').map(Number));
  let arr = str2.split(',').map(Number);

  let intersection = new Array();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      intersection.push(arr[i]);
    }
  }

  return intersection;
}

console.log(intersectionofArray('1,2,3,4,5', '4,5,6,7,8'));
