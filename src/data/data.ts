import { IReviewProps } from "../types";

const reviewsData: IReviewProps[] = [
    {
        id: "102231",
        rating: 5,
        content: "This is an excellent course! Must take!",
        author: {
            id: "U00040",
            name: "Ron Weasley"
        }
    },
    {
        id: "102232",
        rating: 3.5,
        content: "This is very basic. Good for beginner but does not cover advanced topics. ",
        author: {
            id: "U00042",
            name: "Harry Potter"
        }
    },
];

export {
    reviewsData
};