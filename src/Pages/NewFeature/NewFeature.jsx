import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const NewFeature = () => {

    useEffect(() => {
        Aos.init({duration: 700, easing: 'linear'});
       },[]);

    return (
        <section data-aos="zoom-out" data-aos-anchor-placement="top-center">
        <div className="container max-w-xl pt-10 pb-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
        <div>
        <h2 className="text-3xl font-bold text-center sm:text-5xl">New Features</h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Experience real estate reinvented with our fresh features! Unlock the future of property exploration with our newest additions!</p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
        <div>
        <div className="mt-4 space-y-12">
        <div className="flex">
        <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
        </path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
        </path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg></div>
        </div>
        <div className="ml-4">
        <h4 className="text-xl font-bold">Sustainable Property Ratings</h4>
        <p className="mt-2">Take a step towards a greener future with our sustainable property ratings. We provide comprehensive assessments of properties based on their eco-friendliness, and sustainable practices.</p>
        </div>
        </div>
        <div className="flex">
        <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-plus">
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        <line x1={12} x2={12} y1={7} y2={13} />
        <line x1={15} x2={9} y1={10} y2={10} />
        </svg></div>
        </div>
        <div className="ml-4">
        <h4 className="text-xl font-bold">Smart Property Alerts</h4>
        <p className="mt-2 ">Revolutionize your property search with our Smart Property Alerts feature. Gone are the days of endlessly missing out on opportunities.</p>
        </div>
        </div>
        <div className="flex">
        <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width={14} height={12} x={2} y={6} rx={2} ry={2} />
        </svg></div>
        </div>
        <div className="ml-4">
        <h4 className="text-xl font-bold">Flexible Lease Negotiation</h4>
        <p className="mt-2 "> Empowering you with flexibility, our lease negotiation streamline the process for commercial properties. Customize lease terms, payment schedules, and clauses to suit your business needs.</p>
        </div>
        </div>
        <div className="flex">
        <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-question">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
        <path d="M12 17h.01" />
        </svg></div>
        </div>
        <div className="ml-4">
        <h4 className="text-xl font-bold">Interactive Property Comparisons</h4>
        <p className="mt-2 ">Easily compare properties side-by-side with interactive features for informed decision-making. Empower your property decisions with our this feature.</p>
        </div>
        </div>
        </div>
        </div>
        <div aria-hidden="true" className="mt-10 lg:mt-0">
        <img width={600} height={600} src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=" className="mx-auto rounded-2xl shadow-lg dark-bg-gray-500" />
        </div>
        </div>
        </div>
        </section>
    );
};

export default NewFeature;