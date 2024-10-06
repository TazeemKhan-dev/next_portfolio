import { Projects } from "@/lib/model/project"; // Model import
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  // Ensure MongoDB connection
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  // Fetch data from the 'projects' collection
  const data = await Projects.find();

  return NextResponse.json(data);
}
