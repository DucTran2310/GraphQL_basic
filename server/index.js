import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/schema.js';
import { resolvers } from './resolver/resolver.js';
import mongoose from 'mongoose';

import mongoDataMethods from './data/db.js';

const context = { mongoDataMethods };
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// connect mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Learn_GraphQL', {});

    console.log('MongoDb connected');

    // Start the Apollo Server once MongoDB connection is established
    const { url } = await startStandaloneServer(server, {
      context: () => ({mongoDataMethods}),
      listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
  } catch (error) {
    console.log('VVVERROR: ', error);
    process.exit(1);
  }
}

// Call connectDB() to initiate the process
connectDB();
