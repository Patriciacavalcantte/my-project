import React from 'react'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PapperAirplaneIcon,
  ServerIcon, 
} from '@heroicons/react/solid'
import bgImg from '../assets/cyber-bg.png'
export const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl'> Sequência única de produção</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
            <p className='text-2xl'>Essa é a tecnologia da nossa marca.</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get started</button>
          </div>
          <div>
          <img className='w-full' src={bgImg} alt="imagem de computador e cabos" />
          </div>
          <div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-l md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 borderborder-slate-300 rounded-xl text-center shadow-xl'>
            <p>Data Services</p>
            <div>
              <p> <CloudUploadIcon className='h-6' /> App Security</p>
              <p> <DatabaseIcon className='h-6' /> Dashboard Design</p>
              <p> <ServerIcon className='h-6'/> Cloud Data</p>
              </div>
            </div>
          </div>


      </div>
    </div>
  )
}
export default Hero