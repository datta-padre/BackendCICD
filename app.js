import express from 'express';
import AdminRoute from './routes/admin/api.js'; 
import UserRoute from './routes/user/api.js'; 
import dotenv from 'dotenv';
// import connectDB from './config/db.js'

dotenv.config();

// connectDB();

const app = express();

app.use(express.static('public'));
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Welcome TO React Node MongoDB Application  ");
});

app.use("/user", UserRoute);
app.use('/admin', AdminRoute);

const PORT =  8080;
app.listen(PORT);
