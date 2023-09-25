import {reviews, courses, users} from '../data/index.js';

const resolvers = {
    Query: {
        reviews: () => reviews,
        courses: () => courses,
        course: (_, args: {
            id: string
        }) => {
            return reviews.find((r) => args.id === r.id);
        },
        users: () => users,
    }
};

export default resolvers;