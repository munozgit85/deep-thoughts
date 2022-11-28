// import the gql tagged template function
//Tagged templates are an advanced use of template literals,
const { gql } = require("apollo-server-express");

// create our typeDefs
// first query
//query named helloWorld. Not only that, we also explicitly specified that the type of data
// to be returned by this query will be a string.
//With this custom data type, we are able to instruct the thoughts query so that each thought that returns can include _id,
//thoughtText, username, and reactionCount fields with their respective GraphQL scalars.
const typeDefs = gql`
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }
`;

// export the typeDefs
module.exports = typeDefs;
