// components/AreasAtuacaoCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const cards = [
  {
    title: 'Direito Previdenciário',
    image: 'src/assets/direito-previdenciario.svg',
  },
  {
    title: 'Sucessões',
    image: 'src/assets/sucessoes.svg',
  },
  {
    title: 'Direito de Família',
    image: 'src/assets/direito-familia.svg',
  },
  {
    title: 'Direito Previdenciário',
    image: 'src/assets/direito-previdenciario.svg',
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
      <h2 className="text-3xl font-bold mb-4 mt-[1%]">Áreas de atuação</h2>
      <div className="h-full flex items-center justify-center pt-10 2xl:pt-0">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={750}
          spaceBetween={20}
          slidesPerView={2.5}
          centeredSlides={true}
          style={{ paddingBottom: '40px' }}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <div className="relative w-full h-70 sm:h-[34rem]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="bg-black bg-opacity-50 text-white p-4 -mt-16 relative z-10">
                  <h3 className="text-[15px] xs:text-[15px] font-bold">{card.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
