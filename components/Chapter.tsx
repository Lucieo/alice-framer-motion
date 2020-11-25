import { Box, Text } from '@chakra-ui/react'
import { IChapter } from 'data/alice'
import React, { useState } from 'react'
import BookNavigation from './BookNavigation'
import Page from './Page'
import { motion } from 'framer-motion'

interface IChapterWrapper extends IChapter {
  nextChapter: number
  prevChapter?: number
}

const chapterVariant = {
  visible: {
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
    },
  },
  hidden: { y: '-20vh' },
}

const Chapter = ({
  title,
  subtitle,
  pages,
  nextChapter,
  prevChapter,
}: IChapterWrapper) => {
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <Box paddingBottom={20}>
      <motion.div variants={chapterVariant} initial="hidden" animate="visible">
        <Box paddingY={10}>
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="2xl">{subtitle}</Text>
          <Text>
            page {currentPage + 1} / {pages.length}
          </Text>
        </Box>
        <Page key={currentPage} {...pages[currentPage]} />
      </motion.div>
      <BookNavigation
        totalPages={pages.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nextChapter={nextChapter}
        prevChapter={prevChapter}
      />
    </Box>
  )
}

export default Chapter
