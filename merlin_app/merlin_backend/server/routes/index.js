const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.render('pages/merlin', { msg: 'hello index' });
});

module.exports = router;
