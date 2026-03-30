import Container from "../Container"


const Projects = () => {
    return (
        <>
        <section id="projects">
            <div className="font-roboto pb-10">
                <div className="bg-[url('/src/assets/About.png')] pt-[126px] pb-12 bg-center bg-cover bg-no-repeat">
                    <Container>
                        <h3 className='uppercase text-[35px] lg:text-[44px] font-black text-white text-center lg:text-left'>Projects</h3>
                        <p className='pt-3.5 text-white text-sm lg:w-[432px] text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </Container>
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects