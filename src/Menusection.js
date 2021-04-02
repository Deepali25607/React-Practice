import React from 'react';
import tablesetting from './tablesetting.jpg';
class Menusection extends React.Component{
    render(){
      
        return(
          <div>
          <div className="w3-top">
              <div className={"w3-bar w3-white w3-padding w3-card"} style={{"letter-spacing":"4px"}} >
                <a href={"/"} className={"w3-bar-item w3-button"}>Gourmet au Catering</a>
                <div className={"w3-right w3-hide-small"}>
                <a href={"/about"} className={"w3-bar-item w3-button"}>About</a>
                <a href={"/menu"} className={"w3-bar-item w3-button"}>Menu</a>
                <a href={"/contact"} className={"w3-bar-item w3-button"}>Contact</a>
              </div>
            </div>
            </div>
            <header className={"w3-display-container w3-content w3-wide"} style={{"max-width":"1600px"," min-width":"500px"}} id="home">
            <img className={"w3-image"} src="hamburger.jpg" alt="Hamburger Catering" width="1600" height="800" />
            <div className={"w3-display-bottomleft w3-padding-large w3-opacity"}>
            <h1 className={"w3-xxlarge"}>Le Catering</h1>
            </div>
          </header>
          
            
            <div className={"w3-row w3-padding-64"} id="menu">
            <div className={"w3-col l6 w3-padding-large"}>
              <h1 className={"w3-center"}>Our Menu</h1><br></br>
              <h4>Bread Basket</h4>
              <p className={"w3-text-grey"}>Assortment of fresh baked fruit breads and muffins 5.50</p><br></br>
            
              <h4>Honey Almond Granola with Fruits</h4>
              <p className={"w3-text-grey"}>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br></br>
            
              <h4>Belgian Waffle</h4>
              <p className={"w3-text-grey"}>Vanilla flavored batter with malted flour 7.50</p><br></br>
            
              <h4>Scrambled eggs</h4>
              <p className={"w3-text-grey"}>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br></br>
            
              <h4>Blueberry Pancakes</h4>
              <p className={"w3-text-grey"}>With syrup, butter and lots of berries 8.50</p>    
            </div>
            
            <div className={"w3-col l6 w3-padding-large"}>
              <img src={tablesetting} className={"w3-round w3-image w3-opacity-min"} alt="Menu" style={{"width":"100%" }}/>
            </div>
          </div>
        
          </div>
          
        );
    }
}
export default Menusection;