import { cn } from '@/lib/utils'
import { IReactNode } from '@/types/generics'

interface IPage extends IReactNode {
  className?: string
}

export function Page({ children, className }: IPage) {
  return (
    <main
      className={cn(`mx-auto w-full max-w-8xl `, 'pageHeight', className)}
    >
      {children}
    </main>
  )
}
