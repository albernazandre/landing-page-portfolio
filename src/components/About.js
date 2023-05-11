import React from 'react';
// countUp
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inview] = useInView({
    threshold: 0.5,
  });

  return (
    <section
    className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row
        lg:items-center lg:gap-x-20 h-screen mb-15'>
          {/* img */}
          <motion.div
           variants={fadeIn('right', 0.3)}
           initial="hidden" 
           whileInView={'show'}
           viewport={{ once:false, amount: 0.3 }}
           className='flex-1 bg-about bg-contain bg-no-repeat
           h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden" 
            whileInView={'show'}
            viewport={{ once:false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>Sobre</h2>
            <h3 className='h3 mb-4'>Há 3 anos ensinando pessoas normais
            a se tornarem investidores.</h3>
            <p className='mb-6'>
            Criação de conteúdo digital sobre economia e finanças, cursos
            de investimentos em ações e renda varíavel, consultorias de investimento
            particulares.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inview ? <CountUp start={0} end={10} duration={3} /> :
                  null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Anos de <br />
                  Experiência
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inview ? <CountUp start={0} end={13} duration={3} /> :
                  null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Alunos de <br />
                  Cursos
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inview ? <CountUp start={0} end={12} duration={3} /> :
                  null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Clientes <br />
                  Satisfeitos
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>
                Contate nosso
                time
              </button>
              <a href='#' className='text-gradient btn-link'>
                Cursos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );  
};

export default About;
