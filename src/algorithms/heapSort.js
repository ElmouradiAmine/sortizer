const heapSort = (array, animation, colors) => {
    const newArray = array.slice();

    const arrayBeforeUpdate = newArray.slice();
    animation.push(arrayBeforeUpdate);
    colors.push([]);

    buildMaxheap(newArray, animation, colors);
    for (let i = newArray.length - 1; i >= 0; i--) {
        let key = newArray[0];
        newArray[0] = newArray[i];
        newArray[i] = key;
        maxHeapify(newArray, 0, i, animation, colors);
    }

    animation.push(newArray.slice());
    colors.push([]);

}

const left = (index) => {
    return 2 * index + 1
}

const right = (index) => {
    return 2 * (index + 1);
}

const buildMaxheap = (array, animation, colors) => {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        maxHeapify(array, i, array.length, animation, colors);
    }
}

const maxHeapify = (array, index, heapSize, animation, colors) => {
    let l = left(index);
    let r = right(index);
    let largest = index;

    if (l < heapSize && array[l] > array[largest]) {
        largest = l;
    }

    if (r < heapSize && array[r] > array[largest]) {
        largest = r;
    }

    if (largest !== index) {
        let key = array[index];
        array[index] = array[largest];
        array[largest] = key;
        const arrayBeforeUpdate = array.slice();
        animation.push(arrayBeforeUpdate);
        colors.push([index, largest]);
        maxHeapify(array, largest, heapSize, animation, colors);
    }
}

export default heapSort;