import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='text-3xl my-3 font-bold text-center'>
      <Link href='/users' className='mx-3'>Users</Link>
      <Link href='/posts' className='mx-3'>Posts</Link>
    </div>
  )
}

export default HomePage