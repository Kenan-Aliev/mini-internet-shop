import React from 'react'
import { useSelector } from 'react-redux'

const Logs = () => {
  const logsList = useSelector((s) => s.logs.logs)
  console.log(logsList)
  return (
    <div>
      {logsList.map((log) => {
        return (
          <div key={log.log} className="flex justify-between border my-2 py-1">
            <div>{log.log}</div>
            <div>{log.time}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Logs
