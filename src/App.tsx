import React from 'react';
import Robot from './components/robot/Robot'
import robots from './mockdata/robots.json'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/shopping_cart/ShoppingCart'

interface Props { }

interface State {
  robotGallery: any[],
  count: number
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  render(): React.ReactNode {
    return (
      <div className={styles.App} >
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天</h1>
        </div>
        <button
          onClick={() => {
            this.setState((preState, preProps) => { return { count: preState.count + 1 } }, () => {
              console.log('count', this.state.count)
            })
            this.setState((preState, preProps) => { return { count: preState.count + 1 } }, () => {
              console.log('count', this.state.count)
            })
          }}
        >
          Click
        </button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(r => < Robot id={r.id} email={r.email} name={r.name} key={r.id} />)}
        </div>
      </div>
    )
  }

}

export default App
