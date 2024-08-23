const insertionSorting = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  return arr;
};

console.log(insertionSorting([6, 5, 3, 1, 8, 7, 2, 4]))

