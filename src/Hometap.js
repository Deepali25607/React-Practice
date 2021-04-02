import React from 'react';
import hamburger from './hamburger.jpg';

class Hometap extends React.Component{
    render(){
      console.log("Hello");
        return(
<div>
<header className={"w3-display-container w3-content w3-wide"} style={{"maxWidth":"1600px"," minWidth":"500px"}} id="home">
  <img className={"w3-image"} src={hamburger} alt="Hamburger Catering" width="1600" height="800" />
  <div className={"w3-display-bottomleft w3-padding-large w3-opacity"}>
  <h1 className={"w3-xxlarge"}>Le Catering</h1>
  </div>
</header>
</div>

        );
       
    }
    
}
export default Hometap;