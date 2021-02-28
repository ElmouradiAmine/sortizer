import { Flex, Text, Image, Link } from '@chakra-ui/react'
import React from 'react'
import githubLogo from "../../assets/img/github.png";
import linkedinLogo from "../../assets/img/linkedin.png";
const Footer = () => {
    return (
        <Flex justifyContent="center" alignItems="center" as="footer">
            <Text marginRight="2rem">
                Made with <span style={{
                    marginRight:"4px"
                }}>&#10084;</span> by Amine Elmouradi
            </Text>
            <Link href="">
                <Image src={githubLogo} width="32px" cursor="pointer" marginRight="0.5rem" _hover={{
                    transform: "scale(1.2)",
                    transition: "all 0.2s",
                    opacity: 0.8

                }}></Image>
            </Link>
            <Link href="https://www.linkedin.com/in/amine-elmouradi-599702183/" target="_blank">
                <Image src={linkedinLogo} width="32px" cursor="pointer" _hover={{
                    transform: "scale(1.2)",
                    transition: "all 0.2s",
                    opacity: 0.8

                }}></Image>
            </Link>

        </Flex>
    )
}

export default Footer
