'use client'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { InfiniteScroller } from './infinite-scroller'
import { useInfiniteQuoteList } from '@/hooks/use-infinite-quote-list'

export const InfinteQuoteList = () => {
  const {
    isPending,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isFetchNextPageError,
  } = useInfiniteQuoteList()

  const quotes = data?.pages.flatMap((page) => page.quotes)

  return (
    <>
      {isPending ? (
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <div
                key={i}
                className="rounded-sm bg-background p-8 w-full border border-border space-y-4"
              >
                <Skeleton className="py-2.5 w-full" />
                <Skeleton className="py-2.5 w-1/2" />
              </div>
            )
          })}
        </div>
      ) : (
        <>
          {quotes && quotes.length > 0 && (
            <InfiniteScroller
              className="grid grid-cols-2 gap-4"
              onBottomReached={() =>
                hasNextPage &&
                !isFetching &&
                !isFetchingNextPage &&
                fetchNextPage()
              }
            >
              {quotes?.map((quote) => {
                return (
                  <section
                    key={quote.id}
                    className="bg-background p-8 rounded-sm border border-border"
                  >
                    <div className="space-y-4">
                      <p className="italic font-serif text-foreground text-base text-pretty">
                        {quote.quote}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {quote.author}
                      </p>
                    </div>
                  </section>
                )
              })}
            </InfiniteScroller>
          )}
          {!isError && !quotes?.length && (
            <p className="text-center">No quotes yet.</p>
          )}
          {(isError || isFetchNextPageError) && (
            <p className="text-center text-red-500">{error.message}</p>
          )}
        </>
      )}
    </>
  )
}
