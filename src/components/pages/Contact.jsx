import React from 'react'
import Container from '../Container'
import Button from '../Button'
import { Helmet } from 'react-helmet-async'


const Contact = () => {
    return (
        <>
        <Helmet>
            <title>Contact Us - FB Harris Plumbing and Heating</title>
            <meta name="description" content="Get in touch with FB Harris Plumbing and Heating. Contact us for residential, commercial, or emergency plumbing services in South Shields." />
        </Helmet>
        <section id='contact'>
            <div className="font-roboto pb-10">
                {/* heading img */}
                <div className="bg-[url('/src/assets/About.webp')] pt-[126px] pb-12 bg-center bg-cover bg-no-repeat">
                    <Container>
                        <h3 className='uppercase text-[35px] lg:text-[44px] font-black text-white text-center lg:text-left'>Contact Us</h3>
                        <p className='pt-3.5 text-white text-sm lg:w-[432px] text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </Container>
                </div>
                <div className="mt-15">
                    <Container>
                        <div className="text-center">
                            <h4 className='text-[#0E0E0E] font-medium text-[30px] uppercase'>Get in touch</h4>
                        </div>
                    </Container>
                </div>
                {/* contact form */}
                <div className="mt-10 ">
                    <Container>
                        <form className='lg:w-[1070px] mx-auto flex flex-col'>
                            <div className="flex flex-wrap justify-center gap-[38.98px] ">
                                {/* name */}
                                <input type="text" placeholder='Full Name' className='py-3 border-b border-[#707070] lg:w-[513.91px] w-full outline-none'/>
                                {/* email */}
                                <input type="email" placeholder='Email Address' className='py-3 border-b border-[#707070] lg:w-[513.91px] w-full outline-none'/>
                                {/* contact */}
                                <input type="number" placeholder='Contact Number' className='py-3 border-b border-[#707070] lg:w-[513.91px] w-full outline-none'/>
                                {/* email */}
                                <input type="email" placeholder='Subject' className='py-3 border-b border-[#707070] lg:w-[513.91px] w-full outline-none'/>
                                {/* description */}
                                <textarea rows={2} cols={2} placeholder='Description' className='py-3 border-b border-[#707070] outline-none w-full'></textarea>
                            </div>
                            <div className="flex lg:justify-end w-full mt-[22px] justify-center">
                                <Button btnText={'Send A Message'} className={'px-6 pt-4 pb-[13px] bg-[#0D3674] text-white lg:text-[20px] text-base font-bold uppercase rounded-[30px]'}/>
                            </div>
                        </form>
                    </Container>
                </div>
                {/* map */}
                <div className="bg-[#F9F9F9] mt-12.5 py-5 ">
                    <Container>
                        <div className="flex flex-col md:flex-row justify-between lg:gap-[131px] gap-10">
                            {/* left */}
                            <div className="left md:w-[377px] mt-4">
                                <div className="flex flex-col gap-y-6">
                                    <div className="contact">
                                        <h4 className='font-bold text-[18px] text-[#DD3142]'>Contact Us</h4>
                                        <p className='text-sm pt-2 text-black'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <div className="hours">
                                        <h4 className='font-bold text-[18px] text-[#DD3142]'>Business hours:</h4>
                                        <p className='text-sm pt-2 text-black'>Monday to Saturday 9:30 am - 4:30 pm</p>
                                    </div>
                                    <div className="address">
                                        <h4 className='font-bold text-[18px] text-[#DD3142]'>Address:</h4>
                                        <p className='text-sm pt-2 text-black'>South Shields, Tyne and Wear, NE334TL</p>
                                    </div>
                                    <div className="email">
                                        <h4 className='font-bold text-[18px] text-[#DD3142]'>Email:</h4>
                                        <p className='text-sm pt-2 text-black'>info@fbharrisplumbingandheating.co.uk</p>
                                    </div>
                                    <div className="number">
                                        <h4 className='font-bold text-[18px] text-[#DD3142]'>Phone:</h4>
                                        <p className='text-sm pt-2 text-black'>07480 304222</p>
                                    </div>
                                </div>
                            </div>
                            {/* right */}
                            <div className="right lg:w-1/2">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.4021418488055!2d-1.4253109!3d54.98358295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e6f3cfbf300df%3A0xc1f0100cc28bf3e3!2sBanbury%20Terrace%2C%20South%20Shields%20NE33%204TL%2C%20UK!5e0!3m2!1sen!2sbd!4v1775208723338!5m2!1sen!2sbd"
                                className="w-full h-[450px] rounded-lg">
                                </iframe>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact