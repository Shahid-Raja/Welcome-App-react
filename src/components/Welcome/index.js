// Write your code here
import {Component} from 'react'
import './index.css'

// eslint-disable-next-line no-unused-vars
class Welcome extends Component {
  state = {isSubscribed: false}

  onClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <h1 className="heading-2">Thankyou! Happy learning</h1>
        <button type="button" className="button" onClick={this.onClick}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
