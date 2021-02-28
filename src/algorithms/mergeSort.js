const mergeSort = (array, animation, colors) => {
    const newArray = array.slice();
    const arrayBeforeUpdate = newArray.slice();
        animation.push(arrayBeforeUpdate);
        colors.push([]);
    mergeSortAux(newArray, 0, array.length - 1, animation, colors);
    
    animation.push(newArray.slice());
    colors.push([]);
}

const mergeSortAux = (array, p, q, animation, colors) => {
    if ( p >= q) return;
    let mid = Math.floor((p+q)/2);
    mergeSortAux(array,p, mid, animation, colors);
    mergeSortAux(array,mid + 1, q, animation, colors);
    merge(array, p, mid, q, animation, colors);

}

const merge = (array, p, mid, q, animation, colors) => {
    const left = array.slice(p, mid + 1);
    const right = array.slice(mid + 1, q + 1);


    let i = 0;
    let j = 0;
    let k = p;

    while (i < left.length && j < right.length) {
        const newColors = [k];
        const arrayBeforeUpdate = array.slice();
        animation.push(arrayBeforeUpdate);
        colors.push(newColors);

        if (left[i] < right[j]) {
            array[k] = left[i];
            i++;
        } else {
            array[k] = right[j];
            j++;
        }
        k++;
    }

    while ( i < left.length) {
        const newColors = [k];
        const arrayBeforeUpdate = array.slice();
        animation.push(arrayBeforeUpdate);
        colors.push(newColors);
        array[k] = left[i];
        k++;
        i++;
    }

    
    while ( j < right.length) {
        const newColors = [k];
        const arrayBeforeUpdate = array.slice();
        animation.push(arrayBeforeUpdate);
        colors.push(newColors);
        array[k] = right[j];
        k++;
        j++;
    }

   

}


export default mergeSort;