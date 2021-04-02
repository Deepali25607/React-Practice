import React from 'react';
class Service extends React.Component{
  render(){
  console.log("service page", this.props)
  return(
       <p> I am service page:{this.props.match.params}</p>
  )
}
}
export default Service;