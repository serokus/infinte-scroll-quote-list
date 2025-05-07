import ky, { HTTPError } from 'ky'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteQuoteList = () => {
  return useInfiniteQuery({
    queryKey: ['quotes'],
    queryFn: async ({ pageParam = 0 }) => {
      try {
        const response = await ky
          .get<QuotesResponse>('https://dummyjson.com/quotes', {
            searchParams: {
              skip: pageParam,
              limit: 10,
            },
          })
          .json()

        return response
      } catch (error) {
        if (error instanceof HTTPError) {
          throw new Error(`Failed to fetch quotes: ${error.message}`)
        }
        throw new Error(`Failed to fetch quotes: unknown error`)
      }
    },
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => {
      const { total, skip, limit } = lastPage
      const nextSkip = skip + limit
      return nextSkip < total ? nextSkip : undefined
    },
  })
}
