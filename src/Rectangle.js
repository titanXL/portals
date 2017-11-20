// Let's make <Card text='Write the docs' /> draggable!

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import './Rectangle.css'

/**
 * Implements the drag source contract.
 */
const rectangleSource = {
  beginDrag(props) {
    console.log(props)
    return {
      text: props.text
    };
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}


class Rectangle extends Component {
  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div className={this.props.className}>
      </div>
    );
  }
}


// Export the wrapped component:
export default DragSource('rectangle', rectangleSource, collect)(Rectangle);
