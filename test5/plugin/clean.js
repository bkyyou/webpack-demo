const fs = require("fs");
const path = require("path");

const targetFile = path.join(__dirname, "../dist");
const removeFileDir = (path) => {
  var files = fs.readdirSync(path);
  for (let item of files) {
    var stats = fs.statSync(`${path}/${item}`);
    if (stats.isDirectory()) {
      removeFileDir(`${path}/${item}`);
    } else {
      fs.unlinkSync(`${path}/${item}`);
    }
  }
  fs.rmdirSync(path);
};

const deply = () => new Promise((resolve) => setTimeout(resolve, 5000));

class Clean {
  apply() {
    console.log("clean");
    if (fs.existsSync(targetFile)) {
      // fs.rmdirSync(targetFile)
      removeFileDir(targetFile);
      // await deply();
    }
  }
}

module.exports = Clean;
