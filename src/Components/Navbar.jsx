import React from 'react'
import { useState } from 'react'
// import '../App.css'

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className=" flex flex-1 px-4 pb-3 pt-4">
                
                    <span className='text-purple-600 text-[2rem] ml-2'>MOHIT</span>
                <div className=' w-[100%]'>
                    <ul className='flex flex-row px-5 gap-8 justify-end '>
                        <li><a href="#Projects">Projects</a>   </li>
                        <li><a href="#Skills">Skills</a>   </li>
                        <li> <a href="#Contact">Contact Me</a>   </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
