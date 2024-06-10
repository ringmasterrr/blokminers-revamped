'use client'
import { useEffect, useState } from 'react'

export function Numbers() {
  const [years, setYears] = useState(0)
  const [projects, setProjects] = useState(0)
  const [clients, setClients] = useState(0)

  useEffect(() => {
    const duration = 1500
    const steps = 100
    const intervalTime = duration / steps

    const incrementYears = 5 / steps
    const incrementProjects = 200 / steps
    const incrementClients = 80 / steps

    let currentStep = 0

    const interval = setInterval(() => {
      if (currentStep < steps) {
        setYears((prev) => Math.min(prev + incrementYears, 5))
        setProjects((prev) => Math.min(prev + incrementProjects, 200))
        setClients((prev) => Math.min(prev + incrementClients, 80))
        currentStep++
      } else {
        clearInterval(interval)
      }
    }, intervalTime)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className='flex w-fit gap-8'>
      <div className='flex flex-col text-theme-dark'>
        <div className='bg-gradient-to-b from-[#00283C] via-[#00283C] via-20% to-[#fff] bg-clip-text text-8xl font-extrabold text-transparent'>
          {Math.round(years)}+
        </div>
        <div className='mt-[-25px] font-extrabold'>YEARS</div>
        <div className='text-sm font-semibold'>of Experience</div>
      </div>
      <div className='flex flex-col text-theme-dark'>
        <div className='bg-gradient-to-b from-[#00283C] via-[#00283C] via-20% to-[#fff] bg-clip-text text-8xl font-extrabold text-transparent'>
          {Math.round(projects)}+
        </div>
        <div className='mt-[-25px] font-extrabold'>PROJECTS</div>
        <div className='text-sm font-semibold'>discovered</div>
      </div>
      <div className='flex flex-col text-theme-dark'>
        <div className='bg-gradient-to-b from-[#00283C] via-[#00283C] via-20% to-[#fff] bg-clip-text text-8xl font-extrabold text-transparent'>
          {Math.round(clients)}+
        </div>
        <div className='mt-[-25px] font-extrabold'>CLIENTS</div>
        <div className='text-sm font-semibold'>satisfied</div>
      </div>
    </div>
  )
}
