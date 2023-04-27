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
import arrowdown2 from "./Logo/arrowdown2.svg";
import close from "./Logo/close.svg";




const Page5 = () => {
   return (
      <div className="items-start justify-start border-b-2 h-auto">
         <div className='font-bold text-[20px] mx-5 my-5 border-t border-gray-400 items-start'>



            <div className="font-bold text-[20px] flex space-x-40">
               Inclusions

               <div className="w-[100%] bg-red-500 pl-[60%]">
                  <img src={arrowdown2} />
               </div>
            </div>




         </div>
         <div className='flex mx-5 text-left top-0  space-x-2 '>
            <img src={tickk} /><h1>Meals as mentioned in the Itinerary.</h1>
         </div>
         <div className='flex mx-5 items-start justify-start space-x-2 '>
            <img src={tickk} /><h1>Accommodation on Dual/Triple sharing Basis as per Package.</h1>
         </div>
         <div className='flex mx-5 space-x-2 items-start justify-start'>
            <img src={tickk} /><h1>Vehicle for sightseeing & excursions as per our Itinerary.</h1>
         </div>
         <div className='flex mx-5 space-x-2 items-start'>
            <img src={tickk} /><h1>Necessary Permits.</h1>
         </div>

         <div className=' text-[15px] mx-5 my-5 border-solid border-t border-gray-400 space-x-2'>

            <div className="font-bold text-[20px] flex space-x-40 items-start">
               Exclusions

               <div className="w-[100%] bg-red-500 pl-[60%]">
                  <img src={arrowdown2} />
               </div>
            </div>



            <div className='flex mx-5 space-x-2 pt-4 items-start'>
               <img src={close} /><h1>Fees for any adventure activity.</h1>
            </div>
            <div className='flex mx-5 space-x-2 items-start'>
               <img src={close} /><h1>Additional charges for a cab from Barshaini to Tosh.</h1>
            </div>
            <div className='flex mx-5 space-x-2 items-start'>
               <img src={close} /><h1>Dedicated Tour Guide.</h1>
            </div>
            <div className='flex mx-5 space-x-2 items-start'>
               <img src={close} /><h1>Any kind of personal expenses or extra meals ordered.</h1>
            </div>
            <div className='flex mx-5 space-x-2 items-start'>
               <img src={close} /><h1>Services of the vehicle on leisure days and after finishing the sightseeing tour as per the Itinerary.</h1>
            </div>
            <div className='flex mx-5 space-x-2 items-start'>
               <img src={close} /><h1>Any kind of drink(alcoholic, mineral water, aerated).</h1>
            </div>
            <div className='flex mx-5 space-x-2 items-start'>
               <img src={close} /><h1>Any increase in taxes or fuel, leading to an increase in surface transportation and land arrangements, which may come into effect before departure.</h1>
            </div>
            <div className='flex mx-5 space-x-2 items-start'>
               <img src={close} /><h1>Heater charges in hotels.</h1>
            </div>
            <div className='flex mx-5 space-x-2 items-start'>
               <img src={close} /><h1>Any portage at the airport, hotels tips, insurance, laundary, mineral water,telephone charges</h1>
            </div>
            <div className='flex mx-5 space-x-2 border-b-2 items-start'>
               <img src={close} /><h1>Cost incidental to any change in the Itinerary/stay on account of flight.</h1>
            </div>
         </div>
         <div className='my-2 '>



            <div className=" my-6   w-[100%] h-20  "><Headings2 /></div>
            <div className=" my-6   w-[100%] h-40  "><Headings3 /></div>
            <div className=" my-6   w-[100%] h-20  "><Headings4 /></div>
            <div className=" my-6  w-[100%] h-20  "><Headings5 /></div>
            <div className=" my-6   w-[100%] h-80  "><Headings6 /></div>





            <div className="h-1 w-[100%]   my-12 mx-2 border-b-[2px]">

</div>





            <div className=" my-6   w-[100%] h-26  "><Review /></div>





            <div className="w-[100%] overflow-x-scroll bg-yellow-3 flex space-x-[-25px]">
               <div className=" my-2 mx-2  pt-2 w-[100%] h-26  bg-red-7  "><Review1 /></div>
               <div className=" my-2  pt-2 w-[100%] h-26 mx-2 "><Review1 /></div>
               <div className=" my-2  pt-2 w-[100%] h-26 mx-2 "><Review1 /></div>
               <div className=" my-2  pt-2 w-[100%] h-26 mx-2 "><Review1 /></div>
               <div className=" my-2  pt-2 w-[100%] h-26 mx-2 "><Review1 /></div>







            </div>
            <div className="text-center border-b-[2x]">
               <button class="my-5 bg-white  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-[90%] h-auto text-[20px]  ">
                  Show all reviews
               </button>



            </div>












         </div>


      </div>
   );
}
export default Page5;