import React from 'react'

import { Header } from '@/components/ui/header-3'

export default function Demo() {
  return (
    <div className='w-full'>
      <Header />

      <main className='max-w-3xl mx-auto min-h-screen w-full px-4 py-12'>
        <div className='mb-4 space-y-2'>
          <div className='h-6 w-4/6 rounded-md border border-theme-light/10 bg-blue-ribbon' />
          <div className='h-6 w-1/2 rounded-md border border-theme-light/10 bg-dodger-blue' />
        </div>
        <div className='mb-8 flex gap-2'>
          <div className='h-3 w-14 rounded-md border border-theme-light/10 bg-heliotrope' />
          <div className='h-3 w-12 rounded-md border border-theme-light/10 bg-limeade' />
        </div>

        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className='mb-8 space-y-2'>
            <div className='h-4 w-full rounded-md border border-theme-light/10 bg-blue-ribbon' />
            <div className='h-4 w-full rounded-md border border-theme-light/10 bg-dodger-blue' />
            <div className='h-4 w-full rounded-md border border-theme-light/10 bg-heliotrope' />
            <div className='h-4 w-1/2 rounded-md border border-theme-light/10 bg-fun-green' />
          </div>
        ))}
      </main>
    </div>
  )
}
