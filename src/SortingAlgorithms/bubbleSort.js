export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  bubbleSortHelper(array, animations);
  return animations;
}

function bubbleSortHelper(array, animations) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          // Push the indices of the elements being compared
          animations.push([j, j + 1]);
          // Push the same indices again to revert their color back
          animations.push([j, j + 1]);
          if (array[j] > array[j + 1]) {
              // Push the indices and values to be swapped
              animations.push([j, array[j + 1]]);
              animations.push([j + 1, array[j]]);
              // Swap the elements in the array
              [array[j], array[j + 1]] = [array[j + 1], array[j]];
          } else {
              // If no swap is needed, still push the current values to keep consistency
              animations.push([j, array[j]]);
              animations.push([j + 1, array[j + 1]]);
          }
      }
  }
}
