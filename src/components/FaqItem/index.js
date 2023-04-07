import {Component} from 'react'

import './index.css'

const plusIconUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIconUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isAnswerShowing: false}

  onToggleClick = () => {
    const {isAnswerShowing} = this.state
    this.setState({isAnswerShowing: !isAnswerShowing})
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {isAnswerShowing} = this.state
    console.log(details.id)
    return (
      <li className="card">
        <div className="qsAndAnswer_container">
          <div className="questionAndIcon">
            <h1 className="question">{questionText}</h1>
            <button type="button" onClick={this.onToggleClick}>
              <img
                src={isAnswerShowing ? minusIconUrl : plusIconUrl}
                alt={isAnswerShowing ? 'minus' : 'plus'}
                className="icon_img"
              />
            </button>
          </div>

          <hr className="hrLine" />
          {isAnswerShowing ? <p className="answer">{answerText}</p> : ''}
        </div>
      </li>
    )
  }
}

export default FaqItem
