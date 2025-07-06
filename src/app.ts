import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Elib Project API",})
});

export default app;
