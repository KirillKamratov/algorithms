const func = (str) => {
  const obj = {
    ')' : '(',
    ']' : '[',
    '}' : '{',
  };
  const array = [];
  for (let i = 0; i < str.length; i++) {
    if (Object.values(obj).includes(str[i])) {
      array.push(str[i])
    }
    else if ( obj[str[i]] === array[array.length - 1] ) {
      array.pop()
    }
    // } else if (str[i] === ')' && array[array.length - 1] === '(' ||
    //   str[i] === ']' && array[array.length - 1] === '[' ||
    //   str[i] === '}' && array[array.length - 1] === '{') {
    //   array.pop()
      else  {
      return false
    }
  }
  return true
};

console.log(func('({[]})'))
