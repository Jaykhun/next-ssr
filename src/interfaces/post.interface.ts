export interface IPost {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

export interface IPostData {
    posts: IPost[]
}

export interface IPostSingleData {
    post: IPost
}