const express = require("express");
const cors = require("cors");
const dbConnect = require("./db/connect");
const allRoutes = require("./routes"); // This will include the new search route

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json()); // Ensure to include this to parse JSON bodies
app.use("/api", allRoutes); // Use the routes, including your new search route

async function bootstrap() {
  try {
    await dbConnect(); // Connect to the database

    const PORT = process.env.PORT || 3000; // Use an environment variable for the port if available
    app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}...`));
  } catch (err) {
    console.error("Error while bootstrapping the app:", err);
  }
}

bootstrap();
