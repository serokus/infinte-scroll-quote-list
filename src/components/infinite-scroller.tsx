import { cn } from '@/lib/utils'
import { useInView } from 'react-intersection-observer'

type InfiniteScroller = {
  onBottomReached: VoidFunction
} & React.ComponentProps<'div'>

export const InfiniteScroller = ({
  className,
  children,
  onBottomReached,
  ...props
}: InfiniteScroller) => {
  const { ref } = useInView({
    onChange(inView) {
      if (inView) onBottomReached()
    },
  })

  return (
    <div className={cn('', className)} {...props}>
      {children}
      <div ref={ref} />
    </div>
  )
}
