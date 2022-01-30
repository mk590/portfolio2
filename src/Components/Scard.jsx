import React from 'react'

const Scard = (props) => {
    return (
        <>
            {/* <div class=" items-center  rounded-[1rem] h-[10rem] p-8  my-3 mx-3"> */}

                {/* <div className='flex-1 v-32 basis-1/2 px-2  w-[100%]'> */}
                    <p className='text-white '>{props.name}</p>
                    <div className='bar-wrap p-0 my-2 rounded-[2rem] w-full bg-white'>
                        <div className="bar w-[25%] h-[15px] rounded-[2rem] transition width  bg-green-900 ease-out duration-300">
                        </div>
                    </div>
                {/* </div> */}

                 {/* <div className='flex-1 v-32 basis-1/2 px-2  w-[100%]'>
                    <p className='text-white '>JS</p>
                    <div className='bar-wrap p-0 mt-2 rounded-[2rem] w-[100%] bg-white'>
                        <div className="bar w-[20%] h-[15px] rounded-[2rem] transition width  bg-green-900 ease-out duration-300">
                        </div>
                    </div>
                </div> */}

            {/* </div> */}
        </>
    )
}

export default Scard

{/* <a target='_blank' class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" href={props.Link}>Link</a> */ }