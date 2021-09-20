let animation = [];

function nextGap(gap)
{
	if (gap <= 1)
			return 0;
		return Math.floor(Math.ceil(gap / 2.0));
}

// Function for swapping
function swap(arr,i,j)
{
    animation.push([i,j]);
	let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
}

function inPlaceMerge(arr,start,end)
{
	let gap = end - start + 1;
		for (gap = nextGap(gap); gap > 0;
			gap = nextGap(gap)) {
			for (let i = start; i + gap <= end; i++) {
				let j = i + gap;
				if (arr[i] > arr[j])
					swap(arr, i, j);
			}
		}
}

function mergeSort(arr,s,e)
{
	if (s === e)
			return;

		let mid = Math.floor((s + e) / 2);

		mergeSort(arr, s, mid);
		mergeSort(arr, mid + 1, e);
		inPlaceMerge(arr, s, e);
}


function MergeSort(arr) {
	animation=[];
  mergeSort(arr, 0, arr.length);
  return animation;
}

export default MergeSort;
