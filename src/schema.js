const { gql } = require('apollo-server-express');

// Wrote the schema first, so I can define the data needed in the application
module.exports = gql`
  scalar DateTime

  # Schema Type

  type Event {
    id: ID!
    title: String!
    description: String!
    date: String!
    locationArea: String!
    participant: Int!
    image: String!
    activities: [Activity]
    userActivities: [User]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Activity {
    userId: ID!
    activityPhoto: String!
    activityDescription: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type EventFeed {
    events: [Event]!
    cursor: String!
    hasNextPage: Boolean!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String!
    events: [Event!]!
  }

  type Query {
    events: [Event]
    event(id: ID!): Event
  }

  # Mutation Type

  type Mutation {
    # Event
    createEvent(input: EventInput): Event
    updateEvent(id: ID!, input: EventInput): Event
    deleteEvent(id: ID!): Boolean

    # Activity
    createActivity(input: ActivityInput): Activity
    updateActivity(id: ID!, input: ActivityInput): Activity
    deleteActivity(id: ID!): Boolean!

    # User action
    signUp(input: UserSignUp): String
    signIn(input: UserSignIn): String
  }
`;

// # type EventImage {
//   #   id: ID!
//   #   imageUrl: String!
//   # }
// type ActivityPhoto {
//   id: ID!
//   imageUrl: String!
// }

// input EventImageInput {
//   imageUrl: String!
// }

// input ActivityPhotoInput {
//   imageUrl: String!
// }

// input ActivityInput {
//   activityPhoto: String!
//   activityDescription: String!
// }

// input EventInput {
//   title: String!
//   description: String!
//   date: String!
//   locationArea: String!
//   participant: Int!
//   image: String!
//   activities: [ActivityInput]
// }

// input UserSignUp {
//   username: String!
//   email: String!
//   password: String!
// }

// input UserSignIn {
//   username: String!
//   email: String!
//   password: String!
// }
