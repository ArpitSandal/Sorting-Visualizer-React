let animation=[];

function InsertionSort(arr){
    animation=[];
    let key,j;
    for(let i=1; i<arr.length; i++){
        j=i-1;
        key=arr[i];  //key is in unsorted array
        while(j>=0 && key<arr[j]){
            [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
            animation.push([j,j+1]);
            j--;
        }
    }
    
    return animation;
}

export default InsertionSort;