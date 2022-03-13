import { Container, Flex } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

import { createContext } from 'react'

import type { NextPage } from 'next'

const Landing: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container maxW={'1920px'} minH={'100vh'} p={0}>
      <Flex h={{ base: 'auto' }} direction={'column'}>
        <ModalContext.Provider
          value={{
            isOpen,
            onOpen,
            onClose,
          }}
        ></ModalContext.Provider>
      </Flex>
    </Container>
  )
}

// CONTEXT
export type ModalContextType = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined!
)

export default Landing
