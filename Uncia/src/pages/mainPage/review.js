import starrr from "./Logo/starrr.svg"
import starr from "./Logo/starr.svg"

import likee from "./Logo/likee.svg"
import profile from "./Logo/profile.svg"
import star from "./Logo/star.svg"


const Review = () => {

    return (

        <div>
        <div>
            <div className='font-bold h-0 border-gray-400 my-14 mx-5 text-[30px] w-[100%]'>
                Reviews
            </div>

            <div className='mx-4 flex w-20 space-x-1 bg-green-4 h-5 my-[-10px] '>
                <img src={starr} />  <img src={starr} />  <img src={starr} />  <img src={starr} />  <img src={starr} /> <p></p>(56)<p></p><p></p>

                <div className='bg-green-400 h-6 w-14 flex space-x-0 pt-0 justify-center relative top-[0px] rounded'>
                   
                <div className="h-5  flex text-[13px] justify-center text-center pl-5 pt-[2px]  space-x-[1px]">   
                <p></p><p></p>4.9 <p></p> <p></p> 
                   
                   <div className="h-7 w-6 pt-[6px]">
                    <img src={star} />
                    </div>
                </div>
                
                </div>

            </div>


            
            </div>



</div>
      



    );
}

export default Review;