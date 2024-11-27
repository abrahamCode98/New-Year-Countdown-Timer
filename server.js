import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);
 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static("dist"))


app.get("/countdown", (req, res) => { 
   res.render('index', {
       pageTitle : "countdown"
   })
});   

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})