import axios from 'axios'

const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/testimonial`,
  headers: {
    'Content-Type': 'application/json',
  },
})


export const getAllTestimonials = async () => {
  return (await http.get('/getAll')).data
}
