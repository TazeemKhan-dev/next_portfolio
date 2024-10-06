import { About } from "@/lib/model/project"; // Model import
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  // Ensure MongoDB connection
  if (!mongoose.connection.readyState) {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      return NextResponse.json({
        result: false,
        error: "Database connection error",
      });
    }
  }

  // Fetch data from the 'about' collection
  try {
    const data = await About.find();
    console.log("About data:", data); // Log data to debug

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching About data:", error);
    return NextResponse.json({ result: false, error: error.message });
  }
}
