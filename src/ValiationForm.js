import React from "react";
class ValiationForm extends React.Component{
  constructor(){
    super();
    this.state = {
      password: '',
      confirmPassword: ''
    }
  this.handlepassword = this.handlepassword.bind(this);
  this.handleconfirmpassword = this.handleconfirmpassword.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
 
    handlepassword=(event)=>{
        this.setState({
        password:event.target.value
      })
    }
    handleconfirmpassword=(event)=>{
        this.setState({
        confirmPassword:event.target.value
       })
    }

handleSubmit = () => {
 const { password, confirmPassword } = this.state;
 
  if (password !== confirmPassword) {
      alert("Passwords don't match");
  } else {
      alert("submitted");
  }
 }
 render(){
   return(
     <div>
     <input type="password" name="password" placeholder="Enter Password" onChange={this.handlepassword}/>
     <input type="password" name="retypepassword" placeholder="Enter confirm Password" onChange={this.handleconfirmpassword}/>
     <button type="submit" onClick={this.handleSubmit}>Submit</button>
     </div>
   );
 }
} 

export default ValiationForm;

