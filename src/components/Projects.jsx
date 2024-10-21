import React from 'react'

export default function Projects() {
  return (
    <div>
      <section className='mt-20'>
      <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Projects</h1>
      <div className="timeline-items before:h-10 lg:before:h-full">
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
            <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>ChatMate (Whatsapp Clone)</span> - <span className='text-xl'>July 2024</span> 
              <a href="https://github.com/kanishkraj07/ChatMate-App" className='font-primaryMedium text-xl' style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;[Link]</a>
            </div>
              <div className="timeline-content">
                <div className='text-lg text-white'>Tech Stack: React Js, Recoil, Node.js, Express.js, OAuth2.0, Redis, PostgreSQL, Prisma, AWS S3, Shadcian UI
                </div>
                <p className='mt-3'>• Engineered a Real-time chat application with Google and
                    GitHub OAuth 2.0 authentication, featuring global search for friend
                    connections, Notifications, and dedicated chat and group management pages. <br /> <br />
                    • Peer-to-Peer connection: Integrated a video calling feature with WebRTC, maintaining 30 FPS video transfer.
                    <br /> <br />
                    • Configured a signaling server using Node.js and WebSockets (WS) for real-time communication. <br /> <br />
                    • Utilized Recoil.js for state management, leading to a 30% reduction in page loading time. <br /> <br />
                    • Achieved 1ms latency per request by using Redis for in-memory caching. <br /> <br />
                    • Integrated worker servers with messaging queues and pub/subs for event
                    broadcasting, which can be easily scaled to 1 million users.
                  </p>
              </div> 
        </div>
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
          <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>E-COMMERCE (Flipkart Clone)</span> - <span className='text-xl'>January 2024</span> 
          <a href="https://github.com/kanishkraj07/Ecommerce_Flipkart" className='font-primaryMedium text-xl' style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;[Link]</a>
          </div>
              <div className="timeline-content">
              <div className='text-lg text-white'>Tech Stack:  Angular, SpringBoot, Java, Bootstrap, mySql, JSON Web Tokens (JWT), Rxjs, Typescript</div>
                            <p className='mt-3'>• Developed a highly scalable Flipkart clone app featuring debounce
                                  searching, OTP authentication using Twilio, JWT authorization, and secure
                                  payments by Razorpay . Incorporated load balancer and API gateway
                                  within microservices. <br /> <br />
                              • Created product catalog and shopping cart functionality, including the ability
                                  to remove products and adjust quantities.
                  </p>
              </div>
        </div>

        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
          <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>Snake Game </span> - <span className='text-xl'>February 2024</span> 
          <a href="https://snake-game-kanishk.vercel.app/" className='font-primaryMedium text-xl' style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;[Link]</a>
          </div>
              <div className="timeline-content">
              <div className='text-lg text-white'>Tech Stack: HTML5, CSS3, Javascript, DOM </div>
                        <p className='mt-3'>• Designed and deployed the classic snake game with a score board and all necessary dynamic gameplay mechanics. <br /> <br />
                        • Utilized RequestAnimationFrame for smooth animation rendering, ensuring an enjoyable gaming experience.
                  </p>
              </div>
        </div>
        
        <div className="mt-7 w-full lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
          <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>Others </span>
          </div>
              <div className="w-full timeline-content flex flex-col justify-center items-center">
                <div className='w-full flex justify-center items-center'>
                  <p className=''>Revenue Payouts Dashboard</p>
                  <a href="https://revenue-payout-dashboard.vercel.app/" className='font-primaryMedium text-xl' style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;[Link]</a>
                </div>

                <div className='w-full flex justify-center items-center'>
                  <p className=''>Money Transfer App</p> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  <a href="https://github.com/kanishkraj07/Money-Transfer-App" className='font-primaryMedium text-xl' style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;[Link]</a>
                </div>
                <div className='w-full flex justify-center items-center'>
                  <p className=''>Simon Say Game</p> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  <a href="https://simon-say-game-kanishk.vercel.app/" className='font-primaryMedium text-xl' style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;[Link]</a>
                </div>
          </div>
        </div>
        <div className='hidden lg:block absolute w-[22px] h-[2px] bg-white left-[49%] top-full'></div>
    </div>
    </section>
    </div>
  )
}
