import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';



class StarComp extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1

  }
};

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    console.log(nextValue)
    //console.log(this.props.searchResults)
  }

  render() {
    const { rating } = this.state;
    const { output } = this.props;
    //console.log("i am in render" +this.state.rating);
    //console.log(output)
    return (
      <div>
        <h3>You rated this movie {rating} out of 5 stars!</h3>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default StarComp;
