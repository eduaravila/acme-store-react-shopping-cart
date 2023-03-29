import { carReducer, CarState, initialState } from '@/reducer/shoppingCar'
import { NextComponentType } from 'next'
import { createContext, useReducer } from 'react'

export const ShoppingCarContext = createContext<CarState>(initialState)

export const ShoppingCarDispatchContext = createContext<React.Dispatch<any>>(() => null)

interface ShoppingCarProviderProps {
  children: React.ReactNode
}

const ShoppingCarProvider: NextComponentType<ShoppingCarProviderProps> = ({ children }) => {
  const [items, dispatch] = useReducer(carReducer, initialState)

  return (
    <ShoppingCarContext.Provider value={items}>
      <ShoppingCarDispatchContext.Provider value={dispatch}>{children}</ShoppingCarDispatchContext.Provider>
    </ShoppingCarContext.Provider>
  )
}

export default ShoppingCarProvider
