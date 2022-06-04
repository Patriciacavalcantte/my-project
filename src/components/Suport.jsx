import React from 'react'
import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import supportImg from '../assets/support.jpg'

const Suport = () => {
  return (
    <div className='w-full h-screen mt-24'>
      <div className='w-full h[700px] bg-gray-900/90 absolute'>
     <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="Pessoas com headphones" />
     </div>
{/* INÍCIO DOS CARDS!*/}
          <div className='max-w-[1240px] mx-auto text-white relative'>
            <div>
            <h2 className='pt-8 text-3xl text-slate-300 uppercase text-center'>Suporte</h2>
            <h3 className='text-5xl font-bold tpy-6 text-center'>Escolha seu curso</h3>
            <p className='py-4 text-2xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse asperiores tempore distinctio eius aperiam cum debitis ipsum quia quis quos.</p>
            </div>
          </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                  <ChipIcon className='w-16 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                  <h3 className='font-bold tex-xl my-6'>Suporte</h3>
                  <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, omnis aperiam! Dolorum, ut. Reprehenderit pariatur ab omnis blanditiis labore similique laborum aliquid nulla quibusdam eligendi, eum explicabo. Sit, reprehenderit illo?</p>
                </div>
                <div className='bg-slate-100 pl-8 py-4 '>
                  <p className='flex items-center text-indigo-600'>Contato < ArrowRightIcon className='w-5 ml-2' />  </p> </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                  <SupportIcon className='w-16 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                  <h3 className='font-bold tex-xl my-6'>Atendimento</h3>
                  <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, omnis aperiam! Dolorum, ut. Reprehenderit pariatur ab omnis blanditiis labore similique laborum aliquid nulla quibusdam eligendi, eum explicabo. Sit, reprehenderit illo?</p>
                </div>
                <div className='bg-slate-100 pl-8 py-4 '>
                  <p className='flex items-center text-indigo-600'>Contato < ArrowRightIcon className='w-5 ml-2' />  </p> </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                  <PhoneIcon className='w-16 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                  <h3 className='font-bold tex-xl my-6'>Atendimento</h3>
                  <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, omnis aperiam! Dolorum, ut. Reprehenderit pariatur ab omnis blanditiis labore similique laborum aliquid nulla quibusdam eligendi, eum explicabo. Sit, reprehenderit illo?</p>
                </div>
                <div className='bg-slate-100 pl-8 py-4 '>
                  <p className='flex items-center text-indigo-600'>Contato < ArrowRightIcon className='w-5 ml-2' />  </p> </div>
              </div>
              
            </div>

            
    </div>
  )
}

export default Suport