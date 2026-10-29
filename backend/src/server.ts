import app from "./app.js";
import "dotenv/config"

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error: any) => {
    if (error) {
        return error;
    }

    console.log(`This server is running on http://localhost:5001`);
});