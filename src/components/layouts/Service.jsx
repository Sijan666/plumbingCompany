import React from 'react'
import Container from '../Container'
import Image from '../Image'
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import Button from '../Button'


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
                                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                <div className="btn mt-2">
                                    <Button btnText={'Learn More'} className={'bg-white rounded-[5px] text-black text-base px-[17px] py-1.5 underline'}/>
                                </div>
                            </div>
                            {/* divider */}
                            <div className="lg:h-[225px] lg:w-px h-px w-full bg-white"></div>
                            {/* 2 */}
                            <div className="one text-center flex flex-col items-center">
                                <Image imgSrc={s2} className={'mx-auto w-[50px]'}/>
                                <h3 className='py-3 text-sm text-white font-medium'>Commercial Service</h3>
                                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                <div className="btn mt-2">
                                    <Button btnText={'Learn More'} className={'bg-white rounded-[5px] text-black text-base px-[17px] py-1.5 underline'}/>
                                </div>
                            </div>
                            {/* divider */}
                            <div className="lg:h-[225px] lg:w-px h-px w-full bg-white"></div>
                            {/* 3 */}
                            <div className="one text-center flex flex-col items-center">
                                <Image imgSrc={s3} className={'mx-auto w-[50px]'}/>
                                <h3 className='py-3 text-sm text-white font-medium'>Maintenance</h3>
                                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                <div className="btn mt-2">
                                    <Button btnText={'Learn More'} className={'bg-white rounded-[5px] text-black text-base px-[17px] py-1.5 underline'}/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Service