import path from 'path';
import multer from 'multer';
import express from 'express';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

function fileTypeFilter(file, cb) {
  const fileTypes = /jpg|jpeg|png/;
  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  if (fileTypes.test(extname) && fileTypes.test(mimetype)) {
    // To accept the file pass `true`, like so:
    return cb(null, true);
  } else {
    // To pass an error if something goes wrong:
    cb(new Error('Invalid file type.'));
  }
}

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    fileTypeFilter(file, cb);
  },
});

router.post('/', upload.single('image'), (req, res) => {
  // Sending a file path
  res.send(`/${req.file.path}`);
});

export default router;
