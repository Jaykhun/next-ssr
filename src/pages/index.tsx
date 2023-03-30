import { IUserData } from '@/interfaces/user.interface'
import { NextPage } from 'next'
import Link from 'next/link'

const HomePage: NextPage<IUserData> = ({ users }) => {
  return (
    <>
      <div className='text-3xl my-3 font-bold'>Users</div>
      <div className='users'>
        {users?.map(user =>
          <div className='users__item' key={user.id}>
            <Link href={`/users/${user.id}`} className='display: inline-block font-medium text-2xl'>{user.username}</Link>
          </div>
        )}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}

export default HomePage