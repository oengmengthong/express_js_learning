import multer from "multer";
import path from "path";
import FileDB from "../models/file-model.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const storeFile = async (req, res) => {
    const { filename, path } = req.file;

    try {
        const file = await FileDB.create({ name: filename, path });
        res.send(file);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error!');
    }
}

const getFile = async (req, res) => {
    const { filename } = req.params;

    try {
        const file = await FileDB.findOne({ name: filename }).exec();

        if (file) {
            res.sendFile(file.path);
        } else {
            res.status(404).send('File not found!');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error!');
    }
}

export {
    storeFile,
    getFile,
    upload
}