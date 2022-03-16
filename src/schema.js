const { gql } = require('apollo-server-express');

// Wrote the schema first, so I can define the data needed in the application
module.exports = gql`
  scalar DateTime
  # Input Schema Type
  input EventImageInput {
    imageUrl: String!
  }

  input ActivityPhotoInput {
    imageUrl: String!
  }

  input ActivityInput {
    activityPhoto: [ActivityPhotoInput]
    activityDescription: String!
  }

  input EventInput {
    title: String!
    description: String!
    date: String!
    locationArea: String!
    participant: Int!
    image: [EventImageInput]
    activities: [ActivityInput]
  }

  input UserSignUp {
    username: String!
    email: String!
    password: String!
  }

  input UserSignIn {
    username: String!
    email: String!
    password: String!
  }

  # Schema Type

  type Event {
    id: ID!
    title: String!
    description: String!
    date: String!
    locationArea: String!
    participant: Int!
    image: [EventImage]
    activities: [Activity]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type EventImage {
    id: ID!
    imageUrl: String!
  }

  type Activity {
    userId: ID!
    activityPhoto: [ActivityPhoto]
    activityDescription: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type ActivityPhoto {
    id: ID!
    imageUrl: String!
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
    createEvent(input: EventInput): Event
    updateEvent(id: ID!, input: EventInput): Event
    deleteEvent(id: ID!): Boolean!
    createActivity(input: ActivityInput): Activity
    updateActivity(id: ID!, input: ActivityInput): Activity
    deleteActivity(id: ID!): Boolean!
    signUp(input: UserSignUp): String!
    signIn(input: UserSignIn): String!
  }
`;
