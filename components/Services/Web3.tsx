import { IServiceProps } from '@/types/service'
import Content from './Content'

export default function Web3({ data }: IServiceProps) {
  return <Content title={data.title} summary={data.summary} data={data.data} />
}
