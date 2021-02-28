import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Logo from '../Logo/Logo';
import Options from '../Options/Options';

const Header = () => {

    return (
        <Box boxShadow="xs" height="100%" borderTop="6px solid turquoise" as="header" background="white">
            <Flex maxWidth="1140px" margin="auto" alignItems="center" height="100%">
                <Logo />
                <Options />
            </Flex>
        </Box>

    )
}

export default Header
