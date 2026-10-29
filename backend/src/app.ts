import cors from "cors"
import express, { type Application } from "express";

const app: Application = express();

app.use(cors({
    origin: "http://localhost:5001"
}))

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Message" });
});

export default app;