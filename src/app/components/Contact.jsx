"use client";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import { FadeIn } from "./FadeIn";

import MessageSentModal from "./MessageSentModal";

import { useState } from "react";

export function Contact() {
  const [showNotification, setShowNotification] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Initialize an empty array for enquiry types
    let enquiryTypes = [];
    // Check each checkbox and add its value if checked
    if (event.target["startups"].checked)
      enquiryTypes.push(event.target["startups"].name);
    if (event.target["vc-funding"].checked)
      enquiryTypes.push(event.target["vc-funding"].name);
    if (event.target["mergers-acquisitions-exits"].checked)
      enquiryTypes.push(event.target["mergers-acquisitions-exits"].name);

    // Determine contact preference
    let contactPreference = "";
    if (event.target["contact-preference-email"].checked)
      contactPreference = "Email";
    if (event.target["contact-preference-phone"].checked)
      contactPreference = "Phone";
    if (event.target["contact-preference-video"].checked)
      contactPreference = "Video Call";

    // Collect form data
    const formData = {
      firstName: event.target["firstName"].value,
      lastName: event.target["lastName"].value,
      email: event.target["email"].value,
      subject: event.target["subject"].value,
      company: event.target["company"].value,
      about: event.target["about"].value,
      enquiryTypes, // Send as an array or join as a string if needed
      contactPreference,
    };

    // Send the form data to your API
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Log the response object
      console.log("Response:", response);

      const result = await response.json();

      // Log the result object parsed from the response body
      console.log("Result:", result);

      if (result.success) {
        // Handle success (e.g., showing a success message)
        console.log("Email sent successfully");
        setShowNotification(true);
      } else {
        // Handle failure (e.g., showing an error message)
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  }
  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <FadeIn>
      <div className="bg-white mb-24">
        <div className="mx-auto mt-24 max-w-7xl rounded rounded-3xl bg-black py-20 px-4 sm:mt-32 sm:px-6 sm:py-32 lg:mt-56 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <form onSubmit={handleSubmit}>
              <div className="space-y-12">
                <div className="border-b border-neutral-800 pb-12">
                  <h2 className="text-5xl font-semibold leading-7 pb-8 text-white">
                    How Can We Help?
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    We will be with you shortly.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="Name"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Subject
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-white">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            autoComplete="username"
                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="enquiry"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Enquiry
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-400">
                        How can we be of service?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-white">
                    Contact Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    We ensure your information remains secure and confidential.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="firstName"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="lastName"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Company
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email" // Ensure the name attribute is set to "email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-12">
                  <h2 className="text-3xl font-semibold leading-7 text-white">
                    Subject
                  </h2>

                  <div className="mt-10 flex flex-wrap gap-x-10">
                    {" "}
                    {/* Flex container */}
                    <fieldset className="flex-1">
                      {" "}
                      {/* Flex item for By Email */}
                      <legend className="text-sm font-semibold leading-6 text-white">
                        Enquiry Type
                      </legend>
                      <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="startups"
                              name="startups"
                              type="checkbox"
                              className="h-4 w-4 rounded border-white/10 bg-white/5 text-gray-500 focus:ring-white focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="startups"
                              className="font-medium text-white"
                            >
                              Startups
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="vc-funding"
                              name="vc-funding"
                              type="checkbox"
                              className="h-4 w-4 rounded border-white/10 bg-white/5 text-gray-500 focus:ring-white focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="vc-funding"
                              className="font-medium text-white"
                            >
                              VC Funding
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="mergers-acquisitions-exits"
                              name="mergers-acquisitions-exits"
                              type="checkbox"
                              className="h-4 w-4 rounded border-white/10 bg-white/5 text-gray-500 focus:ring-white focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="offers"
                              className="font-medium text-white"
                            >
                              Mergers, Acquisitions, & Exits
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="flex-1">
                      <legend className="text-sm font-semibold leading-6 text-white">
                        Contact Preference
                      </legend>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="contact-preference-email"
                            name="contactPreference"
                            type="radio"
                            value="Email"
                            className="h-4 w-4 border-white/10 bg-white/5 text-black focus:ring-white focus:ring-offset-gray-900"
                          />
                          <label
                            htmlFor="contact-preference-email"
                            className="block text-sm font-medium leading-6 text-white"
                          >
                            Email
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="contact-preference-phone"
                            name="contactPreference"
                            type="radio"
                            value="Phone"
                            className="h-4 w-4 border-white/10 bg-white/5 text-black focus:ring-white focus:ring-offset-gray-900"
                          />
                          <label
                            htmlFor="contact-preference-phone"
                            className="block text-sm font-medium leading-6 text-white"
                          >
                            Phone
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="contact-preference-video"
                            name="contactPreference"
                            type="radio"
                            value="Video Call"
                            className="h-4 w-4 border-white/10 bg-white/5 text-black focus:ring-white focus:ring-offset-gray-900"
                          />
                          <label
                            htmlFor="contact-preference-video"
                            className="block text-sm font-medium leading-6 text-white"
                          >
                            Video Call
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showNotification && (
        <MessageSentModal
          show={showNotification}
          onClose={handleCloseNotification}
        />
      )}
    </FadeIn>
  );
}
