import React, { useState } from 'react';
import Forgotpassword from '../Forgotpassword/Forgotpassword';
import Loginpage from '../Loginpage/Loginpage';
import './Entry.style.css';

export const EntryPage = () => {
  const [email, Setemail] = useState("");
  const [password, SetPassword] = useState("");
  const[formload,Setformload] = useState("Login");


  const handeonchange = e => {
    const { name, value } = e.target;
    switch (name) {

      case 'password':
        SetPassword(value)
        break;

      case 'email':
        Setemail(value)
        break;
      default:
        break;
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    if(!email || !password) {
      alert('Fill up all the fields');
    }

    // todo form action after submit

    console.log(email,password);
  }

  const handleOnResetsubmit = e => {
    e.preventDefault();

    if(!email) {
      alert('Fill up all the email');
    }

    // todo form action after submit

    console.log(email);
  }

  const formSwitcher = frmtype => {
Setformload(frmtype);
  }
  return (
    <div className='entry-page bg-info'>
      <div className="jumbotron form-box">

        {formload === "Login" && <Loginpage handleOnchange={handeonchange}
          email={email}
          password1={password}
          formSwitcher = {formSwitcher}
          handleOnsubmit = {handleOnSubmit}
        /> }
        {formload === "Reset" && <Forgotpassword
        handleOnchange={handeonchange}
        email={email}
        password1={password}
        formSwitcher = {formSwitcher}
        handleOnResetsubmit = {handleOnResetsubmit}
        /> }
        
      </div>

    </div>
  )
}


