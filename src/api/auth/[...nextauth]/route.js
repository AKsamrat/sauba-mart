import { connectDB } from '@/lib/ConnectDB';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    rolling: false,
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // return true;

        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error('Email and password are required.');
        }
        const db = await connectDB();
        const currentUser = await db.collection('user').findOne({ email });
        console.log(currentUser);
        if (!currentUser) {
          throw new Error('No user found with the given email.');
        }
        const passwordMatched = await bcrypt.compare(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          return null;
        }

        return {
          id: currentUser._id.toString(),
          name: currentUser.name,
          email: currentUser.email,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (
        account.provider === 'google' ||
        account.provider === 'github' ||
        account.provider === 'facebook'
      ) {
        const { name, email, image } = user;
        try {
          const db = await connectDB();
          const userCollection = db.collection('user');
          const userExist = await userCollection.findOne({ email });
          if (!userExist) {
            const res = await userCollection.insertOne(user);
            return user;
          } else {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return user;
      }
    },
  },
  pages: {
    signIn: '/Signin',
  },
});
export { handler as GET, handler as POST };
