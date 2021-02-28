const generateRandomArray = (length, min, max) => {
    const array = [];
    for(let i = 0 ; i < length; i++) {
        array.push( Math.floor(Math.random() * (max - min) + min) )
    }
    return array;
}

export default generateRandomArray;