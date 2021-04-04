const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
   destination: (req, file, callback) => {
       // null signifie qu'il n'y a pas eu d'erreur
       callback(null, 'images')
   },
    filename: (req, file, callback) => {
       // Reformatage du nom du fichier envoyé avec remplacement des espaces par des _
       const name = file.originalname.split(' ').join('_');
       const extension = MIME_TYPES[file.mimetype];
       callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage }).single('image');
