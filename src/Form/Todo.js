import React from 'react';
class Todo extends React.Component{
  constructor(){
    super();
    this.state={
          text1:'',
          items:[],
         
      
    }
  }
  handlenum1=(event)=>{
        this.setState({
        text1:event.target.value
     })
        }
       
       Add = () => {   
       let newArray = this.state.items;
        newArray.push({name:this.state.text1});
          this.setState({items: newArray})
       
      }
      delete(index) {
        console.log(index);
        this.setState({
        items: this.state.items.filter((i,a) => a !== index)
        });
       
    }
            
  render(){
    // console.log(this.state.items);
    return(
      <div className="box">
        Text:  <input type="text" name="text" value={this.state.text1} onChange={(e) => this.handlenum1(e)}/>
        <button type="text" onClick={this.Add}>Add</button><br></br>
        {
          this.state.items.map((item,index) => {
             return (
               <div key={index}>{item.name}<button  onClick={(e)=>{this.delete(index)}} key={item}>Delete</button>
               </div>
             )

          })
        }
      </div>
      
    );

  }
}
export default Todo;