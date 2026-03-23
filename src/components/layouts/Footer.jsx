import Container from "../Container"
import Image from "../Image"
import footerLogo from '../../assets/footerLogo.png'


const Footer = () => {
  return (
    <>
      <footer>
        <section id="footer" className="bg-black pt-7.5 pb-2.5 font-roboto">
          <Container>
            <div className="flex flex-col gap-y-10 lg:flex-row justify-between pb-[25px] border-b border-white">
              {/* 1 */}
              <div className="logo lg:w-[362px]">
                <Image imgSrc={footerLogo}/>
                <p className="pt-7.5 text-[12px] text-white">Lore Issue is simply dummy text of the printing and typesetting industry. Lore Issue has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="mt-2">
                  
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-y-10 lg:flex-row gap-x-20">
                <div className="services">
                  <h3 className="text-base text-[#DD3142] font-bold uppercase">Our Services</h3>
                  <ul className="mt-10 flex flex-col gap-[15px] text-white text-[12px]">
                    <li className="cursor-pointer">Plumber Service</li>
                    <li className="cursor-pointer">Bathroom Plumbing Service</li>
                    <li className="cursor-pointer">Kitchen Plumbing Service</li>
                    <li className="cursor-pointer">Roof Plumbing Service</li>
                    <li className="cursor-pointer">Bathroom Plumbing Service</li>
                    <li className="cursor-pointer">Kitchen Plumbing Service</li>
                  </ul>
                </div>
                <div className="services">
                  <h3 className="text-base text-[#DD3142] font-bold uppercase">Our Services</h3>
                  <ul className="mt-10 flex flex-col gap-9 text-white text-[12px]">
                    <li className="w-[151px]">1800-9938-2839 support@plumberpoint.com</li>
                    <li className="w-[91px]">A-507 Mandoli New Delhi, India</li>
                    <li className="w-[122px]">Mon-Sat 9.00-15:00 Sunday CLOSED</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-[11px]">
              <div className="flex flex-col lg:flex-row gap-y-5 justify-between items-center">
                <p className="text-[10px] text-[#DD3142]">©Copyright 2026 Majharul Islam.</p>
                <ul className="flex flex-col lg:flex-row items-center gap-y-5 gap-x-[38px] text-[10px] text-[#DD3142]">
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
