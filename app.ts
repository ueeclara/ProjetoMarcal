import express from 'express';

import routes from "./src/routes/index"

const app = express()

app.use(express.json(), routes)
const porta = 3000

app.listen(porta, () => console.log("Server is running on port 3000"))