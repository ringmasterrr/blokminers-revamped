'use client'

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}){
  console.log(error)
  return <div className="flex items-center justify-center w-full h-full text-5xl p-8 pt-24 flex-col gap-8">
    Error
    <Button onClick={reset}>Reset</Button>
  </div>
}