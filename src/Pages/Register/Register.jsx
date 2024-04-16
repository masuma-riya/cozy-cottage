import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Routes/Context';
import { Helmet } from "react-helmet-async";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from 'react-toastify';

const Register = () => {
  
  // Using context with AuthContext
  const {createUser, updateUserProfile, googleLogin, githubLogin} = useContext(AuthContext);

  const [registerError, setRegisterError] = useState('');
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

    if(password.length < 6){
      setRegisterError('! Password should be at least 6 characters or longer !');
      return;
    }
    else if(!/(?=.*[a-z])(?=.*[A-Z]).+/.test(password)){
      setRegisterError('! Password needs at least One Upper and Lowercase letters !');
      return;
    }

    else if(password !== confirmPassword){
      setRegisterError('! Password and Confirm password did not matched !');
      return;
    }

    else if(!termsChecked){
      setRegisterError('! Please accept our Terms and Conditions !');
      return;
    }

    // Create New User
    createUser(email, password)
    .then(result =>{
        console.log(result.user);
        toast.success('Congratulation! Registration Successful :)')
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
      toast.success('Google Registration Success!');
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
      toast.success('Github Registration Success!')
  // Go to home page after github Registration
       navigate('/');
  })
  .catch(error => {
      console.error(error);
  })
}

    return (

    <div className="flex lg:w-6/12 md:w-8/12 w-11/12 justify-center mb-8 mt-2 m-auto">

      <Helmet>
        <title>Register | Cozy Cottage</title>
    </Helmet>

    <div>
    <div className='text-center'>
   <p className="mb-4 pt-8 text-center text-[22px] md:text-[27px] md:font-semibold font-bold">Please Register an account!</p>

 <label className="mr-1 ml-auto text-xl text-orange-600 lg:text-2xl font-bold lg:font-semibold">Continue with</label>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FcGoogle onClick={handleGoogleLogin} size={30} className="flex -mb-1 justify-center items-center w-full"/></button>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FaGithub onClick={handleGithubLogin} size={30} className="flex -mb-1 justify-center items-center w-full"/></button>
        </div>

    <form className="text-center mb-3 rounded-3xl bg-white shadow-xl pt-8 pb-3 px-8" onSubmit={handleRegister}>

    <input className="text-lg border-neutral-300 border font-medium outline-pink-500 w-full px-4 mb-6 py-2 rounded placeholder-pink-600" type="text" name="name" placeholder="Your Name" required/>

    <input className="text-lg border-neutral-300 border font-medium outline-pink-500 w-full px-4 mb-6 py-2 rounded placeholder-pink-600" type="email" name="email" placeholder="Your Email Address" required/>

    <input className="text-lg border-neutral-300 border font-medium outline-pink-500 w-full px-4 mb-6 py-2 rounded placeholder-pink-600" type="text" name="photoURL" placeholder="Photo URL"/>

{/* Password */}
    <div className='relative mb-6'>
    <input  className="text-lg border-neutral-300 border  font-medium outline-pink-500 w-full px-4 py-2 rounded placeholder-pink-600" type={showPassword ? "text" : "password"} name="password" placeholder="Password" required/>

<span className='absolute top-3 md:right-10 right-4' onClick={() => setShowPassword(!showPassword)}>
  {
    showPassword ? <IoEyeOff className='md:text-2xl text-xl'></IoEyeOff > : <IoEye className='md:text-2xl text-xl'></IoEye>
  }
</span>
    </div>

{/* Confirm Password */}
   <div className='relative mb-6'>
   <input  className="text-lg border-neutral-300 border font-medium outline-pink-500 w-full px-4 py-2 rounded placeholder-pink-600" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" required/>

<span className='absolute top-3 md:right-10 right-4' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
{
showConfirmPassword ? <IoEyeOff className='md:text-2xl text-xl'></IoEyeOff > : <IoEye className='md:text-2xl text-xl'></IoEye>
}
</span>
   </div>

   <div className="md:flex md:space-x-0 space-x-3 items-center gap-3 justify-center">
   <input className='md:h-4 md:w-4' type="checkbox" name="terms" id="terms"  />
  
    <label htmlFor='terms' className="md:text-xl font-medium">I accept the <Link to="/register" className="text-blue-700 hover:underline md:text-lg font-semibold" >Terms and Conditions</Link></label>
    </div>

    {
  registerError && <i><p className='lg:text-xl text-lg pt-4 pb-1 font-bold text-center text-red-600'>{registerError}</p></i>
}

    <input className='btn w-10/12 md:text-lg text-base font-medium mt-5 mb-4 hover:bg-indigo-700 bg-indigo-600 text-white' type="submit" value="Create an Account" />
</form>

    <div className="pb-8 font-semibold md:text-xl text-base text-slate-800 text-center"><i>Already have an account?</i>{" "}
    <a className="text-blue-800 hover:underline hover:underline-offset-4" href="/login">Login Here</a>
    </div>
    </div>
    </div>

    );
};

export default Register;