import React, { Component } from 'react';
import './App.css';

import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import Portal from './Portal'
import Card from './Card'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      portal: 'TEST'
    }
  }
  render() {
    return (
      <div className='container'>
        TEST
        <DragDropContextProvider backend={HTML5Backend}>
  				<div>
  					<div style={{ overflow: 'hidden', clear: 'both' }}>
  						<Dustbin />
  					</div>
  					<div style={{ overflow: 'hidden', clear: 'both' }}>
  						<Box name="Glass" publisher={(component) => this.handlePublish(component)} clicked={() => this.handleBoxClick()}/>
  						<Box name="Banana" publisher={(component) => this.handlePublish(component)} clicked={() => this.handleBoxClick()}/>
  						<Box name="Paper" publisher={(component) => this.handlePublish(component)} clicked={() => this.handleBoxClick()}/>
  					</div>
  				</div>
  			</DragDropContextProvider>
        <Portal portal={this.state.portal}>
        KALOQN
        </Portal>
      </div>
    );
  }
  handlePublish(component) {
    this.setState(state => {
      return {
        portal: component
      }
    })
  }
  handleBoxClick() {
    console.log('BOX CLICKED')
  }
}

export default App;
