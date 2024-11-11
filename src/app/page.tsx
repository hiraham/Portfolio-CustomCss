
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Project from "./component/Project";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Skill Section */}
      <Skill />

      {/* About Section */}
      <About />

      {/* Project Section */}
      <Project />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
