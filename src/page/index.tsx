import About from "../components/about";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Diện Lê — Portfolio</h1>
      </header>
      <main>
        <About />
        {/* <Skills />
        <Projects />
        <Contact /> */}
      </main>
      <footer>
        © {new Date().getFullYear()} Diện Lê. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
