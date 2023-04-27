import car from "./Logo/car.svg";
import edit from "./Logo/edit.svg";

const Transport = () => {
  return (


    <div className=' my-2   h-16 w-[100%] bg-yellow-8  border-y-[1px] bg-red-4 pt-3  '>
      <div className=" w-46 h-12 bg-r1ed-20   left-0 top-1 mx-2 ">


        <div className='flex h-10 w-56 bg-green-80 top-2  text-[11px] text-center'>
          <div className='w-11 h-10 bg-gray-300  rounded p-3 '>
            <img src={car} />
          </div>
          <div className=' w-24 h-9 text-left bg-orange-40 mx-2 '>

            <div className='text-gray-400 text-[12px]  w-screen font-sans font-bold'>

              7 Seater | 5 Bags
            </div>



            <div className='text-black text-[16px] w-screen font-sans'>
              Mahindra XUV 500
            </div>
          </div>
        </div>
      </div>







    <div className=" float-right bg-red-3 my-[-50px]">

      <div className=' w-24 h-9 bg-red-7   rounded pl-16  mx-5 '>
        <div className=' w-12 pl-0 pt-0'>
          <img src={edit} />
          <div className='text-gray-400 text-[11px] font-serif mx-[-10px]'>
            Change
          </div>
        </div>
      </div>

      </div>

















    </div>

  );
}

export default Transport;