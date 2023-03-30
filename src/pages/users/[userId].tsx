import { IUserSingleData } from '@/interfaces/user.interface'
import { FC } from 'react'

const UserPage: FC<IUserSingleData> = ({ user }) => {

    return (
        <div className='user'>
            <h3 className='text-4xl mb-3'>{user.username}</h3>
            <div className='text-2xl'>{user.name}</div>
            <div className='text-2xl'>{user.email}</div>
            <div className='text-2xl'>{user.phone}</div>
        </div>
    )
}

export const getServerSideProps = async (context: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.userId}`)
    const user = await res.json()

    return {
        props: {
            user,
        },
    }
}

export default UserPage