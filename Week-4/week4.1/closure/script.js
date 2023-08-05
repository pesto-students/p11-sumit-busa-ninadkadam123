function counter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

let firstcounter = counter();
let secondcounter = counter();
let firstValues = [];
let secodValues = [];

for (let i = 0; i < 5; i++) {
  firstValues.push(firstcounter());
  if (i < 3) {
    secodValues.push(secondcounter());
  }
}

console.log(firstValues);
console.log(secodValues);
