import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full bg-[#f7f5e6] text-[#333a56]">
        <Navbar/>
      
      {/* Hero Section */}
      <section className="w-full bg-[#333a56] text-[#f7f5e6] py-20">
        <div className="w-[85%] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#E8E8E8]">
            Empowering organizations with smart, simple, and scalable employee management solutions.
          </p>
        
        </div>
      </section>

      {/* About Content */}
      <section className="w-[85%] mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#333a56]">
            Who We Are
          </h2>
          <p className="text-[#526585] leading-relaxed mb-4">
            Employee Management System (EMS) is designed to simplify how
            organizations manage their workforce. From attendance tracking to
            payroll and leave management, we help businesses stay organized and
            productive.
          </p>
          <p className="text-[#526585] leading-relaxed">
            Our platform focuses on efficiency, transparency, and ease of use
            for admins, HR professionals, team leaders, and employees.
          </p>
        </div>

        <div className="bg-[#e8e8e8] p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-[#333a56]">
            Our Mission
          </h3>
          <p className="text-[#526585] leading-relaxed">
            To create a reliable and user-friendly employee management platform
            that helps organizations grow while keeping employees engaged and
            informed.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#e8e8e8] py-16">
        <div className="w-[85%] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border  border-[#333a56] rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
              <p className="text-[#526585]">
                Easy-to-use solutions designed for everyone.
              </p>
            </div>

            <div className="p-6 border border-[#e8e8e8] rounded-lg  bg-[#333a56] text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#e8e8e8]">Reliability</h3>
              <p className="text-[#e8e8e8]">
                Secure and dependable systems you can trust.
              </p>
            </div>

            <div className="p-6 border border-[#333a56] rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-[#526585]">
                Continuously improving to meet modern workplace needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#526585] ">
        <h2 className="text-3xl font-bold mb-4 text-[#f7f5e6] ">
          Build Better Workplaces With Us
        </h2>
        <p className=" text-[#e8e8e8] mb-6">
          Join organizations that trust EMS to manage their teams efficiently.
        </p>
        <button className=" cursor-pointer text-[#333a56] px-6 py-3 rounded-lg   bg-[#f7f5e6] transition">
          Get Started
        </button>
      </section>
    <Footer/>
    </div>
  );
};

export default About;
