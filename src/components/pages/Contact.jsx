import React, { useState } from 'react'
import Container from '../Container'
import Button from '../Button'
import { Helmet } from 'react-helmet-async'


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        msg: ''
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
        setErrors({
            ...errors,
            [id]: ''
        });
    };

    const validateForm = () => {
        let newErrors = {};
        
        if (!formData.name.trim()) newErrors.nameInput = "Name is required";
        
        if (!formData.email.trim()) {
            newErrors.emailInput = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.emailInput = "Invalid email address";
        }

        if (!formData.number.trim()) {
            newErrors.numberInput = "Contact number is required";
        } else if (formData.number.length < 11) {
            newErrors.numberInput = "Number must be at least 11 digits";
        }

        if (!formData.subject.trim()) newErrors.subjectInput = "Subject is required";
        
        if (!formData.msg.trim()) newErrors.msgInput = "Description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        if (validateForm()) {
            console.log("Form Submitted Successfully:", formData);
            alert("Message sent successfully!");
            setFormData({ name: '', email: '', number: '', subject: '', msg: '' });
        }
    };


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
                        <form onSubmit={handleSubmit} className='lg:w-[1070px] mx-auto flex flex-col'>
                            <div className="flex flex-wrap justify-center gap-[38.98px]">
                                {/* Name */}
                                <div className="lg:w-[513.91px] w-full flex flex-col">
                                    <input 
                                        type="text" id='name' value={formData.name} onChange={handleChange} 
                                        placeholder='Full Name' 
                                        className={`py-3 border-b outline-none ${errors.nameInput ? 'border-red-500' : 'border-[#707070]'}`}
                                    />
                                    {errors.nameInput && <span className="text-red-500 text-sm mt-1">{errors.nameInput}</span>}
                                </div>
                                {/* Email */}
                                <div className="lg:w-[513.91px] w-full flex flex-col">
                                    <input 
                                        type="email" id='email' value={formData.email} onChange={handleChange} 
                                        placeholder='Email Address' 
                                        className={`py-3 border-b outline-none ${errors.emailInput ? 'border-red-500' : 'border-[#707070]'}`}
                                    />
                                    {errors.emailInput && <span className="text-red-500 text-sm mt-1">{errors.emailInput}</span>}
                                </div>
                                {/* Contact */}
                                <div className="lg:w-[513.91px] w-full flex flex-col">
                                    <input 
                                        type="number" id='number' value={formData.number} onChange={handleChange} 
                                        placeholder='Contact Number' 
                                        className={`py-3 border-b outline-none ${errors.numberInput ? 'border-red-500' : 'border-[#707070]'}`}
                                    />
                                    {errors.numberInput && <span className="text-red-500 text-sm mt-1">{errors.numberInput}</span>}
                                </div>
                                {/* Subject */}
                                <div className="lg:w-[513.91px] w-full flex flex-col">
                                    <input 
                                        type="text" id='subject' value={formData.subject} onChange={handleChange} 
                                        placeholder='Subject' 
                                        className={`py-3 border-b outline-none ${errors.subjectInput ? 'border-red-500' : 'border-[#707070]'}`}
                                    />
                                    {errors.subjectInput && <span className="text-red-500 text-sm mt-1">{errors.subjectInput}</span>}
                                </div>
                                {/* Description */}
                                <div className="w-full flex flex-col">
                                    <textarea 
                                        rows={2} id='msg' value={formData.msg} onChange={handleChange} 
                                        placeholder='Description' 
                                        className={`py-3 border-b outline-none w-full ${errors.msgInput ? 'border-red-500' : 'border-[#707070]'}`}
                                    ></textarea>
                                    {errors.msgInput && <span className="text-red-500 text-sm mt-1">{errors.msgInput}</span>}
                                </div>
                                
                            </div>
                            <div className="flex lg:justify-end w-full mt-[22px] justify-center">
                                <button type="submit" id="submitBtn" className='cursor-pointer px-6 pt-4 pb-[13px] bg-[#0D3674] text-white lg:text-[20px] text-base font-bold uppercase rounded-[30px]'>
                                    Send A Message
                                </button>
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
                                className="w-full h-[450px] rounded-lg" loading="lazy">
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