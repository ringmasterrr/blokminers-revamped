export interface IServiceProps {
    data: {
      title: string
      summary: string
      data: Array<{
        title: string
        content: string
        image: string
      }>
    }
  }