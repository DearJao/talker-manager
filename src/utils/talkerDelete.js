const path = require('path');
const fs = require('fs').promises;
const talkerRead = require('./talkerRead');

const talkerDelete = async (id) => {
  const currentTalkers = await talkerRead();
  const deleteTalker = currentTalkers.filter((talkers) => talkers.id !== id);

  const updatedData = JSON.stringify(deleteTalker);
  try {
    await fs.writeFile(path.resolve(__dirname, '..', 'talker.json'), updatedData);
    console.log('atualizou aqui');
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = talkerDelete;