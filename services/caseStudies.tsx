import axios from 'axios'
import BindService from './bindService'
import { ICases } from '@/types/cases'

export class CaseStudyService extends BindService {
  private http

  constructor() {
    super()
    this.http = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/case-study`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public getAllCaseStudies = async ({
    keyword,
    page,
  }: {
    keyword?: string
    page?: string
  }): Promise<{
    data: ICases[]
    total: number
    page: number
    limit: number
    totalPages: number
  }> => {
    try {
      return (
        await this.http.get('/get-all-case-studies', {
          params: { keyword, page },
        })
      ).data
    } catch (error) {
      throw error
    }
  }

  public getCaseStudyDetails = async (id: string) => {
    try {
      return (await this.http.get(`/case-study-details/${id}`)).data
    } catch (error) {
      throw error
    }
  }
}
