import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
import { BouncingBunny, AliceFalling, KeyOnDoor } from 'animations/alice'

const Preview = () => {
  return (
    <Center minH="100vh" flexDirection="column" paddingY={4}>
      <Text paddingTop={6} fontSize="2xl">
        Les animations
      </Text>
      <Box p={10}>
        <KeyOnDoor />
      </Box>
      <Box p={10}>
        <AliceFalling />
      </Box>
      <Box p={10}>
        <BouncingBunny />
      </Box>
    </Center>
  )
}

export default Preview
