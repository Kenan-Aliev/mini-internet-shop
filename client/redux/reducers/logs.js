import axios from 'axios'

const initialState = {
  logs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGS':
      return { ...state, logs: action.logs }
    default:
      return state
  }
}

export const getLogs = () => {
  return (dispatch) => {
    return axios('/api/v1/logs').then(({ data }) => dispatch({ type: 'SET_LOGS', logs: data }))
  }
}

export const postLogs=(log)=>{
  const newLog={
    time:new Date(),
    log
  }
  console.log(newLog)
  // eslint-disable-next-line no-unused-expressions
  axios.post('/api/v1/logs' , {newLog})
}