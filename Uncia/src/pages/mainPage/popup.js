import popup from "./Logo/popup.svg"
const Popup = () =>{
 

    return(
      
      <div className="flex w-[100%] bg-white border-t-[2px] font-Roboto">
      
        <div className="bg-red-5 h-16 w-[100%]">
       
       
       <div className="text-[20px] font-bold mx-2 pt-0"> 
        Rs 7700  
        </div>
        <div className="flex w-[100%] h-8 bg-red-6">
        <div className="text-[15px]  mx-2 flex h-8 items-center space-x-2 font-sans">
        per person - <u>standard  </u>
        <img src={popup}/>
         </div>
         </div>

      </div>

      <div className="w-[100%] justify-center items-center top-0 bg-yellow-20">
      
      <button class=" bg-black mx-6  text-white font-semibold  border border-gray-400 rounded shadow w-[80%] h-11 my-4 text-[20px]">
            Book Now             
            </button>
      </div>

      </div>
      
      
      
      


    );
}
export default Popup;