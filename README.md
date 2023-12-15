# Downloading and Setting Up the service_guide_app Project

# Prerequisites

Ensure MongoDB is installed on the system.
mongorestore utility should be available (it comes with MongoDB Database Tools).
Git, Node.js, express.js and npm should be installed for repository cloning and package management.
Steps

# Clone the Repository

Open a terminal or command prompt.
Clone the service_guide_app repository:
bash
Copy code
git clone https://github.com/your-username/service_guide_app.git
cd service_guide_app

# Install Dependencies

Navigate to both the frontend and backend directories in separate terminal windows and run:
bash
Copy code
npm install
This command installs the required Node.js packages for each part of the application.
Download the Database Dump

# For Frontend:
Install express: npm install express
Install vite: npm install --save-dev vite

# For Backend:
Install mongo shell, brew install mongosh
Install mongorestore

The MongoDB dump files are located in the data directory within the repository.
If the dump files are compressed (e.g., dump.zip), unzip them:
bash
Copy code
unzip data/dump.zip -d data
Restore the Database Using mongorestore

Navigate to the directory where the dump files were extracted.
Use mongorestore to restore the database service_guide_app.

The command will be:
bash
Copy code
mongorestore --drop --db service_guide_app data/dump/service_guide_app
The --drop flag is optional and used to drop the existing collections before restoring. Omit this if you don’t want to replace the entire existing data.

# Set Up Environment Variables

In both frontend and backend directories, create .env files based on provided .env.example templates.
Make sure the MongoDB connection URI in the backend’s .env file points to the local MongoDB instance (e.g., mongodb://localhost:27017/service_guide_app).

# Start the Backend Server

In the backend directory, start the server (the command is npm start).
Start the Frontend Application

# Start the Frontend Server

In the frontend directory, launch the frontend application (npm run dev).

# Access the Application

Open a web browser and navigate to the URL where the frontend application is running (usually http://localhost:3000 for local development).
Troubleshooting
If you encounter issues with mongorestore, ensure MongoDB is running and the path to the dump files is correct.
For any connection issues between the frontend and backend, verify the environment variables and check if both servers are running.
Consult the console (for frontend) and server logs (for backend) for error messages that can help diagnose issues.
