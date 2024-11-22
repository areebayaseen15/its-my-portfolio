"use client"
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../app/assets/facebook-logo.png";
import github from "../app/assets/github-logo.png";
import pic from "../app/assets/yellow-image.jpeg";
import profile from "../app/assets/yellow-image.jpeg";
import Projects from "./components/projects";
import ContactForm from "./components/contact";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[rgb(21,21,21)] h-auto">
      {/* Navbar */}
      <div className="flex justify-between items-center h-20 bg-[rgb(21,21,21)]">
        <div className="text-white font-bold text-2xl ml-16 hover:text-[#2cdae3]">
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-white font-bold text-xl mr-16 space-x-5">
          <a href="#" className="hover:text-[#2cdae3]">Home</a>
          <a href="#" className="hover:text-[#2cdae3]">About</a>
          <a href="#" className="hover:text-[#2cdae3]">Skills</a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-end mr-6">
          <button className="text-white text-2xl">&#8801;</button>
          <div className="hidden">
            <ul className="flex flex-col text-white font-bold text-xl space-y-5">
              <li><a href="#" className="hover:text-[#2cdae3]">Home</a></li>
              <li><a href="#" className="hover:text-[#2cdae3]">About</a></li>
              <li><a href="#" className="hover:text-[#2cdae3]">Skills</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Home Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:justify-around mt-16 lg:mt-24 px-4 lg:px-16">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1
            className="text-white font-bold text-3xl md:text-4xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Hello, Its Me <br />
            <span className="text-5xl md:text-7xl">Hafiz Hamza</span> <br />
            <span>
              And I am a <span className="text-[#2cdae3]">Junior Developer</span>
            </span>
          </h1>
          <p
            className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed"
            data-aos="zoom-in"
          >
            I specialize in programming, designing, and development, always aiming 
            to create modern and professional experiences. Confident and motivated, I am
            on a path to achieve my future goals with determination.
          </p>
          <div
            className="flex justify-center lg:justify-start mt-8 space-x-4"
            data-aos="fade-up"
          >
            <Image
              className="bg-[#2cdae3] rounded-full hover:bg-white p-2 transition-all duration-300"
              src={logo}
              alt="Facebook Logo"
              width={50}
              height={50}
            />
            <Image
              className="bg-[#2cdae3] rounded-full hover:bg-white p-2 transition-all duration-300"
              src={github}
              alt="GitHub Logo"
              width={50}
              height={50}
            />
          </div>
          <a
            href="https://milestone5-fawn-omega.vercel.app/"
            className="inline-block bg-[#2cdae3] text-white w-[180px] h-[50px] rounded-full text-center mt-6 py-2 text-lg font-bold transition-transform hover:scale-105"
            data-aos="fade-in"
          >
            Download CV
          </a>
        </div>

        {/* Profile Image */}
        <div
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] flex-shrink-0"
          data-aos="fade-left"
        >
          <Image
            src={pic}
            alt="Profile"
            className="rounded-full border-[5px] border-[#2cdae3] shadow-lg shadow-[#2cdae3] transition-transform hover:scale-105"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="text-center mt-16 px-4 lg:px-16">
        <h1
          className="text-white text-4xl md:text-6xl font-bold"
          data-aos="fade-down"
        >
          About <span className="text-[#2cdae3]">Me</span>
        </h1>
        <p
          className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed"
          data-aos="fade-right"
        >
          I am Hafiz Hamza, a second-year student at D.J College and currently
          learning at GIAIC. I am developing skills in programming, designing,
          and modern web development. My journey is built on growth, learning,
          and achieving future goals.
        </p>
        <div
          className="relative mt-16 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] mx-auto"
          data-aos="flip-up"
        >
          <Image
            src={profile}
            alt="About Profile"
            className="rounded-full border-[5px] border-[#2cdae3] shadow-lg shadow-[#2cdae3]"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Skills Section */}
      <h1
        className="text-white text-4xl md:text-6xl text-center font-bold mt-16"
        data-aos="fade-up"
      >
        Skills <span className="text-[#2cdae3]">Section</span>
      </h1>
      {/* Add your skills here */}
      <div className="flex justify-center flex-wrap gap-6 md:gap-8 mt-12 px-4">
    <div className="shadow-[0px_0px_10px_5px] shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover transform transition-transform duration-1000 hover:scale-110" data-aos="fade-right"></div>
    <div className="shadow-[0px_0px_10px_5px] shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/premium-vector/css-vector-icon-design-illustration_1174953-23508.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover transform transition-transform duration-1000 hover:scale-110" data-aos="fade-up"></div>
    <div className="shadow-[0px_0px_10px_5px] shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover transform transition-transform duration-1000 hover:scale-110" data-aos="zoom-in"></div>
    <div className="shadow-[0px_0px_10px_5px] shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/premium-vector/create-impact-with-3d-coral-pink-neon-letter-f-icon-dark-backgrounds_462839-8288.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover transform transition-transform duration-1000 hover:scale-110" data-aos="flip-left"></div>
    <div className="shadow-[0px_0px_10px_5px] shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://t3.ftcdn.net/jpg/05/50/01/22/240_F_550012297_vt1cUy6CCs7qYHlSa1zm1z0MND9DYwvP.jpg')] bg-cover transform transition-transform duration-1000 hover:scale-110" data-aos="fade-left"></div>
    <div className="shadow-[0px_0px_10px_5px] shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover transform transition-transform duration-1000 hover:scale-110" data-aos="fade-down"></div>
    <div className="shadow-[0px_0px_10px_5px] shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://tse2.mm.bing.net/th?id=OIP.nWn9SXBZuMnzlCgGrNpr7QHaDt&pid=Api&P=0&h=220')] bg-cover transform transition-transform duration-1000 hover:scale-110" data-aos="zoom-out"></div>
    </div>


      {/* Projects Section */}
      <Projects />
      <ContactForm />
      <div className="w-screen h-[2px] bg-white mt-16" data-aos="fade-right" data-aos-duration="1000"></div>
      {/* Footer */}
      <footer className="text-center text-white py-8" data-aos="fade-up"
    data-aosduration="1000">
        <span className="font-bold text-3xl text-[#2cdae3]">My Portfolio</span>
        <br />
        <span className="font-bold text-2xl">Hafiz Hamza</span>
      </footer>
    </div>
    
  );
}