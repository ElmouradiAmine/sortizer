const bubbleSort = (array, animation, colors) => {
    const newArray = array.slice();
    for (let i = 0 ; i < newArray.length ; i++) {
        for (let j = 0; j < newArray.length - i - 1; j++) {
            const arrayBeforeUpdate = newArray.slice();
            animation.push(arrayBeforeUpdate);
            colors.push([]);
            if (newArray[j+1] < newArray[j]) {
                const newColors = [j, j + 1];
                const arrayBeforeUpdate = newArray.slice();
                animation.push(arrayBeforeUpdate);
                colors.push(newColors);

                const temp = newArray[j+1];
                newArray[j+1] = newArray[j];
                newArray[j] = temp;

            }
        }
    }
    animation.push(newArray);
    colors.push([]);
}

export default bubbleSort;