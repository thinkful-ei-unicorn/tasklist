import React from 'react';

export default class Parent extends React.Component{
    onClick (){
        console.log('Foo')
    }

    render(){
        return(
            <Child />
        )
    }
}

function Child(props){
    return <button onClick={() => props.onClick()}>Click Me!</button>
}



