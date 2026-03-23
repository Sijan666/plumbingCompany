import Container from "../Container"
import Image from "../Image"
// import bannerImg from '../../assets/bannerImg.png'
import Button from "../Button"


const Banner = () => {
    return (
        <>
        <section id="banner">
            <div className="pt-12 font-roboto">
                <Container>
                    <div className="flex flex-col lg:flex-row justify-between">
                        {/* left */}
                        <div className="left lg:w-[390px] lg:pt-26 pt-15 pb-10 lg:pb-0 text-center lg:text-left">
                            <h1 className="text-black lg:text-[44px] text-[30px] font-bold uppercase">Call us  For Any <span className="font-medium">Plumbing Needs</span></h1>
                            <h2 className="text-black lg:text-[34px] text-[25px] py-4 font-black">+1800-9938-2839 </h2>
                            <Button btnText={'See All Service'} className={'text-white text-base commonBg pt-[13px] pb-3 px-4.5 rounded-[35px] uppercase'}/>
                        </div>
                        {/* right */}
                        {/* <div className="right hidden lg:block">
                            <Image imgSrc={bannerImg}/>
                        </div> */}
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Banner
