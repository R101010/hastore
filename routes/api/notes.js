const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/notes");

/*---------- Public Routes ----------*/
router.get('/', notesCtrl.index);
router.get('/:id', notesCtrl.show);
router.post('/', notesCtrl.create);
router.delete('/:id', notesCtrl.delete);
router.put('/:id', notesCtrl.update);

module.exports = router;