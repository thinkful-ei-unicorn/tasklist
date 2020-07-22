import React from 'react';
import Child from './Child';

export default class Parent extends React.Component{
    state = {
        isOpen: false
    };

    toggleIsOpen = () => {
        console.log("toggleIsOpen called");
        
        this.setState({
            isOpen: !this.setState.isOpen
        });
    };

    render(){
        return(
            <Child handleClick={this.toggleIsOpen} />
        )
    }
}



