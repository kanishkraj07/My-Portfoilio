import React, { useEffect } from 'react';
import Typed from 'typed.js';
import mypic from './mypic.jpg';
import Skills from './Skills';
import Projects from './Projects';
import { Link as ScrollLink, Element } from 'react-scroll';
import Experience from './Experience';
import Education from './Education';
import { BluetoothIcon, Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import ShimmerButton from './magicui/shimmer-button';


export default function Home() {
  // useEffect(() => {
  //   const typed = new Typed(".text", {
  //     strings: ["Software Engineer 2", "Fullstack Engineer"],
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 1000,
  //     loop: true
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (<div className='w-full'>
  <nav className="w-full fixed h-[4em] top-0 bg-[rgba(0,0,0,0.9)] border-b border-b-[#1f1f1f] p-5 z-[9999]">
        <div className='grid grid-cols-2 text-white'>
          <div>
            <a className='text-xl font-primaryMedium'><b>Portfolio</b></a>
          </div>
          <div className="flex items-center justify-center gap-10">
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to="home-section" smooth={true} duration={500} offset={0}><b>Home</b></ScrollLink>
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to="skills-section" smooth={true} duration={500} offset={650} >Skills</ScrollLink>
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to="experi-section" smooth={true} duration={500} offset={2050} >Experience</ScrollLink>
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to='designs-section' smooth={true} duration={500} offset={2550}>Designs</ScrollLink>
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to='projects-section' smooth={true} duration={500} offset={2550}>Projects</ScrollLink>
          </div>
        </div>
  </nav>
  <Element name="home-section" className='grid grid-cols-1 w-full h-screen gap-7 px-5'>
      <div className="w-full h-full flex justify-center items-center gap-10">
        <div className='leading-7 flex flex-col'>
          <div className='text-white text-2xl'>Hi, it's</div>
          <div className='text-5xl text-primary-blue mt-1 font-primaryMedium'>Kanishk Mogalraj</div>
          
          <h3 className='text-white text-2xl mt-2'>I'm a <span className="text text-white font-primaryMedium">Full Stack Engineer</span></h3>
          <div className='text-white text-md mt-5'>
            <span>I'm a tech enthusiast, and my toolkit includes
            vibrant front-end technologies like React, Typescript,
            Javascript, and Tailwind CSS, <br /> paired with the
            solid back-end combo of Express.js and Node.js
            </span>
          </div>

          <div className='flex justify-start items-start gap-3 mt-5'>
            <a className='text-white border-2 border-[#1f1f1f] rounded-full size-14 flex justify-center items-center hover:border-slate-300' href="https://www.linkedin.com/in/kanishk777/">
              <Linkedin size={25} strokeWidth='1px' fill='white' />
            </a>
            <a href="https://github.com/kanishkraj07" className='text-white border-2 border-[#1f1f1f] hover:border-slate-300 rounded-full size-14 flex justify-center items-center' >
              <Github size={25} strokeWidth='1px' fill='white' />
            </a>
          
            <a href="https://x.com/raj_kanishk_" className='text-white border-2 border-[#1f1f1f] rounded-full hover:border-slate-300 size-14 flex justify-center items-center' >
              <Twitter size={25} strokeWidth='1px' fill='white' />
            </a>
            <ShimmerButton className='bg-slate-300'><span className='font-primaryMedium tracking-tight'>View & Download Resume</span></ShimmerButton>
        </div>
      </div>
      <img className='size-80 object-cover rounded-full' src={mypic} alt="kanishk Image"/>
    </div>
  </Element>

<div className='px-10'>
  <Element name="skills-section"><Skills /></Element>
  <Education />
  <Element name='experi-section' ><Experience/></Element>
  <Element name='designs-section'></Element>
  <Element name='projects-section'><Projects/></Element>
</div>
</div>
  );
}
