import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ReactDOM from 'react-dom'
import Portal from './Portal'

const style = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}

const boxSource = {
	beginDrag(props) {
		return {
			name: props.name,
		}
	},

	endDrag(props, monitor, component) {
		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()
    component.props.publisher(component)
	},
}

class Box extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired,
    publish: PropTypes.func,
	}

	render() {
		const { isDragging, connectDragSource } = this.props
		const { name } = this.props
		const opacity = isDragging ? 0.4 : 1

		return connectDragSource(<div style={{ ...style, opacity }}>{name}</div>)
	}
}

export default DragSource('box', boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(Box)
