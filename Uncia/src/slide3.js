import './App.css';

import Faq3 from './faq3';
import Faq1 from './faq1';
import Faq2 from './faq2';
import Faq0 from './faq0';




const Slide3 = () => {
    return (
      <div>
      <div className=' font-bold my-5 mx-2 text-[20px]'>
        <div className='mx-2'>
        <p></p>FAQ's
        </div>
 
        <div className="w-screen h-11 bg-slate-5 mx-0 bg-red-600"><Faq3/></div>

        <div className="w-screen h-11 bg-slate-5 my-[-10px]"><Faq2/></div>

        <div className="w-screen h-auto bg-slate-5 my-[-10px]"><Faq1/></div>

        <div className="w-screen h-11 bg-slate-5 my-[-10px]"><Faq0/></div>
        <div className=" text-center my-4">
<button class="my-5 bg-white hover:bg-black  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-80">
        Read all FAQ's              
</button>
</div>

        </div>
        </div>
               );
            }
            export default Slide3;