import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTitle } from '../../Hooks/useTitle'
import OrderSuccess from './Components/OrderSuccess'
import OrderFail from './Components/OrderFail'


const OrderPage = () => {

    useTitle("Order Summary")
    const {state} = useLocation()
  return (
    <main>
      {state.status ? <OrderSuccess/> : <OrderFail/> }
    </main>
  )
}

export default OrderPage
