//import necessary modules
import express from 'express'; // Import Express.js framework
import path from 'path'; // // Import the 'path' module for handling file and directory paths
import {fileURLToPath} from 'url';  // Import 'fileURLToPath' to get the current file's path when using ES modules


const app = express(); 
const PORT = 5000;  // Define the port the server will listen on

// ES modules does not provide __dirname by default, so, get the current file's path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);
 

// Set up the view engine for rendering dynamic templates
app.set("view engine", "ejs"); // Use Ejs as the templating engine
app.set("views", path.join(__dirname, "views")); // Define the folder where Ejs templates are located

//Serve static files
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' folder



// Define a Route for the countdown endpoint
app.get("/countdown", (req, res) => { 
   res.render('index', {
       pageTitle : "countdown" // Pass the 'pageTitle' variable to the Ejs template
   })
});   

//Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})