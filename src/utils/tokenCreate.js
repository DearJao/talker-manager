const crypto = require('crypto');

const tokenGenerate = () => crypto.randomBytes(8).toString('hex');

module.exports = tokenGenerate;