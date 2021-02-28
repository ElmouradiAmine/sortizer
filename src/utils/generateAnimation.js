import bubbleSort from "../algorithms/bubbleSort";
import insertionSort from "../algorithms/insertionSort";
import selectionSort from "../algorithms/selectionSort";
import mergeSort from "../algorithms/mergeSort";
import quickSort from "../algorithms/quickSort";
import heapSort from "../algorithms/heapSort";

 const generateAnimation = (algorithm, array) => {
    const animation = [];
    const colors = []

    if (algorithm === 'INSERTION_SORT') {
       insertionSort(array, animation, colors);
    } else if ( algorithm === 'BUBBLE_SORT') {
       bubbleSort(array, animation, colors);
    } else if (algorithm === 'SELECTION_SORT') {
       selectionSort(array, animation, colors);
    } else if (algorithm === 'MERGE_SORT') {
       mergeSort(array, animation, colors);
    } else if (algorithm === 'QUICK_SORT') {
       quickSort(array, animation, colors)
    } else if (algorithm === "HEAP_SORT") {
       heapSort(array, animation, colors);
    }
    return [animation, colors]; 
 }

 export default generateAnimation;