import './App.css';

import Faq3 from './faq3';
import Faq1 from './faq1';
import Faq2 from './faq2';
import Faq0 from './faq0';




const Page6 = () => {
    return (
      <div>
      <div className=' font-bold my-5 mx-2 text-[20px]'>
        <div className='mx-2 my-2 font-Roboto font-bold text-[25px]'>
        <p></p>FAQ's
        </div>
 
        <Faq3/>

        <Faq2/>

        <Faq1/>

        <Faq0/>
        <div className=" text-center my-4">
<button class="my-5 bg-white hover:bg-black  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-[90%] text-[20px]">
        Read all FAQ's              
</button>
</div>

        </div>
        </div>
               );
            }
            export default Page6;