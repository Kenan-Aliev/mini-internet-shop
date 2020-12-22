import axios from 'axios'

const initialState = {
  products: [],
  selected: {},
  rates: {},
  button: 'EUR'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return { ...state, products: action.products }
    case 'ADD_SELECTION':
      return {
        ...state,
        selected: { ...state.selected, [action.id]: (state.selected[action.id] || 0) + 1 }
      }
    case 'REMOVE_SELECTION': {
      const newSelection = { ...state.selected, [action.id]: (state.selected[action.id] || 0) - 1 }
      if (newSelection[action.id] <= 0) {
        delete newSelection[action.id]
      }
      return { ...state, selected: newSelection }
    }
    case 'GET_RATES':
      return { ...state, rates: action.rates }
    case 'BUTTON':
      return { ...state, button: action.button }
    case 'SET_SORT':
      return { ...state, products: action.products }
    default:
      return state
  }
}

export const getProducts = () => {
  return (dispatch) => {
    axios('/api/v1/products').then(({ data }) => dispatch({ type: 'SET_PRODUCT', products: data }))
  }
}
export const addSelection = (id) => {
  return { type: 'ADD_SELECTION', id }
}
export const removeSelection = (id) => {
  return { type: 'REMOVE_SELECTION', id }
}
export const getRates = () => {
  return (dispatch) => {
    axios('/api/v1/rates').then(({ data }) => dispatch({ type: 'GET_RATES', rates: data }))
  }
}
// eslint-disable-next-line consistent-return
export const sortProducts = (e) => {
  return (dispatch, getState) => {
    const sortproduct = [...getState().products.products]
    if (e === 'lowest') {
      sortproduct.sort((a, b) => b.price - a.price)
    }
    if (e === 'highest') {
      sortproduct.sort((a, b) => a.price - b.price)
    }
    return dispatch({ type: 'SET_SORT', products: sortproduct })
  }
}
