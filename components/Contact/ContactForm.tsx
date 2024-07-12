'use client'
import PhoneInput from 'react-phone-number-input'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ChangeEvent, useEffect, useState } from 'react'
import { ContactService } from '@/services/contact'
import Image from 'next/image'

const contact = new ContactService()

function ContactForm() {
  const [value, setValue] = useState<any>('')
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
    number: '',
    category: '',
  })
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const [message, setMessage] = useState<string | null>()
  const [error, setError] = useState<string | null>()
  useEffect(() => {
    setData({ ...data, number: value })
  }, [value])
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const response = await contact.createContact(data)
    if (response) {
      console.log(response)
      if (response.success === true) {
        setMessage('Thank you! We will get back to you soon!')
        setData({
          name: '',
          email: '',
          message: '',
          number: '',
          category: '',
        })
        setValue('')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      } else {
        setError('Something went wrong!')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
    }
  }
  return (
    <div className='mt-16 flex w-full flex-col-reverse justify-center gap-14 p-2 2md:mt-0 2md:flex-row 2md:gap-20'>
      {/* <div className='flex flex-col gap-4 text-theme-dark'>
        <div className='text-3xl font-bold sm:text-4xl'>
          Let&apos;s work together
        </div>
        <div className='font-medium'>Get in touch today!</div>
      </div> */}
      <div>
        <div className='text-center text-3xl font-bold sm:text-4xl 2md:text-start'>
          Let&apos;s work together
        </div>
        <div className='text-center font-medium 2md:text-start'>
          Get in touch today!
        </div>
        <div className='my-12 flex flex-col gap-4'>
          <Image
            src={'/Flag_of_India.svg'}
            alt='uae'
            width={500}
            height={500}
            className='w-12'
          />

          <span className='font-bold'>India, Delhi</span>
          <span>📞 +91 93401 90699</span>
        </div>
        <div className='my-12 flex flex-col gap-4'>
          <Image
            src={'/Flag_of_the_United_Arab_Emirates.svg'}
            alt='uae'
            width={500}
            height={500}
            className='w-12'
          />
          <span className='font-bold'>UAE, Dubai</span>
          <span>📞 +971 50 480 7978</span>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className='flex w-full flex-col gap-3'
          action=''
        >
          <Input
            value={data.name}
            onChange={handleChange}
            name='name'
            required={true}
            type='text'
            placeholder='Name'
            className='w-full border-2 bg-theme-light bg-opacity-5 p-4 text-base placeholder-[#6A6A6A] outline-2 focus:outline'
          />
          <Input
            value={data.email}
            onChange={handleChange}
            name='email'
            type='email'
            required={true}
            placeholder='Email'
            className='w-full border-2 bg-theme-light bg-opacity-5 p-4 text-base placeholder-[#6A6A6A] outline-2 focus:outline'
          />
          <PhoneInput
            name='phone'
            required={true}
            international
            placeholder='Phone'
            value={value}
            onChange={setValue}
            className='w-full border-2 bg-theme-light bg-opacity-5 p-4 text-base placeholder-[#6A6A6A] outline-2 focus:outline'
            country='IN'
            defaultCountry='IN'
          />
          <select
            name='category'
            onChange={handleChange}
            value={data.category}
            required={true}
            className='w-full cursor-pointer rounded-lg border-2 bg-theme-light bg-opacity-5 p-3 text-base text-[#6A6A6A] outline-2 focus:outline'
          >
            <option value='Software Development' selected>
              Software Development
            </option>
            <option value='Consultation'>Consultation</option>
            <option value='Designing'>Designing</option>
            <option value='Smart Contract Development'>
              Smart Contract Development
            </option>
            <option value='Smart Contract Audit'>Smart Contract Audit</option>
          </select>
          <textarea
            value={data.message}
            onChange={handleChange}
            required={true}
            className='h-[150px] w-full rounded-lg border-2 bg-theme-light bg-opacity-5 p-4 text-base text-[#6A6A6A] outline-2 focus:outline'
            name='message'
            placeholder='Message'
            id=''
          ></textarea>
          <Button type='submit' className='mt-4 rounded-lg text-lg'>
            Submit
          </Button>
          <div className='h-4'> 
            {error && (
              <p className='w-full text-center text-red-500'>{error}</p>
            )}
            {message && (
              <p className='w-full text-center font-semibold text-green-600'>
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
