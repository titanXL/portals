import React, { Component } from 'react';
import './App.css';

import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Square from './Square'
import Portal from './Portal'
import Rectangle from './Rectangle'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainSquare: true,
      portalSquare: false
    }
  }
  render() {
    return (
      <div className='container'>
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <Rectangle className='top-blue-first rectangle' />
          <Rectangle className='top-red-first rectangle' />
          {this.state.mainSquare ? <Square handleDrag={() => this.handleDrag()} name='Drag me' /> : null}
          <Rectangle className='top-green-first rectangle' />
          <Rectangle className='top-white-first rectangle' />
          <Portal portal={this.state.portal}>
            <div className='container'>
            <Rectangle className='top-red rectangle' />
            <Rectangle className='top-blue rectangle' />
            {this.state.portalSquare ? <Square handleDrag={() => this.handleDrag()} name='Drag me' /> : null}
            <Rectangle className='top-white rectangle' />
            <Rectangle className='top-green rectangle' />
            </div>
          </Portal>
        </div>
        </DragDropContextProvider>
      </div>
    );
  }

  handleDrag() {
    console.log('HERE')
    this.setState(state => {
      return {
        mainSquare: false,
        portalSquare: true
      }
    })
  }
}

export default App;
