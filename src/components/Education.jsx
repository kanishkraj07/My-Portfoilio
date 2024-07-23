import React from 'react'

export default function Education() {
  return (
    <div>
          <section className="education" id="education" >
            <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Education</h1>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                  <div className="timeline-date">(2017-2021)</div>
                    <div className="timeline-content">
                      <h3>BVRIT</h3>
                      <p>Electronics and communication engineering-90%</p>
                    </div>     
                </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">(2015-2017)</div>
                <div className="timeline-content">
                  <h3>Svs(MPC)</h3>
                  <p>95%</p>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}
