import { IPost } from '@/interfaces/post.interface'
import { IUserSingleData } from '@/interfaces/user.interface'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'

const UserPage: FC<IUserSingleData> = ({ user, userPost }) => {
    return (
        <div className='user'>
            <h3 className='text-3xl mb-3'>User Name: {user.username}</h3>
            <div className='text-2xl'>Name: {user.name}</div>
            <div className='text-2xl'>Email: <a href={`mailto:${user.email}`}>{user.email}</a></div>
            <div className='text-2xl'>Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></div>

            <h3 className='text-3xl mt-3'>User Post: {user.username}</h3>
            <div className='text-2xl'>Post title: {userPost.title}</div>
            <div className='text-2xl'>Post content: {userPost.body}</div>
            <Link href={`/posts/${user.id}`} className='display: inline-block bg-white hover:bg-sky-800
                hover:text-white text-sky-900 font-bold py-2 px-4 my-4
                rounded transition-all duration-300'>Read More</Link>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<IUserSingleData> = async ({ params }) => {
    const userId = params?.userId as string

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json()

    const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    const userPost: IPost = await resPosts.json()

    return {
        props: { user, userPost }
    }
}

export default UserPage