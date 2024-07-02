import axios, { AxiosError } from 'axios'
import BindService from './bindService'
import { IBlog } from '@/types/blogs'

export class BlogsService extends BindService {
  private http 
  
  constructor(){
    super()
    this.http = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/blog`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public getAllBlogs = async ({keyword, page}:{keyword?: string, page?: string}): Promise< {
    data: IBlog[],
    total: number
    page: number
    limit: number
    totalPages: number
  }> => {
    try {
      return (await this.http.get('/get-all-blogs', {
        params: { keyword, page },
      })).data
    } catch (error) {
      throw(error)
    }
  }
  
  public getBlogById = async (id: string) => {
    try {
      return (await this.http.get(`/blog-details/${id}`)).data
    } catch (error) {
      throw(error)
    }
  }
}


