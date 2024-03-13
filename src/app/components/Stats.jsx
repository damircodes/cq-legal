const stats = [
  { id: 1, name: "Startups Helped", value: "30+" },
  { id: 2, name: "Success Rate for Funding Rounds", value: "95%" },
  { id: 3, name: "Client Satisfaction Rate", value: "98%" },
  { id: 4, name: "Year Over Year Creator Earnings", value: "$150%" },
];

import { FadeIn } from "./FadeIn";

export function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Championed by Creatives Globally
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                In the heart of every creator lies a unique vision waiting to be
                unleashed. We stand as the trusted partner to artists,
                innovators, and visionaries worldwide, providing the support and
                guidance needed to bring extraordinary ideas to life. Our
                commitment to nurturing creativity knows no bounds, offering a
                foundation of trust and expertise that empowers you to explore,
                create, and succeed. Join a community where your potential is
                limitless, and your vision is valued.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/30 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
