import groupWork from "../../../public/groupwork.jpeg";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "../components/FadeIn";
import chase from "../../../public/quinn-headshot.jpg";
import quinn from "../../../public/chase-headshot.jpg";

const stats = [
  {
    label: "Venture Deals Facilitated",
    value: "50+",
    description:
      "Our firm has facilitated over 50 venture capital deals, highlighting our critical role in bringing together innovative startups and forward-thinking investors.",
  },
  {
    label: "Funds Raised for Startups",
    value: "$200M+",
    description:
      "We have helped startups raise over $200 million in funding, providing them with the capital needed to scale operations, innovate, and disrupt their respective industries.",
  },
  {
    "      label": "Client Retention Rate",
    value: "95%",
    description:
      "Our client retention rate of 95% underscores our ability to build lasting relationships, rooted in trust and the consistent success of our venture capital strategies.",
  },
];

const jobOpenings = [
  {
    id: 1,
    role: "Attorney",
    href: "#",
    description:
      "We're seeking a seasoned Attorney specialized in venture capital to navigate complex legal landscapes and drive successful outcomes. Your expertise in venture deals, negotiations, and strategic advisement will play a critical role in our firm's and clients' growth.",
    salary: "$140,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    role: "Legal Assistant",
    href: "#",
    description:
      "As a Legal Assistant, you'll be the backbone of our legal operations, supporting our team in delivering exceptional service. Your organizational skills, attention to detail, and ability to manage multiple tasks efficiently will be pivotal in our success.",
    salary: "$80,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    role: "Copywriter",
    href: "#",
    description:
      "As a Legal Assistant, you'll be the backbone of our legal operations, supporting our team in delivering exceptional service. Your organizational skills, attention to detail, and ability to manage multiple tasks efficiently will be pivotal in our success.",
    salary: "$65,000 USD",
    location: "Remote, USA",
  },
];

const posts = [
  {
    id: 1,
    title: "Navigating the Legal Landscape of Venture Capital",
    href: "#",
    description:
      "Explore the complexities of venture capital law and learn how to safeguard your investments with expert legal guidance. From initial agreements to exit strategies, understand the pivotal role of legal expertise in successful venture funding.",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Feb 25, 2022",
    datetime: "2022-02-25",
    category: { title: "Venture Capital", href: "#" },
    author: {
      name: "Quinn Hayes",
      role: "Commercial Attorney, Cofounder",
      href: "#",
      imageUrl: chase,
    },
  },
  {
    id: 2,
    title: "Structuring Successful Startups: Legal Insights",
    href: "#",
    description:
      "Gain an insider's view on structuring your startup for success. Learn the importance of proper legal frameworks in protecting intellectual property, securing funding, and navigating partnerships. Empower your startup with the foundation it needs to thrive.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Jun 15, 2022",
    datetime: "2022-06-15",
    category: { title: "Startup Law", href: "#" },
    author: {
      name: "Chase Bennet",
      role: "Commercial Attorney, Cofounder",
      href: "#",
      imageUrl: quinn,
    },
  },
  {
    id: 3,
    title: "The Future of Tech Investments: Legal Perspectives",
    href: "#",
    description:
      "Delve into the future of technology investments and the evolving legal challenges. Understand how emerging technologies are reshaping the investment landscape and what it means for investors and startups. Stay ahead with forward-thinking legal strategies.",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Oct 03, 2022",
    datetime: "2022-10-03",
    category: { title: "Tech Investments", href: "#" },
    author: {
      name: "Chase Bennet",
      role: "Commercial Attorney, Cofounder",
      href: "#",
      imageUrl: quinn,
    },
  },
  // More posts...
];

export default function About() {
  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-black ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Announcing our next round of funding.{" "}
                    <a
                      href="#"
                      className="whitespace-nowrap font-semibold text-gray-500"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <FadeIn>
                  <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">
                    We Are For Innovators, Pioneers, and Visionaries.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    We stand with the trailblazers reshaping our world. At the
                    core of our mission lies a commitment to those who dare to
                    dream bigger, push boundaries, and forge new paths. Whether
                    you&apos;re revolutionizing technology, creating sustainable
                    solutions, or disrupting traditional industries, we&apos;re
                    here to support your journey. Our expertise is your
                    resource, from groundbreaking ideas to transformative
                    projects. Join us in driving the next wave of innovation.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={groupWork}
            alt=""
          />
        </div>
      </div>
      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission: Empowering Transformation and Growth
              </h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-gray-600">
                    At the heart of our endeavor lies a profound commitment to
                    fostering innovation and facilitating progress. We dedicate
                    ourselves to supporting individuals and organizations that
                    strive for excellence, pushing the boundaries of what&apo;ss
                    possible. Through collaboration, we aim to unlock potential,
                    driving transformative projects that not only achieve
                    remarkable success but also contribute positively to our
                    global community.
                  </p>
                  <p className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                    Our approach is holistic, recognizing the importance of
                    adaptability, resilience, and visionary thinking in today’s
                    ever-evolving landscape. We believe in the power of
                    collective effort to create lasting change, emphasizing the
                    significance of each contribution, no matter how small. By
                    providing a foundation of support, knowledge, and resources,
                    we aim to inspire a movement of positive growth across
                    various sectors. As we navigate the complexities of modern
                    challenges, our mission remains clear: to be a catalyst for
                    change, empowering pioneers to lead the way toward a
                    brighter, more sustainable future. Together, we can build a
                    legacy of innovation, impact, and inspiration.
                  </p>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col-reverse gap-y-4"
                      >
                        <dt className="text-base leading-7 text-gray-600">
                          {stat.label}
                        </dt>
                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <FadeIn>
              <div className="w-full lg:max-w-lg lg:flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  We’re always looking for awesome people to join us
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  At our core, we believe in harnessing the power of exceptional
                  talent. We&apos;re on the lookout for individuals who bring
                  creativity, passion, and a drive to innovate to our team.
                  Whether you thrive on solving complex challenges, shaping the
                  future of technology, or pushing the boundaries of what&apos;s
                  possible, we want to hear from you. Our environment is one
                  where ambitious minds flourish, collaboration is key, and your
                  potential can be fully realized. If you&apos;re ready to make
                  a significant impact and grow alongside us, let&apos;s
                  connect.
                </p>
                <Image
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                  alt=""
                  width={300}
                  height={300}
                  className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                />
              </div>
            </FadeIn>
            <FadeIn>
              <div className="w-full lg:max-w-xl lg:flex-auto">
                <h3 className="sr-only">Job openings</h3>
                <ul className="-my-8 divide-y divide-gray-100">
                  {jobOpenings.map((opening) => (
                    <li key={opening.id} className="py-8">
                      <dl className="relative flex flex-wrap gap-x-3">
                        <dt className="sr-only">Role</dt>
                        <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                          <a href={opening.href}>
                            {opening.role}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                          </a>
                        </dd>
                        <dt className="sr-only">Description</dt>
                        <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                          {opening.description}
                        </dd>
                        <dt className="sr-only">Salary</dt>
                        <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">
                          {opening.salary}
                        </dd>
                        <dt className="sr-only">Location</dt>
                        <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                          <svg
                            viewBox="0 0 2 2"
                            className="h-0.5 w-0.5 flex-none fill-gray-300"
                            aria-hidden="true"
                          >
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                          {opening.location}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex border-t border-gray-100 pt-8">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-500"
                  >
                    View all openings <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              {" "}
              {/* Optionally wrap the header in FadeIn for a single animation */}
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Discover strategies for business expansion and success through
                our curated expert insights.
              </p>
            </FadeIn>
          </div>
          <FadeInStagger faster={true}>
            {" "}
            {/* Wrap the posts grid in FadeInStagger */}
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <FadeIn key={post.id}>
                  {" "}
                  {/* Wrap each post in FadeIn */}
                  <article className="flex flex-col items-start justify-between">
                    <div className="relative w-full">
                      <Image
                        src={post.imageUrl}
                        alt=""
                        width={300}
                        height={300}
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={post.datetime}
                          className="text-gray-500"
                        >
                          {post.date}
                        </time>
                        <a
                          href={post.category.href}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post.category.title}
                        </a>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {post.description}
                        </p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <Image
                          src={post.author.imageUrl}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-100"
                          width={300}
                          height={300}
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </div>
    </>
  );
}
