import express from "express";
import postRoutes from "./routes/posts.routes.js";
import  fileUpload from "express-fileupload";

const app = express()

// middlewares- antes de que llegue a la ruta hay que procesar cosas

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

//routes

app.use(postRoutes)

export default app