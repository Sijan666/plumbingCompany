import Container from "../Container"
import { projectsApi } from "../data/projectsApi"
import RecentWorks from "../layouts/RecentWorks"
import Testimonial from "../layouts/Testimonial"
import ProjectCommon from "../ProjectCommon"


const Projects = () => {
    return (
        <>
        <section id="projects">
            <div className="font-roboto pb-10">
                {/* heading img */}
                <div className="bg-[url('/src/assets/About.webp')] pt-[126px] pb-12 bg-center bg-cover bg-no-repeat">
                    <Container>
                        <h3 className='uppercase text-[35px] lg:text-[44px] font-black text-white text-center lg:text-left'>Projects</h3>
                        <p className='pt-3.5 text-white text-sm lg:w-[432px] text-center lg:text-left'>Discover the quality of our craftsmanship. Explore our gallery of completed residential and commercial plumbing projects, and see why we are the trusted choice for reliable plumbing solutions.</p>
                    </Container>
                </div>
                <div className="mt-15">
                    <Container>
                        <div className="text-center">
                            <h4 className='text-[#0E0E0E] font-medium text-[30px] uppercase'>Our Projects</h4>
                            <p className='text-base text-[#6D6D6D] leading-[133.5%] pt-[15px] lg:px-55'>Explore our gallery of recently completed plumbing projects. From modern residential bathroom upgrades to large-scale commercial pipe installations, our work reflects our strong commitment to precision and durability.</p>
                        </div>
                    </Container>
                </div>
                {/* projects */}
                <div className="mt-12">
                    <Container>
                        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
                            {projectsApi.map((item)=>(
                                <div key={item.id} className="">
                                    <ProjectCommon
                                        projectImg={item.projectImg}
                                        projectType={item.projectType}
                                        projectName={item.projectName}
                                    />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
                {/* testimony */}
                <div className="testimony mt-15">
                    <Testimonial/>
                </div>
                {/* recentWork */}
                <div className="testimony mt-15">
                    <RecentWorks/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects