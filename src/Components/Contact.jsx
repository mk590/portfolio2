import React from 'react'

const Contact = () => {
  return (
        <>
      <div className='flex items-center w-full h-full'>
        {/* this is contact us page  */}
        <div className=' w-full h-full px-[2rem] flex flex-col items-center justify-center'>
          <i class="fas fa-envelope"></i>
          <i class="fa fa-phone" aria-hidden="true"></i>
        </div>
        <div className=' w-full h-full px-[2rem]  flex flex-col items-center justify-center'>
          <i class="fas fa-envelope"></i>
          <i class="fab fa-linkedin"></i>
        </div>
        </div>
      </>
      )
}

      export default Contact
