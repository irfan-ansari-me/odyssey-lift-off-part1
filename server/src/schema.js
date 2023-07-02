const gql = require('graphql-tag');

const typeDefs = gql`
    """
    Query type is the entrypoint for our rest of the schema. 
    All the fields defined underneath it are what client can query for.
    """
    type Query {
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;