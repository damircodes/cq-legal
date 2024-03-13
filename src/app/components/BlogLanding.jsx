const featuredPost = {
  id: 1,
  title: "Facilitating $75 Million in Series B Funding",
  href: "#",
  description:
    "We at Chase & Quinn are delighted to announce our recent involvement in securing a monumental $75 million in Series B funding for one of our esteemed clients. This pivotal moment reflects not only the innovative vision and relentless dedication of our client's team but also the robust support and strategic guidance provided by Chase & Quinn. Our commitment to fostering growth and facilitating success has once again proven instrumental in unlocking new opportunities for expansion, innovation, and market leadership. We look forward to continuing to support our client's journey towards redefining their industry and achieving unprecedented success. This accomplishment underscores our expertise in navigating complex financial landscapes and our dedication to the success of our clients.",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  author: {
    name: "Michael Foster",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};
const posts = [
  {
    id: 2,
    title: "Spearhead Groundbreaking Merger in the Tech Industry",
    href: "#",
    description:
      "Chase & Quinn proudly facilitated a significant merger between two leading tech companies, marking a transformative moment in the sector. Our involvement ensured a smooth transaction, leveraging our expertise in strategic negotiation and legal precision. This merger creates a powerhouse poised for innovation, market expansion, and enhanced product development. The success of this deal showcases our firm's commitment to guiding clients through complex corporate landscapes. We celebrate this milestone as a testament to our role in shaping the future of technology and business. At Chase & Quinn, we're not just advisors; we're architects of progress, dedicated to our clients' growth and the broader innovation ecosystem.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Secure Pioneering Partnership in Renewable Energy",
    href: "#",
    description:
      "Chase & Quinn is thrilled to announce our instrumental role in establishing a pioneering partnership within the renewable energy sector. This alliance between industry leaders is set to revolutionize green energy initiatives, combining innovative technologies with sustainable practices. Our firm provided strategic counsel and legal expertise, facilitating a partnership that promises significant advancements in renewable energy solutions. This collaboration underscores our commitment to supporting sustainable development and our capability in navigating complex negotiations to achieve groundbreaking results. This partnership not only highlights our dedication to environmental stewardship but also positions Chase & Quinn as a key player in promoting renewable energy ventures. We're excited to contribute to a greener future and continue supporting initiatives that drive positive change.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

import { FadeIn } from "./FadeIn";

export function BlogLanding() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <FadeIn>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
          <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
            <time
              dateTime={featuredPost.datetime}
              className="block text-sm leading-6 text-gray-600"
            >
              {featuredPost.date}
            </time>
            <h2
              id="featured-post"
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {featuredPost.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {featuredPost.description}
            </p>
            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
              <div className="flex">
                <a
                  href={featuredPost.href}
                  className="text-sm font-semibold leading-6 text-black"
                  aria-describedby="featured-post"
                >
                  Continue reading <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
                <a
                  href={featuredPost.author.href}
                  className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                >
                  <img
                    src={featuredPost.author.imageUrl}
                    alt=""
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                  />
                  {featuredPost.author.name}
                </a>
              </div>
            </div>
          </article>
          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-900/10">
              {posts.map((post) => (
                <article key={post.id} className="py-12">
                  <div className="group relative max-w-xl">
                    <time
                      dateTime={post.datetime}
                      className="block text-sm leading-6 text-gray-600"
                    >
                      {post.date}
                    </time>
                    <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-4 flex">
                    <a
                      href={post.author.href}
                      className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                    >
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-gray-50"
                      />
                      {post.author.name}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
