import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    console.info("Database connected successfully");
    app.listen(config.port, () => {
      console.log("App is connected");
    });
  } catch (err) {
    console.error("Failed to connect");
  }
}

server();
