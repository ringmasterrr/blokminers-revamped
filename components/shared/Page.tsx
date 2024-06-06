import { cn } from '@/lib/utils'
import { IReactNode } from '@/types/generics'

interface IPage extends IReactNode {
  className?: string
}

export function Page({ children, className }: IPage) {
  return (
    <main
      className={cn(`max-w-8xl mx-auto w-full p-8`, 'pageHeight', className)}
    >
      {children}
    </main>
  )
}
