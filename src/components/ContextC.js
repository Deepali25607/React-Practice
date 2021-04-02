import React from 'react';
import { FirstName } from './MyComponent';
const ContextC = () =>{
    return (
        <div>
        <FirstName.Consumer>
            {(fname) => {
                  return <h1>This is {fname} </h1>
            }}
            </FirstName.Consumer>
            </div>
    )};
export default ContextC;