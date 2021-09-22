let animation = [];

function Heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest !== i) {
    animation.push([i, largest]);
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    Heapify(arr, n, largest);
  }
}

function HeapSort(arr) {
  animation = [];
  let n = arr.length;

  // Build heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) Heapify(arr, n, i);

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    animation.push([i, 0]);
    [arr[i], arr[0]] = [arr[0], arr[i]];

    Heapify(arr, i, 0);
  }
  //   console.log(arr);
  return animation;
}

export default HeapSort;
