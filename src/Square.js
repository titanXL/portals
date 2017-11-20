import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ReactDOM from 'react-dom'
import Portal from './Portal'
import './Square.css'


const boxSource = {
	beginDrag(props) {
		return {
			name: props.name,
		}
	},

	endDrag(props, monitor, component) {
    console.log(component)
		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()
    component.props.handleDrag()
	},
}

class Square extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired,
    publish: PropTypes.func,
	}

	render() {
		const { isDragging, connectDragSource } = this.props
		const { name } = this.props

		return connectDragSource(<div className='square' >{name}</div>)
	}
}

export default DragSource('square', boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(Square)
