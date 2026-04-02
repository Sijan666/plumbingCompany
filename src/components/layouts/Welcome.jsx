import React from 'react'
import Container from '../Container'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <section id='welcome'>
            <div className="py-20 font-roboto">
                <Container>
                    <div className="bg-[url('/src/assets/welcomeBg.webp')] py-15 bg-center bg-cover bg-no-repeat">
                        <div className="bg-white/70 lg:px-15 px-5 py-5.5 lg:w-[542px]">
                            <h3 className='text-black lg:text-[44px] text-[30px] font-bold lg:w-[366px]'>Welcome to Plumber Company</h3>
                            <p className='pt-3 text-black text-sm'>We are dedicated to providing top-tier plumbing services for both residential and commercial properties. With a strong focus on quality and efficiency, our experienced technicians work tirelessly to resolve your plumbing issues promptly. From emergency repairs to complete system upgrades, trust us to keep your home or business running smoothly and safely every single day</p>
                            {/* btn */}
                            <div className="btn mt-7.5">
                                <Link to={'/about'}>
                                    <Button btnText={'Learn More'} className={'text-white text-base commonBg py-2.5 px-4.5 rounded-[35px] uppercase underline'}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Welcome