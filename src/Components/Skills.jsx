import React from 'react'
import Scard from './Scard'
import Sdata from './Sdata'
import { useState } from 'react'

const Skills = () => {
    const [data, setdata] = useState(Sdata)
    return (
        <>
        <div className=''>
            <h3 className="text-purple text-center pt-3">MY SKILLS</h3>

            {/* <div class=" container flex flex-col items-center  rounded-[1rem] h-[10rem] p-8  my-3 mx-3 border-4 border-blue-100"> */}
         <div className="p-8">
                {data.map((elemant, index) => {
                    return <Scard key={index} {...elemant} />
                })}
                </div> 
            {/* </div> */}
            </div>
        </>
    )
}

export default Skills
