const path = require('path');
const fs = require('fs/promises');
const talkerRead = require('./talkerRead');

async function talkerUpdate(id, updateTalkerData) {
  const oldTalker = await talkerRead();
  const updatedTalker = { id, ...updateTalkerData };
  const updatedTalkers = oldTalker.reduce((talkerList, currentTalker) => {
    if (currentTalker.id === updatedTalker.id) return [...talkerList, updatedTalker];
    return [...talkerList, currentTalker];
  }, []);

  const updatedData = JSON.stringify(updatedTalkers);

  try {
    await fs.writeFile(path.resolve(__dirname, '..', 'talker.json'), updatedData);
    return updatedTalker;
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = talkerUpdate;