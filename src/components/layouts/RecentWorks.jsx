import React from 'react'
import Container from '../Container'
import Image from '../Image'
import w1 from '../../assets/w1.png'
import w2 from '../../assets/w2.png'
import w3 from '../../assets/w3.png'

const RecentWorks = () => {
    return (
        <>
        <section id='recentWorks'>
            <div className="pt-[67px] pb-12.5 font-roboto">
                <Container>
                    <h3 className='text-[30px] font-medium text-[#0E0E0E] uppercase'>our recent blogs</h3>
                    <div className="mt-11">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-[90px]">
                            {/* 1 */}
                            <div className="one">
                                {/* img */}
                                <Image imgSrc={w1} className={'w-full'}/>
                                {/* children div */}
                                <div className="mt-[17px]">
                                    <h4 className='text-[20px] text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting. </h4>
                                    <p className='text-[12px] py-3 text-black'>Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....</p>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="two">
                                <Image imgSrc={w2} className={'w-full'}/>
                                <div className="mt-[17px]">
                                    <h4 className='text-[20px] text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting. </h4>
                                    <p className='text-[12px] py-3 text-black'>Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....</p>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="three">
                                <Image imgSrc={w3} className={'w-full'}/>
                                <div className="mt-[17px]">
                                    <h4 className='text-[20px] text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting. </h4>
                                    <p className='text-[12px] py-3 text-black'>Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default RecentWorks