import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function MessageSentModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div aria-live="assertive" className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4 text-center">
          <Transition
            show={show}
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="transform bg-gray-200 overflow-hidden w-96 rounded-lg bg-white p-4 text-left align-middle shadow-xl transition-all">
              <div className="flex items-start">
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-lg font-medium text-gray-900">
                    Your Message Has Been Sent
                  </p>
                  <p className="mt-1 text-md text-gray-500">
                    We will be in touch with you shortly.
                  </p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    onClick={() => setShow(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon
                      className="h-5 w-5 bg-black rounded rounded-md text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
