import React from 'react'
import Container from '../Container'
import Button from '../Button'

const Welcome = () => {
    return (
        <section id='welcome'>
            <div className="py-20 font-roboto">
                <Container>
                    <div className="bg-[url('/src/assets/welcomeBg.png')] py-15 bg-center bg-cover bg-no-repeat">
                        <div className="bg-white/70 lg:px-15 px-5 py-5.5 lg:w-[542px]">
                            <h3 className='text-black lg:text-[44px] text-[30px] font-bold lg:w-[366px]'>Welcome to Plumber Company</h3>
                            <p className='pt-3 text-black text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            {/* btn */}
                            <div className="btn mt-7.5">
                                <Button btnText={'Learn More'} className={'text-white text-base commonBg py-2.5 px-4.5 rounded-[35px] uppercase underline'}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Welcome