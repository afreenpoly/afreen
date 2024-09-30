import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message } = formData;
    const name = `${formData.firstName} ${formData.lastName}`;
    const mailtoLink = `mailto:afreendeby@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      id="contact"
      className="border rounded-2xl border-white p-4 sm:p-6 mt-9 mx-4 sm:mx-auto max-w-4xl"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl pb-5">
          Contact
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2">
          <iframe
            className="w-full h-64 sm:h-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d245.18839906994458!2d76.205972!3d10.4995318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef9a7709f451%3A0x222b1e37e002363a!2sAfreen&#39;s%20Home!5e0!3m2!1sen!2sin!4v1719502931298!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 sm:mt-0 sm:ml-8 sm:w-1/2"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold leading-6">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full text-black rounded-md border-0 px-3.5 py-2 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold leading-6">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md text-black border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md text-black border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md text-black border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 sm:text-sm"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
