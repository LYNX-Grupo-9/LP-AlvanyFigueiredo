// components/AreasAtuacaoCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const cards = [
  {
    title: 'Direito Previdenciário',
    image: 'src/assets/1.png',
  },
  {
    title: 'Sucessões',
    image: 'src/assets/2.png',
  },
  {
    title: 'Direito de Família',
    image: 'src/assets/3.png',
  },
  {
    title: 'Direito Previdenciário',
    image: 'src/assets/1.png',
  },
  {
    title: 'Sucessões',
    image: 'src/assets/2.png',
  },
  {
    title: 'Direito de Família',
    image: 'src/assets/3.png',
  },
];

export default function AreasAtuacaoCarousel() {
  return (
    <section className="bg-white py-12 px-4 text-center 2xl:h-screen">
      <h2 className="text-3xl font-bold mb-4 mt-[1%]">Áreas de atuação</h2>
      <div className="h-full flex items-center justify-center pt-10 2xl:pt-0">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
            
          }}
          speed={760}
          spaceBetween={20}
          slidesPerView={2.5}
          centeredSlides={true}
          style={{ paddingBottom: '40px' }}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 1.5 },
            1280: { slidesPerView: 1.5 },
            1440: { slidesPerView: 1.5 },
            1920: { slidesPerView: 2.5 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden">
                <div className="relative w-full h-[20vh] sm:h-[34rem]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <div className="bg-opacity-50 text-white p-4 -mt-16 relative z-10">
                  <h3 className="text-[15px] xs:text-[15px] font-bold"></h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
