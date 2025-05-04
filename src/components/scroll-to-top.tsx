'use client'
import { ArrowUp } from 'lucide-react'
import { useWindowScroll } from 'react-use'

export const ScrollToTop = () => {
  const { y: scroll } = useWindowScroll()
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      title="Scroll to Top"
      onClick={() => toTop()}
      data-scrolled={scroll > 300}
      className="fixed flex justify-center items-center right-3 bottom-3 w-10 h-10 rounded-full transition-opacity duration-300 z-10 print:hidden opacity-30 hover:opacity-100 hover:bg-gray-200 data-[scrolled=false]:opacity-0 data-[scrolled=false]:pointer-events-none"
    >
      <ArrowUp size={22} />
    </button>
  )
}
