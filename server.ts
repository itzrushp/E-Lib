import app from "./src/app";

const runServer = () => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port : ${port}`);
    }); 
};

runServer();