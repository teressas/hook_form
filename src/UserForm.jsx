import React, { useState } from  'react';
    
const UserForm = (props) => {
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword};
        // inside of the createUser function
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } value={ firstname } />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } value={ lastname } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } value={ confirmpassword } />
                </div>
                    <input type="submit" value="Create User" />
                
            </form>
            <div>
                <p>First Name: </p>
                <p>{ firstname } </p>
                <p>Last Name: </p>
                <p>{ lastname }</p>
                <p>Email Address: </p>
                <p>{ email }</p>
                <p>Password: </p>
                <p>{ password }</p>
                <p>Confirm Password: </p>
                <p>{ confirmpassword }</p>
            </div>
    </div>
    );
};
    
export default UserForm;
