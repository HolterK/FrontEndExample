import React, { Component } from 'react'
import './progresscircle.css';

class ProgressCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          completePercentage: 0,
          completeDegrees: 0,
          pendingDegrees: 0
        }
    }

  componentDidMount() {
    this.setState(this.progressHelper(this.props.complete, this.props.notDue, this.props.incomplete, this.props.total));

    }

  progressHelper(complete, pending, incomplete, total) {
    const completeRatio = complete / total;
    const completePercentage = Math.floor(completeRatio * 100);
    const completeDegrees = completeRatio * 360;
    const pendingRatio = pending / total;
    const pendingDegrees = pendingRatio * 360;
    return { completePercentage: completePercentage, completeDegrees: completeDegrees, pendingDegrees: pendingDegrees };
  }

  circleCreator() {
    const spacer = 2;
    const compDegrees = this.state.completeDegrees
    const pendDegrees = this.state.pendingDegrees
    return { background: `conic-gradient(#fff ${spacer}deg, #99cc99 ${spacer}deg, #99cc99 ${compDegrees}deg,#fff ${compDegrees}deg, #fff ${compDegrees + spacer}deg  ,#ccc ${compDegrees}deg, #ccc ${compDegrees + pendDegrees}deg, #fff ${compDegrees + pendDegrees}deg, #fff ${compDegrees + pendDegrees + spacer}deg, #ff6633 ${compDegrees + pendDegrees + spacer}deg` };
  }

  render() {
  const image = this.props.children
    return (
          <div className="circleWrapper">
        <div className={`outerCircle ${this.props.size}`} style={this.circleCreator()} > <div className="innerCircle"> {this.props.image ? image : this.state.completePercentage + '%'}</div></div>
            </div>
    );
  }
}

export default ProgressCircle;