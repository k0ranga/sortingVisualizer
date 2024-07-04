export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    insertionSortHelper(array, animations);
    return animations;
}

function insertionSortHelper(array, animations) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            // Push the indices of the elements being compared (for color change)
            animations.push([j, j - 1]);
            // Push the same indices again to revert their color back
            animations.push([j, j - 1]);
            // Push the indices and new values to be swapped
            animations.push([j, array[j - 1]]);
            animations.push([j - 1, array[j]]);
            // Swap the elements in the array
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            j--;
        }
        if (j > 0) {
            // Even if no swap is needed, push the indices to show comparison
            animations.push([j, j - 1]);
            animations.push([j, j - 1]);
            animations.push([j, array[j]]);
            animations.push([j - 1, array[j - 1]]);
        }
    }
}
