import {
  CurrencyConfigAction,
  currencyConfigReducer,
  CurrencyConfigState,
  initialState,
} from "@/reducer/currencyConfig";
import { createContext, Dispatch, useContext, useReducer } from "react";

export const CurrencyConfigContext =
  createContext<CurrencyConfigState>(initialState);

export const CurrenyConfigDispatchContext = createContext<
  Dispatch<CurrencyConfigAction>
>(() => null);

interface CurrencyConfigProviderProps {
  children: React.ReactNode;
}

export const CurrencyConfigProvider = ({
  children,
}: CurrencyConfigProviderProps) => {
  const [state, dispatch] = useReducer(currencyConfigReducer, initialState);

  return (
    <CurrencyConfigContext.Provider value={state}>
      <CurrenyConfigDispatchContext.Provider value={dispatch}>
        {children}
      </CurrenyConfigDispatchContext.Provider>
    </CurrencyConfigContext.Provider>
  );
};

export const useCurrencyConfig = () => {
  return useContext<CurrencyConfigState>(CurrencyConfigContext);
};

export const useCurrencyConfigDispatch = () => {
  return useContext<Dispatch<CurrencyConfigAction>>(
    CurrenyConfigDispatchContext
  );
};
