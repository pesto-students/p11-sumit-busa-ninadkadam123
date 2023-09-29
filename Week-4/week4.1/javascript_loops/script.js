function drawTriangle(triangleSize) {
  let str = '';
  for (let i = 0; i < triangleSize; i++) {
    for (let j = 0; j <= i; j++) {
      str += '*';
    }
    str += '\n';
  }

  console.log(str);
}
