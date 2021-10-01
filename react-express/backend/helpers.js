const fs = require("fs").promises;
const path = require("path");

const dataPath = path.join(process.env.DATA_PATH || "./data.txt");

const counter = async () => {
  let tmp;
  await fs
    .readFile(dataPath)
    .then(async (buffer) => {
      const data = buffer.toString();
      console.log(data);
      const newData = Number(data) + 1;
      writeTo(newData);
      tmp = newData;
    })
    .catch((e) => {
      console.error(e);
      console.log("file not found, writing '0' to a new file");
      writeTo(0);
    });

  return tmp;
};

function writeTo(data) {
  fs.writeFile(dataPath, data.toString()).catch(console.error);
}
function wrapper() {}

module.exports = {
  counter,
};
