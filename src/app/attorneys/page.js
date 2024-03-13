import quinn from "../../../public/quinn-headshot.jpg";
import chase from "../../../public/chase-headshot.jpg";
import Image from "next/image";

const people = [
  {
    name: "Chase Bennet",
    role: "Commercial Attorney, Cofounder",
    imageUrl: chase,
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Quinn Hayes",
    role: "Commercial Attorney, Cofounder",
    imageUrl: quinn,
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];

export default function Attorneys() {
  return (
    <>
      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We&apos;re a dynamic group of individuals who are passionate about
              what we do.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  className="mx-auto h-56 w-56 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.xUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">X</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-gray-400">
              Hello, I&apos;m
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Chase Bennet
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Chase is a graduate of the University of Columbia, where he
                  earned his B.A in Commerce with Honors. Chase spent five years
                  in New York, working in commercial law in financial sector.
                  With Fortune 500 companies in his portfolio, Chase went on to
                  start is own firm in the heart of his home city, an
                  entrepreneurial spirit led Chase to sucessfully assist startup
                  companies in New York. Later, after starting his own firm,
                  Chase has never looked back. Having scored in the top three
                  percent on the LSTAT, VRAP, and GCT, Chase used his adademic
                  qualifications to help American startups get off the ground
                  and compete in an international market.
                </p>
                {/* <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas.
                </p> */}
              </div>
              <div>
                <p>
                  Serving as General Counsel to multiple venture funds and
                  projects in New York, this individual has been instrumental in
                  assisting with 300 Seed stage through Series C funding rounds,
                  valuing from $250k to $12M. Additionally, their role has
                  expanded to General Counsel for numerous venture funds and
                  accelerators. Their expertise includes representing a modern
                  sports company in its successful exit, alongside representing
                  dozens of VFR and Football Companies. Further showcasing their
                  diverse experience, they have successfully represented a New
                  York-based science platform and a technology start-up in their
                  respective $20M exits to private equity acquisitions,
                  highlighting their significant contributions to the success of
                  these companies and ventures.
                </p>
                {/* <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p> */}
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                >
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-gray-700">
              Hello, I&apos;m
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Quinn Hayes
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-black lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Originally from San Francisco Quinn is a named partner at CQ,
                  where he divides his practice between corporate cases and a
                  vast array of corporate matters. Quinn focuses on commercial
                  disputes, corporate administration, venture capital, and fund
                  representation. Quinn went partnership with Chase in 2018,
                  where they had won the 2020 American National Law awards.
                  Quinn represents multiple companies ranging from early-stage
                  startups to Fortune-500 companies, acting as a principal
                  lawyer Quinn and providing them with guidance on myriad
                  business transactions, which range from legal matters to
                  general operational issues.
                </p>
                {/* <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas.
                </p> */}
              </div>
              <div>
                <p>
                  As General Counsel for a Seattle-based company valued at over
                  $120M, this individual has played a pivotal role across
                  various sectors, including a software company and a
                  real-estate firm within the same city. Their diverse legal
                  expertise is further demonstrated through the representation
                  of a data science startup, securing $3M in venture financing.
                  Additionally, they have facilitated a $6M capital financing
                  for a Seattle-based restaurant, enabling the opening of two
                  new locations. Their portfolio also includes representing a
                  Seattle-based film studio in a $1M acquisition, and providing
                  legal guidance for a Seattle-based investment group in a
                  strategic $1.4M investment, showcasing their wide-ranging
                  influence and significant contributions to the growth and
                  success of these entities.
                </p>
                {/* <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p> */}
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex flex-col-reverse gap-y-3 border-l border-black/20 pl-6"
                >
                  <dt className="text-base leading-7 text-gray-800">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-black">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
