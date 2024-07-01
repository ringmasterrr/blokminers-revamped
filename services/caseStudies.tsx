import axios from 'axios'

const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/case-study`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getCaseStudyDetails = async (id: string) => {
  console.log('id', id)
  return (await http.get(`/case-study-details/${id}`)).data
}

export const getAllCaseStudies = async () => {
  return (await http.get('/get-all-case-studies')).data
}
