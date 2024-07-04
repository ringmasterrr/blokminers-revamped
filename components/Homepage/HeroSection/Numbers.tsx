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

    const incrementYears = 6 / steps
    const incrementProjects = 200 / steps
    const incrementClients = 80 / steps

    let currentStep = 0

    const interval = setInterval(() => {
      if (currentStep < steps) {
        setYears((prev) => Math.min(prev + incrementYears, 6))
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
    <div className='fade-up flex w-fit gap-4 md:gap-8'>
      <div className='flex flex-col text-theme-dark'>
        <div className='bg-gradient-to-b from-[#00283C] via-[#00283C] via-20% to-[#fff] bg-clip-text text-4xl font-extrabold text-transparent md:text-7xl 2md:text-8xl'>
          {Math.round(years)}+
        </div>
        <div className='mt-[-20] font-extrabold 2md:mt-[-25px]'>YEARS</div>
        <div className='text-sm font-semibold'>of Experience</div>
      </div>
      <div className='flex flex-col text-theme-dark'>
        <div className='bg-gradient-to-b from-[#00283C] via-[#00283C] via-20% to-[#fff] bg-clip-text text-4xl font-extrabold text-transparent md:text-7xl 2md:text-8xl'>
          {Math.round(projects)}+
        </div>
        <div className='mt-[-20] font-extrabold 2md:mt-[-25px]'>PROJECTS</div>
        <div className='text-sm font-semibold'>discovered</div>
      </div>
      <div className='flex flex-col text-theme-dark'>
        <div className='bg-gradient-to-b from-[#00283C] via-[#00283C] via-20% to-[#fff] bg-clip-text text-4xl font-extrabold text-transparent md:text-7xl 2md:text-8xl'>
          {Math.round(clients)}+
        </div>
        <div className='mt-[-20] font-extrabold 2md:mt-[-25px]'>CLIENTS</div>
        <div className='text-sm font-semibold'>satisfied</div>
      </div>
    </div>
  )
}
