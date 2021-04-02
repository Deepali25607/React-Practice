import React from 'react';
import {useLocation, useParams} from "react-router-dom";
/*const User =({match}) =>{
  return(
       <p> user {match.params.name}I am User page</p>
  );
}
/*const User =() =>{
    const {name} =useParams();
    return <h1>user {arr.name}  page</h1>
};*/
const User = ()=> {
  
  const {id} = useParams();
  //const location=useLocation();
  console.log(useParams());
  return (
    <h1>hello {id}</h1>
  )  ;

};
export default User;