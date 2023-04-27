import './App.css';
import minuss from "./Logo/minuss.svg"
const Faq1 = () => {
    return (


        <div className='w-[100%] h-auto overflow-clip bg-red-60 flex justify-between' >
            <div className=' w-[100%] h-auto bg-orange-60  top-2'>


                <div className=' top-0 left-0 w-[100%]  bg-red-80  '>
                    <div className='font-bold text-[15px] mx-2'>
                        How much does the Manali Tosh <br></br>
                        Kasol tour package cost?
                    </div>
                </div>
                <div className='my-1 mx-2  font-normal text-[15px] '>
                    Kasol is a hamlet in the Kullu district of Himachal Pradesh situated in the Parvati Valley. Known for numerous hikes and treks in the region. Kasol attracts all types of tourists to its beauty.
                </div>
                    

</div>

                <div className='  bg-red-90  h-9 top-2 pl-2 '>
                    <img src={minuss} />
                </div>
            
        </div>



    );
}

export default Faq1;