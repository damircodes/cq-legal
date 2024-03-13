import { FadeIn, FadeInStagger } from "./FadeIn";

export function LogoCloud() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Our Clients
        </h2>
        <FadeInStagger faster={true}>
          {" "}
          {/* Wrap the logos in FadeInStagger */}
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {[
              "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg",
              "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg",
              "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg",
              "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg",
              "https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg",
              // Add more logos as necessary
            ].map((logoUrl, index) => (
              <FadeIn key={index}>
                {" "}
                {/* Wrap each logo in FadeIn */}
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={logoUrl}
                  alt=""
                  width={158}
                  height={48}
                />
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </div>
  );
}
