import { Helmet } from "react-helmet-async";
import Banner from "../layouts/Banner";
import History from "../layouts/History";
import RecentWorks from "../layouts/RecentWorks";
import Service from "../layouts/Service";
import Testimonial from "../layouts/Testimonial";
import Welcome from "../layouts/Welcome";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Welcome to FB Harris Plumbing and Heating. We provide top-quality plumbing and heating services, installations and repairs for your home or business."/>
            </Helmet>
            <Banner />
            <Service />
            <Welcome />
            <History />
            <Testimonial />
            <RecentWorks />
        </>
    );
};

export default Home;