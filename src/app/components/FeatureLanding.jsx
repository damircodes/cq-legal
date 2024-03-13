import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import { FadeIn, FadeInStagger } from "./FadeIn";

const features = [
  {
    name: "Unlimited inboxes",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Manage team members",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Spam report",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: TrashIcon,
  },
];

export function FeatureLanding() {
  return (
    <div className="bg-slate-200 py-24 sm:py-32 sm:my-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <FadeIn>
            {" "}
            {/* Keep the header in a single FadeIn if desired */}
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Stay on top of customer support
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </FadeIn>
        </div>
        <FadeInStagger faster={true}>
          {" "}
          {/* Wrap the features in FadeInStagger */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <FadeIn key={feature.name}>
                  {" "}
                  {/* Wrap each feature in FadeIn */}
                  <div className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-black">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                        <feature.icon
                          className="h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-black">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6 text-black"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                </FadeIn>
              ))}
            </dl>
          </div>
        </FadeInStagger>
      </div>
    </div>
  );
}
