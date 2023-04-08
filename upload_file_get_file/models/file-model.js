import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    path: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const FileDB = mongoose.model('File', fileSchema);

export default FileDB