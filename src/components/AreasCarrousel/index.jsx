// components/AreasAtuacaoCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cards = [
  {
    title: 'Direito Previdenciário',
    image: 'src/assets/direito-previdenciario.svg', // Substitua pelo caminho real da imagem
  },
  {
    title: 'Sucessões',
    image: 'src/assets/sucessoes.svg',
  },
  {
    title: 'Direito de Família',
    image: 'src/assets/direito-familia.svg',
  },
];

export default function AreasAtuacaoCarousel() {
  return (
    <section className="bg-blue-100 py-12 px-4 text-center 2xl:h-screen">
      <h2 className="text-3xl font-bold mb-4">Áreas de atuação</h2>
      <p className="text-gray-700 max-w-2xl mx-auto ">
        Especialidades jurídicas estruturadas para oferecer soluções personalizadas, assertivas e alinhadas às suas demandas, garantindo segurança e confiança em cada etapa do processo.
      </p>
      <div className='h-full flex items-center justify-center pt-10 2xl:pt-0'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '40px' }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <div className="relative w-full h-60 sm:h-100 ">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="bg-black bg-opacity-50 text-white p-4 -mt-16 relative z-10">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
