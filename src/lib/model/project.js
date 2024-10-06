import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  des: String,
  demo_url: String,
  img_url: String,
  git_url: String,
});

const homeSchema = new mongoose.Schema({
  title: String,
  des: String,
  resume: String,
});

const aboutSchema = new mongoose.Schema(
  {
    bio: {
      type: String,
      required: true, // Assuming 'bio' is a required field
    },
    skills: {
      type: [String], // Array of strings
      required: true, // Assuming 'skills' is a required field
    },
    experience: {
      type: [Object], // Array of strings
      required: true, // Assuming 'experience' is a required field
    },
  },
  { collection: "abouts" }
); // Explicitly specify the collection name

// Check each model individually
export const Projects =
  mongoose.models.projects || mongoose.model("projects", projectSchema);
export const Home =
  mongoose.models.homes || mongoose.model("homes", homeSchema);
export const About =
  mongoose.models.abouts || mongoose.model("abouts", aboutSchema);
