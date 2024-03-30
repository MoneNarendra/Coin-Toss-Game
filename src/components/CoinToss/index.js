import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {toss: 0}

  total = 0

  heads = 0

  tails = 0

  tossedCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.total += 1
    if (tossResult === 0) {
      this.heads += 1
    } else {
      this.tails += 1
    }

    this.setState({toss: tossResult})
  }

  render() {
    const {toss} = this.state
    let imgUrl

    if (toss === 0) {
      imgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="discription">Heads (or) Tails</p>
          <img src={imgUrl} className="coin-img" alt="toss result" />
          <div>
            <button
              className="toss-btn"
              type="button"
              onClick={this.tossedCoin}
            >
              Toss Coin
            </button>
          </div>
          <ul className="counting-container">
            <li className="count-item">
              <p className="count-item-text">Total:{this.total}</p>
            </li>
            <li className="count-item">
              <p className="count-item-text">Heads:{this.heads}</p>
            </li>
            <li className="count-item">
              <p className="count-item-text">Tails:{this.tails}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
