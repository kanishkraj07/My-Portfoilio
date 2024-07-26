import React from 'react'

export default function Experience() {
  return (
    <div>
        <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Experience</h1>
        <div className="timeline-items before:h-10 lg:before:h-full">
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
            <div className="text-center text-white mt-10 lg:timeline-date">Ecommerce Website - Front End and Back End Development (February 2024) 
              <a href="https://github.com/S-ChandanaSri/e--commerce" style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;Link</a>
            </div>
              <div className="timeline-content">
                <h3>Tech Stack:  React, Node.js, Express.js, JavaScript, Typescript, Bootstrap, MySql, JSON Web Tokens (JWT)
                </h3>
                <p>A sophisticated end-to-end web application was developed, featuring user registration with OTP Authentication, JWT Authorization, Searching products and Razorpay payment interface for secure payments by using React as frontend.
                  Backend implementation was built using Express.js and Node.js to handle API integrations and database operations. 
                  Created a home, Sign up and login pages with product catalog and shopping cart functionality.
                  Incorporated Firebase for user authentication and maintained less than 10 ms of loading time for all APIs to enhance the website’s performance. 
                  </p>
              </div> 
        </div>
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
            <div className="text-center text-white timeline-date">Airbnb Website - Front End and Back End Development (January 2024)
              <a href="https://airbnb-ujp3.onrender.com/" style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;Link</a>
            </div>
              <div className="timeline-content">
                <h3>Tech Stack:  Node.js, Express.js, Middleware,  JavaScript, MongoDB, HTML5, CSS3, Bootstrap</h3>
                <p>Engineered a dynamic website inspired by Airbnb, showcasing a comprehensive listing of accommodations available to the public.  
                  Integrated user authentication functionality using passport middleware, Enabling a secure signup and login process.  
                  Detailed information about a specific listing can be securely accessed by users, offering a comprehensive catalog of accommodations.
                  Empowered hosts with the authority to edit and delete listings.  
                  Users can submit accommodation reviews and ratings which are managed by the MongoDB database.
                  </p>
              </div>
        </div>
        <div className='hidden lg:block absolute w-[22px] h-[2px] bg-white left-[49%] top-full'></div>
    </div>
  </div>
  )
}
