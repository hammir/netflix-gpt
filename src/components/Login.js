import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignIn = ()=>{

            setIsSignInForm(!isSignInForm);        
    }

  return (
<div >    
<Header/>

<div className='absolute z-0 '>
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=''></img>
</div>


<form className='w-3/12 p-12 bg-black text-white my-36  mx-auto absolute left-0 right-0 rounded-lg bg-opacity-80 '>
    
    <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
    
    {!isSignInForm && (<input type='text' placeholder='Full Name' className=' p-4 my-4 w-full bg-gray-700 '></input>)}


    <input
    className=' p-4 my-4 w-full bg-gray-700 '
     type='email' placeholder='Email Address'></input>
    
    <input 
    className='p-4 my-4 w-full bg-gray-700 '
     type='password' placeholder='Password'></input>
    
    <button className='bg-red-700 p-4 my-6 w-full rounded-lg  '>{isSignInForm ? "Sign In" : "Sign Up" }</button>
    
    <p className='hover:underline cursor-pointer ' onClick={toggleSignIn}>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already Registered , Sign In Now" }</p>

</form>




</div>
    
    
  )
}

export default Login