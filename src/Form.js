//import React from 'react';
import React, {Component} from 'react';
import Access from './Access';
class Form extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            
        }
    }
    render(){
        //const { user} = this.props.data;
        console.log(this.props.data);
        return(
        <div>
           <strong>{ this.props.lang}</strong>
            { this.props.data.map((el,i) => (
                <div key={i}>
                <p>{el.name} {el.id}</p>
                </div>
            )
                
            )}
           
        </div> 
        
        
        );
    }
}
export default Form;