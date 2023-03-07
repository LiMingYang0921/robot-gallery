import React from 'react';
import Robot from './components/Robot'
import robots from './mockdata/robots.json'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'


function App() {
  return (
    <div className={styles.App}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map(r => < Robot id={r.id} email={r.email} name={r.name} key={r.id} />)}
      </div>
    </div>
  )
}

export default App
