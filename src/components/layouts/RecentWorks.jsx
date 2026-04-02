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
                    <h3 className='text-[30px] font-medium text-[#0E0E0E] uppercase text-center lg:text-left'>our recent blogs</h3>
                    <div className="mt-11">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-between gap-15 lg:gap-[90px]">
                            {/* 1 */}
                            <div className="one">
                                {/* img */}
                                <Image imgSrc={w1} className={'w-full'}/>
                                {/* children div */}
                                <div className="mt-[17px]">
                                    <h4 className='text-[20px] text-black'>5 Common Plumbing Problems and How to Fix Them</h4>
                                    <p className='text-[12px] py-3 text-black'>Discover the most frequent plumbing issues homeowners face, from leaky faucets to clogged drains, and learn simple tips to resolve them before calling a professional.</p>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="two">
                                {/* img */}
                                <Image imgSrc={w2} className={'w-full'}/>
                                {/* children div */}
                                <div className="mt-[17px]">
                                    <h4 className='text-[20px] text-black'>Why Regular Plumbing Maintenance is Essential</h4>
                                    <p className='text-[12px] py-3 text-black'>Prevent costly water damage and unexpected emergencies. Find out why scheduling annual plumbing inspections can save you money and extend the lifespan of your pipes.</p>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="three">
                                {/* img */}
                                <Image imgSrc={w3} className={'w-full'}/>
                                {/* children div  */}
                                <div className="mt-[17px]">
                                    <h4 className='text-[20px] text-black'>Top Benefits of Upgrading to a Tankless Water Heater</h4>
                                    <p className='text-[12px] py-3 text-black'>Thinking about replacing your old water heater? Explore the advantages of tankless systems, including endless hot water, energy efficiency, and significantly lower utility bills.</p>
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