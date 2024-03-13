import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import {
  ArrowsPointingInIcon,
  BanknotesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Startups",
    description:
      "At Chase & Quinn, we understand the unique challenges and opportunities facing startups and emerging companies in today's fast-paced market. Our dedicated team provides tailored legal guidance to ensure your venture's foundation is solid, from choosing the right corporate structure to protecting your intellectual property. We are committed to supporting our clients through every growth stage, offering strategic advice on equity and debt financing, negotiating with investors, and managing employment agreements. With our comprehensive support, we help startups not just navigate the legal landscape but thrive within it, positioning them for successful fundraising, strategic partnerships, and long-term success.",
    href: "#",
    icon: RocketLaunchIcon,
  },
  {
    name: "VC Funding",
    description:
      "Chase & Quinn stands at the forefront of venture capital financing, offering unmatched expertise to both investors and growing enterprises. Our practice is centered on facilitating smooth and successful venture capital transactions, ensuring our clients are well-prepared for each investment stage. From negotiating term sheets to conducting thorough due diligence, our team expertly handles all aspects of venture financing agreements. We work closely with our clients to understand their objectives, providing personalized advice that aligns with their strategic goals. Our proven track record in venture capital financing helps secure favorable terms for our clients, fostering strong investor relationships and paving the way for future growth opportunities.",
    href: "#",
    icon: BanknotesIcon,
  },
  {
    name: "Mergers, Acquisitions, & Exits",
    description:
      "In the dynamic field of mergers, acquisitions, and exit strategies, Chase & Quinn provides strategic legal solutions that drive success. Our experienced team advises both buyers and sellers in complex M&A transactions, ensuring seamless processes that protect our clients' interests and maximize value. We excel in structuring deals, negotiating terms, and navigating regulatory landscapes to facilitate efficient and effective transactions. For venture capital-backed companies looking towards exit strategies, our firm offers expert guidance, from preparing for sale or IPO to negotiating the best possible outcomes. At Chase & Quinn, we are committed to achieving your business objectives, leveraging our legal expertise to ensure a smooth transition at every transaction stage.",
    href: "#",
    icon: ArrowsPointingInIcon,
  },
];

export function PracticeAreasComponent() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Specialists In Commercial Law
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            For a compelling revision that highlights the expertise in
            commercial law, consider the following text: Leading Authorities in
            Commercial Law Navigating the complexities of commercial law demands
            unparalleled expertise and a proactive approach. At our firm, we
            pride ourselves on delivering legal solutions that not only protect
            but also propel your business forward. Our seasoned team is adept at
            handling a broad spectrum of commercial challenges, offering
            strategic counsel and robust support to ensure your enterprise
            thrives in a competitive landscape. Whether it&apsos;s negotiating
            high-stakes deals, safeguarding intellectual property, or resolving
            disputes, our commitment is to your success every step of the way.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200">
                    <feature.icon
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-gray-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
