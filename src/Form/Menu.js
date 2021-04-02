import React from 'react';
const Menu = () => {
    const handleLogout = () => {
        localStorage.clear();
        console.log("success");
       
      };
    return(
        <div className="form">
            <h1>Welcome Page</h1>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}
export default Menu;