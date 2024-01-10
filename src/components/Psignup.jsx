import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Psignup = () => {
    const [inputs, setInputs] = useState({
        "FirstName": '',
        "lastname": '',
        "email": '',
        "username": '',
        "password": '',
      });
    
      // const navigate = useNavigate();
    
      const InputHandler = (event) => {
        const { name, value } = event.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
        console.log(inputs);
      };
    
      const SaveData = () => {
        axios.post("http://localhost:3000/dnew", inputs)
          .then((response) => {
            alert("Record Saved");
          })
          .catch((err) => console.log(err));
        // navigate('/studentview')
      };
  return (
    
<center>
      <div className="container"  >
        
        
        

         <div className='header'> 
         <table border="0" className="table">
          <tbody> 
          <tr>
              <td colSpan="2">
                <p className="header-text">CREATE AN ACCOUNT</p>
              </td>
            </tr>
            
            

            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label"> First Name: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input name="FirstName" className="input-text" placeholder="Fname"  onChange={InputHandler }  value={inputs.FirstName} />
              </td>
            </tr>

            
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Lnm" className="form-label">Last Name: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input name="lastname" className="input-text" placeholder="Lname"  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.lastname} />
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Em" className="form-label">Email: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input name="email" className="input-text" placeholder="@gmail.com"  onChange={InputHandler }  value={inputs.email} />
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Usn" className="form-label">Username: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input name="username" className="input-text" placeholder="Uname"  onChange={InputHandler }  value={inputs.username} />
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Password: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input type="Password" name="password" className="input-text" placeholder="Pass"  onChange={InputHandler } value={inputs.passwordassword} />
              </td>
            </tr>


            <tr>
              <td>
                <input type="reset" value="Reset" className="login-btn btn-primary-soft btn" />
              </td>
              
              <td>
                <input type="submit" value="Sign Up" onClick={SaveData }  className="login-btn btn-primary btn" />
              </td>
            </tr>

            
            <tr>
              <td colSpan="2">
                <br />
                <label htmlFor="" className="sub-text" style={{ fontWeight: 280 }}>
                  Already have an account?
                  <a href="Login" className="hover-link1 non-style-link">
                    Login
                  </a>
                </label>
                
              </td>
            </tr>

</tbody>
</table>
    </div>
    </div>
    </center>
  )
}

export default Psignup;