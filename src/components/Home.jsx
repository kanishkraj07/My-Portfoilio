import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import mypic from './mypic.jpg';
import Skills from './Skills';
import Projects from './Projects';
import { Link as ScrollLink, Element } from 'react-scroll';
import Experience from './Experience';
import Education from './Education';
import { Github, Linkedin, Menu as MenuIcon, Twitter } from 'lucide-react';
import ShimmerButton from './magicui/shimmer-button';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { faL } from '@fortawesome/free-solid-svg-icons';
import Designs from './Designs';
import '../App.css';


export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
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

  return (<div className='w-full pb-10'>
  <nav className="w-full fixed h-[4em] top-0 bg-black border-b border-b-[#1f1f1f] p-5 z-[9999]">
        <div className='grid grid-cols-12 text-white'>
          <div className='col-span-2'>
            <a className='text-xl font-primaryMedium'><b>Portfolio</b></a>
          </div>
          <div className="hidden col-span-10 sm:flex items-center justify-center gap-10 place-self-end pr-5">
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to="home-section"  activeClassName='active' spy={true} smooth={true} duration={500} offset={-100}><b>Home</b></ScrollLink>
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to="skills-section" activeClassName='active' spy={true} smooth={true} duration={500} offset={-100} >Skills</ScrollLink>
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to="designs-section" activeClassName='active' spy={true} smooth={true} duration={500} offset={-100} >Designs</ScrollLink>
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to='experi-section' activeClassName='active' spy={true} smooth={true} duration={500} offset={-100}>Experience</ScrollLink>
            <ScrollLink className='text-base text-white cursor-pointer font-light hover:text-primary-blue' to='projects-section' activeClassName='active' spy={true} smooth={true} duration={500} offset={-100}>Projects</ScrollLink>
          </div>
          <div className='reltive col-span-10 cursor-pointer sm:hidden justify-self-end self-center'>
            <button  onClick={() => setOpenMenu(!openMenu)}><MenuIcon /></button>

            {
              openMenu && <div className='bg-[#282828] divide-y divide-[rgba(255,255,255,0.3)] absolute top-[80%] right-[2em] flex flex-col rounded-lg'>
               <div className='p-2 px-9 text-center rounded-lg rounded-br-none rounded-bl-none hover:bg-[#424242]'> <ScrollLink className='text-base  text-[#e9e9e9] cursor-pointer font-light ' to="home-section" smooth={true} duration={500} offset={-100}><b>Home</b></ScrollLink></div>
               <div className='p-2 px-9 text-center  hover:bg-[#424242]'> <ScrollLink className='text-base text-[#e9e9e9] cursor-pointer font-light ' to="skills-section" smooth={true} duration={500} offset={-100}><b>Skills</b></ScrollLink></div>
               <div className='p-2 px-9 text-center  hover:bg-[#424242]'> <ScrollLink className='text-base text-[#e9e9e9] cursor-pointer font-light ' to="designs-section" smooth={true} duration={500} offset={-100}><b>Designs</b></ScrollLink></div>
               <div className='p-2 px-9 text-center  hover:bg-[#424242]'> <ScrollLink className='text-base text-[#e9e9e9] cursor-pointer font-light ' to="experi-section" smooth={true} duration={500} offset={-100}><b>Experience</b></ScrollLink></div>
               <div className='p-2 px-9 text-center rounded-lg rounded-tl-none rounded-tr-none hover:bg-[#424242]'> <ScrollLink className='text-base text-[#e9e9e9] cursor-pointer font-light ' to="projects-section" smooth={true} duration={500} offset={-100}><b>Projects</b></ScrollLink></div>
              </div>
            }
          </div>
        </div>
  </nav>
  <Element name="home-section" className='grid grid-cols-1 w-full h-screen gap-7 px-5 place-items-center'>
      <div className="w-full h-full flex flex-col-reverse lg:px-10 lg:flex-row justify-center items-center gap-5 lg:gap-10">
        <div className='leading-7 flex flex-col'>
          <div className='text-white text-2xl'>Hi, it's</div>
          <div className='text-5xl text-primary-blue mt-1 font-primaryMedium'>Kanishk Mogalraj</div>
          
          <h3 className='text-white text-2xl mt-2'>I'm a <span className="text text-white font-primaryMedium">Full Stack Engineer</span></h3>
          <div className='text-white text-md mt-5'>
            <span className='break-words'>I'm a tech enthusiast, and my toolkit includes
            vibrant front-end technologies like React, Typescript,
            Javascript, and Tailwind CSS, <br className='hidden lg:block' /> paired with the
            solid back-end combo of Express.js and Node.js
            </span>
          </div>

          <div className='flex justify-start items-start gap-3 mt-5'>
            <a className='text-white border-2 border-[#1f1f1f] rounded-full size-14 flex justify-center items-center hover:border-slate-300' href="https://www.linkedin.com/in/kanishk777/" target='_blank' >
              <Linkedin size={25} strokeWidth='1px' fill='white' />
            </a>
            <a href="https://github.com/kanishkraj07" target='_blank' className='text-white border-2 border-[#1f1f1f] hover:border-slate-300 rounded-full size-14 flex justify-center items-center' >
              <Github size={25} strokeWidth='1px' fill='white' />
            </a>
          
            <a href="https://x.com/raj_kanishk_" target='_blank' className='text-white border-2 border-[#1f1f1f] rounded-full hover:border-slate-300 size-14 flex justify-center items-center' >
              <Twitter size={25} strokeWidth='1px' fill='white' />
            </a>

            <a href="Kanishk_Mogalraj_Resume.pdf" download="Kanishk Mogalraj Resume'"><ShimmerButton shimmerSize={'0.09em'} className='py-5'><span className='font-primaryMedium leading-none tracking-tight'>Checkout Resume</span></ShimmerButton></a>
        </div>
      </div>
      <img className='size-80 border-2 object-cover rounded-full' src={mypic} alt="kanishk Image"/>
    </div>
  </Element>

<div className='px-10 mt-5 md:mt-0'>
  <Element name="skills-section"><Skills /></Element>
  <Element name='designs-section'><Designs /></Element>
  <Education />
  <Element name='experi-section' ><Experience/></Element>
  <Element name='projects-section'><Projects/></Element>
</div>
</div>
  );
}
