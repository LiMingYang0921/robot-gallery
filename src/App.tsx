import React, { useState, useEffect } from 'react';
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
  const [robotGallery, setRobotGallery] = useState<any>([])

  useEffect(() => {
    console.log(`点击${count}次`)
  }, [count])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then((data) => {
      setRobotGallery(data)
    })
  }, [])

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
        {robotGallery.map(r => <Robot id={r.id} email={r.email} name={r.name} key={r.id} />)}
      </div>
    </div>
  )


}

export default App
