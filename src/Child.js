import React from 'react';
import Grandchild from './Grandchild';

export default function Child(props){
    return (
        <Grandchild handleClick={props.handleClick} />
    )
}