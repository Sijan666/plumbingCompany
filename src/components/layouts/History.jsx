import React from 'react'
import Container from '../Container'
import Image from '../Image'
import histories from '../../assets/histories.png'

const History = () => {
    return (
        <section id='history'>
            <div className="py-[38px] commonBg font-roboto">
                <Container>
                    {/* parent div */}
                    <div className="flex flex-col lg:flex-row justify-between gap-y-10 gap-x-[98px]">
                        {/* left side */}
                        <div className="left">
                            <Image imgSrc={histories} className={'w-full'}/>
                        </div>
                        {/* right side */}
                        <div className="right lg:w-[436px]">
                            {/* 1 */}
                            <div className="one">
                                <h3 className='text-white text-[30px] lg:text-[44px] font-bold'>Our Company History</h3>
                                <p className='text-sm text-white pt-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            </div>
                            {/* 2 */}
                            <div className="two mt-10">
                                <h3 className='text-white text-[25px] lg:text-[30px] font-light'>Trust Our Team of Experts</h3>
                                <p className='text-sm text-white pt-3.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div> 
        </section>
    )
}

export default History