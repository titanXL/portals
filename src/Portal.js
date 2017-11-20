import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'

class Portal extends PureComponent {
  constructor(props) {
    super(props);
    // STEP 1: create a container <div>
    this.containerEl = document.createElement('div');
    this.externalWindow = null;
  }

  render() {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }

  componentDidMount() {
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerEl);
  }

  componentWillUpdate(nextProps) {
    console.log(nextProps.portal)
    let div = document.createElement('div')
    div.innerHTML = nextProps.portal.props.name
    this.containerEl.addEventListener('click', function(e) {
      if(e.target.className.includes('box')) {
        e.target.onclick = nextProps.portal.props.clicked
      }
    })
    this.containerEl.appendChild(div)
  }

  componentWillUnmount() {
    // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by closing the window
    this.externalWindow.close();
  }
}
export default Portal
