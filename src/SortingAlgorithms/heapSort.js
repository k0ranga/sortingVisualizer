export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;

    // Build max heap
    buildMaxHeap(array, animations);

    // Extract elements from heap one by one
    for (let i = array.length - 1; i > 0; i--) {
        animations.push(['swap', 0, i]); // Swap root (max element) with last element
        [array[0], array[i]] = [array[i], array[0]]; // Swap elements in array
        heapify(array, 0, i, animations); // Heapify the reduced heap
    }

    return animations;
}

function buildMaxHeap(array, animations) {
    const n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, i, n, animations);
    }
}

function heapify(array, rootIdx, size, animations) {
    let largest = rootIdx;
    const leftChildIdx = 2 * rootIdx + 1;
    const rightChildIdx = 2 * rootIdx + 2;

    // Compare root with left child
    if (leftChildIdx < size) {
        animations.push(['compare', rootIdx, leftChildIdx]);
        animations.push(['revert', rootIdx, leftChildIdx]);
        if (array[leftChildIdx] > array[largest]) {
            largest = leftChildIdx;
        }
    }

    // Compare root with right child
    if (rightChildIdx < size) {
        animations.push(['compare', rootIdx, rightChildIdx]);
        animations.push(['revert', rootIdx, rightChildIdx]);
        if (array[rightChildIdx] > array[largest]) {
            largest = rightChildIdx;
        }
    }

    // If largest is not root
    if (largest !== rootIdx) {
        animations.push(['swap', rootIdx, largest]);
        [array[rootIdx], array[largest]] = [array[largest], array[rootIdx]];

        // Recursively heapify the affected subtree
        heapify(array, largest, size, animations);
    }
}


