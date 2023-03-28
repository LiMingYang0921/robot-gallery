import React, { useState, useEffect } from 'react';
import Robot from './components/robot/Robot'
import RobotDiscount from './components/robotDiscount/RobotDiscount'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/shopping_cart/ShoppingCart'

interface Props {
  username: number,
}

interface State {
  robotGallery: any[],
  count: number
}

const App: React.FC<Props> = (props) => {
  console.log('props', props);

  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  // useEffect(() => {
  //   console.log(`点击${count}次`)
  // }, [count])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setRobotGallery(data)
        setLoading(false)
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        }

      }
    }
    fetchData()
  }, [])

  return (
    <div className={styles.App} >
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天</h1>
      </div>
      <h2>{props.username}</h2>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {
        error && <div>网站出错：{error}</div>
      }
      {
        !loading ?
          <div className={styles.robotList}>
            {robotGallery.map((r, index) => {
              return (index % 2 === 0 ? <RobotDiscount id={r.id} email={r.email} name={r.name} key={r.id} /> : <Robot id={r.id} email={r.email} name={r.name} key={r.id} />)
            })}
          </div>
          :
          <h2>加载中......</h2>
      }
    </div>
  )
}


export default App
