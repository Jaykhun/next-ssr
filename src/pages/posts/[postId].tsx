import { IPostSingleData } from '@/interfaces/post.interface'
import { GetServerSideProps } from 'next'
import { FC } from 'react'

const PostPage: FC<IPostSingleData> = ({ post }) => {
    return (
        <div className='post'>
            <h3 className='text-3xl mb-3'>Title: {post.title}</h3>
            <h3 className='text-3xl mb-3'>Content: {post.body}</h3>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<IPostSingleData> = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const post = await res.json()

    return {
        props: { post }
    }
}

export default PostPage