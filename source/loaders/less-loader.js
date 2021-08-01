
let less = require('less');

function loader(source) {
  let callback = this.async();

  less.render(source, {filename: this.resource}, (err, output) => {
    console.log('output', output);
    callback(err, output.css);
  })
}

module.exports = loader;