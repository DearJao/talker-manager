const fs = require('fs');
const path = require('path');
const talkerRead = require('./talkerRead');

const talkerWrite = async (body) => {
  const currentTalkers = await talkerRead();
  const newTalker = { ...body, id: currentTalkers.length + 1 };
  await fs.promises.writeFile(
    path.join(__dirname, '../talker.json'),
    JSON.stringify([...currentTalkers, newTalker], null, 2),
  );
  return newTalker;
};

module.exports = talkerWrite;