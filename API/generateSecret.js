const crypto = require('crypto');

const generateSecret = () => {
  const secret = crypto.randomBytes(32).toString('base64');
  console.log('Generated Secret:', secret);
};

generateSecret();
