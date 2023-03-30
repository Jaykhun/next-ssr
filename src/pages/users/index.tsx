import { IUserData } from '@/interfaces/user.interface'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

const UsersPage: NextPage<IUserData> = ({ users }) => {
    return (
        <>
            <div className='text-3xl my-3 font-bold'>Users</div>
            <div className='users'>
                {users?.map(user =>
                    <div className='users__item' key={user.id}>
                        <Link href={`/users/${user.id}`}
                            className='display: inline-block font-medium text-2xl'>
                            {user.id}. {user.username}
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export const getStaticProps: GetServerSideProps<IUserData> = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()

    return {
        props: {
            users,
        },
    }
}

export default UsersPage