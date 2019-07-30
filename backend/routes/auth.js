const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  passport.authenticate('signup', async (err, user, info) => {
    if (err) {
      return next(err);
    } else if (!user) {
      return res.status(401).json({ error: info });
    }

    return res.json({ info: { message: 'Success' } });
  })(req, res, next);
});

module.exports = router;
