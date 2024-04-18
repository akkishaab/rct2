// Write your code here
import React, {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    const nextIndex = activeReviewIndex + 1

    if (nextIndex < reviewsList.length) {
      this.setState({activeReviewIndex: nextIndex})
    }
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state
    const prevIndex = activeReviewIndex - 1

    if (prevIndex >= 0) {
      this.setState({activeReviewIndex: prevIndex})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReview = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
            className="arrow-button"
            disabled={activeReviewIndex === 0}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={currentReview.imgUrl} alt={currentReview.username} />
            <p className="username">{currentReview.username}</p>
            <p className="company">{currentReview.companyName}</p>
            <p className="description">{currentReview.description}</p>
          </div>
          <button
            type="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
            className="arrow-button"
            disabled={activeReviewIndex === reviewsList.length - 1}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
