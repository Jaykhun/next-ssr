import { IPostData } from '@/interfaces/post.interface'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

const PostsPage: NextPage<IPostData> = ({ posts }) => {
    return (
        <>
            <div className='text-3xl my-3 font-bold'>Posts</div>
            <div className='posts'>
                {posts?.map(post =>
                    <div className='users__item' key={post.id}>
                        <Link href={`/posts/${post.id}`}
                            className='display: inline-block font-medium text-2xl text: capitalize'>
                            {post.id}. {post.title}
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<IPostData> = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
        props: { posts }
    }
}

export default PostsPage