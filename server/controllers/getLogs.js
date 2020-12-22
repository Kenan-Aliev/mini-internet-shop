import { rFile } from '../functions/readFile'

// eslint-disable-next-line import/prefer-default-export
export const getLogs = async (req, res) => {
  const logs = await rFile('logs')
  res.json(logs)
}
