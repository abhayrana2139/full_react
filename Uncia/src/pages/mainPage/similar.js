import Frontpage from "./frontPage";
import Package from "./packages";

const Similer = () => {
    return (
        <div className="w-[100%] h-auto overflow-clip my-3 border-b-[2px] ">
        
            <div className="w-[100%] h-24 overflow-clip mx-2 border-t-[2px] pt-4  ">
                <div className="font-bold text-[25px]">
                    Similar Package
                </div>
                <div>
                    based on your recent search
                </div>
            </div>    
            
            
            <div className="flex  h-300px bg-red-6 space-x-1 overflow-scroll border-2 ">
                <Package/>
                <Package/>
                <Package/>
                <Package/>
            </div>  
<div className="text-center">
            <button class="my-10 bg-white h  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-[90%] text-[20px]">
            See all the 6 Packages
            </button>
            </div>





        </div>




            );
}

            export default Similer;