import React from 'react'
import DetailsBox from './ui/DetailsBox';
import { SKILLS_LIST } from '../utils';
import ShineBorder from './magicui/shine-border';

export default function Skills() {
  return (
      <section className='flex flex-col justify-center gap-5'>
        <h1 className='text-center text-4xl font-primaryMedium text-white'>Skills</h1>
        <ShineBorder className='w-full h-fit relative p-7 bg-black rounded-lg'  color="white">
          <div className='w-full h-fit relative flex flex-wrap gap-5 bg-black items-center justify-center rounded-lg'>
              {SKILLS_LIST.map(skill => <DetailsBox name={skill.name} icon={skill.icon} />)}
          </div>
        </ShineBorder>
    </section>
  )
}
