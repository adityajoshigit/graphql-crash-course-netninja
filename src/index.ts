import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from '../schema/index.js';
import {reviews, courses, users} from '../data/index.js';

const PORT = 4000;

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const resolvers = {
  Query: {
    reviews: () => reviews,
    courses: () => courses,
    users: () => users,
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const {url} = await startStandaloneServer(server, {
  listen: {
    port: PORT
  }
});

console.log(`... 🚀 \nServer started serving at PORT ${url}\n...\n...`);