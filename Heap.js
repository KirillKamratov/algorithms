class BinaryHeap {
  constructor(array) {
    this.heapArray = array;
  }

  buildHeap() {
    for (let i = Math.floor(this.heapArray.length / 2) - 1; i >= 0; i--) {
      this.siftDown(i);
    }
    return this.heapArray;
  }

  siftDown(index) {
    let biggestChildInd
    let needToBeSwapped = true;
    while (needToBeSwapped) {
      let leftChildInd = 2 * index + 1;
      let rightChildInd = 2 * index + 2;
      if (leftChildInd < this.heapArray.length &&  this.heapArray[leftChildInd] > this.heapArray[index]) {
        biggestChildInd = leftChildInd;
      }
      if (rightChildInd < this.heapArray.length && this.heapArray[rightChildInd] > this.heapArray[biggestChildInd]) {
        biggestChildInd = rightChildInd;
      }
      if (this.heapArray[index] < this.heapArray[biggestChildInd]) {
        let temp = this.heapArray[index];
        this.heapArray[index] = this.heapArray[biggestChildInd];
        this.heapArray[biggestChildInd] = temp;
      } else {
        needToBeSwapped = false;
      }
      index = biggestChildInd;
    }
    return this.heapArray;
  }

  recursiveSiftDown(index) {
    let biggestChildInd
    let leftChildInd = 2 * index + 1;
    let rightChildInd = 2 * index + 2;
    if (leftChildInd < this.heapArray.length && this.heapArray[leftChildInd] > this.heapArray[index]) {
      biggestChildInd = leftChildInd;
    }
    if (rightChildInd < this.heapArray.length && this.heapArray[rightChildInd] > this.heapArray[biggestChildInd]) {
      biggestChildInd = rightChildInd;
    }
    if (this.heapArray[index] < this.heapArray[biggestChildInd]) {
      let temp = this.heapArray[index];
      this.heapArray[index] = this.heapArray[biggestChildInd];
      this.heapArray[biggestChildInd] = temp;
      this.siftDown(biggestChildInd);
    }
    return this.heapArray;
  };

  siftUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1)/2);
      if (this.heapArray[index] >= this.heapArray[parentIndex]) {
        let temp = this.heapArray[parentIndex];
        this.heapArray[parentIndex] = this.heapArray[index];
        this.heapArray[index] = temp;
      }
      index = parentIndex;
    }
    return this.heapArray;
  }

  recursiveSiftUp(index) {
    let parentIndex = Math.floor((index - 1)/2);
    if (this.heapArray[index] > this.heapArray[parentIndex]) {
      let temp = this.heapArray[parentIndex];
      this.heapArray[parentIndex] = this.heapArray[index];
      this.heapArray[index] = temp;
      this.recursiveSiftUp(parentIndex);
    }
    return this.heapArray;
  };

  addElement(value) {
    this.heapArray.push(value);
    this.siftUp(this.heapArray.length - 1);
  }

  getRootElement() {
    let rootElement = this.heapArray[0];
    this.heapArray[0] = this.heapArray.pop();
    this.siftDown(0);
    return rootElement;
  }

  print() {
    console.log(this.heapArray);
  }
}

const heap = new BinaryHeap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
heap.buildHeap();
heap.print();
heap.addElement(11);

heap.print()



