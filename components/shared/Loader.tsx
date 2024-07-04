import { CgSpinnerTwo } from 'react-icons/cg'

export default function Loader() {
  return (
    <div className='flex h-[40vh] items-center justify-center text-blue-700'>
      <CgSpinnerTwo className='animate-spin text-8xl' />
    </div>
  )
}
