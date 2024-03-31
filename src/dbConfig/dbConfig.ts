import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!); // This will throw an error if MONGO_URI is not defined
    // mongoose.connect(process.env.MONGO_URI || "")
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to database");
    });

    connection.on("error", (error) => {
      console.error("Error connecting to database: ", error);
      process.exit(1);
    });
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
}