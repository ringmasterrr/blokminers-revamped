import axios from 'axios'
import BindService from './bindService'

export class PortfolioService extends BindService {
  private http

  constructor() {
    super()
    this.http = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/portfolio`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  public getAllPortfolios = async () => {
    return (await this.http.get('/getAll')).data
  }
}
