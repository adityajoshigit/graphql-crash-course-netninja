const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.


  # This "User" type defines the queryable fields for every User in our data source.
  type User {
    id: ID!
    name: String!
    visibility: Boolean
  }

  type Course {
    id: ID!
    label: String!
  }

  # This "Review" type defines the queryable fields for every Review in our data source.
  type Review {
    id: ID!
    rating: Int!
    content: String
  }


  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    reviews: [Review]
    courses: [Course]
    users: [Author]
  }
`;

export default typeDefs;