import React from 'react'
import { useSelector } from 'react-redux'

const Logs = () => {
  const logsList = useSelector((s) => s.logs.logs)
  console.log(logsList)
  return (
    <div>
      {logsList.map((log) => {
        return <div key={log.title}>{log.title}</div>
      })}
    </div>
  )
}

export default Logs
