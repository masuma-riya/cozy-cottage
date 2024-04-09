import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { CgDollar } from "react-icons/cg";
import { CiLocationArrow1 } from "react-icons/ci";

const Estate = ({estates}) => {
    const {estate_title, segment_name, price, status, area, location, image, facilities} = estates;
    return (
        <div className="lg:mt-6 h-full card bg-base-100 shadow-xl w-11/12 m-auto">

        {/* image */}
    <figure><img className="lg:h-80 h-56 md:h-52 w-full mx-4 lg:rounded-2xl rounded-md shadow" src={image} alt="" /></figure>
    <div className="card-body">

        {/* Title */}
    <h2 className="card-title lg:text-3xl text-start md:text-xl text-2xl font-extrabold">{estate_title}</h2>
      
        {/* Area */}
    
    <div className='flex gap-x-2 items-center justify-start mt-2 lg:text-[22px] text-[20px] text-red-900 font-bold mb-2'>
      <CiLocationArrow1 className='text-yellow-600 lg:text-3xl text-2xl font-bold'></CiLocationArrow1>
      {area}
    </div>

        {/* Price */}
    <p className='lg:text-2xl text-xl lg:mb-0 mb-4 text-neutral-600 flex gap-x-1 justify-start font-bold'><CgDollar className='lg:text-3xl text-2xl text-green-700'></CgDollar>{price}</p>
    
       {/* Segmant Name */}
    <div className='flex justify-start gap-x-2'>
   <div className=' bg-green-500 lg:rounded-full rounded-md text-white py-1 lg:text-lg font-bold lg:px-6 md:px-2 px-4 text-start mr-auto'>{segment_name}</div>

     {/* Status */}
<div className=' bg-violet-600 lg:rounded-xl text-white py-1 text-sm lg:text-xl font-semibold lg:px-6 md:px-2 px-4 text-start rounded-sm'>{status}</div>
    </div>


     {/* Location */}
    <i>
    <div className='lg:text-xl text-lg flex lg:justify-center justify-start items-center gap-2 font-bold mx-auto mt-1'>
    <IoLocationOutline className='lg:text-3xl md:text-5xl text-red-600 text-4xl'></IoLocationOutline>
    {location}
    </div>
    </i>
    {/* <div className='flex'>
      {
        facilities.map((facility, idx) => <div key={idx}> {facility} </div> )
      }
    </div> */}
  </div>
</div>
    );
};

export default Estate;

Estate.propTypes = {
  estates:PropTypes.object,
}