const { writeFile } = require('fs').promises

// eslint-disable-next-line import/prefer-default-export
export const wFile = (data, fileName) => {
  writeFile(`server/${fileName}.json`, JSON.stringify(data), { encoding: 'utf8' })
}
