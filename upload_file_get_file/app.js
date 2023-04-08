import express from "express";
import dotenv from "dotenv"
import os from "os";
import formData from "express-form-data";

import connectDB from "./configs/db-config.js";
import fileRoute from "./routes/file-route.js";

dotenv.config()
connectDB()

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(formData.parse(options))

app.use("/files", fileRoute);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Store File and Get File app listening on port ${port}!`)
})
