import React, {  useContext } from 'react';
import Bar from '../Bar/Bar';
import {  Flex } from '@chakra-ui/react';
import VisualizerContext from '../../context/VisualizerContext';

const SortingVisualizer = () => {
    const  {animation, currentFrame, colors} = useContext(VisualizerContext);

    const renderArray = (array) => {
        return array.map((value, index) => <Bar height={value} color={colors[currentFrame]?.includes(index) ? "yellow" : "turquoise"} ></Bar>)
    }

    return (
            <Flex  height="100%" transform="scale(1,-1)">
                {animation.length !== 0 && renderArray(animation[currentFrame])}
            </Flex>
    )
}

export default SortingVisualizer
