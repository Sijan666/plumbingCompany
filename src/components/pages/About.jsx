import React from 'react'
import Container from '../Container'
import Testimonial from '../layouts/Testimonial'
import RecentWorks from '../layouts/RecentWorks'
import { Helmet } from 'react-helmet-async'

const About = () => {
    return (
        <>
        <Helmet>
            <title>About Us - FB Harris Plumbing and Heating</title>
            <meta name="description" content="Learn more about FB Harris Plumbing and Heating Company. We provide top-tier residential and commercial plumbing solutions with honesty, integrity, and expertise." />
        </Helmet>
        <section id='about'>
            <div className="font-roboto pb-10">
                <div className="bg-[url('/src/assets/About.webp')] pt-[126px] pb-12 bg-center bg-cover bg-no-repeat">
                    <Container>
                        <h3 className='uppercase text-[35px] lg:text-[44px] font-black text-white text-center lg:text-left'>About us</h3>
                        <p className='pt-3.5 text-white text-sm lg:w-[432px] text-center lg:text-left'>Welcome to FB Harris Plumbing and Heating , where expertise meets reliability. We understand that plumbing issues can disrupt your daily life, which is why our certified technicians are dedicated to providing prompt and professional service. From routine maintenance to complex installations, we handle every project with care, using modern techniques and high-quality materials to guarantee excellent results.</p>
                    </Container>
                </div>
                <div className="mt-[42px]">
                    <Container>
                        <h3 className='text-[#0E0E0E] uppercase text-[30px] font-medium'>FB Harris Plumbing and Heating Company</h3>
                        <p className='pt-6 text-base text-[#6D6D6D]'>At FB Harris Plumbing and Heating Company, we are dedicated to providing top-tier plumbing solutions that ensure the safety, comfort, and functionality of your everyday spaces. Founded on the core principles of honesty, integrity, and hard work, we have proudly grown into a trusted and reliable name in the local plumbing industry.</p>
                        <p className='py-6 text-base text-[#6D6D6D]'>Our team of certified and highly experienced professionals is fully equipped to handle a diverse range of plumbing challenges. Whether it is a complex commercial pipe installation, an urgent midnight emergency repair, or routine residential maintenance, we bring unmatched precision and expertise to every single project.</p>
                        <p className='text-base text-[#6D6D6D]'>We believe that exceptional service goes far beyond simply fixing pipes; it is about building lasting relationships with our clients based on trust. By utilizing the latest industry technology and modern best practices, we guarantee efficient, cost-effective, and durable results that give you complete peace of mind.</p>
                        <div className="works mt-[58px]">
                            <div className="flex flex-wrap gap-7 justify-between items-center">
                                {/* 1 */}
                                <div className="one">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Residential Service</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Expert plumbing solutions tailored for your home. From fixing leaky faucets to complete bathroom installations, we ensure your household water systems are safe and efficient.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="two">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Commercial Service</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Reliable plumbing infrastructure designed for modern businesses. We offer scalable solutions and heavy-duty installations to keep your daily operations running without interruption.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="three">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Routine Maintenance</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Proactive plumbing care to prevent costly emergencies. Our comprehensive routine inspections help identify minor issues before they turn into major water damage.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 4 */}
                                <div className="four">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Emergency Repairs</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Fast and dependable home plumbing repairs exactly when you need them. Our certified technicians arrive promptly to resolve clogs, pipe bursts, and water heater failures safely.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 5 */}
                                <div className="five">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Industrial Plumbing</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Specialized plumbing management for commercial properties. We handle complex pipe networks, grease traps, and industrial-grade fixtures with minimal downtime for your business.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 6 */}
                                <div className="six">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Maintenance</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Save money on utility bills with our efficiency tune-ups. Regular servicing ensures your water heaters and pipes operate at peak performance, extending their overall lifespan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* testimony */}
                        <div className="testimony mt-15">
                            <Testimonial/>
                        </div>
                        {/* recentWork */}
                        <div className="testimony mt-15">
                            <RecentWorks/>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
        </>
    )
}

export default About