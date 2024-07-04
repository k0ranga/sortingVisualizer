export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    selectionSortHelper(array, animations);
    return animations;
}

function selectionSortHelper(array, animations) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
       
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            animations.push(['high',i,-1]);
            // Comparing array[j] with array[minIdx]
            animations.push(['compare', j, minIdx]);
            animations.push(['revert', j, minIdx]);
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        animations.push(['low',i,-1])
        // Swap array[i] with array[minIdx]
        if (minIdx !== i) {
            animations.push(['swap', i, minIdx]);
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
        }
    }
}

