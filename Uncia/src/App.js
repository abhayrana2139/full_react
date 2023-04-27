
import './App.css';
import React from 'react';





import Page3 from './page3';
import Page4 from './Page4';
import Page6 from './page6';
import Page7 from './page7';
import Page5 from './page5';
import Popup from './popup';



//import Popup from './popup';
import Blogs from './blogs';


import Similar from './similar';

import Combine from './combine';
// import Login from './pages/login/login';
import Register from './pages/register/Register';
import Write from './pages/write/Write';
import Update from './pages/update/update';

import CreateBlog from './createBlog'
import Login from './pages/login/Login';











































function App() {
    return (



        <div className='px-2'>


            <div className='w-auto p- h-auto bg-red-6 overflow-clip '>



                <div className='w-auto h-auto p- bg-emerald-3'>

                    <div className='h-auto w-auto p- bg-red-3'>

                    <CreateBlog />

                        <Combine />
                      


                        <div className="sticky top-0">
                            <div className='bg-white'>
                                <div>
                                    <div>
                                        <div>
                                            <div >
                                                <Page3 />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className='w-auto h-auto'>

                            <div>  <Page4 /> </div>

                            <div>  <Page5 /></div>


                            <div> <Similar /></div>


                            <div> <Page6 /></div>
                            <div><Page7 /></div>

                            <div><CreateBlog /></div>










                            <Update />

                            {/* <div className='w-[100%] h-16 bottom-0 fixed' >
            <Popup/>


            

    </div>*/} <Write />
                            <div><Blogs /></div>
                        </div>
                        {/* <Login /> */}


                        <Register />
                        <Login />

                        





                    </div>




                </div>






















            </div >








        </div>











    );
}

export default App;
