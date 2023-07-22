import express,{Application,Request,Response} from 'express';
import dotenv from "dotenv";

const app: Application = express();
dotenv.config();

app.get('/',(req: Request,res: Response) => {
    res.end("hello node Typescript & ORM sequlize cli migrations");
})

app.listen(process.env.PORT,()=>console.log(`app is runnng at 'http://localhost:${process.env.PORT}'`));
