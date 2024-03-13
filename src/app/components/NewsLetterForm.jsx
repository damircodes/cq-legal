"use client";

import { useState } from "react";

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
}

export function NewsletterForm() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(""); // Clear previous messages
    setIsError(false); // Reset error state
    const formData = new FormData(event.target);
    const email = formData.get("email");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Thank you for subscribing to our newsletter!");
      } else {
        setMessage(data.error);
        setIsError(true);
      }
    } catch (error) {
      setMessage("An error occurred while subscribing to the newsletter.");
      setIsError(true);
    }
  };

  return (
    <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-sm font-semibold leading-6 text-white">
            Subscribe for our newsletter.
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-300">
            Monthly venture capital industry insights.
          </p>
        </div>
        <div>
          <form
            className="mt-6 sm:flex sm:max-w-md lg:mt-0"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-white sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Fortune Favours The Bold "
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white hover:text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </div>
          </form>
          {message && (
            <p
              className={`mt-4 text-sm ${
                isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
