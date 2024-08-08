import React from 'react'
import DetailsBox from './ui/DetailsBox';
import { SKILLS_LIST } from '../utils';
import ShineBorder from './magicui/shine-border';

export default function Skills() {
  return (
      <section className='flex flex-col justify-center gap-5'>
        <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Skills</h1>
         <div className="timeline-items before:h-10 justify-center">
         <div className="timeline-dot"></div>
         <ShineBorder className='w-full h-fit relative p-7 bg-black rounded-lg'  color="white">
          <div className='relative grid grid-cols-2 md:grid-cols-4 gap-2 lg:flex lg:flex-wrap bg-black items-center justify-center rounded-lg'>
              {SKILLS_LIST.map(skill => <DetailsBox name={skill.name} icon={skill.icon} />)}
          </div>
        </ShineBorder>
        </div>
    </section>
  )
}
