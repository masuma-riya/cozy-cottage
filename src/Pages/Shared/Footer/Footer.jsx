import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import 'animate.css';

const Footer = () => {
    return (

<div className="bg-gray-900">
<div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
<div className="grid row-gap-10 mb-8 lg:grid-cols-6">
<div className="grid grid-cols-2 animate__animated animate__slideInLeft gap-6  row-gap-8 lg:col-span-4 md:grid-cols-4">
<div>
<p className="font-medium  text-gray-300">Guest Experiences</p>
<ul className="mt-2 space-y-2">
<li>
  <a href="/" className="text-gray-500">Testimonials</a>
</li>
<li>
  <a href="/" className="text-gray-500">Architectural</a>
</li>
<li>
  <a href="/" className="text-gray-500">Reviews</a>
</li>
<li>
  <a href="/" className="text-gray-500">Guest stories</a>
</li>
</ul>
</div>
<div>
<p className="font-medium text-gray-300">Exclusive Offers</p>
<ul className="mt-2 space-y-2">
<li>
  <a href="/" className="text-gray-500">Amenities</a>
</li>
<li>
  <a href="/" className="text-gray-500">Special packages</a>
</li>
<li>
  <a href="/" className="text-gray-500">Seasonal deals</a>
</li>
<li>
  <a href="/" className="text-gray-500">Bookings </a>
</li>
<li>
  <a href="/" className="text-gray-500">Promotions</a>
</li>
</ul>
</div>
<div>
<p className="font-medium text-gray-300">Event Spaces</p>
<ul className="mt-2 space-y-2">
<li>
  <a href="/" className="text-gray-500">Venue</a>
</li>
<li>
  <a href="/" className="text-gray-500">Event planning</a>
</li>
<li>
  <a href="/" className="text-gray-500">Corporate event</a>
</li>
<li>
  <a href="/" className="text-gray-500">Family activities</a>
</li>
<li>
  <a href="/" className="text-gray-500">Kid-friendly</a>
</li>
</ul>
</div>
<div>
<p className="font-medium text-gray-300">Local Partnerships</p>
<ul className="mt-2 space-y-2">
<li>
  <a href="/" className="text-gray-500">Collaborations</a>
</li>
<li>
  <a href="/" className="text-gray-500">Local Business</a>
</li>
<li>
  <a href="/" className="text-gray-500">Partner Discounts</a>
</li>
<li>
  <a href="/" className="text-gray-500">Joint promotions</a>
</li>
</ul>
</div>
</div>
<div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-8">
<span className="text-base font-medium text-gray-300">Subscribe for updates</span>
<form className="flex flex-col mt-4 md:flex-row">
<input placeholder="Email" required type="text" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" />
<button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium  text-white rounded shadow-md bg-blue-700">
Subscribe
</button>
</form>
<p className="mt-4 text-base text-gray-500">Discover your dream home with us.  Hope you can perfect match of yours today!</p>
</div>
</div>
<div className="animate__animated animate__bounce flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row"><p className="text-xl text-stone-200 font-bold">© Copyright 2024 Cozy Cottage. All rights reserved !</p>

<div className="lg:flex gap-4 items-center mt-4 lg:space-y-0 space-y-4 lg:space-x-4 sm:mt-0">
<FaFacebookSquare className="text-4xl text-blue-800"></FaFacebookSquare>
<IoLogoYoutube className="text-4xl text-red-800"></IoLogoYoutube>
<FaTwitter className="text-4xl text-blue-800"></FaTwitter>
</div>
</div>
</div>
</div>
    );
};

export default Footer;