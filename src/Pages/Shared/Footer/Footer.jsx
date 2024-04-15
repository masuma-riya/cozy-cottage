import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BiWinkSmile } from "react-icons/bi";
import gmail from '../../../assets/images/gmail.png';
import img1 from '../../../assets/images/footer1.jpg';
import img2 from '../../../assets/images/footer2.jpg';
import img3 from '../../../assets/images/footer3.jpg';
import img4 from '../../../assets/images/footer4.jpg';
import img5 from '../../../assets/images/footer5.jpg';
import img6 from '../../../assets/images/footer6.jpg';


const Footer = () => {
    return (

    <footer className="md:mt-10 mt-16 text-center bg-slate-800 text-neutral-content">

      {/* Find us On */}
<i><p className="text-white font-bold text-3xl pt-5">Find Us On : </p></i>
    <div className="flex justify-around text-4xl pt-3">
      <FaFacebookSquare className="text-blue-600"></FaFacebookSquare>
      <IoLogoYoutube className="text-red-500"></IoLogoYoutube>
      <FaTwitter className="text-blue-700"></FaTwitter>
     <div>
     <img className="w-10" src={gmail} alt="" />
     </div>
    </div>

      {/* Subscribe */}
    <div className="lg:pt-12 pt-8">
      <form>
        <div  className="grid-cols-1 grid items-center gap-4 md:grid-cols-3">
        <div className="md:mb-6 md:ml-auto"><p className="md:text-2xl text-xl font-bold text-purple-600">
        <strong>Sign up for our newsletter</strong></p>
    </div>
          <div className="mb-4">
          <input className="lg:px-9 md:py-2 py-2 lg:py-4 bg-orange-50 shadow-xl rounded-xl text-center text-xl font-semibold" type="email" name="" placeholder="Email address" id="" />
    </div>
          <div className="mb-6 lg:mr-96">
          <button className="btn btn-primary text-lg">SUBSCRIBE</button>
      </div>
    </div>
  </form>
</div>

      {/* p with smile emoji */}
   <div className="md:flex gap-2 justify-center items-center">
   <h1 className="md:text-2xl text-xl font-normal text-white mt-10 mb-1">Adventure awaits – Explore more, Adore more !</h1>
    <BiWinkSmile className="text-slate-400 font-extralight text-3xl md:text-4xl md:mt-9 md:ml-0 ml-60 -mt-8"></BiWinkSmile>
   </div>

      {/* image container */}
      <div className="container p-6 lg:ml-7">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="mb-3 lg:mb-0">
            <img src={img4} className="w-full rounded-md shadow-lg" />
      </div>
        <div className="mb-3 lg:mb-0">
          <img src={img6} className="w-full rounded-md shadow-lg" />
      </div>
        <div className="mb-3 lg:mb-0">
          <img src={img3}
          className="w-full rounded-md shadow-lg" />
      </div>
        <div className="mb-3 lg:mb-0">
          <img src={img1}
          className="w-full h-[125px] rounded-md shadow-lg" />
      </div>
          <div className="mb-3 lg:mb-0">
            <img src={img5}
            className="w-full rounded-md shadow-lg" />
      </div>
          <div className="mb- lg:mb-0">
            <img src={img2}
            className="w-full rounded-md shadow-lg" />
      </div>
    </div>
  </div>

      {/* Copyright */}
      <div className="p-4 text-center bg-black rounded-xl text-xl md:text-2xl md:mx-4">© 2024 Copyright - All rights reserved
     <i> <p className="text-neutral-400 mt-2 text-xl md:text-2xl font-bold">Cozy Cottage</p></i>
    </div>

    </footer>
    );
};

export default Footer;