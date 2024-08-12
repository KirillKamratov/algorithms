const func = (a, n) => {
  let steps = n;
  let result = 1;
  let x = a;
  while (steps > 0) {
    if (steps % 2 !== 0 ) {
      result *= x
    }
    x *= x
    steps = steps >> 1;
  }
  return result
}

console.log(func(3, 3))
