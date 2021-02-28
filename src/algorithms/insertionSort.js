const insertionSort = (array, animation, colors) => {
    const newArray = array.slice();
    for(let i = 1; i < newArray.length; i++){
        let arrayBeforeUpdate = newArray.slice();
        let newColors = [];
        animation.push(arrayBeforeUpdate);
        colors.push(newColors);
        const key = newArray[i];
        let j = i - 1;

        while (j >= 0 && newArray[j] > key ) {
            let newColors = [j, j + 1];
            let arrayBeforeUpdate = newArray.slice();
            animation.push(arrayBeforeUpdate);
            colors.push(newColors);
            newArray[j+1] = newArray[j];
            j--;
        }
        newArray[j+1] = key;
    }    
    animation.push(newArray);
    colors.push([]);
}
export default insertionSort;
