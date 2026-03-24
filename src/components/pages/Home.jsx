import Banner from "../layouts/Banner"
import History from "../layouts/History"
import Service from "../layouts/Service"
import Testimonial from "../layouts/Testimonial"
import Welcome from "../layouts/Welcome"


const Home = () => {
    return (
        <>
        <Banner/>
        <Service/>
        <Welcome/>
        <History/>
        <Testimonial/>
        </>
    )
}

export default Home