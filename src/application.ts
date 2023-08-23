import express, { Request, Response, Application } from "express";

const app: Application = express();
app.get("/", (req: Request, resp: Response): void => {
  resp.send(`
    Hello Typescript with Node.js！
    <br/>
    Hello World!
  `);
});

const port = process.env.PORT || 8000;
app.listen(port, (): void => {
  console.log(`Server Running here http://localhost:${port}`);
});
