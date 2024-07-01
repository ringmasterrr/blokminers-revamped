import axios from 'axios'

const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/portfolio`,
  headers: {
    'Content-Type': 'application/json',
  },
})


export const getAllPortfolios = async () => {
  return (await http.get('/getAll')).data
}
