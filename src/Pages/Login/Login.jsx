import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import img from '../../assets/images/login_img-removebg-preview.png'

const Login = () => {
    return (
     <section className="flex flex-col md:flex-row justify-center md:space-x-24 items-center my-2 mx-5 md:mx-0 md:my-0">
     <div className="lg:w-1/3 md:w-80 w-72 max-w-sm text-center md:mt-9">
     <img src={img} alt=""/>
</div>
      <div className="md:w-1/3 max-w-sm text-center md:mt-9">
        <div>
          <label className="mr-1 text-2xl font-bold">Sign in with</label>
          <button className="mx-4 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl">
    <BiLogoFacebook size={20} className="flex justify-center items-center w-full"/></button>
     <button className="h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
    <AiOutlineTwitter size={20} className="flex justify-center items-center w-full"/></button>
        </div>

    <div className="my-8 flex text-center border-b-2 border-dashed border-y-2 border-slate-300">
    <p className="mx-auto text-2xl font-semibold text-black"><i>Or</i></p>
</div>

    <input className="text-lg font-semibold w-full px-4 py-2 border border-gray-400 rounded" type="email" name="email" placeholder="Email Address" required/>

    <input className="text-lg font-semibold w-full px-4 py-2 border border-gray-400 rounded mt-4" type="password" name="password" placeholder="Password"/>

    <div className="md:mt-5 mt-6 flex justify-between font-semibold lg:text-lg text-base md:text-sm">
    <p className="flex text-slate-900">
    <input className="mr-2" type="checkbox" />
    <span>Remember Me</span>
    </p>
       <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="/login">Forgot Password?</a>
    </div>
        <div className="text-center">
    <input className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2
 text-white rounded text-base font-bold" type="submit" name="submit" value="LOGIN" />

</div>
    <div className="mt-4 font-semibold lg:text-xl text-base text-slate-800 text-center"><i>Don&apos;t have an account?</i>{" "}
    <a className="text-red-600 hover:underline hover:underline-offset-4" href="/register">REGISTER NOW</a>
        </div>
      </div>
    </section>
    );
};

export default Login;