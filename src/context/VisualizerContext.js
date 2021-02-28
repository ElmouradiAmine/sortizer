import {createContext} from 'react'


const VisualizerContext = createContext({
    animation: [],
    animationSpeed: 100,
    arraySize: 50,
    selectedAlgorithm: "INSERTION_SORT"
});


export default VisualizerContext;