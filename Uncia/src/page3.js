
import itinerary from './Logo/itinerary.svg';
import hotel from "./Logo/hotel.svg";
import car from "./Logo/car.svg";
import flight from "./Logo/flight.svg";
import verified from "./Logo/verified.svg";
import cross from "./Logo/cross.svg";
import luggage from "./Logo/luggage.svg";
import important from "./Logo/important.svg";
import about from "./Logo/about.svg";
import location from "./Logo/location.svg";

import faq from "./Logo/faq.svg";
import cancel from "./Logo/cancel.svg";
import review from "./Logo/review.svg";







const Page3 = () => {
    return (


        
    <div className="flex  space-x-6  h-auto w-auto bg-red-20   pb-2 overflow-x-scroll scroll-m-1 border-b-[1px] ">
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative " ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'><img src={itinerary} /></div>Itinerary </button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'> <img src={flight} /></div>Flight</button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'><img src={hotel}/> </div>Hotels</button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'> <img src={car} /><p> </p></div>Transportsize</button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'><img src={verified} /><p> </p></div>Inclusions</button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'><img src={cross} /><p> </p></div>Exclusion</button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'><img src={luggage} /><p> </p></div>Things_to_pack </button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'><img src={important} /><p> </p> </div>Important</button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'><img src={about} /><p> </p> </div>About </button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'><img src={location} /><p> </p> </div>Pick_up_location</button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'> <img src={cancel} /><p> </p></div>Cancelation_Policy  </button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'> <img src={review} /><p> </p></div>Reviews  </button>
                <button className=" pl-8 pr-8 pt-2 pb-2 mr- ml-4 h-9 w-auto space-x-1 items-center justify-center  flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow  relative" ><div className=' justify-center w-[35px] h-4 relative bg-cyan-3 mx-[-6px]'> <img src={faq} /><p> </p></div>FAQ's  </button>
                
    </div>
    

        


    );
}




export default Page3;