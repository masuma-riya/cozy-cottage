import PropTypes from 'prop-types';
import { ImHeart } from "react-icons/im";
import { BiDollar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Estate = ({estate}) => {

   const {id, estate_title, segment_name, price, status, area, location, image} = estate;

    return (
    
<div className="lg:mt-6 h-full card shadow-xl w-11/12 m-auto">
 
 <figure><img className="lg:h-64 h-48 lg:w-72 w-52 m-6 rounded-full bg-slate-400" src={image} alt="" /></figure>

 <div className='py-1 ml-2 text-base text-white font-semibold rounded-xl bg-stone-400 w-28'>{status}</div>
 <div  className="p-4">
 <h5  className="mb-4 text-[24px] lg:text-[27px] font-bold">{estate_title}</h5>

 <div className='flex lg:flex-row md:flex-col flex-row lg:space-y-0 md:space-y-2 items-center justify-around'>
 <i><h6  className="text-xl text-neutral-500 font-semibold lg:pt-1">{segment_name}</h6></i>
 <div className='flex items-center justify-center'>
 <BiDollar className='text-3xl text-green-700'></BiDollar>
 <p className='text-2xl font-semibold text-green-600'>{price}</p>
 </div>

 </div>

 <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-2 items-center justify-around mt-3 text-xl font-medium'>
 <div className='flex lg:items-center gap-1 pt-2'>
 <CiLocationOn className='text-2xl text-red-700'></CiLocationOn>
 <h1>{location}</h1>
 </div>

<div className='flex lg:items-center gap-1 pt-2'>
<FaSquareArrowUpRight className='md:text-2xl text-2xl text-lime-600'></FaSquareArrowUpRight>
<h1>{area}</h1>
</div>
 </div>

</div>

<div  className="p-6 pt-0">
<Link to={`/estate-details/${id}`}><button className="btn w-full bg-neutral-800 text-white md:text-[15px] text-lg lg:text-lg font-semibold hover:bg-neutral-950 rounded-xl">View Property
<ImHeart className='text-red-600 md:text-base text-xl lg:text-2xl'></ImHeart>
</button></Link>
</div>

</div>  
    );
};

export default Estate;

Estate.propTypes = {
  estate:PropTypes.object,
}