import arrowdown2 from "./Logo/arrowdown2.svg";
import arrowright from "./Logo/arrowright.svg";

const Headings2 = () => {


    return (


        <div className="h-24 w-[100%] p-2 bg-green-4 flex mx-4  border-b-[1px] border-bla">

        <div className="flex h-[100%] w-[100%] bg-red-5 p-2">
            
            <div className="w-[100%]">
            <div className='  w-[90%] top-4 left-0 h-auto   bg-red-4 text-[22px]  font-bold bg-orange-9 '>

                Cancellation Policy

            </div>
            <div className=" w-[100%] h-auto text-[15px] font-normal bg-gray-5 ">
                Warm clothes, sports shoes...
            </div>
            </div>







            <div className=' w-[20%] h-8 top-4 bg-gray-30   bg-red-5 float-right items-center bg-yellow-3 '>

                <div className="justify-center">
                    <img src={arrowright} />
                </div>
            </div>
        </div>



    </div>




    );
}
export default Headings2;

