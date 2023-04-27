import star from "./Logo/star.svg";
const Slide1 =()=>{


  

  return(
    <div className=" my-4 mx-2 bg-red-20 ">

    <div className="flex flex-col space-x-7  w-screen    bg-green-90 ">
        <div className="mx-0 flex-col my-2 flex hover:bg-gray-100 text-gray-800 font-semibold bg-yellow-20 ">
            Short iternity: Delhi . 2N Manali . 1N Kasol .<br></br> 1N Tosh . 1N Kheerganga . Delhi <br></br>
            
       <div className="flex w-30 h-5 space-x-1  text-[13px]  bg-pink-40 ">
            <h6>4.8 </h6><img src={star}/><img src={star}/><img src={star}/><img src={star}/> <h1> <u> 78 Ratings</u></h1>
           
        </div>

       </div>

    </div>

    </div>  
    

  );






}

export default Slide1;