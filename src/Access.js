import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Form from './Form'
class Access extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users:[
              {id:12,name: "surendra"},{id:12,name: "deepali"},{id:12,name: "subham"}
            ],
          }
    }
    
    render(){
    
  return(
      <div>
          <Form data={this.state.users} lang="react" />
      </div>
  );
}
}
  export default Access;