
import './App.css';
import tickk from "./Logo/tick.svg";
import cross from "./Logo/cross.svg";
import meal from "./Logo/meal.svg";
import flight2 from "./Logo/flight2.svg"
import calander from "./Logo/calender.svg"
import car from "./Logo/car.svg";
import edit from "./Logo/edit.svg";
import AddActivity from './Add';
import Hotel from './hotel';
import Transport from './transport';
import arrowdown from './Logo/arrowdown.svg';
import Headings from './headings';
import Headings1 from './About';
import Page3 from './page3';
import Campsite from './campsite';




 

const Page4 = () => {
  return (


    <div className='my-6 font-Roboto '>
    
    
    
    
     <Headings/>










<div className='w-screen bg-slate-200  flex space-x-2 h-14 text-center pt-2   '>
<div className='h-10 w-10 bg-gray-400 pt-1  mx-2 bottom-2  '>


<div className='p-1'>
<img src={flight2}/>
</div>
</div>
 
 
 <p>    </p>  <div className=' font-sans pt-2 text-[16px]'>Add flights to <u>Delhi</u></div>  
</div>











<div className=' text-[12px] font-sans mx-2 my-4 flex space-x-2 -tracking-tight w-[100%] bg-yellow-70 h-4 font-bold '>
DAY 1<p></p> <img src={calander}/> <p></p>  12 Mar 2021

</div>

<div className='text-[22px] md:font-bold mx-2  font-black h-8 bg-red-5 my-[-10px]'>
  Pick up at Delhi
  </div>
  <div className='text-[18px] mx-2 my-2 font-sans '>
    You'll be meeting our repersentative in Delhi at the pickup point. We will travel overnighty in an AC Volvo from Delhi to Manali.
    </div>

    <div className='text-[12px] md:font-bold mx-2 flex font-sans my-[-2px] font-bold'>
    <img src={meal}/>   Meals: Nil
    </div>


<div className="bg-[url('/images/4.jpg')] mx-2 w-[95%] h-64  bg-cover my-3 ">
</div>














<Transport/>














<div className=' text-[12px] md:font-bold mx-2 my-10 flex space-x-2 -tracking-tight '>
DAY 2 <p></p> <img src={calander}/><p></p> 13 Mar 2021
</div>

<div className='text-[25px] md:font-bold mx-2 my-[-40px]'>
  Reaching Manali
  </div>
  <div className='text-[-40px] mx-2 my-10 font-sans'>
    After reaching Manali you will check in to the hotel. After freshening up you will visit local places like Mall Road, Old Manali, Clubhouse, Hadimba Temple, Van Vihar.
    </div>
    <div className='text-[12px] md:font-bold mx-2 flex my-[-30px]'>
    <img src={meal}/> Meals: Dinner
    </div>
    <div className="bg-[url('/images/5.jpg')]  mx-2 w-[95%] h-64  bg-cover my-10" >
</div>


<Hotel/>
<Transport/>
<AddActivity/>





<div className=' text-[12px] md:font-bold my-10 mx-2 flex space-x-2 -tracking-tight'>
DAY 3  <p> </p><img src={calander}/><p> </p>14 Mar 2021
</div>
<div className='text-[25px] md:font-bold text-black mx-2 my-[-40px]'>
   Manali Localsightseeing
  </div>
  <div className='text-[18px] mx-2 my-10 font-sans'>
    After the Morning tea and Breakfast, you will visit Solang Valley and Atal Tunnel. You can enjoy various adventure activities like Zipline, Paragliding, Sikiing, Yak Riding, Quad Biking etc.
    </div>
    <div className='text-[12px] md:font-bold mx-2  my-[-30px] flex'>
     <img src={meal}/>Meals: Breakfast, Dinner
    </div>
    <div className="bg-[url('/images/7.jpg')]  mx-2 w-[95%] h-64  bg-cover my-10"  >
</div>




<Hotel/>
<Transport/>
<AddActivity/>






<div className=' text-[12px] md:font-bold mx-2 my-10 flex space-x-2 -tracking-tight '>
DAY 4 <p> </p><img src={calander}/><p> </p> 15 Mar 2021
</div>
<div className='text-[25px] md:font-bold text-black mx-2 my-[-40px]'>
Reaching Kasol
  </div>
  <div className='text-[18px] mx-2 my-10 font-sans'>
    After the Morning tea and Breakfast, you will check out and depart to Kasol. Upon arrival, you will check into the hotel at Kasol and gear up for exploring the beautiful city. 
    </div>
    <div className='text-[12px] md:font-bold mx-2 my-[-30px] flex'>
    <img src={meal}/>Meals: Breakfast, Dinner
    </div>
    <div className="bg-[url('/images/8.jpg')]  mx-2 w-[95%] h-64  bg-cover my-10"  >
</div>

<Hotel/>
<Transport/>
<AddActivity/>






<div className=' text-[12px] md:font-bold mx-2 my-10 flex space-x-2 -tracking-tight'>
DAY 5 <p> </p><img src={calander}/><p> </p>16 Mar 2021
</div>
<div className='text-[25px] md:font-bold text-black mx-2 my-[-40px]'>
  Kasol to Tosh
  </div>
  <div className='text-[18px] mx-2 my-10 font-sans'>
     In the morning after freshening up, you will depart to Manikaran to take a dip in natural hot water springs. After this, you will drive towards Tosh village and stay therefor the night.
    </div>
    <div className='text-[12px] md:font-bold mx-2 my-[-30px] flex'>
    <img src={meal}/>Meals: Breakfast, Dinner
    </div>
    <div className="bg-[url('/images/9.jpg')]  mx-2 w-[95%] p-6 h-64  my-10 bg-cover"  >
</div>





<Hotel/>
<Transport/>
<AddActivity/>







<div className=' text-[12px] md:font-bold mx-2 my-10 flex space-x-2 -tracking-tight'>
DAY 6 <p> </p><img src={calander}/><p> </p> 17 Mar 2021
</div>
<div className='text-[25px] md:font-bold text-black mx-2 my-[-40px]'>
   Kheerganga Trek
  </div>
  <div className='text-[18px] mx-2 my-10 font-sans'>
    Wake up to a beautiful view of Parvati valley and drive towards Barshaini. Barshaini will be the starting point, where you will meet your guide and start the trek. 
    </div>
    <div className='text-[12px] md:font-bold mx-2 my-[-30px] flex'>
    <img src={meal}/> Meals: Breakfast, Dinner
    </div>
    <div className="bg-[url('/images/11.jpg')]  mx-2 w-[95%] h-64  bg-cover my-10"  >
</div>


<Campsite/>
<Transport/>





<div className='w-screen bg-slate-200  flex space-x-2 h-14 text-center pt-2   '>
<div className='h-10 w-10 bg-gray-400 pt-1  mx-2 bottom-2  '>


<div className='p-1'>
<img src={flight2}/>
</div>
</div>
 
 
 <p>    </p>  <div className=' font-sans pt-2 text-[16px]'>Add flights to <u>Delhi</u></div>  
</div>




















<Headings1/>
<div className='text-[18px] mx-2 font-sans'>
    Manali, nestled between the snow-capped mountains of Himachal Pradesh is an all around the year destination of india. Very popular among couples, adve..... .<u>read more</u>
   
</div>
    <div className="bg-[url('/images/12.jpg')] my-4 mx-2 w-[95%] h-64  bg-cover pl-2 pr-2"  >
</div>
<div className=" text-center my-6">
<button class=" w-[90%] bg-white hover:bg-gray-100 text-gray-800  font-sans font-bold py-2 px-4 border border-gray-400 rounded shadow mx-2 ">
  Show all 24 media
</button>
</div>









</div>


    
   
    
  );
}
export default Page4;