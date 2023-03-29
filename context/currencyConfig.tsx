import { currencyConfigReducer, CurrencyConfigState, initialState } from '@/reducer/currencyConfig'
import { createContext, useReducer } from 'react'

export const CurrencyConfigContext = createContext<CurrencyConfigState>(initialState)

export const CurrenyConfigDispatchContext = createContext<React.Dispatch<any>>(() => null)

interface CurrencyConfigProviderProps {
  children: React.ReactNode
}

export const CurrencyConfigProvider = ({ children }: CurrencyConfigProviderProps) => {
  const [state, dispatch] = useReducer(currencyConfigReducer, initialState)
  return (
    <CurrencyConfigContext.Provider value={state}>
      <CurrenyConfigDispatchContext.Provider value={dispatch}>{children}</CurrenyConfigDispatchContext.Provider>
    </CurrencyConfigContext.Provider>
  )
}
