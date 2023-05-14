import {Component} from 'react'
import './index.css'

// Write your code here
class EvenOddApp extends Component {
  state = {randomNumber: 0}

  incrementClicked = () => {
    const random = Math.floor(Math.random() * 100 + 1)
    this.setState({randomNumber: random})
  }

  render() {
    const {randomNumber} = this.state
    const status = randomNumber % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="white-container">
        <div className="evenodd-container">
          <h1 className="evenodd-heading">Count {randomNumber}</h1>
          <p className="evenodd-para">Count is {status}</p>
          <button
            onClick={this.incrementClicked}
            type="button"
            className="increment"
          >
            Increment
          </button>
          <p>*Increase by random number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
