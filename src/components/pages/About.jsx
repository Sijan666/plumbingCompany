import React from 'react'
import Container from '../Container'
import Testimonial from '../layouts/Testimonial'
import RecentWorks from '../layouts/RecentWorks'

const About = () => {
    return (
        <>
        <section id='about'>
            <div className="font-roboto pb-10">
                <div className="bg-[url('/src/assets/About.png')] pt-[126px] pb-12 bg-center bg-cover bg-no-repeat">
                    <Container>
                        <h3 className='uppercase text-[35px] lg:text-[44px] font-black text-white text-center lg:text-left'>About us</h3>
                        <p className='pt-3.5 text-white text-sm lg:w-[432px] text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </Container>
                </div>
                <div className="mt-[42px]">
                    <Container>
                        <h3 className='text-[#0E0E0E] uppercase text-[30px] font-medium'>Plumber Points Company</h3>
                        <p className='pt-6 text-base text-[#6D6D6D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen+ book. </p>
                        <p className='py-6 text-base text-[#6D6D6D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>
                        <p className='text-base text-[#6D6D6D]'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="works mt-[58px]">
                            <div className="flex flex-wrap gap-7 justify-between items-center">
                                {/* 1 */}
                                <div className="one">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Residental Service</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="two">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Residental Service</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="three">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Commercial Service</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 4 */}
                                <div className="four">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Commercial Service</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 5 */}
                                <div className="five">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Maintenance</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 6 */}
                                <div className="six">
                                    <div className="flex gap-x-2.5">
                                        <div className="bg-white h-[15px] w-[15px] rounded-full border-3 border-[#DD3142]"></div>
                                        <div className="right lg:w-[450px]">
                                            <h4 className='text-sm text-black font-medium'>Maintenance</h4>
                                            <p className='pt-2.5 text-base text-[#6D6D6D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
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