import { useState } from 'react';
import Header from './Header';
const Login = () => {
  const [isSignInFrom, setIsSignInForm] =useState(true);

  const toggleSignInFrom =()=>{
    setIsSignInForm(!isSignInFrom);
  };
  return (
    <div>
      <Header />
      <div>
       <img className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
        </div>
       
        <from className='bg-black w-50 absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
          <h1 className='text-2xl font-bold pb-2'>{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
          {!isSignInFrom  && (<input 
            type='text' 
            placeholder='Full Name' 
            className='p-2 my-2 w-full bg-gray-700 rounded-md'
          />)} 
          <input 
            type='text' 
            placeholder='Email id' 
            className='p-2 my-2 w-full bg-gray-700 rounded-md'
          /> 
          <input 
             type='password' 
             placeholder='password' 
             className='p-2 my-2 w-full bg-gray-700 rounded-md' 
            />
          <button 
             className='p-2 my-4 bg-red-700 w-full rounded-md'>
              {isSignInFrom ? "Sign In" : "Sign Up"}
          </button>
          <p className='cursor-pointer p-2 ' onClick={toggleSignInFrom}>New to Netflix? Sign UP now</p>
          
        </from>
        
    </div>
  )
};

export default Login;