import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form method="Post" action="https://getform.io/f/724f0070-b11f-4f5b-8708-20aada8cbaf7" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF7F50] text-gray-300 capitalize">
            contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot an email - anasdev8@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="message"
          className="bg-[#ccd6f6] p-2"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#FF7F50] hover:border-white px-4 py-3 my-8 mx-auto flex items-center">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
