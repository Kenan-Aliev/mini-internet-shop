const { readFile } = require('fs').promises

exports.rFile = (fileName) => {
  return readFile(`server/${fileName}.json`, { encoding: 'utf8' })
    .then((result) => JSON.parse(result))
    .catch((err) => console.log('READ FILE ERROR', err.message))
}
