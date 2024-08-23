const bubbleSorting = (arr) => {
  let count = 0;
  do {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        count += 1;
      }
    }
  } while (count > 0);
  return arr;
};

console.log(bubbleSorting([6, 5, 3, 1, 8, 7, 2, 4]))
