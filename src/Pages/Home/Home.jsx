import Banner from "./Banner/Banner";

const Home = () => {
    return (
    <div className="md:mt-16 mt-16 w-11/12 m-auto text-center space-y-8">
        
       <i> <h1 className="md:text-2xl text-lg text-orange-600 font-bold">Welcome to your gateway to exquisite properties and unparalleled hospitality!<br></br>Discover the seamless experiences with our premier real estate and hospitality services.</h1></i>
        <h1 className="text-xl font-bold">Let us guide you through a world of elegance, comfort, and unmatched service.<br></br>Your dream destination awaits, right here.</h1>
    
       <div className=" border-2 p-2 rounded-2xl shadow">
       <Banner></Banner>
       </div>
    </div>
    );
};

export default Home;