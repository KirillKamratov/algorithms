const selectionSorting = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

  }
  return arr
};

console.log(selectionSorting([6, 5, 3, 1, 8, 6, 7, 2, 4]))
