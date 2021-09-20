let animation = [];

function BubbleSort(arr) {
  animation=[];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        animation.push([j, j + 1]);
      }
    }
  }

  return animation;
}

export default BubbleSort;
