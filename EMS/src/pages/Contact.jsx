import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
    <div className="w-full bg-[#f7f5e6] text-[#333a56]">
        <Navbar/>
        

      {/* Hero Section */}
      <section className="py-20 bg-[#333a56] text-[#f7f5e6]">
        <div className="w-[85%] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Have questions or need assistance? We’re here to support you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-[85%] mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Info Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-[#52658F] mb-6 leading-relaxed">
            Reach out to us for product inquiries, support, or general questions.
            Our team is always happy to help.
          </p>

          <div className="space-y-4 text-[#52658F]">
            <p><span className="font-semibold text-[#333a56]">Email:</span> support@ems.com</p>
            <p><span className="font-semibold text-[#333a56]">Phone:</span> +91 98765 43210</p>
            <p><span className="font-semibold text-[#333a56]">Address:</span> New Delhi, India</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-[#e8e8e8] p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6">
            Send a Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#f7f5e6] border border-[#52658F] px-4 py-2 rounded outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#f7f5e6] border border-[#52658F] px-4 py-2 rounded outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-[#f7f5e6] border border-[#52658F] px-4 py-2 rounded outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full hover:bg-[#333a56] text-[#f7f5e6] py-2 rounded cursor-pointer bg-[#52658F] transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </section>

      {/* Footer Text */}
      <section className="text-center py-12 bg-[#e8e8e8]">
        <p className="text-[#52658F] font-medium">
          We usually respond within 24 hours.
        </p>
      </section>

    </div>
        <Footer/>
    </div>
  )
}

export default Contact



  

