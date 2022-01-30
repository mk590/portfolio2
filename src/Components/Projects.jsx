import React from 'react'
import Pdata from './Pdata'
import ProjectCard from './ProjectCard'
import { useState } from 'react'
import bg from './download.jpg'
import bg2 from './download.png'
import bg3 from './images.jpg'

const Projects = () => {
  const [data, setdata] = useState(Pdata)
  return (
    < >
      {/* <div className="container-fluid my-0" id='projectPage' >
        <div className="row my-0">

          {data.map((elemant, index) => {
            console.log(elemant)
            return (
              <div className="col-md-3 p-md-3">
                <ProjectCard key={index} {...elemant} />
              </div>
            )
          })}
        </div>
      </div> */}

      <div id="carouselExampleControls" className=" carousel slide relative ." data-bs-ride="carousel" style={{
          backgroundImage: 'url('+bg3+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }} >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
         
          {data.map((elemant, index) => {
            console.log(elemant)
            return (
              <div className="carousel-item relative float-left w-full">
                <ProjectCard key={index} {...elemant} />
              </div>
            )
          })}
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Projects
