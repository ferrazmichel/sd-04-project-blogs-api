const displayNameValid = async (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length >= 8) return next();

  return res
    .status(422)
    .json({ message: '"displayName" length must be at least 8 characters long' });
};

const emailValid = async (req, res, next) => {
  const { email } = req.body;

  if (/[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i.test(email)) return next();

  return res.status(422).json({ message: '"email" must be a valid email' });
};

const emailRequired = async (req, res, next) => {
  const { email } = req.body;

  if (email) return next();

  return res.status(422).json({ message: '"email" is required' });
};

const passwordValid = async (req, res, next) => {
  const { password } = req.body;

  if (password.length > 6) return next();

  return res.status(422).json({ message: '"password" length must be 6 characters long' });
};

const passwordRequired = async (req, res, next) => {
  const { password } = req.body;

  if (password) return next();

  return res.status(422).json({ message: '"password" is required' });
};

module.exports = { displayNameValid, emailRequired, emailValid, passwordValid, passwordRequired };
