
import Container from '../Container';
import { testimoni } from '../data/testimonialApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    return (
        <>
            <section id='testimonial'>
                <div className="bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/src/assets/reviews.png')] bg-center bg-cover bg-no-repeat pt-[45px] pb-9">
                    <Container>
                        <div className="text-center font-roboto">
                            <h3 className='text-white text-[30px]'>Testimonial</h3>
                            
                            {/* Swiper Container */}
                            <div className="pt-10">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    loop={true}
                                    className="pb-10">
                                    {testimoni.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="lg:px-25 ">
                                                <p className='text-[18px] md:text-[20px] text-white opacity-90 italic'>
                                                    {item.review}
                                                </p>
                                                <h4 className='text-[20px] text-white font-bold pt-5'>
                                                    {item.name}
                                                </h4>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Testimonial;