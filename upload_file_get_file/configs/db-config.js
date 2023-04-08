import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
mongoose.set("strictQuery", false)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
