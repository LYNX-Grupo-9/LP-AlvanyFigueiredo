import LogoAF from '../../assets/logo-af-branco.png';
import AlvanyMobile from '../../assets/alvany-mobile.png';
import AlvanyDesktop from '../../assets/alvany-desktop.png';
import MenuHamburguerImage from '../../assets/menu-hamburguer.png';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Form } from '../../components/Form';



export default function LandingPage() {


  const [isOpen, setIsOpen] = useState(false);


  function changeMenuState() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div>

        <div onClick={changeMenuState} className={`w-2/4 bg-black opacity-20 h-screen fixed transition-all duration-200 ease-in-out ${isOpen ? 'left-0' : 'left-[-100%]'} `}>
        </div>

        <div className={`w-2/3 bg-white h-screen fixed transition-all duration-200 ease-in-out translate-x-full  ${isOpen ? 'left-[-33%]' : 'left-full'}`}>
          <div className='w-full flex justify-end'> <X className='m-5 ' size={28} onClick={changeMenuState} /> </div>
          <ul className='w-full flex flex-col gap-4 px-10 font-semibold text-lg'>
            <li >HOME</li>
            <li >SOBRE</li>
            <li >ÁREAS DE ATUAÇÃO</li>
            <li >CONTATO</li>
          </ul>
          <div className='px-10'>
            <button className='block px-4 py-2 mt-6 rounded-full bg-[color:var(--accent-yellow)] text-base
             text-white hover:bg-[color:#e49124]' >
              Agendar consulta
            </button>
          </div>
        </div>


        <section className='bg-[image:var(--home-background)] bg-cover bg-center h-screen'>
          <header className='w-screen h-1/6 flex items-center justify-between py-5 px-7 xl:px-16 2xl:px-24 3xl:px-32'>
            <img src={LogoAF} alt="Logo Alvany Figuereido na cor Branca" className='w-16 sm:w-24 2xl:w-28 3xl:w-32' />

            <ul className='hidden xl:flex gap-3 text-white font-semibold text-md 2xl:text-lg 3xl:text-xl 3xl:gap-5'>
              <li className='cursor-pointer hover:opacity-80 duration-200'>HOME</li>
              <li className='cursor-pointer hover:opacity-80 duration-200'>SOBRE</li>
              <li className='cursor-pointer hover:opacity-80 duration-200'>ÁREAS DE ATUAÇÃO</li>
              <li className='cursor-pointer hover:opacity-80 duration-200'>CONTATO</li>
            </ul>

            <button className='hidden xl:block px-6 py-2 mt-6 rounded-full bg-[color:var(--accent-yellow)]
             text-white hover:bg-[color:#e49124] xl:px-8 2xl:text-lg 3xl:text-xl' >
              Agendar consulta
            </button>

            <div className='xl:hidden'>
              <button onClick={changeMenuState}>
                <img src={MenuHamburguerImage} alt="Botão de Menu Hamburguer" className='w-8 sm:w-10' />
              </button>
            </div>
          </header>

          <div className='h-5/6 flex flex-col justify-center sm:items-start '>
            <div className='text-white px-12 flex flex-col sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52 3xl:px-72'>
              <h1 className='font-medium text-2xl sm:text-3xl lg:text-5xl sm:w-2/3 xl:w-1/2 2xl:text-6xl 3xl:text-7xl'>
                Transformando desafios em soluções jurídicas.
              </h1>

              <p className='text-xs font-medium mt-6 sm:text-sm lg:text-xl sm:w-2/3 3xl:text-2xl'>
                Oferecendo estratégias personalizadas e expertise jurídica para transformar obstáculos em oportunidades e garantir as melhores soluções para você.
              </p>

              <button className='px-6 py-2 mt-6 text-sm rounded-full bg-[color:var(--accent-yellow)] hover:bg-[color:#e49124] 
              self-start max-sm:self-center xl:px-8 2xl:text-lg 3xl-text-xl'>
                Agendar consulta
              </button>
            </div>
          </div>
        </section>

        <section className='h-fit'>
          <div className='flex flex-col  xl:flex-row'>
            <img src={AlvanyMobile} alt="" className='w-full xl:hidden' />
            <img src={AlvanyDesktop} alt="" className='h-screen hidden xl:block' />
            <div className='px-12 py-6 flex flex-col gap-8 xl:justify-center xl:gap-20 2xl:gap-24 2xl:px-24 3xl:gap-28 3xl:px-32'>

              <div>
                <h1 className='font-bold text-[color:var(--primary-blue)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl 3xl:text-[40px]'>Sobre</h1>
                <p className='text-xs text-justify mt-2 sm:text-sm lg:text-lg xl:text-xl 3xl:text-2xl'>
                  Dr. Alvany Figueiredo é graduado em Direito pela Universidade de São Paulo (USP),
                  onde também completou sua especialização em Direito Tributário. Ele é um defensor
                  da educação contínua, tendo participado de diversos cursos e workshops relevantes
                  ao longo de sua carreira.
                </p>
              </div>

              <div>
                <h1 className='font-bold text-[color:var(--primary-blue)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl 3xl:text-[40px]'>Experiência Profissional</h1>
                <p className='text-xs text-justify mt-2 sm:text-sm lg:text-lg xl:text-xl 3xl:text-2xl'>
                  Com mais de 15 anos de experiência na área jurídica, Dr. Alvany atuou em renomados
                  escritórios de advocacia e prestou consultoria a empresas de grande porte. Sua vasta
                  experiência inclui a representação de clientes em casos complexos, com um histórico
                  de sucesso em litígios e negociação de contratos.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[var(--primary-blue)] to-[var(--muted-blue)] w-full h-fit">
          <h1 className='font-bold text-center text-white text-3xl pt-6'>Entre em contato</h1>
          <Form />
        </section>
      </div>
    </>
  );
} 