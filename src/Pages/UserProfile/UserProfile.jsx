import { useContext } from "react";
import { AuthContext } from "../../Routes/Context";


const UserProfile = () => {

    // Using context with AuthContext
  const {user} = useContext(AuthContext);

    return (
   <div className="card p-6 bg-white lg:w-5/12 md:w-8/12 w-10/12 m-auto mt-16 overflow-hidden rounded-xl shadow-2xl flex flex-col">

     <div> 
<img src="https://i.ibb.co/yQBSnhn/image.jpg" alt="" className=" w-72 md:w-full h-48 object-cover rounded-t-2xl" />
<img src="https://i.ibb.co/TkkvxtR/logouser.png" alt="" className="z-10 w-16 md:w-24 md:h-24 relative mx-auto -mt-16  block rounded-full border-4 border-white" />  
     </div> 
     

     <div> 
     {
        user &&
 
<form className="text-center pt-6 pb-2">
    <input className="md:text-xl text-sm w-48  md:w-auto outline-pink-500 border text-center border-neutral-400 p-2 rounded-lg font-semibold placeholder-neutral-800" type="text" name="name" placeholder={user.displayName} />
    <br></br>
    <br></br>
    <input className="md:text-xl text-sm w-[230px] md:w-96 outline-pink-500 border text-center border-neutral-400 p-2 rounded-lg font-semibold placeholder-neutral-800" type="email" name="email" placeholder={user.email} />
<br></br>
    <br></br>
    <input className="md:text-xl text-sm w-[230px] md:w-full outline-pink-500 border text-center border-neutral-400 p-2 rounded-lg font-semibold placeholder-neutral-800" type="text" name="photoURL" placeholder={user.photoURL} />
</form>

        
     }
     </div>  
   </div> 
    );
};

export default UserProfile;