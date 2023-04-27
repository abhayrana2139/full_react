import heart from "./Logo/heart.svg"
import clock from "./Logo/clock.svg"
import arrowdown from "./Logo/arrowdown.svg"

const Package = () => {
  return (




    <div className="border-[1px] rounded w-[100%] h-[80%] bg-cover m-4">






      <div className="bg-[url('/images/1.jpg')] bg-cover   h-[200px] w-auto overflow-clip rounded-md"  >
        <div className=' opacity-800  h-[200px]  w-auto bg-gradient-to-b     overflow-x-hidden from-zinc-800 to-transparent  '>
          <div className=' opacity-800 h-[200px] w-48 bg-gradient-to-t   from-zinc-700 to-transparent overflow-x-hidden  '>





            <div className=' w-[100%]  text-white bg-blue h-auto bg-orange-4  '>
              <div className='flex  w-[100%] h-auto bg-gray-6 left-0 text-[17px]  space-x-1 bg-red-4 mx-2  '>

                <p></p><div className="h-auto w-24 bg-red-400 font-bold text-[10px] space-x-3 pt-2 ">
                  Rs 6999
                </div>


                <div className="w-[100%] h-auto   bg-red-5 pl-24  pt-2">
                  <img src={heart} />
                </div>

              </div>






            </div>

            <div className='  w-screen h-10     bg-red-7  pt-32 font-Roboto '>

              <div className='bg-orange-4 h-auto  w-screen flex text-white text-[9px] mx-2  font-serif'>

                <img src={clock} /><p> </p><p></p> 6 Days/5 Nights

              </div>
              <div className='bg-orange-80 h-auto  w-screen flex mx-2 text-white text-[12px] '>
                <h1> Manali Kasol Tosh <br></br>
                  Kheerganga  Package</h1>




              </div>



            </div>











          </div>
        </div>


      </div>




      <div className="text-[10px] mx-2 overflow-clip w-32 my-4 h-auto">
        Delhi-2Manali--1Kasol-1Tosh- 1Kheerganga-Delhi
      </div>


    </div>




  );
}
export default Package;