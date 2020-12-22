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
