import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelection, addSelection, getRates, sortProducts } from '../redux/reducers/products'
import {postLogs} from "../redux/reducers/logs";

const ProductList = () => {
  const products = useSelector((s) => s.products.products)
  const selected = useSelector((s) => s.products.selected)
  const dispatch = useDispatch()
  const buttons = {
    EUR: '€',
    USD: '$',
    CAD: 'C$'
  }
  useEffect(() => {
    dispatch(getRates())
  }, [])
  const rates = useSelector((s) => s.products.rates)
  console.log(rates)
  const button = useSelector((s) => s.products.button)
  return (
    <>
      <select className="my-2 w-1/4" onChange={(e) => dispatch(sortProducts(e.target.value),postLogs(e.target.value))}>
        <option>Сортировка товаров</option>
        <option value="lowest">По убыванию</option>
        <option value="highest">По возрастанию</option>
      </select>
      <div>
        <div className="row flex flex-wrap">
          {products.map((product) => {
            return (
              <div key={product.id} className="w-1/4 text-center">
                <img src={product.image} alt="" className="inline-block" />
                <h4>{product.title}</h4>
                <span className="text-xl mx-2 text-center block">
                  {(product.price * (rates[button] || 1)).toFixed(2)} {buttons[button]}
                </span>
                <div className="flex mb-3 justify-center">
                  <button
                    type="button"
                    className="border px-4 text-xl"
                    onClick={() => dispatch(removeSelection(product.id), postLogs('REMOVE_SELECTION'))}
                  >
                    -
                  </button>
                  <span className="text-xl mx-2">{selected[product.id] || 0}</span>
                  <button
                    type="button"
                    className="border px-4 text-xl"
                    onClick={() => dispatch(addSelection(product.id),postLogs('ADD_SELECTION'))}
                  >
                    +
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default ProductList
