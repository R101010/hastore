const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/notes");

router.use(require('../../config/auth'));

router.get('/', notesCtrl.index);
router.get('/:id', notesCtrl.show);
router.post('/',  notesCtrl.create);
router.delete('/:id', notesCtrl.delete);
router.put('/:id', notesCtrl.update);

// function isLoggedIn(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }
module.exports = router;