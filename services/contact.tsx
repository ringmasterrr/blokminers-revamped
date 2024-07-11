import axios, { AxiosError } from 'axios';
import BindService from './bindService';

export class ContactService extends BindService {
  private http;

  constructor() {
    super();
    this.http = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public createContact = async (request: {
    name: string;
    email: string;
    message: string;
    number: string;
    category: string;
  }) => {
    try {
      return (await this.http.post('/create', request)).data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('Axios error details:', error.response?.data); 
      }
      throw error;
    }
  };
}
