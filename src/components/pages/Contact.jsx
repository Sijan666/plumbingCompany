import React from 'react'
import Container from '../Container'

const Contact = () => {
    return (
        <>
        <section id='contact'>
            <div className="font-roboto pb-10">
                {/* heading img */}
                <div className="bg-[url('/src/assets/About.png')] pt-[126px] pb-12 bg-center bg-cover bg-no-repeat">
                    <Container>
                        <h3 className='uppercase text-[35px] lg:text-[44px] font-black text-white text-center lg:text-left'>Contact Us</h3>
                        <p className='pt-3.5 text-white text-sm lg:w-[432px] text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </Container>
                </div>
                <div className="mt-15">
                    <Container>
                        <div className="text-center">
                            <h4 className='text-[#0E0E0E] font-medium text-[30px] uppercase'>Contact</h4>
                            <p className='text-base text-[#6D6D6D] leading-[133.5%] pt-[15px] lg:px-55'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </Container>
                </div>
                {/* projects */}
            </div>
        </section>
        </>
    )
}

export default Contact