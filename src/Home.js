import { render } from '@testing-library/react';
import React from 'react';
//import App from '../../src/App';
//const Home =() =>{
  class Home extends React.Component{
  state={
    users:[
      {id:12,name: "surendra"},{id:12,name: "deepali"},{id:12,name: "subham"}
    ]
  }
  render(){
    const myname=this.state.users.map((item,index)=>{
      return <h2 key={index}>{item.name}</h2>
    })
  return(
      <div>
        {myname}
      </div>
  );  
}
}

export default Home;