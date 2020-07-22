import React from 'react';

export default function GrandChild(props){
    return (
        <button onClick={() => {props.handleClick()}}>Click me</button>
    )
}