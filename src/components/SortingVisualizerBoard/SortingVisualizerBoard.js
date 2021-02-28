import { Box } from '@chakra-ui/react'
import React from 'react'
import SortingVisualizer from '../SortingVisualiser/SortingVisualizer'

const SortingVisualizerBoard = () => {
    return (
        <Box height="100%"  shadow="md" background="white" padding="1.6rem" borderRadius="5px">
        <SortingVisualizer />
    </Box>
    )
}

export default SortingVisualizerBoard
