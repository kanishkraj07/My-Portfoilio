import React from 'react'

export default function Projects() {
  return (
    <div>
      <section>
      <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Projects</h1>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">Ecommerce Website - Front End and Back End Development (February 2024) 
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
        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">Airbnb Website - Front End and Back End Development (January 2024)
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
        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">Simon Says Game  - Front End Development (December 2023)
  
              <a href="https://simon-says-game-zeta.vercel.app/" style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;Link</a>
            </div>
              <div className="timeline-content">
                <h3>Tech Stack:  HTML5, CSS3, Javascript, DOM Manipulation</h3>
                <p>Developed a Simon riddle kind of game with event listeners leveraged for user interaction.
                  Integrated a score board and Level progression (easy, medium, hard) with flashing buttons.
                  Managed to store automatically generated flashes and user-clicked buttons, allowing progression to the next level upon successful matching or displaying the score upon failure.
                  The game is resettable and initiated with a keypress event.
                  
                  </p>
              </div>
  
          
  
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">SheShare Website - Front End and Back End Development (April 2024)
              <a href="https://www.loom.com/share/c4212fad42cb4d9abb02e3dd92b15c29?sid=eee7fa27-c0df-4db6-af39-c49f5ed35952" style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;Link</a>
            </div>
              <div className="timeline-content">
                <h3>Tech Stack:  Node.js, Express.js, Middleware,  JavaScript, MongoDB, HTML5, CSS3, Bootstrap</h3>
                <p>Engineered a dynamic website inspired by Airbnb, showcasing a comprehensive listing of accommodations available to the public. This website is totally belongs to women i.e.who gives rent and wh takes are women. 
                  Integrated user authentication functionality using passport middleware, Enabling a secure signup and login process.  
                  Detailed information about a specific listing can be securely accessed by users, offering a comprehensive catalog of accommodations.
                  Empowered hosts with the authority to edit and delete listings.  
                  Users can submit accommodation reviews and ratings which are managed by the MongoDB database.
                  </p>
              </div>

          

        </div>
      </div>
      
    </section>
    </div>
  )
}
