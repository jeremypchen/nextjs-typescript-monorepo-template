import { createContext, Dispatch, SetStateAction } from 'react'

export type User = {
  id: string
  firebaseUserId: string
  emailAddress: string
}

export type AuthContextType = {
  isSignedIn: boolean
  setIsSignedIn: Dispatch<SetStateAction<boolean>>
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
  userToken: string
  setUserToken: Dispatch<SetStateAction<string>>
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined!
)

export type ModalContextType = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined!
)
