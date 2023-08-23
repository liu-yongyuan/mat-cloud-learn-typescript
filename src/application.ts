import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = process.env.PORT || 8000;
app.listen(port, (): void => {
  console.log(`Server Running here http://localhost:${port}`);
});
