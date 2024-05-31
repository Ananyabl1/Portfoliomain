import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit =async(data) => {
    const userinfo={
        name:data.name,
        email:data.email,
        message:data.message

    }
    try{
        await axios.post("https://getform.io/f/lajklwob",userinfo);
        toast.success("Your message has been sent");
    }catch(error){
        console.log(error);
        toast.error("something went wrong");

    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-3xl font-bold mb-5">Contact me</h1>
        <span>Please fill out the form to contact me</span>
        <div className="flex flex-col items-center justify-center ">
          <form onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/lajklwob"
            method="POST"
            className="bg-slate-200 w-96 p-4 rounded-xl"
          >
            <h1 className="text-xl font-semibold">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Fullname
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your fullname"
                className="shadow-appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight "
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email Id
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="shadow-appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight "
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                type="text"
                id="message"
                name="message"
                placeholder="Enter the message"
                className="shadow-appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight "
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white rounded-xl hover:bg-black text-l font-semibold px-6 py-2 hover:scale-100 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
