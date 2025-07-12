// App.tsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./App.scss";
import TopNavbar from "./layout/top-navbar";
import HomePage from "./page";

function App() {
    useEffect(() => {


        window.scrollTo(0, 0);

        AOS.init({
            duration: 1000,

        });
    }, []);


    return (
        <div className="app-container">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="background-video"
            >
                <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="app-content">
                <TopNavbar />
                <HomePage />
            </div>
        </div>
    );
}

export default App;
