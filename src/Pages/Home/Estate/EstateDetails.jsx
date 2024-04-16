import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BiDollar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

 const EstateDetails = () => {

    const details = useLoaderData();
    const {id} = useParams();
    const idIntiger = parseInt(id);
    const detail = details.find(detail => detail.id === idIntiger);
    console.log(detail);

    useEffect(() => {
      Aos.init({duration: 1000, easing: "linear"
});
     },[]);

    return (
 <div data-aos="zoom-in-right" className="md:flex rounded-xl bg-white text-gray-700 shadow-2xl w-11/12 m-auto mt-14 mb-16 flex-row">

<Helmet>
        <title>Estate-details | Cozy Cottage</title>
    </Helmet>

 <div className="md:relative md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white md:rounded-r-none bg-clip-border rounded-3xl shrink-0">
    <img src={detail.image} alt="" className="object-cover w-full h-full" />
        </div>

        <div className="p-8 text-center">
<h1 className='py-1 text-center text-base text-white font-semibold rounded-2xl bg-purple-600 w-28 lg:mb-0 mb-4'>{detail.status}</h1>

 <i><h4 className="mb-3 font-bold text-[26px] lg:text-[30px]">{detail.estate_title}</h4></i>
 <i><h6 className="mb-6 text-xl font-semibold text-gray-500 uppercase">{detail.segment_name}</h6></i>
 <p className="mb-7 text-lg font-medium text-gray-700">{detail.description}</p>
 
 <div className="md:flex space-y-3 md:space-y-0 items-center justify-around">
 <div className='flex lg:items-center gap-2'>
<FaSquareArrowUpRight className='md:text-2xl text-2xl text-lime-600'></FaSquareArrowUpRight>
<h1 className="text-[22px] font-semibold">{detail.area}</h1>
</div>

 <div className='flex lg:items-center gap-1'>
 <CiLocationOn className='text-2xl text-red-700'></CiLocationOn>
 <h1 className="text-xl font-semibold">{detail.location}</h1>
 </div>

 <div className='flex gap-1 items-center'>
 <BiDollar className='text-3xl text-green-700'></BiDollar>
 <p className='text-2xl font-semibold text-green-600'>{detail.price}</p>
 </div>
 </div>

 <div className="flex md:flex-row flex-col justify-center md:gap-3 gap-1 mt-6 mb-3 items-center">
 <i><p className='font-bold flex text-[20px] lg:text-[24px] text-gray-800'>The Facilities you&apos;ll get</p></i>
 <BsEmojiLaughing className='md:text-[28px] text-[23px] text-orange-500'></BsEmojiLaughing>
 </div>

 <div className="justify-center text-red-700 items-center gap-2 text-[20px] flex flex-col font-semibold">
 {
    detail.facilities.map((facility, idx) => <div key={idx}>{facility}</div>)
 }
 </div>

 <div className='flex justify-end lg:mt-0 mt-8'>
 <button className="flex gap-3 items-center btn to-neutral border-none"><i><p className='text-xl font-semibold text-gray-900'>Learn more</p></i>
 <FaLongArrowAltRight className="text-2xl text-black"></FaLongArrowAltRight></button>
 </div>

    </div>
  </div>
    );
};

export default EstateDetails;