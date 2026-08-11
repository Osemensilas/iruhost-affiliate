"use client";

import {
  BriefcaseBusiness,
  Code2,
  Globe2,
  Megaphone,
  Rocket,
  UserRoundCheck,
  Users,
  WalletCards,
} from "lucide-react";

const audiences = [
  {
    title: "Developers",
    description:
      "Refer clients for hosting, domains, websites, email, and other digital services.",
    icon: Code2,
  },
  {
    title: "Freelancers",
    description:
      "Add value to your services by connecting clients with reliable IruHost solutions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Agencies",
    description:
      "Offer IruHost services to your clients and earn from successful referrals.",
    icon: Users,
  },
  {
    title: "Content Creators",
    description:
      "Share IruHost with your audience and earn when they use your referral link.",
    icon: Megaphone,
  },
];

const benefits = [
  {
    title: "Anyone, Anywhere",
    description: "Join from anywhere and start earning.",
    icon: Globe2,
  },
  {
    title: "No Experience Needed",
    description: "You don't need to be a tech expert to join.",
    icon: UserRoundCheck,
  },
  {
    title: "Earn Recurring Income",
    description: "Get rewarded as your referrals continue using IruHost.",
    icon: WalletCards,
  },
  {
    title: "Grow With Us",
    description: "More referrals, more earnings, more opportunities.",
    icon: Rocket,
  },
];

export default function WhoCanJoin() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Who Can Join
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-accent sm:text-4xl lg:text-5xl">
            Built for Anyone Who Recommends IruHost
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-accent/60 sm:text-lg">
            If you know people who need digital services, you can earn with
            IruHost.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-grey bg-accent shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image / visual area */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to from-primary/50 via-accent to-grey">
                  
                  {/* Decorative circles */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/25" />
                  <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-primary/30" />

                  {/* Icon */}
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/30 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-10 w-10" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Small corner icon */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-background">
                    {item.title}
                  </h3>

                  <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-primary" />

                  <p className="mt-4 text-sm leading-6 text-text">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-primary/10 bg-primary/5">
          <div className="grid divide-y divide-primary/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-6 lg:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/95 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-accent">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}