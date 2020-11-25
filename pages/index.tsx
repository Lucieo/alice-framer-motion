import React from 'react'
import Head from 'next/head'
import { Center, Text, Flex, Square, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { book } from 'data/alice'
import { motion } from 'framer-motion'

const homePageWrapperVariant = {
  hidden: { opacity: 0, y: '-100px' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, when: 'beforeChildren', staggerChildren: 1 },
  },
}

const chapterCardVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: { type: 'spring', bounce: 0.6 },
  },
  tap: {
    opacity: 0.4,
  },
}

export default function Home() {
  return (
    <Center height="100vh" flexDirection="column">
      <Head>
        <title>Alice Framer Motion App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={homePageWrapperVariant}
        initial="hidden"
        animate="visible"
      >
        <Box textAlign="center" fontSize="3xl" p={4}>
          <Text fontFamily="Dancing Script" fontSize="45px">
            {book.title}
          </Text>
          <Text>de Framer Motion</Text>
        </Box>
        <Flex
          paddingY={10}
          flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}
          alignItems="center"
        >
          {book.chapters.map((chapter, index) => (
            <Box p={4} key={index}>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={chapterCardVariant}
              >
                <Link href={`/chapter/${index + 1}`}>
                  <Square
                    size="200px"
                    backgroundImage={`url('/alice/${chapter.illustration}')`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    borderRadius="lg"
                    boxShadow="2xl"
                    border="2px solid lightgray"
                    cursor="pointer"
                  >
                    <Text fontSize="50px" fontWeight="bold" color="#D4AF37">
                      {chapter.romanIndex}
                    </Text>
                  </Square>
                </Link>
              </motion.div>
            </Box>
          ))}
        </Flex>
      </motion.div>
    </Center>
  )
}
