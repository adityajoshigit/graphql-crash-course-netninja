export interface IReviewProps {
    id: string,
    rating: number,
    content?: string,
    author: IAuthorProps
}

export interface IAuthorProps {
    id: string,
    name: string
}