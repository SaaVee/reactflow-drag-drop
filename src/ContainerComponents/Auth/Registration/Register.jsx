import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../../Providers';
import useApi from "../../../Utilities/rest-util";
import './Register.scss';

const Register = () => {

  const navigate = useNavigate();
  const { setAuth } = useContext(AppContext);
  const api = useApi();

  const [user, setUser] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    experience: '',
    designation: '',
    empId: ''
  });

  const handleFieldValueChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;
    if(key === 'dateOfBirth') {
      value = new Date(value).toISOString();
    }
    setUser({
      ...user,
      [key]: value
    });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    api.post('/users/signup', user)
      .then((resp) => {
        setAuth(resp);
        navigate('/auth/login', {
          replace: true
        });
        console.log(resp)
      }).catch((error) => {
        console.log("error while registering user ::", error);
      })
  }

  return (
    <div className='register-wrapper mt-4 mb-4'>
      <div className="register">
        <header>Register</header>
        <form className="form-floating" onSubmit={handleFormSubmit} noValidate autoComplete="off">
          <div class="group">
            <input className='material' type="text" name="firstName" value={user.firstName} required
              onChange={handleFieldValueChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>First Name</label>
          </div>
          <div class="group">
            <input className='material' type="text" name="lastName" value={user.lastName} required
              onChange={handleFieldValueChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Last Name</label>
          </div>
          <div class="group">
            <input className='material' type="text" name="phone" placeholder='' value={user.phone} required
              onChange={handleFieldValueChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Phone</label>
          </div>
          <div class="group">
            <input className='material' type="email" name="email" value={user.email} required
              onChange={handleFieldValueChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Your Email</label>
          </div>
          <div class="group">
            <input className='material' type="password" name="password" value={user.password} required
              onChange={handleFieldValueChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Password</label>
          </div>

          <div class="group">
            <input className='material' type="designation" name="designation" value={user.designation} required
              onChange={handleFieldValueChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Designation</label>
          </div>

          <div class="group">
            <input className='material' type="empId" name="empId" value={user.empId} required
              onChange={handleFieldValueChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Employee Id</label>
          </div>

          <div class="group">
            <input className='material' type="experience" name="experience" value={user.experience} required
              onChange={handleFieldValueChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Experience</label>
          </div>

          <button className="btn btn-submit" type="submit">Submit</button>
        </form >
      </div>
    </div>
  )
}
export default Register;
