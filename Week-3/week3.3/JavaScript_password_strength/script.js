// Your solution goes here
function isStrongPassword(password) {
  let pattern = /^(?=.*[A-Z])(?!.*password).*.{8,}$/;
  return pattern.test(password);
}

console.log(isStrongPassword('Pass@Word123'));
