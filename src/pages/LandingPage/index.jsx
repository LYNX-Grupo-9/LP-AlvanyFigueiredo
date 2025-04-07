import LogoAF from '../../assets/logo-af-branco.png';

export default function LandingPage() {



  return (
    <>
      <div>
        <div class="bg-[image:var(--home-background)] bg-cover bg-center h-screen">
          <header className='flex justify-between items-center px-48 h-1/6' >
            <img src={LogoAF} alt="Logo Alvany Figuereido na cor Branca" />
            <ul className='flex gap-8 text-white font-semibold'>
              <li className='text-xl cursor-pointer hover:opacity-80 duration-200'>HOME</li>
              <li className='text-xl cursor-pointer hover:opacity-80 duration-200'>SOBRE</li>
              <li className='text-xl cursor-pointer hover:opacity-80 duration-200'>ÁREAS DE ATUAÇÃO</li>
              <li className='text-xl cursor-pointer hover:opacity-80 duration-200'>CONTATO</li>
            </ul>
            <button className="bg-[var(--accent-yellow)] text-white font-semibold  py-3 px-8 rounded-full hover:py-4 duration-200">
              Agendar consulta
            </button>
          </header>

          <div className='px-74 flex items-center h-5/6'>
            <div >
              <h1 className='font-[font-family:--lexend-font)] text-white text-7xl font-medium'>
                Transformando <br /> desafios em soluções <br /> jurídicas.
              </h1>
              <p className='text-white text-xl font-normal mt-14'>
                Oferecendo estratégias personalizadas e expertise jurídica para <br />transformar obstáculos em oportunidades e garantir as melhores <br />soluções para você.
              </p>

              <button className="bg-[var(--accent-yellow)] text-white font-semibold  py-3 px-8 rounded-full hover:py-4 duration-200 mt-14">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}