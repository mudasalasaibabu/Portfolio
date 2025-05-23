import { Swiper, SwiperSlide } from 'swiper/react'; 
import { certificates } from '../lib/data'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const CertificatesCarousel = () => {
  return (
    <section
      className="py-20 px-6 md:px-12 relative section-highlight"
      style={{ backgroundColor: '#0c0d12' }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold font-poppins mb-4"
            style={{ color: '#6961ff' }}  // 👈 applied the custom color here
          >
            Certificates/Certifications
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <div className="rounded-xl overflow-hidden shadow-2xl transition-all hover:shadow-3xl flex justify-center items-center p-4 bg-gray-900">
                <img
                  src={certificate.image}
                  alt={`Certificate ${certificate.id}`}
                  className="w-full max-w-3xl h-[450px] object-contain rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CertificatesCarousel;