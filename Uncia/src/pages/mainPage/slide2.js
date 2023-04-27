import tickk from "./Logo/tickk.svg";
import cross from "./Logo/cross.svg";
import starr from "./Logo/starr.svg";
import star from "./Logo/star.svg";
import profile from "./Logo/profile.svg";
import starrr from "./Logo/starrr.svg";
import likee from "./Logo/likee.svg";
import Headings2 from "./headings2";
import Headings3 from "./headings3";
import Headings4 from "./headings4";
import Headings5 from "./headings5";
import Headings6 from "./headings6";
import Review from "./review";
import Review1 from "./review1";




const Slide2 = () => {
    return (
        <div>
        <div className='font-bold text-[20px] mx-5 my-5 border-t border-gray-400'>
     Inclusions  
     </div>
     <div className='flex mx-5 text-left top-0 '>
     <img src={tickk}/>Meals as mentioned in the Itinerary.
     </div>
     <div className='flex mx-5'>
     <img src={tickk}/>Accommodation on Dual/Triple sharing Basis as per Package.
     </div>
     <div className='flex mx-5'>
     <img src={tickk}/>Vehicle for sightseeing & excursions as per our Itinerary.
     </div>
     <div className='flex mx-5'>
     <img src={tickk}/>Necessary Permits.
     </div>

     <div className='font-bold text-[20px] mx-5 my-5 border-solid border-t border-gray-400'>
    Exclusions
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Fees for any adventure activity.
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Additional charges for a cab from Barshaini to Tosh.
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Dedicated Tour Guide.
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Any kind of personal expenses or extra meals ordered.
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Services of the vehicle on leisure days and after finishing the sightseeing tour as per the Itinerary.
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Any kind of drink(alcoholic, mineral water, aerated).
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Any increase in taxes or fuel, leading to an increase in surface transportation and land arrangements, which may come into effect before departure.
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Heater charges in hotels.
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Any portage at the airport, hotels tips, insurance, laundary, mineral water,telephone charges.
     </div>
     <div className='flex mx-5'>
     <img src={cross}/>Cost incidental to any change in the Itinerary/stay on account of flight.
     </div>
     
<div className='my-2'>
    


      <div className=" my-6  pt-2 w-screen h-20 mx-4 border-y-[1px]"><Headings2/></div>
      <div className=" my-6  pt-2 w-screen h-36 mx-4 border-y-[1px]"><Headings3/></div>
      <div className=" my-6  pt-2 w-screen h-20 mx-4 border-y-[1px]"><Headings4/></div>
      <div className=" my-6  pt-2 w-screen h-20 mx-4 border-y-[1px]"><Headings5/></div>
      <div className=" my-6  pt-2 w-screen h-80 mx-4 border-y-[1px]"><Headings6/></div>
      <div className=" my-6  pt-2 w-screen h-26 mx-2 "><Review/></div>
      
      
      
      

      <div className="w-screen overflow-x-scroll flex">
      <div className=" my-2  pt-2 w-screen h-26 mx-2 "><Review1/></div>
      <div className=" my-2  pt-2 w-screen h-26 mx-2 "><Review1/></div>
      <div className=" my-2  pt-2 w-screen h-26 mx-2 "><Review1/></div>
      <div className=" my-2  pt-2 w-screen h-26 mx-2 "><Review1/></div>
      <div className=" my-2  pt-2 w-screen h-26 mx-2 "><Review1/></div>
      
      
     
      </div>
   

    
   


    
 
     






      </div>


     </div>
        );
}
export default Slide2;