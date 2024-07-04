export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        const pivotIdx = partition(array, startIdx, endIdx, animations);
        quickSortHelper(array, startIdx, pivotIdx - 1, animations);
        quickSortHelper(array, pivotIdx + 1, endIdx, animations);
    }
}

function partition(array, low, high, animations) {
    const pivot = array[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (array[i] <= pivot && i <= high - 1) {
            animations.push(['compare', i, low]);
            animations.push(['revert', i, low]);
            i++;
        }

        while (array[j] > pivot && j >= low + 1) {
            animations.push(['compare', j, low]);
            animations.push(['revert', j, low]);
            j--;
        }
        
        if (i < j) {
            animations.push(['swap', i, j]);
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    animations.push(['swap', low, j]);
    [array[low], array[j]] = [array[j], array[low]];
    return j;
}
