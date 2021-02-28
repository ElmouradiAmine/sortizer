import React from 'react'
import { Image, Flex, Heading } from "@chakra-ui/react"
import logo from "../../assets/img/sortizerLogo.svg"

const Logo = () => {
    return (
        <Flex justifyContent="center" alignItems="center" height="100%">
            <Image src={logo} alt="Sortizer logo" height="2rem" objectFit="cover" marginRight="0.5rem"/>
            <Heading color="black" as="h1" fontSize="2xl" fontWeight="semibold"> Sortizer</Heading>
        </Flex>
    )
}

export default Logo
