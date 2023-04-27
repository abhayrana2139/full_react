import iinsta from "./Logo/iinsta.svg";
import linkedin from "./Logo/linkedin.svg";
import youtube from "./Logo/youtube.svg";
import twitter from "./Logo/twitter.svg";
import ffacebook from "./Logo/ffacebook.svg";
import copyright from "./Logo/copyright.svg";


const Page7 = () => {
    return (
        
    <div className="bg-black text-white  w-[100%] ">

        <div className="h-24 text-white text-center pt-5 font-bold text-[20px]  border-b-[1px] border-white  mx-4  w-[90%] ">
            UNICIA TRAILS
        </div>

            <div className="font-bold my-2 mx-4  ">
              Get Inspired
            </div>
            <div className="mx-4  ">
             Read our Blog<br></br>
             Upcoming Treks<br></br>
             Upcoming Group Tours

             
            </div>

            <div className="h-1 w-[20%] border-t-[1px] border-y-white my-6 mx-4">

            </div>
            

            <div className="mx-4 my-6 font-bold ">
               Navigate


              <div className="mx-0  font-normal my-2 ">
                 About Us<br></br>
                 Contact Us<br></br>
                 Work with Unicia<br></br>
                  Submit an article<br></br>
                  Cancellation Policy


                </div>
            </div>
        
        


            <div className="h-1 w-[20%] border-t-[1px] border-y-white my-6 mx-4">

</div>
   
            

        <div className="mx-4 my-6 font-bold border-b pb-4 ">
               Address
               


            <div className="mx-0  font-normal my-2 ">
               NH20, near Zamanabad Road,<br></br>
              Dharamshala, Himachal Pradesh PIN<br></br>
              176209


            </div>
            <div className=" w-[100%]">
            <div className="my-4 flex space-x-8    bottom-2">
            <img src={iinsta}/>
            <img src={linkedin}/>
            <img src={youtube}/>
            <img src={twitter}/>
            <img src={ffacebook}/>
            </div>
            </div>
    </div>
    



    

   <div className=" relative h-32 text-white  text-[20px]  border-white mx-4 my-11">
<div className=" top-0 flex  ">
<img src={copyright}/> 2021 Unicia Trails Private Limited
</div>
<div className=" font-normal text-[17px] ">
    Privacy Policy: Terms & Conditions: Sitemap
</div>
</div>
 </div>


    
      

    );
}
export default Page7;