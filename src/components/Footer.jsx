import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Nossos cursos</h6>
                <ul>
                    <li className='py-1'>UX/UI</li>
                    <li className='py-1'>React.JS</li>
                    <li className='py-1'>Node.JS</li>
                    <li className='py-1'>PHP</li>
                    <li className='py-1'>AWS</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Investimento</li>
                    <li className='py-1'>Documentação</li>
                    <li className='py-1'>Guias</li>
                </ul>
            </div>
          
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Se inscreva para receber spam</p>
                <p className='py-4'>Vamos encher a sua caixa de entrada de spam!</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Enter</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Design by Figmaresource.com, LLC. Alguns direitos reservados | codado com &#10084; por <a href="http://www.patriciacavalcante.tech">Patrícia Cavalcante</a></p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
           <a href="https://github.com/Patriciacavalcantte">< FaGithub /> </a> 
        </div>
        </div>
    </div>
  )
}

export default Footer