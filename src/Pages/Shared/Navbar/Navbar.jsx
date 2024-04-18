import { useContext, useState } from "react";
import {IoMdMenu} from 'react-icons/io';
import {IoClose } from 'react-icons/io5';
import { Link, NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import './Navbar.css'
import { AuthContext } from "../../../Routes/Context";
import 'animate.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showUsername, setShowUsername] = useState(false); 

  // Using user from AuthContext
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () => {
   logOut()
   .then(result =>{
    console.log(result.user);
})
.catch(error => {
    console.error(error)
})
  }
  
  return (
    
    <div className="flex animate__animated animate__pulse md:flex-row flex-col shadow rounded items-center lg:justify-between p-3 w-11/12 gap-3 mt-8 m-auto">
    <div className="flex justify-between gap-5 lg:gap-96 items-center">

    <div className="flex items-center">
        <FcHome className="md:text-5xl lg:-mt-0 -mt-[600px] text-4xl lg:mx-3"></FcHome>
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

<NavLink className={({isActive}) => isActive? 'md:text-lg text-base font-semibold text-purple-500' : 'md:text-lg text-base font-semibold'}  
to="/new-features">New Features</NavLink>

<NavLink className={({isActive}) => isActive? 'md:text-lg text-base   font-semibold text-purple-500' : 'md:text-lg text-base font-semibold'}  
to="/about-us">About Us</NavLink>
        </div>
      </ul>
      </nav>
   </div>
  
    <div className="flex md:mr-0 mr-[103px] items-center md:gap-3 gap-2">
    

    <div className="avatar lg:-mx-0 lg:gap-6 gap-4 md:-mx-1 md:gap-1 flex items-center">

      {/* Showing the user image when user is logged in */}
     {
      user &&  <div className="md:w-16 w-14"  onMouseEnter={() => setShowUsername(true)}
      onMouseLeave={() => setShowUsername(false)}>
      <img className="btn border-2 rounded-full border-blue-600 p-1" src={user?.photoURL || "https://i.ibb.co/FBZQVTZ/defalt.jpg"} />
      <div  className={`absolute top-full left-0 bg-white shadow p-2 ${showUsername ? 'block' : 'hidden'}`}>{user.displayName}</div>
  </div>
     }

     {/* Implement Login & Logout button condition */}
  {
    user ? <button onClick={handleSignOut} className="btn lg:text-lg text-base hover:bg-purple-600 bg-purple-500 border-none text-white font-bold">Logout</button> : <Link className="btn lg:text-lg text-base  hover:bg-purple-600  bg-purple-500 border-none text-white font-bold" to="/login">Login</Link>
  
  }
 </div>

    </div>
  </div>   

  );
};

export default Navbar;
