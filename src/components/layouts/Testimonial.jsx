import React from 'react'
import Container from '../Container'

const Testimonial = () => {
    return (
        <>
        <section id='testimonial'>
            <div className="bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/src/assets/reviews.png')] bg-center bg-cover bg-no-repeat pt-[45px] pb-9">
                <Container>
                    <div className="text-center font-roboto">
                        <h3 className='text-white text-[30px]'>Testimonial</h3>
                        <p className='pt-10 text-white text-[20px] px-25'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Testimonial