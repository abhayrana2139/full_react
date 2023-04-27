import arrowdown2 from "./Logo/arrowdown2.svg";

const About = () => {


    return (


        <div className="h-16 items-center w-[100%] bg-yellow-6  ">
            <div className='  w-40 h-9 top-4 items-center bg-red-40 text-[20px]  relative bg-slate-5 mx-2'>

                About

            </div>

            <div className=' w-8 h-9 relative    bg-gray-60  overflow-clip bottom-5 float-right '>

                <div className="w-[100%] h-auto bg-orange-30 relative bg-red-6 text-center  ">
                    <img src={arrowdown2} />
                </div>
            </div>


        </div>


    );
}
export default About;


