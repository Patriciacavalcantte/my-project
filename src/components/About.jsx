import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32'>

    <div className='max-w-[1240px] mx-auto'>
      <div className='text-center'>
      <h2 className='text-4xl font-bold'>Qual a primeira linguagem de programação para iniciantes?</h2>
      <p className='text-2xl py-6 text-gray-500'>Segundo o IEEE Computer Society, todo programador precisa saber uma linguagem de sistemas (C ou C++), linguagem orientada a objetos (Python ou Java) e uma linguagem de script (JavaScript).</p>
      </div>
    <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
      <div className='border py-8 rounded-xl shadow-xl'>
       <p className='text-6xl font-bold text-indigo-600'>100%</p>
       <p className='text-gray-400 mt-2'>Avaliação</p>
      </div>

      <div className='border py-8 rounded-xl shadow-xl'>
       <p className='text-6xl font-bold text-indigo-600'>24/7</p>
       <p className='text-gray-400 mt-2'>Disponível</p>
      </div>

      <div className='border py-8 rounded-xl shadow-xl'>
       <p className='text-6xl font-bold text-indigo-600'>100k</p>
       <p className='text-gray-400 mt-2'>Alunos</p>
      </div>
    </div>
    </div>
      
      </div>
  )
}

export default About