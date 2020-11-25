import React from 'react'
import Head from 'next/head'
import { Center, Text, Flex, Square, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { book } from 'data/alice'
import { motion } from 'framer-motion'

export default function Wonderland() {
  return (
    <Center height="100vh" flexDirection="column">
      <Head>
        <title>Wonderland App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: '-100px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Text textAlign="center" fontSize="3xl" p={4}>
          {book.title}
        </Text>
      </motion.div>
      <Flex paddingY={10}>
        {book.chapters.map((chapter, index) => (
          <Box p={4} key={index}>
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
          </Box>
        ))}
      </Flex>
    </Center>
  )
}
