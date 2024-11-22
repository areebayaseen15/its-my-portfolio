"use client"

import React from "react";

const ContactForm = () => {
  return (
    <div
    className="flex justify-center items-center min-h-screen px-4"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <form
      className="w-full max-w-md p-6 rounded-lg space-y-6 shadow-[2px_2px_15px_2px] shadow-white"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2
        className="text-4xl font-bold text-center text-white"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        Contact <span className="text-[#2cdae3]">Me!</span>
      </h2>
      <div data-aos="fade-right" data-aos-duration="800">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-white mb-1"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div data-aos="fade-left" data-aos-duration="800">
        <label
          htmlFor="mobile"
          className="block text-sm font-medium text-white mb-1"
        >
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          pattern="[0-9]{10}"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="1234567890"
        />
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#2cdae3] text-white font-medium py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        Submit
      </button>
    </form>
  </div>
  
  );
};

export default ContactForm;
