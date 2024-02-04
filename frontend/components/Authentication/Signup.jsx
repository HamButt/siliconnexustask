import React, { useState } from 'react';
import {Button, FormControl, InputLabel, IconButton, InputAdornment, FilledInput, TextField} from '@mui/material';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios';

const Signup = ({setHandleSingup}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const [matchMessage, setMatchMessage] = React.useState("");
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    confirmPassword: '',
  });

 
  const handleSignUpChange = (e) => {
    const value  = e.target.value;
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "confirmPassword") {
      if (value === formData.password) {
        setMatchMessage("Password Matched!");
        setError("");
      } else {
        setMatchMessage("Password does not match");
        setError("");
      }
    } else {
      setMatchMessage(""); // Reset the message when typing in the password field
      setError("");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      setError("Password does not match");
      setFormData({
        phoneNumber: '',
        confirmPassword: '',
      });
      return;
    }
    axios.post(`${process.env.baseUrl}/auth/signUp`, formData)
    .then((res) => {
      if(res.data.success){
        setIsLoading(true);
        setHandleSingup(false)
      }
      setError("");
      setIsLoading(false);
    }).catch((err) =>{
      console.log(err);
      setError(err.response.data.error)
      setIsLoading(false);
      setFormData({
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      });
      setMatchMessage("")
    })
  };
  

  return (
    <div>
      <h1 className='text-white my-10 text-2xl' >Sign Up</h1>

      <form className='flex flex-col' onSubmit={handleSignUpSubmit}>
        <label htmlFor="full-name" className='text-white py-2 text-sm'>Full Name</label>
        <TextField id="full-name" variant="standard" size="large" type='text' name='fullName' required onChange={handleSignUpChange} value={formData.fullName}/>

        <label htmlFor="email" className='text-white pt-5 text-sm'>Email</label>
        <TextField id="email" variant="standard" size="large" type='email' name='email' required className='pt-2' onChange={handleSignUpChange} value={formData.email} />
        {/* {error && <small className='text-red-500 text-xml mt-2' >{error}</small>} */}

        <label htmlFor="phone" className='text-white pt-5 text-sm'>Phone Number</label>
        <PhoneInput country={'us'} value={formData.phoneNumber} onChange={(value) => setFormData({ ...formData, phoneNumber: value })} />

        <label htmlFor="password" className='text-white pt-5 text-sm'>Password</label>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <FilledInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='********'
            value={formData.password}
            onChange={handleSignUpChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  className='text-xs text-white'
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        

        <label htmlFor="confirm-password" className='text-white pt-5 text-sm'>Re-Type Password</label>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <FilledInput
            id="confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            name='confirmPassword'
            placeholder='********'
            value={formData.confirmPassword}
            onChange={handleSignUpChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  // onMouseDown={handleMouseDownPassword/}
                  edge="end"
                  className='text-xs text-white'
                >
                  {showConfirmPassword ? 'HIDE' : 'SHOW'}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {error && <small className='text-red-500 text-xml mt-2' >{error}</small>}
        {matchMessage && <small className=' text-xml mt-2' style={{color:matchMessage === "Password Matched!" ? "green" : "red"}} >{matchMessage}</small>}

        <div className='text-center'>
          <Button variant='contained' className='bg-[#00ADEF] rounded-[8px] text-white w-[100%] font-[15px] mt-6 py-3 capitalize' type="submit">{isLoading ? "Signing Up..." : "Sign Up"}</Button>
          <p className='mt-2 text-white text-sm '>Have a account? <strong className='cursor-pointer' onClick={() => setHandleSingup(false)}>Log in</strong></p>
        </div>
    </form>

    </div>
  );
};

export default Signup;
