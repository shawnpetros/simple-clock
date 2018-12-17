import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    time: this.formatTime(new Date(Date.now()))
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
      time: this.formatTime(new Date(Date.now()))
    })
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    const { time } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          { time }
        </header>
      </div>
    )
  }
}

export default App
