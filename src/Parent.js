import React from 'react';
import Child from './Child';

export default class Parent extends React.Component{
    state = {
        isOpen: false
    };

    toggleIsOpen = () => {
        console.log("toggleIsOpen called");
        
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render(){
        return(
            <div>
                <Child handleClick={this.toggleIsOpen} />
                {this.state.isOpen && <div>I'm showing</div>}
            </div>
        )
    }
}



