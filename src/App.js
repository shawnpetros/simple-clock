import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    time: this.formatTime(new Date(Date.now())),
    countDownDate: new Date('May 22, 2019 13:00:00').getTime(),
    countDown: 0
  }

  breakdownTime () {
    const distance = this.state.countDownDate - new Date().getTime();

    if (distance <= 0) return 'EXPIRED!!!'
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  componentWillMount () {
    this.intervalId = setInterval(() => this.tick(), 1000)
  }

  formatTime (date) {
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const mins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const secs = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

    return `${hours}:${mins}:${secs}`
  }

  tick () {
    this.setState({
      time: this.formatTime(new Date(Date.now())),
      countDown: this.breakdownTime()
    })
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    const { countDown } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          { time }
          {/* { countDown } */}
        </header>
      </div>
    )
  }
}

export default App
