import React, {Component} from 'react';
import Modal from './Modal.js'
import './button.css';

class Button extends Component{
    constructor(props){
        super(props);
        this.state = {showcomponent: false };
      }

    onButtonClick(){
        this.setState({showcomponent: true});
    }
    render(){
        return(
            <div>
            <div className="primary-btn" onClick = {this.onButtonClick.bind(this)}>
                Click me !
            </div>
            {this.state.showcomponent ? 
            <Modal></Modal>: null
            }
            </div>
        )
    }
}

export default Button;