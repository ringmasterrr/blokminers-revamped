import axios from 'axios'

const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/blog`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getAllBlogs = async () => {
  return (await http.get('/get-all-blogs')).data
}

export const getBlogById = async (id: string) => {
  return (await http.get(`/blog-details/${id}`)).data
}

// export const getAllBlogs = async () => {
//   return (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/get-all-blogs`))
// }

