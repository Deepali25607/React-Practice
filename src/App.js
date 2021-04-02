import React from 'react';
import Login from './Form/Login';
import Menu from './Form/Menu';
//import Todo from './Form/Todo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Protected from './Form/Protected';
class App extends React.Component {
  render() {
    return (
      <div>

        <Router> 
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route>
            <Protected exact path="/Menu" component={Menu} />
            {/* <Protected exact path="/Todo" component={Todo} /> */}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;



  
