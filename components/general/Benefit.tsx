"use client";

import {
  BadgeCheck,
  BarChart3,
  Megaphone,
  Wallet,
  Gift,
  ArrowRight,
  CircleDollarSign,
} from "lucide-react";

const benefits = [
  {
    title: "Earn Recurring Commissions",
    description:
      "Earn commissions every time your referrals make a payment and continue using IruHost services.",
    icon: CircleDollarSign,
  },
  {
    title: "Wide Range of Services",
    description:
      "Promote hosting, domains, email, website design, SSL, and more — all under one trusted brand.",
    icon: Wallet,
  },
  {
    title: "Real-time Tracking",
    description:
      "Track clicks, sign-ups, sales, and earnings in real-time from your easy-to-use affiliate dashboard.",
    icon: BarChart3,
  },
  {
    title: "Trusted Brand",
    description:
      "IruHost is a brand people can trust. Recommend our services with confidence.",
    icon: BadgeCheck,
  },
  {
    title: "Reliable Payouts",
    description:
      "Enjoy secure and convenient payouts for your successful referrals.",
    icon: Wallet,
  },
  {
    title: "Marketing Support",
    description:
      "Get banners, referral links, and promotional materials to help you reach more customers.",
    icon: Megaphone,
  },
];

export default function AffiliateBenefits() {
  return (
    <section className="bg-accent px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex flex-col items-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Benefits
            </span>

            <span className="mt-3 h-1 w-16 rounded-full bg-primary" />
          </div>

          <h2 className="text-4xl font-black tracking-tight text-background sm:text-5xl lg:text-6xl">
            More Benefits.{" "}
            <span className="text-primary">More Opportunities.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text sm:text-lg">
            Our affiliate program is designed to help you earn more while
            providing value to the people you refer.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-3xl border border-grey/50 bg-accent px-7 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary/10">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full text-primary">
                    <Icon
                      className="h-14 w-14 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-7 text-xl font-bold text-background">
                  {benefit.title}
                </h3>

                {/* Small divider */}
                <div className="mx-auto mt-4 h-1 w-9 rounded-full bg-primary" />

                {/* Description */}
                <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-text/80 sm:text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-primary/20 bg-primary/10 px-6 py-7 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-accent">
                <Gift className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-background sm:text-2xl">
                  Your Success is Our Success
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-text/80 sm:text-base">
                  We are committed to helping you grow your income while
                  helping others grow their online presence.
                </p>
              </div>
            </div>

            {/* Button */}
            <a
              href="/affiliate/register"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-primary/75 px-7 py-4 text-sm font-bold text-accent shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary hover:shadow-xl"
            >
              Join the Affiliate Program
              <ArrowRight className="h-5 w-5" />
            </a>

            {/* Growth graphic */}
            <div className="hidden items-end gap-2 lg:flex">
              <div className="h-5 w-5 rounded-sm bg-primary/40" />
              <div className="h-9 w-5 rounded-sm bg-primary/60" />
              <div className="h-14 w-5 rounded-sm bg-primary/80" />
              <div className="h-20 w-5 rounded-sm bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}