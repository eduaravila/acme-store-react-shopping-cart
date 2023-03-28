export type CurrencyKey = 'usd' | 'eur' | 'gbp' | 'cad' | 'jpy'

export type Currency = {
  key: CurrencyKey
  symbol: string
  usdCoef: number
}

export type Item = {
  id: string
  title: string
  description: string
  imageSrc: string
  price: number
  priceCurrency: CurrencyKey
  createdAt: string
  updatedAt: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type ApiCurrenciesRequest = {}
export type ApiCurrenciesResponse = Currency[]

export type ApiItemsRequest = {
  limit?: number
  offset?: number
  query?: string
}

export type ApiItemsResponse = {
  total: number
  perPage: number
  items: Item[]
}
