import express from "express";
import bodyParser from "body-parser";
import usersRouter from './routes/users.js'

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    console.log('running home page')
    res.send("Welcome to Home Page")
})

app.use("/users", usersRouter);


app.listen(PORT, () => {
  console.log(`Server is listen at port: ${PORT}`);
});
