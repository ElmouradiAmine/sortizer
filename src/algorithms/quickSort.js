const quickSort = (array, animation, colors) => {
    const newArray = array.slice();
    const arrayBeforeUpdate = newArray.slice();
    animation.push(arrayBeforeUpdate);
    colors.push([]);
    quickSortAux(newArray, 0, array.length - 1, animation, colors);
    animation.push(newArray.slice());
    colors.push([]);
}
const quickSortAux = (array, start, end, animation, colors) => {
    if ( start < end) {
        let pivot = partition(array, start, end, animation, colors);
        quickSortAux(array, start, pivot - 1, animation, colors);
        quickSortAux(array, pivot + 1, end, animation, colors);
    }
}

const partition = (array, start, end, animation, colors) => {
    const pivot = array[end];
    let i = start - 1; // the index of the current smallest element

    for(let j =  start ; j <= end; j++) {
        if (array[j] < pivot) {
            i++;
            const temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            const newColors = [i, j];
            const arrayBeforeUpdate = array.slice();
            animation.push(arrayBeforeUpdate);
            colors.push(newColors);
        }
    }
    array[end] = array[i + 1];
    array[i+1] = pivot
    return ( i + 1 );

}

export default quickSort;

