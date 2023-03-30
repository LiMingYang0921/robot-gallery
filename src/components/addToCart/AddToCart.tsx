import React, { useContext } from 'react'
import { appSetStateContext } from '../../AppState'
import { RobotProps } from '../robot/Robot'

export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  return (props) => {
    const setState = useContext(appSetStateContext)
    const addToCartClick = (id, name) => {
      if (setState) {
        setState(state => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }]
            }
          }
        })
      }
    }
    return <ChildComponent {...props} addToCartClick={addToCartClick} />
  }
}

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)
  const addToCartClick = (id, name) => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }]
          }
        }
      })
    }
  }
  return addToCartClick
}