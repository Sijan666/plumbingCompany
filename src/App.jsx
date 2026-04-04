import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactLenis from "lenis/react";
import "lenis/dist/lenis.css";
import Loader from "./components/Loader";

const RootLayouts = lazy(() => import("./components/layouts/RootLayouts"));
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Services = lazy(() => import("./components/pages/Services"));
const Projects = lazy(() => import("./components/pages/Projects"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Error = lazy(() => import("./components/pages/Error"));

function App() {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoad) {
    return <Loader />;
  }

  return (
    <>
      <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true, wheelMultiplier: 0.8 }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<RootLayouts />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </ReactLenis>
    </>
  );
}

export default App;