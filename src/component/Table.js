import React, { Component } from 'react'
import {FaReact} from 'react-icons/fa'
 class Table extends Component {
   constructor(){
     super();
     this.state={
             tabular:[
               {Name:"Charlie",Job:"Janitor"},
               {Name:"Mac",Job:"Bouncer"},
               {Name:"Dee",Job:"Aspiring actress"},
               {Name:"Dennis",Job:"Bartender"}
             ]
     }
   }

  render() {
    return (
      <>
   
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job </th>
            <th>Icon</th>
           
          </tr>
        </thead>
        <tbody>
       {
           this.state.tabular.map((cell) => {
            return (
              <tr>
              <td>{cell.Name}</td>
              <td>{cell.Job}</td>
              <td>{<FaReact />}</td>
            </tr>);
          
            }
           )
         
               }
        </tbody>
      </table>
      </>
    );
  }
 }

export default Table ;

