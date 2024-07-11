import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select'
import { Input } from '../ui/input'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Button } from '../ui/button'
const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
})

function ContactForm() {
  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  // })

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   console.log(data)
  // }
  return (
    <div className='flex flex-col sm:w-[450px] w-full gap-10 2md:mt-0 mt-16'>
      <div className='flex flex-col gap-4 text-theme-dark'>
        <div className='sm:text-4xl text-3xl font-bold'>Let's work together</div>
        <div className='text-lg font-normal'>Get in touch today!</div>
      </div>
      <form className='flex w-full flex-col gap-3' action=''>
        <Input
          type='text'
          placeholder='Name'
          className='w-full border-2 bg-theme-light bg-opacity-5 p-4 py-6 text-lg placeholder-[#6A6A6A] outline-2 focus:outline'
        />
        <Input
          type='email'
          placeholder='Email'
          className='w-full border-2 bg-theme-light bg-opacity-5 p-4 py-6 text-lg placeholder-[#6A6A6A] outline-2 focus:outline'
        />
        <Input
          type='number'
          placeholder='Phone'
          className='w-full border-2 bg-theme-light bg-opacity-5 p-4 py-6 text-lg placeholder-[#6A6A6A] outline-2 focus:outline'
        />
        <select className='w-full cursor-pointer rounded-lg border-2 bg-theme-light bg-opacity-5 p-3 text-lg text-[#6A6A6A] outline-2 focus:outline'>
          <option value='' disabled selected>
            Software Development
          </option>
          <option value='frontend'>Frontend Development</option>
          <option value='backend'>Backend Development</option>
          <option value='fullstack'>Full Stack Development</option>
        </select>
        <textarea
          className='h-[150px] w-full rounded-lg border-2 bg-theme-light bg-opacity-5 p-3 text-lg text-[#6A6A6A] outline-2 focus:outline'
          name=''
          placeholder='Message'
          id=''
        ></textarea>
        <Button className='rounded-lg mt-4 text-lg'>Submit</Button>
      </form>
    </div>
  )
}

export default ContactForm
