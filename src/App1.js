import React from 'react';
import {Route,Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Menu from './Menu';
import Service from './Service';
import Error from './Error';
import User from './User';

const App1 =() =>{  
return(
  <div>
    <Menu />
      <Switch>
        <Route  exact path="/" component={() =>< Home name="Home"/>}/>
        <Route   path="/about" component={About} />
        <Route   path="/contact" component={Contact} />
        <Route   path="/service/:id" component={Service} />
        <Route   path="/user/:name" component={User}/>
        <Route   path="" component={Error} />
        </Switch>
  </div>
);
};
export default App1;