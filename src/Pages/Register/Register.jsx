import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Routes/Context';
import { Helmet } from "react-helmet-async";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  
  // Using context with AuthContext
  const {createUser, updateUserProfile, googleLogin, githubLogin} = useContext(AuthContext);

  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 

  // navigate after login
  const navigate = useNavigate();

   // Registration with email event handler
    const handleRegister = e => {

    // Prevent default Behaviour loading
    e.preventDefault();

    // Pick the form data
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photoURL = form.get('photoURL');
    const termsChecked = form.get('terms');
    const confirmPassword = form.get('confirmPassword');
    console.log(name, email, password, confirmPassword, photoURL, termsChecked);

    setRegisterError('');
    setRegisterSuccess('');

    if(password.length < 6){
      setRegisterError('! Password should be 6 characters or long !');
      return;
    }
    else if(!/(?=.*[a-z])(?=.*[A-Z]).+/.test(password)){
      setRegisterError('Password should be one Uppercase and Lowercase letter');
      return;
    }

    else if(password !== confirmPassword){
      setRegisterError('Password and Confirm password did not matched !');
      return;
    }

    else if(!termsChecked){
      setRegisterError('Please accept our Terms and Conditions !');
      return;
    }

    // Create New User
    createUser(email, password)
    .then(result =>{
        console.log(result.user);
    setRegisterSuccess('User Created Successfully');
    // Update profile
     updateUserProfile(name, photoURL)
     .then( () => {
    // Reset form field after Registration
    e.target.reset();
    // Go to home page after Registration
        navigate('/'); 
     })
    })
    .catch(error => {
      console.error(error);
      setRegisterError(error.message);
  });
    }

  // Google Registration event handler
  const handleGoogleLogin = () => {
    googleLogin()
    .then(result =>{
      console.log(result.user);
  // Go to home page after google Registration
       navigate('/');
  })
  .catch(error => {
      console.error(error);
  })
  }

  // Github Registration event handler
  const handleGithubLogin = () => {
    githubLogin()
    .then(result =>{
      console.log(result.user);
  // Go to home page after github Registration
       navigate('/');
  })
  .catch(error => {
      console.error(error);
  })
}

    return (

    <section className="h-full md:mx-8 mx-6 rounded-2xl max-w-6xl mt-6 lg:mx-auto">
       <Helmet>
        <title>Register | Cozy Cottage</title>
    </Helmet>
    <div className="container h-full md:p-10">
    <div className="flex h-full items-center justify-center">
    <div className="w-full">
    <div className="rounded-3xl bg-white shadow-2xl">
    <div className="lg:flex">

    {/* Left side container */}
    <div className="px-6 lg:w-6/12">
    <div className="md:mx-6">

    <div className='text-center'>
<p className="mb-4 pt-8 text-center text-2xl md:text-3xl font-semibold">Please Register an account!</p>

 <label className="mr-1 ml-auto text-2xl text-orange-600 lg:text-2xl font-bold lg:font-semibold">Register with</label>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FcGoogle onClick={handleGoogleLogin} size={30} className="flex -mb-1 justify-center items-center w-full"/></button>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FaGithub onClick={handleGithubLogin} size={30} className="flex -mb-1 justify-center items-center w-full"/></button>
        </div>

<div className="my-8 flex text-center border-b-2 border-dashed border-y-2 border-slate-300">
<p className="mx-auto text-2xl font-semibold text-black"><i>Or</i></p>
  </div>    

    <form onSubmit={handleRegister} className="text-center">

    <input className="text-lg border-neutral-300 border font-medium outline-pink-500 w-full px-4 mb-6 py-2 rounded placeholder-pink-600" type="text" name="name" placeholder="Your Name" required/>

    <input className="text-lg border-neutral-300 border font-medium outline-pink-500 w-full px-4 mb-6 py-2 rounded placeholder-pink-600" type="email" name="email" placeholder="Your Email Address" required/>

    <input className="text-lg border-neutral-300 border font-medium outline-pink-500 w-full px-4 mb-6 py-2 rounded placeholder-pink-600" type="text" name="photoURL" placeholder="Photo URL"/>

{/* Password */}
    <div className='relative mb-6'>
    <input  className="text-lg border-neutral-300 border  font-medium outline-pink-500 w-full px-4 py-2 rounded placeholder-pink-600" type={showPassword ? "text" : "password"} name="password" placeholder="Password" required/>

<span className='absolute top-3 right-10' onClick={() => setShowPassword(!showPassword)}>
  {
    showPassword ? <IoEyeOff className='text-2xl'></IoEyeOff > : <IoEye className='text-2xl'></IoEye>
  }
</span>
    </div>

{/* Confirm Password */}
   <div className='relative mb-6'>
   <input  className="text-lg border-neutral-300 border font-medium outline-pink-500 w-full px-4 py-2 rounded placeholder-pink-600" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" required/>

<span className='absolute top-3 right-10' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
{
showConfirmPassword ? <IoEyeOff className='text-2xl'></IoEyeOff > : <IoEye className='text-2xl'></IoEye>
}
</span>
   </div>

   <div className="md:flex md:space-x-0 space-x-3 items-center gap-3 justify-center">
   <input className='md:h-4 md:w-4' type="checkbox" name="terms" id="terms"  />
  
    <label htmlFor='terms' className="md:text-xl font-medium">I accept the <Link to="/register" className="text-blue-700 hover:underline md:text-lg font-semibold" >Terms and Conditions</Link></label>
    </div>
    <input className='btn w-10/12 md:text-lg text-base font-medium mt-5 mb-4 hover:bg-indigo-700 bg-indigo-600 text-white' type="submit" value="Create an Account" />
</form>

{
  registerError && <i><p className='text-xl font-bold text-center pb-4 text-red-600'>{registerError}</p></i>
}

{
  registerSuccess && <i><p className='text-xl font-semibold text-center pb-4 text-green-600'>{registerSuccess}</p></i>
}

    <div className="pb-8 font-semibold md:text-xl text-base text-slate-800 text-center"><i>Already have an account?</i>{" "}
    <a className="text-blue-800 hover:underline hover:underline-offset-4" href="/login">Login Here</a>
    </div>

    </div>
    </div>

    {/* Right side container */}
    <div className="flex items-center rounded-b-xl lg:w-6/12 lg:rounded-e-xl lg:rounded-bl-none" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}}>
    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
    <h4 className="mb-6 text-xl font-semibold">We are more than just a company</h4>
    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    );
};

export default Register;