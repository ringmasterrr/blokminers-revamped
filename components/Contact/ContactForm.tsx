'use client'
import PhoneInput from 'react-phone-number-input'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ChangeEvent, useEffect, useState } from 'react'
import { ContactService } from '@/services/contact'

const contact = new ContactService()

function ContactForm() {
  const [value, setValue] = useState('')
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
      if(response.success === true){
        setMessage('Thank you! We will get back to you soon!')
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      }else{
        setError('Something went wrong!')
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      }
    }
  }
  return (
    <div className='mt-16 flex w-full flex-col gap-10 sm:w-[450px] 2md:mt-0'>
      <div className='flex flex-col gap-4 text-theme-dark'>
        <div className='text-3xl font-bold sm:text-4xl'>
          Let's work together
        </div>
        <div className='font-medium'>Get in touch today!</div>
      </div>
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
        {error && <p className='text-red-500 w-full text-center'>{error}</p>}
        {message && <p className='text-green-600 w-full text-center'>{message}</p>}
      </form>
    </div>
  )
}

export default ContactForm
