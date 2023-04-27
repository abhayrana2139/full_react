import car from "./Logo/car.svg";
import edit from "./Logo/edit.svg";
import villa from "./Logo/villa.svg";
import info from "./Logo/info.svg";

const Campsite = () => {
  return (


    <div className=' my-2   h-16 w-[100%] bg-yellow-8  border-y-[1px] bg-red-4 pt-3  '>
      <div className=" w-46 h-12 bg-r1ed-20   left-0 top-1 mx-2 ">


        <div className='flex h-10 w-56 bg-green-80 top-2  text-[11px] text-center'>
          <div className='w-11 h-10 bg-gray-300 pt-2 pl-2 rounded items-center '>
            <img src={villa} />
          </div>
          <div className=' w-24 h-9 text-left bg-orange-40 mx-2 '>

            <div className='text-gray-400 text-[12px]  w-screen font-sans font-bold'>

              Campsite
            </div>



            <div className='text-black text-[16px] w-screen font-sans'>
              Kheerganga Campsite
            </div>
          </div>
        </div>
      </div>







    <div className=" float-right bg-red-3 my-[-50px]">

      <div className=' w-24 h-9 bg-red-7   rounded pl-16  mx-5 '>
        <div className=' w-12 pl-0 pt-0 text-left'>
          <img src={info} />
          <div className='text-gray-400 text-[11px] font-serif mx-[-10px] pl-3'>
            info
          </div>
        </div>
      </div>

      </div>

















    </div>

  );
}

export default Campsite;