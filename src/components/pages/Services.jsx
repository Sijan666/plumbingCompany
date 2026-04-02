import React from 'react'
import Container from '../Container'
import ServiceCommon from '../ServiceCommon'
import { servicesApi } from '../data/servicesApi'
import Testimonial from '../layouts/Testimonial'
import RecentWorks from '../layouts/RecentWorks'

const Services = () => {
    return (
        <>
        <section id='services'>
            <div className="font-roboto pb-10">
                <div className="bg-[url('/src/assets/About.webp')] pt-[126px] pb-12 bg-center bg-cover bg-no-repeat">
                    <Container>
                        <h3 className='uppercase text-[35px] lg:text-[44px] font-black text-white text-center lg:text-left'>Services</h3>
                        <p className='pt-3.5 text-white text-sm lg:w-[432px] text-center lg:text-left'>Explore our comprehensive range of plumbing services designed to meet all your residential and commercial needs. From routine maintenance to complex installations and emergency repairs, our certified experts deliver fast, reliable, and high-quality solutions you can count on.</p>
                    </Container>
                </div>
                <div className="mt-15">
                    <Container>
                        <div className="text-center">
                            <h4 className='text-[#0E0E0E] font-medium text-[30px] uppercase'>Our Services</h4>
                            <p className='text-base text-[#6D6D6D] leading-[133.5%] pt-[15px] lg:px-55'>We provide a wide range of professional plumbing services tailored to meet your specific needs. From minor repairs to large-scale installations, our expert team is committed to delivering efficient and reliable solutions for both residential and commercial properties.</p>
                        </div>
                    </Container>
                </div>
                <div className="services mt-[46px]">
                    <Container>
                        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                            {servicesApi.map((item)=>(
                                <div key={item.id}>
                                    <ServiceCommon
                                        serviceImg={item.serviceImg}
                                        serviceName={item.serviceName}
                                        serviceDesc={item.serviceDesc}
                                    />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
                {/* testimony */}
                <div className="testimony mt-15">
                    <Testimonial/>
                </div>
                {/* recentWork */}
                <div className="testimony mt-15">
                    <RecentWorks/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services