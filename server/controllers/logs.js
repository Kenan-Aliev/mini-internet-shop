import { rFile } from '../functions/readFile'
import {wFile} from "../functions/writeFile";

// eslint-disable-next-line import/prefer-default-export
export const setLogs = async (req, res) => {
  const logs = await rFile('logs')
  const postLogs = [...logs,req.body]
await wFile(postLogs,'logs')
  res.json(postLogs)
}
