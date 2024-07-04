'use client'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.log(error)
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-8 p-8 pt-24 text-5xl'>
      Error
      <Button onClick={reset}>Reset</Button>
    </div>
  )
}
