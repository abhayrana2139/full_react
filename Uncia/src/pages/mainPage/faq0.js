import './App.css';
import add from "./Logo/add.svg"
const Faq0 = () => {
    return (


        <div className=' w-[100%]  h-8 bg-orange-6 flex justify-between space-x-20 '>


            <div className=' top-0 left-0 w-34  bg-red-4 '>
                <div className='font-bold text-[15px] m-2'>
                    Where is me?
                </div>
            </div>

            <div className=' right-0 md:w-100%  dark:bg-red-40 top-2  pt-1  '>
                <img src={add} />
            </div>
        </div>




    );
}

export default Faq0;