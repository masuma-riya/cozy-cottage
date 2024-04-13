import { useState } from "react";
import {IoMdMenu} from 'react-icons/io';
import {IoClose } from 'react-icons/io5';
import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import './Navbar.css'
import user from '../../../assets/images/user.png'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:flex-row flex-col shadow rounded bg-pink-200 items-center lg:justify-between p-3 w-11/12 gap-3 mt-8 m-auto">
    <div className="flex justify-between gap-5 lg:gap-96 items-center">

    <div className="flex items-center">
        <FcHome className="md:text-5xl lg:-mt-0 -mt-96 text-4xl lg:mx-3"></FcHome>
      <h2 className="hide text-2xl font-bold">Cozy Cottage</h2></div>
  </div>

   <div>
  <nav className="flex justify-between items-center gap-32 lg:gap-0 text-center">
  <div className="flex items-center">
        <FcHome className="text-5xl lg:hidden mb-6 lg:mx-3"></FcHome>
   <i><h2 className="lg:hidden md:text-2xl text-lg -mt-5 md:font-bold font-extrabold">Cozy Cottage</h2></i></div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>

       {
          open === true ? <IoClose className="text-2xl"></IoClose> : <IoMdMenu 
            className="md:hidden text-2xl">
          </IoMdMenu>
       }
</div>
    
<ul className={`p-2 rounded-2xl md:bg-pink-100 bg-pink-100 absolute text-lg font-extrabold mt-40 md:mt-0 lg:mr-0 md:mr-28 md:static ${open ? 'right-5' : '-left-96'}`}>

<div className="flex lg:flex-row lg:mr-8 lg:ml-4 flex-col lg:gap-8 lg:space-y-0 space-y-2">
<NavLink className={({isActive}) => isActive? 'md:text-lg text-base font-semibold text-purple-500' : 'md:text-lg text-base font-semibold'} to="/">Home</NavLink>

<NavLink className={({isActive}) => isActive? 'md:text-lg text-base font-semibold text-purple-500' : 'md:text-lg text-base font-semibold'}  to="/update-profile">Update Profile</NavLink>

<NavLink className={({isActive}) => isActive? 'md:text-lg text-base font-semibold text-purple-500' : 'md:text-lg text-base font-semibold'}  to="/update-profile">User Profile</NavLink>

<NavLink className={({isActive}) => isActive? 'md:text-lg text-base font-semibold text-purple-500' : 'md:text-lg text-base font-semibold'}  to="/login">Login</NavLink>


<NavLink className={({isActive}) => isActive? 'md:text-lg text-base font-semibold text-purple-500' : 'md:text-lg text-base font-semibold'}  to="/our-services">Our Services</NavLink>

<NavLink className={({isActive}) => isActive? 'md:text-lg text-base   font-semibold text-purple-500' : 'md:text-lg text-base font-semibold'}  to="/contact-us">About Us</NavLink>
        </div>
      </ul>
      </nav>
   </div>
  
    <div className="flex md:mr-0 mr-[103px] items-center md:gap-3 gap-2">
    

    <div className="avatar">
      <div className="md:w-16 w-14 rounded-full">
       <img src={user} />
   </div>
 </div>

    </div>
  </div>   

  );
};

export default Navbar;
