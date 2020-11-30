import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { IPage } from 'data/alice'
import { motion } from 'framer-motion'

export const opacityChangeVariant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: { opacity: 0 },
}

const Page = ({ animation, paragraphs, type }: IPage) => {
  const AnimationComponent = animation?.component
  return (
    <Box minH="70vh">
      <motion.div variants={opacityChangeVariant}>
        {animation && animation.position === 'top' && <AnimationComponent />}
        {paragraphs.map((paragraph, idx) => (
          <Text
            key={idx}
            paddingY={2}
            textAlign={type === 'text' ? 'left' : 'center'}
          >
            {paragraph}
          </Text>
        ))}
        {animation && animation.position === 'bottom' && <AnimationComponent />}
      </motion.div>
    </Box>
  )
}

export default Page
