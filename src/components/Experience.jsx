import React from 'react'

export default function Experience() {
  return (
    <div>
        <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Experience</h1>
        <div className="timeline-items before:h-10 lg:before:h-full">
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
            <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>VERTAFORE</span> <span className='text-xl'>- Software Engineer II (March 2024 - Present)</span> 
            </div>
              <div className="timeline-content">
                <p>Part of the Platforms - Carriers, Agents and Agencies <br />
                    <p className='pl-5 mt-2'>• Developed a language preference feature , enabling agents and
                    agencies to share their preferred languages with carriers, enhancing
                    multilingual communication using Angular17 and SpringBoot Java. <br /> <br />
                    • Implemented configuration rules to restrict agents and agencies
                    from sharing language preferences resulted in allowing carriers to
                    manage data sharing and enhance security via permission controls <br /> <br /> <span className='text-lg'>Technologies used: Angular 17, SpringBoot</span>
                    </p>
                  </p>
              </div> 
        </div>
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
          <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>VERTAFORE</span> <span className='text-xl'>- Software Engineer I (Sept 2022 - Mar 2024)</span> 
            </div>
            <div className="timeline-content">
                                            <p className="mt-2">
                                            • Designed and developed a reusable, responsive multiple file upload
                        feature with full ownership from concept to implementation, which
                        supports various file MIME types, allowing users to share 10
                        documents at a time, and triggers in-app notifications and emails
                        across platforms, resulting in significant user time and effort savings. <br /> <br />
                        • Revamped the entire dashboard page by adding a quick search
                        feature from scratch to capture all carrier activities in one view. <br /> <br />
                        • Upgraded the documents page UI to reduce latency by 70% ,
                        facilitating more efficient document review for carriers. <br /> <br />
                        • Provided comprehensive guidance and mentoring to trainees and
                        actively engaged in code reviews to improve code quality. <br /> <br />
                        • Refactored APIs from promises to RxJS observables and JavaScript
                        files to TypeScript, enhanced UI pages, created dynamic components
                        for reuse, and maintained 95% code coverage on unit tests, which
                        improved application performance, maintainability, and robustness. <br /> <br />
                        <span className='text-lg'>Technologies used: Angular, React, Node.js, SpringBoot</span>
                    </p>
              </div> 
        </div>
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
          <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>&nbsp; &nbsp; &nbsp; &nbsp; SEARS HOLDINGS </span> <span className='text-xl'>- Software Engineer Trainee &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; (Apr 2021 – Apr 2022)</span> 
            </div>
            <div className="timeline-content">
                                            <p className="mt-2">
                                            • Proficiently collaborated with the senior development team on an enterprise e-commerce website, contributed to features, resolved bugs, and fixed customer-reported triages, leading to significant improvements in web functionality.
<br /> <br /> <span className='text-lg'>Technologies used: React, Node.js </span>

                    </p>
              </div> 
        </div>
        <div className='hidden lg:block absolute w-[22px] h-[2px] bg-white left-[49%] top-full'></div>
    </div>
  </div>
  )
}
