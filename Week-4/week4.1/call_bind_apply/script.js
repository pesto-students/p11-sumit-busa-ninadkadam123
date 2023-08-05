class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num * num;
  }

  cube(num) {
    return num * num * num;
  }

  power(num1, num2) {
    let pow = 1;

    for (let i = 0; i < num2; i++) {
      pow *= num1;
    }
    return pow;
  }
}

let cal = new ScientificCalculator();

let addition = cal.add.call(cal, 10, 5);
console.log('call', addition);

let subtraction = cal.subtract.apply(cal, [10, 5]);

console.log('apply', subtraction);

function multiplyByTwo(num) {
  return num * 2;
}

let bindMethod = multiplyByTwo.bind(cal);

console.log('bindMethod', bindMethod(6));

function powerOfThree(num) {
  return num * num * num;
}

let bindPower = powerOfThree.bind(cal);

console.log('bindPower', bindPower(6));

callmultiplybytwo = multiplyByTwo.call(cal, 5);
console.log('callmultiplybytwo', callmultiplybytwo);

callPowerofThree = powerOfThree.call(cal, 2);

console.log('callPowerofThree', callPowerofThree);
