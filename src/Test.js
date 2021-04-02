import React from 'react';
//import React { Component } from 'react';
//const A = 65 // ASCII character code
class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [  { "id": 1, "name": "Apples",  "price": "$2" },
        { "id": 2, "name": "Peaches", "price": "$5" }]
      };
    }
  
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.setState({
                isLoaded: true,
                items: result.items
                
              });
              
            },
           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              <p>{items}</p>
             {/* {items.map(item => (
                <li key={item.id}>
                  {item.name} {item.price}
                  {item.userId}
                </li>
             ))}*/}
            </ul>
          );
        }
      }
      


 /* constructor(props) {
    super(props);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }
  handleClick(letter) {
    this.setState({ justClicked: letter });
  }
  render() {
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} onClick={() => this.handleClick(letter)}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  }
}*/

}  
  export default Test;