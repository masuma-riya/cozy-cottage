import { AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import img from '../../assets/images/login_img-removebg-preview.png';
import { useContext } from "react";
import { AuthContext } from "../../Routes/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {

    // Using context with AuthContext
    const {loginUser, googleLogin, githubLogin} = useContext(AuthContext);

    // navigate after login
    const navigate = useNavigate();
 
    // Login event handler
    const handleLogin = e => {

    // Prevent default Behaviour loading
    e.preventDefault();

     // Pick the form data
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    
    // Login exciting User
    loginUser(email, password)
    .then(result =>{
        console.log(result.user)

         // Reset form field after login
        e.target.reset();

        // Go to home page after Login
        navigate('/');
    })
    .catch(error => {
        console.error(error);
    })
        }

    // Google login event handler
  const handleGoogleLogin = () => {
    googleLogin()
    .then(result =>{
      console.log(result.user);
  })
  .catch(error => {
      console.error(error);
  })
  }

  // Github login event handler
  const handleGithubLogin = () => {
    githubLogin()
    .then(result =>{
      console.log(result.user);
  })
  .catch(error => {
      console.error(error);
  })
}

    return (
     <section className="flex flex-col md:flex-row justify-center md:space-x-24 items-center my-2 mx-5 md:mx-0 md:my-0">
     <div className="lg:w-1/3 md:w-80 w-72 max-w-sm text-center md:mt-9">
     <img src={img} alt=""/>
</div>
      <div className="md:w-1/3 max-w-sm text-center md:mt-9">
        <div>
            <i><h1 className="lg:text-3xl text-2xl text-red-800 font-bold md:mb-4 mb-2 lg:mb-6">Please Login Now!</h1></i>
          <label className="mr-1 text-xl lg:text-2xl font-bold lg:font-semibold">Sign in with</label>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FcGoogle onClick={handleGoogleLogin} size={30} className="flex -mb-1 justify-center items-center w-full"/></button>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FaGithub onClick={handleGithubLogin} size={30} className="flex -mb-1 justify-center items-center w-full"/></button>

<button className="lg:mx-4 md:mx-1 mx-2 h-8 w-8 rounded-full">
<AiOutlineTwitter size={50} className="flex -mb-3 text-blue-500 justify-center items-center w-full"/></button>
        </div>

    <div className="my-8 flex text-center border-b-2 border-dashed border-y-2 border-slate-300">
    <p className="mx-auto text-2xl font-semibold text-black"><i>Or</i></p>
</div>
<form onSubmit={handleLogin}>
    <input className="text-lg font-semibold w-full px-4 py-2 border border-gray-400 rounded" type="email" name="email" placeholder="Email Address" required/>

    <input className="text-lg font-semibold w-full px-4 py-2 border border-gray-400 rounded mt-4" type="password" name="password" placeholder="Password"/>

    <div className="md:mt-5 mt-6 flex justify-between font-semibold lg:text-lg text-base md:text-sm">
    <p className="flex text-slate-900">
    <input className="mr-2" type="checkbox" />
    <span>Remember Me</span>
    </p>
       <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="/login">Lost Password?</a>
    </div>
        <div className="text-center">
    <input className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2
 text-white rounded text-lg font-semibold" type="submit" name="submit" value="Login to your account" />
</div>
</form>

    <div className="mt-4 font-semibold lg:text-xl text-base text-slate-800 text-center"><i>Don&apos;t have an account?</i>{" "}
    <a className="text-red-600 hover:underline hover:underline-offset-4" href="/register">Register Here</a>
        </div>
      </div>
    </section>
    );
};

export default Login;