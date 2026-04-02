import React from 'react'
import Container from '../Container'
import Image from '../Image'
import histories from '../../assets/histories.webp'

const History = () => {
    return (
        <section id='history'>
            <div className="py-[38px] commonBg font-roboto">
                <Container>
                    {/* parent div */}
                    <div className="flex flex-col lg:flex-row justify-between gap-y-10 gap-x-[98px] items-center">
                        {/* left side */}
                        <div className="left">
                            <Image imgSrc={histories} className={'w-full'}/>
                        </div>
                        {/* right side */}
                        <div className="right lg:w-[436px]">
                            {/* 1 */}
                            <div className="one">
                                <h3 className='text-white text-[30px] lg:text-[44px] font-bold'>Our Company History</h3>
                                <p className='text-sm text-white pt-[18px]'>Founded with a simple mission to provide honest and reliable plumbing services, we have grown into a highly trusted local business. Over the years, our dedication to quality workmanship and customer satisfaction has helped us build a strong reputation in the community.</p>
                            </div>
                            {/* 2 */}
                            <div className="two mt-10">
                                <h3 className='text-white text-[25px] lg:text-[30px] font-light'>Trust Our Team of Experts</h3>
                                <p className='text-sm text-white pt-3.5'>Our team consists of highly trained, licensed, and insured plumbing professionals who are passionate about their craft. With rigorous training and years of hands-on experience, we guarantee that every project is handled with the utmost precision, safety, and care.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div> 
        </section>
    )
}

export default History