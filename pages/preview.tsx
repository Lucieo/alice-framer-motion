import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { BouncingBunny, ShrinkingAlice, KeyOnDoor } from 'animations/alice'

const Preview = () => {
  return (
    <Center minH="100vh">
      <Box p={10}>
        <KeyOnDoor />
      </Box>
      <Box p={10}>
        <ShrinkingAlice />
      </Box>
      <Box p={10}>
        <BouncingBunny />
      </Box>
    </Center>
  )
}

export default Preview
