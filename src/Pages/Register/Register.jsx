import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import { AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
    return (

    <section className="h-full shadow-2xl md:bg-neutral-100 md:mx-8 mx-6 rounded-2xl max-w-6xl mt-24 lg:mx-auto">
    <div className="container h-full md:p-10">
    <div className="flex h-full items-center justify-center">
    <div className="w-full">
    <div className="rounded-lg bg-white shadow-lg">
    <div className="lg:flex">

    {/* Left side container */}
    <div className="px-4 md:px-0 lg:w-6/12">
    <div className="md:mx-6">

    {/* img Logo */}
    <div className="md:pt-10 pt-8 pb-8 md:pb-10">
    <img className="mx-auto md:w-[400px] w-[500px] rounded-3xl" src={logo} alt="" />
    </div>

    <div className='text-center'>
<p className="mb-8 text-center text-2xl md:text-3xl font-semibold">Please Register an account!</p>

 <label className="mr-1 ml-auto text-2xl text-orange-600 lg:text-2xl font-bold lg:font-semibold">Register with</label>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FcGoogle size={30} className="flex -mb-1 justify-center items-center w-full"/></button>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FaGithub size={30} className="flex -mb-1 justify-center items-center w-full"/></button>

<button className="lg:mx-4 md:mx-1 mx-2 h-8 w-8 rounded-full">
<AiOutlineTwitter size={50} className="flex -mb-3 text-blue-500 justify-center items-center w-full"/></button>
        </div>

<div className="my-8 flex text-center border-b-2 border-dashed border-y-2 border-slate-300">
<p className="mx-auto text-2xl font-semibold text-black"><i>Or</i></p>
  </div>    

    <form className="text-center">

    <input className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 px-4 mb-6 py-2 rounded placeholder-pink-600" type="email" name="email" placeholder="Your Name" required/>

    <input className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 px-4 mb-6 py-2 rounded placeholder-pink-600" type="email" name="email" placeholder="Your Email Address" required/>

    <input className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 px-4 mb-6 py-2 rounded placeholder-pink-600" type="email" name="email" placeholder="Photo URL"/>

    <input  className="text-lg border-neutral-300 border  font-medium outline-pink-500 md:w-3/4 px-4 py-2 mb-6 rounded placeholder-pink-600" type="password" name="password" placeholder="Password" required/>

   <div className="md:flex md:space-x-0 space-x-3 items-center gap-3 justify-center">
   <input className='md:h-4 md:w-4' type="checkbox" name="terms" id=""  />
  
    <label className="md:text-xl font-medium">I accept the <Link to="/register" className="text-blue-700 hover:underline md:text-lg font-semibold" >Terms and Conditions</Link></label>
    </div>
    <input className='btn w-10/12 md:text-lg text-base font-medium mt-5 mb-4 hover:bg-indigo-700 bg-indigo-600 text-white' type="submit" value="Create an Account" />
</form>

    <div className="pb-8 font-semibold md:text-xl text-base text-slate-800 text-center"><i>Already have an account?</i>{" "}
    <a className="text-red-600 hover:underline hover:underline-offset-4" href="/login">Login Here</a>
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