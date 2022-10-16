import { Flex, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'

import WithContext from '../context/WithContext'

const InitialPage: NextPage = () => {
  return (
    <WithContext>
      <Flex
        direction="column"
        minHeight="100vh"
        maxWidth="1920px"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Initial Page</Text>
      </Flex>
    </WithContext>
  )
}

export const getStaticProps: GetStaticProps = () => {
  // const data = fetchProps()
  const data = {
    data: {},
  }

  return {
    props: {
      data,
    },
  }
}

// export const getStaticPaths: GetStaticPaths = () => {
//   // const data = fetchProps()

//   return {
//     paths: [],
//     fallback: false,
//   }
// }

export default InitialPage
