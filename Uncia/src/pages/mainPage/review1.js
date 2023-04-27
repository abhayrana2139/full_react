import starrr from "./Logo/starrr.svg"
import starr from "./Logo/starr.svg"

import likee from "./Logo/likee.svg"
import profile from "./Logo/profile.svg"
import star from "./Logo/star.svg"

const Review1 =()=>{
    return(
        <div className="w-[100%]">
              <div className=' flex bg-red-7 w-[100%] '>
                <div className='  mx-5 my-0 border-y-[1px]  rounded shadow w-64 h-58 '>
                    <div className='flex '>
                        <div className='mx-5 my-5 flex'>
                            <img src={profile} />
                        </div>
                        <div className='text-[12px] md:font-bold my-5 '>
                            Ashish Kumar
                            <div className='flex'>
                                <img src={starrr} />  <img src={starrr} />  <img src={starrr} />  <img src={starrr} />  <img src={starrr} /><br></br>
                                <div className='mx-10 flex font-bold'>
                                    <img src={likee} /> 1
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='mx-5 overflow-scroll flex'>
                        Thank you for such a lovely arrangement.
                        Glad to be part of unicia trails. Did not expect such great trek. The food was great. The guides were great. Thank you for bringing mountains...
                    </div>
                </div>
                
        
      
    </div>


</div>

    );
}

export default Review1;