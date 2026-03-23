import { FaBarsStaggered } from "react-icons/fa6"
import Button from "../Button"
import Container from "../Container"
import Image from "../Image"
import logo from '/logo.png'
import { useState } from "react"


const Header = () => {

    const [ show , setShow] = useState(false)

    const handleShow = ()=>{
        setShow(!show)
    }

    return (
        <>
        <header>
            <section id="header" className="py-2.5 font-roboto shadow-newMade">
                <Container>
                    <div className="flex justify-between items-center">
                        {/* left side */}
                        <div className="logo">
                            <Image imgSrc={logo} className={'w-[70%] lg:w-full'}/>
                        </div>
                        {/* .right side */}
                        <div className="right flex items-center gap-10">
                            {/* nav bar */}
                            <nav className="hidden lg:block">
                                <ul className="flex items-center gap-x-9 ">
                                    <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">Home</li>
                                    <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">About us</li>
                                    <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">Services</li>
                                    <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">Project</li>
                                    <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">Contact</li>
                                </ul>
                            </nav>
                            {/* btn */}
                            <Button btnText={'Request a call Back'} className={'commonBg px-2 py-2.5 rounded-[5px] text-[12px] font-bold text-white hidden lg:block'}/>
                            {/* mobile nav */}
                            <div className="lg:hidden">
                                <FaBarsStaggered onClick={handleShow} className="relative"/>
                                {show && (
                                    <div className="absolute top-15 left-1/2 -translate-x-1/2 w-[90%] p-5 rounded-md bg-white/10 border border-[#e4e4e4] backdrop-blur-md flex flex-col items-center gap-9">
                                    <nav>
                                        <ul className="flex flex-col md:flex-row items-center gap-9">
                                            <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">Home</li>
                                            <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">About us</li>
                                            <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">Services</li>
                                            <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">Project</li>
                                            <li className="commonText text-sm font-medium hover:font-bold duration-300 beforeAfter">Contact</li>
                                        </ul>
                                    </nav>
                                    <Button btnText={'Request a call Back'} className={'commonBg px-2 py-2.5 rounded-[5px] text-[12px] font-bold text-white'}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </header>
        </>
    )
}

export default Header