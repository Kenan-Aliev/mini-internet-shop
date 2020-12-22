import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './header'
import ProductList from './productList'
import { getProducts } from '../redux/reducers/products'
import Basket from './basket'
import Logs from './logs'
// eslint-disable-next-line import/named
import { getLogs } from '../redux/reducers/logs'

const Home = () => {
  const dispatch = useDispatch()
  const { cart } = useParams()
  useEffect(() => {
    if (cart === 'logs') {
      dispatch(getLogs())
    }
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])
  return (
    <div>
      <Header cart={cart} />
      <Route exact path="/" component={() => <ProductList />} />
      {cart === 'cart' && <Route exact path="/:cart" component={() => <Basket />} />}
      {cart === 'logs' && <Route exact path="/:logs" component={() => <Logs />} />}
    </div>
  )
}

export default Home
