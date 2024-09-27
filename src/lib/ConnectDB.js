import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nj7eiar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
let db;
export const connectDB = async () => {
  if (db) return db;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    db = client.db('shayan_mart');
    return db;
  } catch (error) {
    console.log(error);
  }
};
