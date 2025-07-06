import { config } from "./src/config/config.ts"; // Importing the config module
import app from "./src/app.ts";

const runServer = () => {
    const port = config.port || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port : ${port}`);
    }); 
};

runServer();