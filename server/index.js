import Express from "express";
const app = Express();

import userRouter from "./route/users.js";

app.use("/",userRouter);




const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("API working ...");
});
