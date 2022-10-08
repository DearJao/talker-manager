const fs = require('fs');
const path = require('path');

const talkerRead = () => {
  try {
    const data = path.resolve(__dirname, '..', 'talker.json');
    const read = fs.readFileSync(data, 'utf8');
    const response = JSON.parse(read);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = talkerRead;