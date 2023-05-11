import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Investimento em Ações',
    description:
    'Cursoss para quem quer investir em ações da forma correta',
    link: 'Saiba mais',

  },
  {
    name: 'Valuation',
    description:
    'Cursos para quem quer desenvolver a prática de avaliar empresas',
    link: 'Saiba mais',
    
  },
  {
    name: 'Economia',
    description:
    'Cursos para quem quer desenvolver a capacidade de analisar qualquer cenário macroeconômico',
    link: 'Saiba mais',
    
  },
  {
    name: 'Consultoria',
    description:
    'Serviço especializado para quem requer a atenção especial de um profissinal na hora de investir',
    link: 'Saiba mais',
    
  },
]


const Services = () => {
  return ( 
    <section 
    className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image (que esta no 1g:bg-services) */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden" 
          whileInView={'show'}
          viewport={{ once:false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom
          bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Nosso trabalho</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Veja alguns de
            nossos serviços desenvolvidos
            </h3>
            <button className='btn btn-sm'>Conheça a Mineiro</button>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden" 
          whileInView={'show'}
          viewport={{ once:false, amount: 0.3 }}
          className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service; 
                return (
                  <div className='border-b border-white/20
                  h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider
                      font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary
                      leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='https://ge.globo.com/' 
                      className='btn w-9 h-9 mb-[42px] flex 
                      justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='https://ge.globo.com/' 
                      className='text-gradient text-sm'>
                        {link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
