import React,{createContext} from 'react';
import ContextA from './ContextA';
const FirstName = createContext();

const MyComponent = () =>{
  return (
    <div>
    <FirstName.Provider value={'Deepali'}>
      <ContextA />
    </FirstName.Provider>     
    </div>
    );

};
export default MyComponent;
export { FirstName };