import { connectDB } from '@/lib/ConnectDB';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
export const POST = async req => {
  const newUser = await req.json();
  console.log(newUser);
  try {
    const db = await connectDB();
    const userCollection = await db.collection('user');
    const existingUser = await userCollection.findOne({ email: newUser.email });
    console.log(existingUser);
    if (existingUser) {
      return Response.json({ message: 'User already exists' }, { status: 409 });
    }
    const hashedPass = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({
      ...newUser,
      password: hashedPass,
    });
    return Response.json({ message: 'user Created' }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: 'something wrong', error },
      { status: 500 }
    );
  }
};
