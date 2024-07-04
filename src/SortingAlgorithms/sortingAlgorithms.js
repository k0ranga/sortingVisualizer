// // export const mergeSort = array =>{
// //     if(array.length === 1)  return array;
// //     const middleIdx = Math.floor(array.length /2);
// //     const firstHalf = mergeSort(array.slice(0,middleIdx));
// //     const secondHalf = mergeSort(array.slice(middleIdx));
// //     let i =0,
// //     j=0;
// //     const sortedArray= [];
// //     while(i < firstHalf.length && j < secondHalf.length){
// //         if(firstHalf[i] <= secondHalf[j]){
// //             sortedArray.push(firstHalf[i++]);
// //         }else{
// //             sortedArray.push(secondHalf[j++]);
// //         }
// //     }
// //     if(i<firstHalf.length)
// //         sortedArray.push(firstHalf[i++]);
// //     if(j<secondHalf.length) 
// //         sortedArray.push(secondHalf[j++]);

// //     return sortedArray;

// // };

// // function merge(left, right) {
// //     let resultArray = [],
// //         leftIndex = 0,
// //         rightIndex = 0;

// //     // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
// //     while (leftIndex < left.length && rightIndex < right.length) {
// //         if (left[leftIndex] < right[rightIndex]) {
// //             resultArray.push(left[leftIndex]);
// //             leftIndex++; // Move to the next element in the `left` array
// //         } else {
// //             resultArray.push(right[rightIndex]);
// //             rightIndex++; // Move to the next element in the `right` array
// //         }
// //     }

// //     // Concatenate the remaining elements from either `left` or `right` (if any)
// //     return resultArray
// //         .concat(left.slice(leftIndex))
// //         .concat(right.slice(rightIndex));
// // }

// // export function mergeSort(array) {
// //     // Base case: If the array has only one element, return it (already sorted)
// //     if (array.length === 1) {
// //         return array;
// //     }

// //     // Divide the array into two halves
// //     const middle = Math.floor(array.length / 2); // Find the middle index
// //     const left = array.slice(0, middle); // Split the array into left half
// //     const right = array.slice(middle); // Split the array into right half

// //     // Recursively call mergeSort on the left and right halves
// //     return merge(
// //         mergeSort(left), // Recursively sort the left half
// //         mergeSort(right) // Recursively sort the right half
// //     );
// // }
// export function getMergeSortAnimations(array) {
//     const animations = [];
//     if (array.length <= 1) return array;
//     const auxiliaryArray = array.slice();
//     mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//     return animations;
//   }
  
//   function mergeSortHelper(
//     mainArray,
//     startIdx,
//     endIdx,
//     auxiliaryArray,
//     animations,
//   ) {
//     if (startIdx === endIdx) return;
//     const middleIdx = Math.floor((startIdx + endIdx) / 2);
//     mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//     mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//     doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
//   }
  
//   function doMerge(
//     mainArray,
//     startIdx,
//     middleIdx,
//     endIdx,
//     auxiliaryArray,
//     animations,
//   ) {
//     let k = startIdx;
//     let i = startIdx;
//     let j = middleIdx + 1;
//     while (i <= middleIdx && j <= endIdx) {
//       // These are the values that we're comparing; we push them once
//       // to change their color.
//       animations.push([i, j]);
//       // These are the values that we're comparing; we push them a second
//       // time to revert their color.
//       animations.push([i, j]);
//       if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//         // We overwrite the value at index k in the original array with the
//         // value at index i in the auxiliary array.
//         animations.push([k, auxiliaryArray[i]]);
//         mainArray[k++] = auxiliaryArray[i++];
//       } else {
//         // We overwrite the value at index k in the original array with the
//         // value at index j in the auxiliary array.
//         animations.push([k, auxiliaryArray[j]]);
//         mainArray[k++] = auxiliaryArray[j++];
//       }
//     }
//     while (i <= middleIdx) {
//       // These are the values that we're comparing; we push them once
//       // to change their color.
//       animations.push([i, i]);
//       // These are the values that we're comparing; we push them a second
//       // time to revert their color.
//       animations.push([i, i]);
//       // We overwrite the value at index k in the original array with the
//       // value at index i in the auxiliary array.
//       animations.push([k, auxiliaryArray[i]]);
//       mainArray[k++] = auxiliaryArray[i++];
//     }
//     while (j <= endIdx) {
//       // These are the values that we're comparing; we push them once
//       // to change their color.
//       animations.push([j, j]);
//       // These are the values that we're comparing; we push them a second
//       // time to revert their color.
//       animations.push([j, j]);
//       // We overwrite the value at index k in the original array with the
//       // value at index j in the auxiliary array.
//       animations.push([k, auxiliaryArray[j]]);
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }

export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        animations.push(['compare', i, j]);
        animations.push(['revert', i, j]);

        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push(['merge', k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push(['merge', k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middleIdx) {
        animations.push(['compare', i, i]);
        animations.push(['revert', i, i]);
        animations.push(['merge', k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= endIdx) {
        animations.push(['compare', j, j]);
        animations.push(['revert', j, j]);
        animations.push(['merge', k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }

    // Mark elements in their final position
    for (let idx = startIdx; idx <= endIdx; idx++) {
        animations.push(['final', idx, mainArray[idx]]);
    }
}
