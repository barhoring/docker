const fs = require("fs").promises;
const path = require("path");

const dataPath = path.join(process.env.DATA_PATH || "./data.txt");

function counter2() {
  // function read() {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile(dataPath).then((buffer) => {
  //       const data = buffer.toString();
  //       console.log(data);
  //       // return data;
  //       resolve(data);
  //     });
  //   }
  // }

  function read() {
    return new Promise((resolve, reject) => {
      fs.readFile(dataPath).then((buffer) => {
        console.log("buffer:", buffer);
        console.log("buffer:", parseInt(buffer));
        const data = buffer.toString();
        console.log("read :", data);
        resolve(data);
      });
    });
  }

  function write(value) {
    return new Promise((resolve, reject) => {
      fs.writeFile(dataPath, value)
        .catch(console.error)
        .then(() => {
          console.log(`Wrote ${value} to file1111`);
          resolve(value);
        });
    });
    // console.log(`writing ${value}`);
    // console.log(`writing ${typeof value}`);
    // fs.writeFile(dataPath, value.toString()).catch(console.error);
  }

  function add() {
    read().then((data) => {
      const num = data;
      console.log(`data=${data}`);
      console.log("num=", num);
      write(data + 1).then((d) => {
        console.log("wrote ", num);
      });
    });
    // const num = Number(read());
    // write(num + 1);
  }
  return {
    read,
    add,
  };
}

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
  counter2: counter2(),
};
