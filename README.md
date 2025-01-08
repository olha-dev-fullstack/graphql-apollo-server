# GraphQL Blog Application

This is a simple GraphQL blog application that enables users to sign up, sign in, create, manage, and publish posts seamlessly.

## 🚀 Features

- **User Authentication**: Secure sign-up and sign-in functionality.
- **Post Management**: Create, update, delete, publish, and unpublish posts.
- **User Profiles**: View user profiles and associated posts.

## 🛠️ Tech Stack

### Backend

- **JavaScript**
- **Apollo Server**
- **GraphQL**
- **Prisma ORM**
- **PostgreSQL**

### Frontend

- **React.js**
- **Bootstrap CSS Framework**

## 📜 GraphQL Schema

```javascript
import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    me: User
    posts: [Post!]!
    profile(userId: ID!): Profile
  }

  type Mutation {
    postCreate(post: PostInput!): PostPayload!
    postUpdate(postId: ID!, post: PostInput!): PostPayload!
    postDelete(postId: ID!): PostPayload!
    postPublish(postId: ID!): PostPayload!
    postUnpublish(postId: ID!): PostPayload!
    signup(
      credentials: CredentialsInput!
      name: String!
      bio: String!
    ): AuthPayload!
    signin(credentials: CredentialsInput!): AuthPayload!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    published: Boolean!
    user: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Profile {
    id: ID!
    bio: String!
    isMyProfile: Boolean!
    user: User!
  }

  type UserError {
    message: String!
  }

  type PostPayload {
    userErrors: [UserError!]!
    post: Post
  }

  type AuthPayload {
    userErrors: [UserError!]!
    token: String
  }

  input PostInput {
    title: String
    content: String
  }

  input CredentialsInput {
    email: String!
    password: String!
  }
`;
```

## 📦 Project Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure the environment:**
   - Create a `.env` file in a server folder and set your PostgreSQL connection details.
   ```bach
    DATABASE_URL="your connection string here"
    JWT_SIGNATURE='your security string here'
   ```
4. **Run database migrations:**
   ```bash
   npx prisma migrate dev
   ```
5. **Start the server:**
   ```bash
   npm start
   ```

## 🎯 Usage Instructions

- Access the frontend to sign up, sign in, and manage posts.
- Use a GraphQL client (like Apollo Sandbox or Insomnia) for API testing.
