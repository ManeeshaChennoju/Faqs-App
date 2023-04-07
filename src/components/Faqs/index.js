import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app_container">
        <div className="content_container">
          <h1 className="heading">FAQs</h1>
          <ul className="questionsAndAns_container">
            {faqsList.map(eachItem => (
              <FaqItem details={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
