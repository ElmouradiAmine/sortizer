import React, { useContext, useEffect, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Button,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Stack,
    Text

} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import VisualizerContext from '../../context/VisualizerContext'
import generateRandomArray from '../../utils/generateRandomArray';
import generateAnimation from '../../utils/generateAnimation';


const Options = () => {
    const { setArray, setAnimation, animationSpeed, setCurrentFrame, selectedAlgorithm, setSelectedAlgorithm, arraySize, setAnimationSpeed, setArraySize, currentFrame, setColors } = useContext(VisualizerContext);
    const [isAnimating, setIsAnimating] = useState(false);
    const [intervalIdRef, setIntervalIdRef] = useState();
    const [animationLength, setAnimationLength] = useState(0);
    const [currentAnimatedArraySize, setCurrentAnimatedArraySize] = useState(0);
    useEffect(() => {
        generateVisualization(selectedAlgorithm);
    }, [])

    const generateVisualization = (algorithm) => {
        setCurrentFrame(0);
        const newArray = generateRandomArray(arraySize, 10, 500);
        setArray(newArray);
        const [newAnimation, newColors] = generateAnimation(algorithm, newArray);
        setAnimationLength(prevLength => newAnimation.length);
        setColors(newColors);
        setAnimation(prevAnimation => {
            return newAnimation;
        });
        return newAnimation.length;
    }

    const startAnimation = (length) => {
        const l = length || animationLength
        if (!isAnimating) {
            const intervalId = setInterval(() => {
                setCurrentFrame(prevCurrentFrame => {
                    if (prevCurrentFrame < l - 1) {
                        return prevCurrentFrame + 1;
                    } else {
                        clearInterval(intervalId);
                        setIsAnimating(false);
                        return prevCurrentFrame;
                    }
                })
            }, animationSpeed);
            setIntervalIdRef(intervalId);
            setIsAnimating(true);
            setCurrentAnimatedArraySize(arraySize);
        }
    }

    const stopAnimation = () => {
        if (isAnimating) {
            clearInterval(intervalIdRef);
            setIsAnimating(false);
        }
    }

    const getAlgorithmLabel = () => {
        switch (selectedAlgorithm) {
            case "INSERTION_SORT":
                return "Insertion Sort";
            case "BUBBLE_SORT":
                return "Bubble Sort";
            case "SELECTION_SORT":
                return "Selection Sort";
            case "MERGE_SORT":
                return "Merge Sort";
            case "QUICK_SORT":
                return "Quick Sort";
            case "HEAP_SORT":
                return "Heap Sort";
            default:
                return "Insertion Sort"
        }
    }
    return (
        <Flex flex={1} alignItems="center" justifyContent="flex-end">
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="10rem">
                    {getAlgorithmLabel()}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => {
                        stopAnimation();
                        setSelectedAlgorithm("INSERTION_SORT");
                        generateVisualization("INSERTION_SORT");
                    }}>Insertion Sort</MenuItem>
                    <MenuItem onClick={() => {
                        stopAnimation();
                        setSelectedAlgorithm("BUBBLE_SORT");
                        generateVisualization("BUBBLE_SORT");
                    }}>Bubble Sort</MenuItem>
                    <MenuItem onClick={() => {
                        stopAnimation();
                        setSelectedAlgorithm("SELECTION_SORT");
                        generateVisualization("SELECTION_SORT");
                    }}>Selection Sort</MenuItem>
                    <MenuItem onClick={() => {
                        stopAnimation();
                        setSelectedAlgorithm("MERGE_SORT");
                        generateVisualization("MERGE_SORT");
                    }}>Merge Sort</MenuItem>
                    <MenuItem onClick={() => {
                        stopAnimation();
                        setSelectedAlgorithm("QUICK_SORT");
                        generateVisualization("QUICK_SORT");
                    }}>Quick Sort</MenuItem>
                    <MenuItem onClick={() => {
                        stopAnimation();
                        setSelectedAlgorithm("HEAP_SORT");
                        generateVisualization("HEAP_SORT");
                    }}> Heap Sort</MenuItem>
                </MenuList>
            </Menu>
            <Stack margin="1rem">
                <Flex >
                    <Text fontSize="0.8rem" fontWeight="semibold" marginRight="0.8rem">Array size</Text>
                    <Slider aria-label="slider-ex-1" defaultValue={100} max={150} min={10} width="10rem" onChange={(value) => {
                        setArraySize(value);
                    }}>
                        <SliderTrack>
                            <SliderFilledTrack background="#40e0d0" />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>
                <Flex >
                    <Text fontSize="0.8rem" fontWeight="semibold" marginRight="0.8rem" >Animation</Text>
                    <Slider aria-label="slider-ex-1" defaultValue={100} max={100} min={10} width="10rem" onChange={(value) => {
                        if (isAnimating) {
                            stopAnimation();
                            setAnimationSpeed(110 - value);
                        } else {
                            setAnimationSpeed(110 - value);
                        }
                    }}>
                        <SliderTrack>
                            <SliderFilledTrack background="#40e0d0" />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>
            </Stack>
            <Button colorScheme="blue" marginRight="1rem" onClick={() => {
                stopAnimation();
                generateVisualization(selectedAlgorithm)
            }}>Generate</Button>
            {!isAnimating ? <Button background="#40e0d0" color="white" _hover={{ background: "#3eafa1" }} onClick={() => {
                if (currentFrame === animationLength - 1 || currentAnimatedArraySize !== arraySize) {
                    const l = generateVisualization(selectedAlgorithm);
                    startAnimation(l);

                } else {
                    startAnimation();

                }
            }}>Start</Button> :
                <Button colorScheme="red" onClick={stopAnimation}>Stop</Button>}

        </Flex>
    )
}

export default Options
