
const selectionSort = (array, animation, colors) => {
    const newArray = array.slice();
    let arrayBeforeUpdate = newArray.slice();
    animation.push(arrayBeforeUpdate);
    colors.push([]);
    for (let i = 0; i < newArray.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < newArray.length; j++) {
            if (newArray[min] > newArray[j]) {
                min = j;
            }
        }
        let arrayBeforeUpdate = newArray.slice();
        animation.push(arrayBeforeUpdate);
        let newColors = [i, min];
        colors.push(newColors);
        let temp = newArray[i];
        newArray[i] = newArray[min];
        newArray[min] = temp;
    }
    animation.push(newArray);
    colors.push([]);

}


export default selectionSort;