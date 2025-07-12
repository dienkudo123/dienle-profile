import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";

const HomePage = () => {
    return (
        <>
            <section id="about" data-aos="fade-up"><About /></section>
            <section id="exp" data-aos="fade-up"><Experience /></section>
            <section id="projects" data-aos="fade-up"><Projects /></section>
            <section id="contact" data-aos="fade-up"><Contact /></section>
        </>
    );
};

export default HomePage;
