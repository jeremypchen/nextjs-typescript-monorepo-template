import { useDisclosure } from '@chakra-ui/react'

import { ModalContext } from '.'

const WithContext = ({ children }: { children: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {' '}
      {children}{' '}
    </ModalContext.Provider>
  )
}

export default WithContext
