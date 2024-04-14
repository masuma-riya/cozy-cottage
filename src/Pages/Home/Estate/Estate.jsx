import PropTypes from 'prop-types';
import { ImHeart } from "react-icons/im";
import { BiDollar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Estate = ({estates}) => {

   const {id, estate_title, segment_name, price, status, area, location, image} = estates;

    return (
    <Link to={`/estate-details/${id}`}>
    
<div className="lg:mt-6 h-full card shadow-xl w-11/12 m-auto">
 
 <figure><img className="lg:h-80 h-56 md:h-52 w-full m-4 p-1 rounded-full bg-slate-400" src={image} alt="" /></figure>

 <div className='py-1 ml-2 text-white font-bold rounded-xl  bg-purple-600 w-28'>{status}</div>
 <div  className="p-4">
 <h5  className="mb-4 text-2xl lg:text-3xl font-bold">{estate_title}</h5>
 <i><h6  className="mb-4 text-2xl text-neutral-500 font-semibold lg:pt-1">{segment_name}</h6></i>
 <div className='flex items-center justify-center'>
 <BiDollar className='text-3xl text-green-700'></BiDollar>
 <p className='text-2xl font-semibold text-green-600'>{price}</p>
 </div>

 <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-2 items-center justify-around mt-3 text-xl font-semibold'>
 <div className='flex lg:items-center gap-1 lg:gap-2 pt-2'>
 <CiLocationOn className='md:text-3xl text-2xl text-red-700'></CiLocationOn>
 <h1>{location}</h1>
 </div>

<div className='flex lg:items-center gap-1 pt-2'>
<FaSquareArrowUpRight className='md:text-2xl text-2xl text-lime-600'></FaSquareArrowUpRight>
<h1>{area}</h1>
</div>
 </div>

</div>

<div  className="p-6 pt-0">
<button className="btn w-full bg-sky-600 text-white md:text-[15px] text-lg lg:text-lg font-bold hover:bg-sky-700 rounded-xl">View Property
<ImHeart className='text-red-600 md:text-base text-xl lg:text-2xl'></ImHeart>
</button>
</div>

</div>  

    </Link>
    );
};

export default Estate;

Estate.propTypes = {
  estates:PropTypes.object,
}