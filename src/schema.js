const { gql } = require('apollo-server-express')

// Wrote the schema first, so I can define the data needed in the application
module.exports = gql`
input EventImageInput{
  imageUrl: String!
}

input ActivityPhotoInput{
  imageUrl: String!
}

input ActivityInput{
  activityPhoto: [ActivityPhotoInput]
  activityDescription: String!
}

input EventInput{
  title: String!
  description: String!
  date: String!
  locationArea: String!
  participant: Int!
  image: [EventImageInput]
  activities: [ActivityInput]
}

type Event{
  id: ID!
  title: String!
  description: String!
  date: String!
  locationArea: String!
  participant: Int!
  image: [EventImage]
  activities: [Activity]
}

type EventImage{
  id: ID!
  imageUrl: String!
}

type Activity{
  userId: ID!
  activityPhoto: [ActivityPhoto]
  activityDescription: String!
}

type ActivityPhoto{
  id: ID!
  imageUrl: String!
}

type User{
  id: ID!
  username: String!
  email: String!
  password: String!
}

type Query{
  events: [Event]
  event(id: ID!): Event
}

# type Mutation{
#   createEvent(input: EventInput): Event
#   updateEvent(id: ID!, input: EventInput): Event
#   deleteEvent(id: ID!): Boolean!
#   createActivity(input: ActivityInput): Activity
#   updateActivity(id: ID!, input: ActivityInput): Activity
#   deleteActivity(id:ID!): Boolean!
# }
`