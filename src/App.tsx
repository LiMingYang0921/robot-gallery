import React, { useState } from 'react';
import Robot from './components/robot/Robot'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/shopping_cart/ShoppingCart'

interface Props { }

interface State {
  robotGallery: any[],
  count: number
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0)


  return (
    <div className={styles.App} >
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      <div className={styles.robotList}>
        {/* {this.state.robotGallery.map(r => <Robot id={r.id} email={r.email} name={r.name} key={r.id} />)} */}
      </div>
    </div>
  )


}

export default App
