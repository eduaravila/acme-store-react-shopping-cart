import { Currency } from '@/common/types'

interface ChangeCurrencyAction {
  type: 'CHANGE_CURRENCY'
  currency: Currency
}
export interface CurrencyConfigState {
  currency?: Currency
}

type CurrencyConfigAction = ChangeCurrencyAction

/*
reducer to handle the currency configuration
the currency have this strutcture:
 {
    key: 'usd',
    symbol: '$',
    usdCoef: 1,
  },

  we can only have one currency at a time
*/

/*
we could use usd as default currency but 
i decited to use undefined as default value
because we dont know if the api support usd
*/
export const initialState: CurrencyConfigState = {
  currency: undefined,
}

export const currencyConfigReducer = (
  state: CurrencyConfigState,
  action: CurrencyConfigAction
): CurrencyConfigState => {
  switch (action.type) {
    case 'CHANGE_CURRENCY': {
      return {
        currency: action.currency,
      }
    }
    default:
      return state
  }
}
