import React from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { BsEnvelope } from 'react-icons/bs';
const page = () => {
  return (
    <div className="my-24 grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-1 mt-5">
        <div>
          <div className="flex justify-start items-center gap-4 py-3">
            <div className="size-12 bg-[#DB4444] rounded-full flex justify-center items-center">
              <LuPhoneCall className="text-2xl text-white" />
            </div>
            <h1 className="text-xl font-semibold">Call To Us</h1>
          </div>
          <p className="text-sm font-medium">
            We are available 24/7, 7 days a week
          </p>
          <p className="text-sm font-medium">Phone:- +880-1683654865</p>
        </div>
        <hr className=" my-5" />
        <div>
          <div className="flex justify-start items-center gap-4 py-3">
            <div className="size-12 bg-[#DB4444] rounded-full flex justify-center items-center">
              <BsEnvelope className="text-2xl text-white" />
            </div>
            <h1 className="text-xl font-semibold">Write To Us</h1>
          </div>
          <p className="text-sm font-medium">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm font-medium">
            {' '}
            Emails: samratuap52@gmail.com
            <br /> Emails: support@exclusive.com
          </p>
        </div>
      </div>

      {/* 2nd grid============================ */}
      <div className="col-span-2">
        <section className="p-6 dark:text-gray-800">
          <form
            noValidate=""
            className="container w-full  p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50"
          >
            <div className="flex justify-between items-center">
              <div>
                <label htmlFor="name" className="block mb-1 ml-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 ml-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 ml-1">
                  Phone
                </label>
                <input
                  id="Phone"
                  type="phone"
                  placeholder="Your Phone"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 ml-1">
                Message
              </label>
              <textarea
                rows={4}
                id="message"
                type="text"
                placeholder="Message..."
                className=" block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#DB4444] focus:dark:ring-violet-600 hover:dark:ring-violet-600 text-gray-50"
              >
                Send Massage
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default page;
