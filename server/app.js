import express from "express";
import postRoutes from "./routes/posts.routes.js";
import  fileUpload from "express-fileupload";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// middlewares- antes de que llegue a la ruta hay que procesar cosas

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

//routes

app.use(postRoutes)
console.log(__dirname);
app.use(express.static(join(__dirname, '../client/build')))

app.get('*', (req, res)=> {
    res.sendFile(join(__dirname, '../client/build/index.html'))
})

export default app