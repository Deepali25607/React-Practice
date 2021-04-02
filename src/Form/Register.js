import React from 'react'

function Register() {
    return (
        <div className="box">
            <div className="form">
                <label>Register</label><br></br>
                <label >First Name:</label>
                <input type="text" placeholder="FirstName" /><br></br>
                <label>Last Name:</label>
                <input type="text" placeholder="Last Name" /><br></br>
                <label>Password:</label>
                <input type="password" placeholder="Password" /><br></br>
                <label>Confirm_Password:</label>
                <input type="password" placeholder="Confirm_Password" /><br></br>
                <label>Mobile:</label>
                <input type="number" placeholder="Number..." /><br></br>
                <label>Biometric:</label>
                <input type="text"  /><br></br>
                <label>CurrentLang:</label>
                <input type="text"  /><br></br>
                <label>Vat_Number:</label>
                <input type="text"  /><br></br>
                <label>Cr_Number:</label>
                <input type="text"  /><br></br>
                <label>Designation:</label>
                <input type="text"  /><br></br>
                <label>Terms_Acceptance:</label>
                <input type="text"  /><br></br>
                <label>Country:</label>
                <input type="text"  /><br></br>
                <label>State:</label>
                <input type="text"  /><br></br>
                <label>City:</label>
                <input type="text"  /><br></br>
                <label>Address1:</label>
                <input type="text"  /><br></br>
                <label>Address2:</label>
                <input type="text"  /><br></br>
            </div>
        </div>
    );
}
export default Register;