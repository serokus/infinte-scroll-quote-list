type ApiResponse<Key extends string, Data> = {
  [K in Key]: Data
} & {
  total: number
  skip: number
  limit: number
}

type Quote = {
  id: number
  quote: string
  author: string
}

type QuotesResponse = ApiResponse<'quotes', Quote[]>
