import { InfinteQuoteList } from '@/components/infinte-quote-list'

export default function Home() {
  return (
    <main className="max-w-screen-sm min-h-svh mx-auto py-6 max-md:px-4">
      <h2 className="text-2xl font-black mb-4">Quotes</h2>
      <InfinteQuoteList />
    </main>
  )
}
