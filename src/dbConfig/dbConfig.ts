import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected Successfully.");
    });
  } catch (error) {
    console.log("Somwthing went wrong!");
    console.log(error);
  }
}
