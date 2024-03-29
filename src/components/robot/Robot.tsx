import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext } from '../../AppState'
import { withAddToCart } from '../addToCart/AddToCart'


export interface RobotProps {
  id: string | number
  name: string
  email: string
  addToCartClick: (id, name) => void
}

const Robot: React.FC<RobotProps> = ({ id, name, email, addToCartClick }) => {
  const value = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => { addToCartClick(id, name) }}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(Robot)