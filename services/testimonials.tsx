import axios from 'axios'
import BindService from './bindService'
import { ITestimonial } from '@/types/testimonial'

export class TestimonialService extends BindService {
  private http
  constructor() {
    super()
    this.http = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/testimonial`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  public getAllTestimonials = async (): Promise<{
    data: ITestimonial[]
  }> => {
    try {
      return (await this.http.get('/getAll'))
    } catch (error) {
      throw error
    }
  }
}
