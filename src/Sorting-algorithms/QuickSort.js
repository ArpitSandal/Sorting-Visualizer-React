let animation = [];
function Partition(arr, st, en) {
  let pivot = arr[en]; //choosing pivot as last element
  let inx = st;
  for (let i = st; i < en; i++) {
    //from st-->en-1
    if (arr[i] <= pivot) {
      animation.push([inx, i, en]);  // the elements to be swapped and pivot element
      [arr[i], arr[inx]] = [arr[inx], arr[i]];
      inx++;
    }
  }
  animation.push([inx, en, en]);
  [arr[inx], arr[en]] = [arr[en], arr[inx]];
  return inx;
}

function Sort(arr, st, en) {
  if (st >= en) return;
  let pivot = Partition(arr, st, en);
  Sort(arr, st, pivot - 1);
  Sort(arr, pivot + 1, en);
}

function QuickSort(arr) {
  animation=[];
  Sort(arr, 0, arr.length - 1);
  // console.log(arr);
  return animation;
}

export default QuickSort;
