import React from 'react'
import { useSelector } from 'react-redux'
import BakeryCart from './BakeryCart'
import { cartActions } from './cartActions'
import {store } from  './store'
export default function Cards() {
  const count = useSelector(state => state.cartActions.count)
  return (
    <div>
      <BakeryCart store={store} />
      <h1>{count}</h1>
    </div>
  )
}
