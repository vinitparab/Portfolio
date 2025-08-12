import { Mail,Phone,MapPin,Github,Linkedin,Twitter } from 'lucide-react';
import React from 'react'
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Contact = () => {

  const formRef = useRef();
const [loading, setLoading] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      "service_ha5zy0r", // EmailJS Service ID
      "template_hl9rhm9", // EmailJS Template ID
      formRef.current,
      "Ld9KjO8sXBZMru1TB"   // EmailJS Public Key
    )
    .then(() => {
        toast.success("Message Sent ✅", {
    position: "top-right",
    autoClose: 3000,
  });
      setLoading(false);
      formRef.current.reset();
    })
    .catch((err) => {
      toast.error("Failed to send ❌", {
    position: "top-right",
    autoClose: 3000,
  });
      console.error(err);
      setLoading(false);
    });
};

  return (
    <>
      <div className="bg-black w-full flex flex-col items-center">
        <h1 className="font-bold text-white text-5xl text-center py-[2rem]">
          Let's Start a Coversation
        </h1>
        <h4 className="text-white text-2xl text-center mb-[3rem] w-[58rem]">
          Ready to discuss opportunities, collaborations, or just connect? I'd
          love to hear from you.
        </h4>

        <div className="flex justify-center gap-5 w-[83rem] h-[50rem]">
          <div className="flex flex-col  w-[30rem] gap-5 mt-[13px]">
            <h1 className="text-white font-bold text-2xl">Get in touch</h1>
            <p className="text-white font-semibold">
              I'm actively seeking opportunities to start my career in software
              development. Whether you have an entry-level position, internship,
              or project collaboration in mind, I'd love to discuss how I can
              contribute to your team.
            </p>
            <p className=" mt-[1rem] text-gray-200 ">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>
            <div className="flex flex-col gap-4 mt-[1rem]">
              <div className="flex gap-4">
                <Mail color="#263ef2" />
                <p className="text-white">parabvinit2004@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <Phone color="#263ef2" />
                <p className="text-white">+91-9321670939</p>
              </div>
              <div className="flex gap-4">
                <MapPin color="#263ef2" />
                <p className="text-white">India,Mumbai</p>
              </div>
            </div>
            <div className="flex gap-8 px-3 mt-[1rem] ">
              <Linkedin color="white" size="20px" />
              <Github color="white" size="20px" />
              <Twitter color="white" size="20px" />
            </div>
          </div>

          <div>
            <div className="border-2 border-white w-[25rem] h-[31rem] mt-[13px] rounded-lg p-5  ">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="flex flex-col gap-8">
                  <div>
                    <h1 className="text-white font-semibold">Name</h1>
                    <input
                      name="user_name"
                      type="text"
                      className="w-[20rem] h-[2rem] rounded-lg p-2 "
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <h1 className="text-white font-semibold">Email</h1>
                    <input
                      name="user_email"
                      type="Email"
                      className="w-[20rem] h-[2rem] rounded-lg p-2 "
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div>
                    <h1 className="text-white font-semibold">Subject</h1>
                    <input
                      name="subject"
                      type="text"
                      className="w-[20rem] h-[2rem] rounded-lg p-2 "
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div>
                    <h1 className="text-white font-semibold">Message</h1>
                    <input
                      name="message"
                      type="text"
                      className="w-[20rem] h-[6rem] rounded-lg px-2 "
                      placeholder="Tell me about your project..."
                      required 
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="text-white font-semibold border-2 rounded mt-5 w-[20rem] h-[2.5rem] mr-10 bg-blue-600"
                  >
                    {loading ? "Sending..." : "Send Message"}
                   
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </>
  );
}

export default Contact
