import React from 'react';
class Formvalidation extends React.Component{
   constructor(){
       super();
       this.state={
          password:"",
          confirmPassword:" ",
          code: "+91",
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
        <form>

    <div className="container">  
    <center>  <h1> Student Registeration Form</h1> </center>  
    <hr />  
    <label> Firstname </label>   
    <input type="text" name="firstname" placeholder= "Firstname" size="15" required />   
    <label> Middlename: </label>   
    <input type="text" name="middlename" placeholder="Middlename" size="15" required />   
    <label> Lastname: </label>    
    <input type="text" name="lastname" placeholder="Lastname" size="15"required />   
        <div>  
        <label>   
         Course :  
         </label>   
    
         
         </div>  
    <div>  
            <label>   
            Gender :  
                    </label><br />  
            <input type="radio" Value="Male" name="gender"  /> Male   
            <input type="radio" Value="Female" name="gender" /> Female   
            <input type="radio" Value="Other" name="gender" /> Other  
    </div>  
    <div>
        <label>   
        Phone :  
        </label>  
        <input type="text" name="country code" placeholder="Country Code"  onChange={(e) => this.setState({code: e.target.value })} value={this.state.code} size="10"/>   
        <input type="text" name="phone" placeholder="phone no." size="10" />  
        </div> 
        Current Address :  
    <textarea cols="80" rows="5" placeholder="Current Address" Value="Address" required>  
     </textarea>  
    <label type="email"><b>Email</b></label>  
    <input type="text" placeholder="Enter Email" name="email" required /> 
    <fieldset>
        <label type="password"><b>Password</b></label>  
        <input id="psw1" type="password" placeholder="Enter Password" name="password" onChange={this.handlepassword} required />  
        <label type="password"><b>Re-type Password</b></label>  
        <input id="psw1" type="password" placeholder="Retype Password" name="pswrepeat" onChange={this.handleconfirmpassword} required />  
        <button type="submit" className="registerbtn" onClick={this.handleSubmit}>Register</button>    
   </fieldset>
    </div>
   
    </form>
    </div>
  )
 }
}

export default Formvalidation;