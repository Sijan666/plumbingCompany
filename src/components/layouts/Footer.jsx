import Container from "../Container"
import Image from "../Image"
import logoNew from '/logoNew.png'


const Footer = () => {
  return (
    <>
      <footer>
        <section id="footer" className="bg-black pt-7.5 pb-2.5 font-roboto">
          <Container>
            <div className="flex flex-col gap-y-10 lg:flex-row justify-between pb-[25px] border-b border-white">
              {/* 1 */}
              <div className="logo lg:w-[362px]">
                <Image imgSrc={logoNew}/>
                <p className="pt-7.5 text-[12px] text-white">Plumber Point is your trusted partner for all residential and commercial plumbing needs. We are committed to delivering fast, reliable, and high-quality services to keep your systems running smoothly</p>
                <div className="mt-2">
                  
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-y-10 lg:flex-row gap-x-20">
                <div className="services">
                  <h3 className="text-base text-white font-bold uppercase">Our Services</h3>
                  <ul className="mt-10 flex flex-col gap-[15px] text-white text-[12px]">
                    <li className="">Plumber Service</li>
                    <li className="">Bathroom Plumbing Service</li>
                    <li className="">Kitchen Plumbing Service</li>
                    <li className="">Roof Plumbing Service</li>
                    <li className="">Bathroom Plumbing Service</li>
                    <li className="">Kitchen Plumbing Service</li>
                  </ul>
                </div>
                <div className="services">
                  <h3 className="text-base text-white font-bold uppercase">Our Services</h3>
                  <ul className="mt-10 flex flex-col gap-9 text-white text-[12px]">
                    <div className="">
                      <li className="w-[151px]">07480 304222</li>
                      <li className="">info@fbharrisplumbingandheating.co.uk</li>
                    </div>
                    <li className="w-[91px]">South Shields, Tyne and Wear, NE334TL</li>
                    <li className="w-[122px]">Mon-Sat 9.00-15:00 Sunday CLOSED</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-[11px]">
              <div className="flex flex-col lg:flex-row gap-y-5 justify-between items-center">
                <p className="text-[10px] text-white">©Copyright 2026 Majharul Islam.</p>
                <ul className="flex flex-col lg:flex-row items-center gap-y-5 gap-x-[38px] text-[10px] text-white">
                  <li className="cursor-pointer">Term of Services</li>
                  <li className="cursor-pointer">Privacy & policy</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </footer>
    </>
  )
}

export default Footer
