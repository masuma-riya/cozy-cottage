import Banner from "./Banner/Banner";
import {useLoaderData} from 'react-router-dom';
import Estate from "./Estate/Estate";
import border from '../../assets/images/border.png';

const Home = () => {
    const estates = useLoaderData();
    return (
    <div className="mt-16 lg:mb-28 w-11/12 m-auto text-center space-y-8">
        
       <i> <h1 className="md:text-2xl text-lg text-orange-600 font-bold">Welcome to your gateway to exquisite properties and unparalleled hospitality!<br></br>Discover the seamless experiences with our premier real estate and hospitality services.</h1></i>
        <h1 className="text-xl font-bold">Let us guide you through a world of elegance, comfort, and unmatched service.<br></br>Your dream destination awaits, right here.</h1>
    
       <div className="border-2 p-2 rounded-2xl shadow">
       <Banner></Banner>
       </div>

    <div className="md:pt-9 pt-4">
       <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold">VILLAS & RATES</h1>
        <p className="lg:text-2xl md:text-xl text-lg font-semibold text-pink-700 md:mt-6 mt-4">&quot;Your Gateway to Luxury Living & Unforgettable Hospitality!&quot;<br></br>Discover Your Dream Property :)</p>
        <img className="lg:ml-96 md:ml-28" src={border} alt="" />
    </div>


       <div className="grid md:grid-cols-3 lg:gap-y-8 lg:gap-x-4 md:gap-y-4 md:gap-x-3 gap-6">
        {
            estates.map(estate => <Estate 
                key={estate.id}
                estates={estate}
                ></Estate> )
        }
       </div>
    </div>
    );
};

export default Home;