import arrowdown2 from "./Logo/arrowdown2.svg";

const Headings = () => {


    return (


        <div className="h-16 items-center w-[100%] bg-yellow-6  mx-2 flex space-x-2 justify-between ">
            <div className=' w-80  h-10 top-4 items-center bg-red-40 text-[24px]  font-Poppins  font-bold bg-slate-5'>


                Detailed Itinerary

            </div>

            <div className=' w-[40px] h-9  pt-1   bg-gray-6  overflow-clip bottom-5  top-0    '>


                
                    <img src={arrowdown2} />
                
            </div>


        </div>


    );
}
export default Headings;


