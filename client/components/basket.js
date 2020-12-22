import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSelection, removeSelection } from '../redux/reducers/products'

const Basket = () => {
  const dispatch = useDispatch()
  const button = useSelector((s) => s.products.button)
  const rates = useSelector((s) => s.products.rates)
  const products = useSelector((s) => s.products.products)
  const selected = useSelector((s) => s.products.selected)
  const filteredProducts = products.filter((el) => Object.keys(selected).includes(el.id))
  const totalSum = Object.keys(selected).reduce((acc, rec) => {
    return acc + products.find((el) => el.id === rec).price * selected[rec]
  }, 0)
  const buttons = {
    EUR: '€',
    USD: '$',
    CAD: 'C$'
  }
  return (
    <div>
      {filteredProducts.map((product) => {
        return (
          <div key={product.id} className="flex w-full ml-6">
            <div className="w-1/2">{product.title}</div>
            <div className="mx-auto block my-3 flex flex-end">
              <button
                type="button"
                className="border px-4 text-xl"
                onClick={() => dispatch(removeSelection(product.id))}
              >
                -
              </button>
              <span className="text-xl mx-2">{selected[product.id] || 0}</span>
              <button
                type="button"
                className="border px-4 text-xl"
                onClick={() => dispatch(addSelection(product.id))}
              >
                +
              </button>
            </div>
          </div>
        )
      })}
      <span className="block text-right mr-3">
        Total:{(totalSum * (rates[button] || 1)).toFixed(2)} {buttons[button]}
      </span>
    </div>
  )
}

export default Basket
