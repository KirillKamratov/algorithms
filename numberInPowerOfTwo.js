const func = (n) => {
  // 1 вариант

  const resultArr = [];
  let steps = 0;
  let a = n;
  while (a > 0) {
    if (a % 2 !== 0 ) {
      resultArr.push(`2^${steps}`)
    }
    a = a >> 1;
    steps += 1
  }
  return resultArr

  // 2 вариант
  // const reversedBinaryN = n.toString(2).split('').reverse();
  // for (let i = 0; i < reversedBinaryN.length; i++) {
  //   if (reversedBinaryN[i] === '1') {
  //     resultArr.push(2^`${i}`)
  //   }
  // }
  // return resultArr.join(' + ')
  
}

console.log(func(149))




