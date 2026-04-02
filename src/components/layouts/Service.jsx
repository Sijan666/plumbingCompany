import React from 'react'
import Container from '../Container'
import Image from '../Image'
import s1 from '../../assets/s1.webp'
import s2 from '../../assets/s2.webp'
import s3 from '../../assets/s3.webp'



const Service = () => {
    return (
        <section id='service'>
            <div className="commonBg font-roboto">
                <div className="pt-15 pb-8">
                    <Container>
                        <div className="flex justify-center flex-col lg:flex-row gap-y-10 gap-x-[45px] items-center">
                            {/* 1 */}
                            <div className="one text-center flex flex-col items-center">
                                <Image imgSrc={s1} className={'mx-auto w-[50px]'}/>
                                <h3 className='py-3 text-sm text-white font-medium'>Residental Service</h3>
                                <p className='text-white'>Expert plumbing solutions for your everyday home needs. From routine pipe repairs to complete installations, we ensure your household systems run smoothly and safely.</p>
                            </div>
                            {/* divider */}
                            <div className="lg:h-[225px] lg:w-px h-px w-full bg-white"></div>
                            {/* 2 */}
                            <div className="one text-center flex flex-col items-center">
                                <Image imgSrc={s2} className={'mx-auto w-[50px]'}/>
                                <h3 className='py-3 text-sm text-white font-medium'>Commercial Service</h3>
                                <p className='text-white'>Comprehensive plumbing services designed for modern businesses. We provide scalable and reliable solutions to minimize downtime and keep your operations flowing.</p>
                            </div>
                            {/* divider */}
                            <div className="lg:h-[225px] lg:w-px h-px w-full bg-white"></div>
                            {/* 3 */}
                            <div className="one text-center flex flex-col items-center">
                                <Image imgSrc={s3} className={'mx-auto w-[50px]'}/>
                                <h3 className='py-3 text-sm text-white font-medium'>Maintenance</h3>
                                <p className='text-white'>Proactive maintenance plans to protect your plumbing infrastructure. Regular inspections help prevent costly emergencies and extend the lifespan of your systems.</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Service