import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div class="flex items-center justify-center pt-3 h-full">
               <div className="p-12 flex flex-col items-center rounded-[1rem]   h-[20rem] w-[20rem] my-[5rem]">
                    <h5 class=" text-center my-1">{props.Title}</h5>
                    <p class="">{props.Description}</p>
                    <div className='mx-5 my-3'>
                    <a target='_blank' class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" href={props.Link}>Link</a>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default ProjectCard
