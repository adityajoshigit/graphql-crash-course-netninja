const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Author" type defines the queryable fields for every Author in our data source.
  type Author {
    id: String!
    name: String!
  }

  # This "Review" type defines the queryable fields for every Review in our data source.
  type Review {
    id: String!
    rating: Int!
    content: String
    author: Author
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    reviews: [Review]
  }
`;

export default typeDefs;