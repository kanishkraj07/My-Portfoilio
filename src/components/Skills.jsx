import React from 'react'
import { BorderBeam } from './magicui/border-beam';
import DetailsBox from './ui/DetailsBox';
import { SKILLS_LIST } from '../utils';
import ShineBorder from './magicui/shine-border';

export default function Skills() {
  return (
      <section className='flex flex-col justify-center gap-5'>
        <h1 className='text-center text-4xl font-primaryMedium text-white'>Skills</h1>
        <ShineBorder className='relative p-5 flex flex-wrap gap-5 bg-black items-center justify-center overflow-hidden rounded-lg'  color="white">
          {SKILLS_LIST.map(skill => <DetailsBox name={skill.name} icon={skill.icon} />)}
          {/* <BorderBeam colorFrom='white' colorTo='white' duration={12} delay={9}/> */}
        </ShineBorder>
    </section>
  )
}
