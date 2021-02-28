import React, { useState } from 'react'
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react"
import Header from '../components/Header/Header';
import SortingVisualizerBoard from '../components/SortingVisualizerBoard/SortingVisualizerBoard';
import VisualizerContext from "../context/VisualizerContext"
import Footer from '../components/Footer/Footer';

function App() {
  const [arraySize, setArraySize] = useState(100);
  const [animationSpeed, setAnimationSpeed] = useState(20);
  const [animation, setAnimation] = useState([]);
  const [colors, setColors] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [array, setArray] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("INSERTION_SORT");



  return (
    <ChakraProvider>
    <VisualizerContext.Provider value={{
      arraySize,
      setArraySize,
      animationSpeed,
      setAnimationSpeed,
      animation,
      setAnimation,
      array,
      setArray,
      selectedAlgorithm,
      setSelectedAlgorithm,
      currentFrame,
      setCurrentFrame,
      setColors,
      colors
    }}>
      <Grid
        templateColumns="[full-start] 1fr [full-end]"
        templateRows="[header-start] 4.8rem [header-end content-start] 1fr [content-end footer-start] 2.4rem [footer-end]"
        gridGap="10px"
        minH="100vh"
        background="#EFF2F5"
      >
        <GridItem gridColumn="full-start/full-end" >
          <Header />
        </GridItem>

        <GridItem gridColumn="full-start/full-end"
          maxWidth="1140px"
          width="100%"
          alignSelf="center"
          justifySelf="center">
          <SortingVisualizerBoard />
        </GridItem>

        <GridItem gridColumn="full-start/full-end" >
          <Footer />
        </GridItem>

      </Grid>
      </VisualizerContext.Provider>
    </ChakraProvider>

  );
}

export default App;
