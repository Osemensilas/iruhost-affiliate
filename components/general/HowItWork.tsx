"use client";

import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Link2,
  ShoppingCart,
  Trophy,
  UserRoundPlus,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Join the Program",
    description:
      "Sign up for free and create your affiliate account in minutes.",
    icon: UserRoundPlus,
  },
  {
    number: "02",
    title: "Share Your Link",
    description:
      "Get your unique referral link and share it with your audience, clients, or network.",
    icon: Link2,
  },
  {
    number: "03",
    title: "They Buy",
    description:
      "When someone signs up or purchases an IruHost service through your link.",
    icon: ShoppingCart,
  },
  {
    number: "04",
    title: "You Earn",
    description:
      "You earn a 20% recurring commission for as long as they remain an active customer.",
    icon: CircleDollarSign,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8">
      {/* Decorative dots */}
      <div className="absolute right-8 top-8 hidden h-28 w-28 opacity-50 sm:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#D4AF37 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            How It Works
          </p>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />

          <h2 className="mt-6 text-4xl font-black tracking-tight text-accent sm:text-5xl lg:text-6xl">
            Simple Steps.{" "}
            <span className="text-primary">Real Rewards.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-grey sm:text-lg">
            Getting started is easy. Follow these simple steps and start
            earning with the IruHost Affiliate Program.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">

          {/* Connecting line - desktop */}
          <div className="absolute left-[12%] right-[12%] top-39.5 hidden border-t-2 border-dashed border-primary/20 lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >
                  {/* Step visual */}
                  <div className="relative mx-auto h-64 w-64">

                    {/* Number */}
                    <div className="absolute left-0 top-0 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-black text-accent shadow-lg">
                      {step.number}
                    </div>

                    {/* Circle */}
                    <div className="absolute inset-0 flex items-center justify-center rounded-full border border-primary/10 bg-gradient-to from-primary/20 to-accent">
                      
                      {/* Main icon container */}
                      <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-accent shadow-xl shadow-primary/10">
                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon
                            className="h-12 w-12"
                            strokeWidth={1.7}
                          />
                        </div>hbn
                      </div>

                      {/* Small decorative icon */}
                      <div className="absolute bottom-2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-accent bg-primary/10 text-primary shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* Success check on step 3 */}
                      {index === 2 && (
                        <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-accent shadow-lg">
                          <CheckCircle2 className="h-7 w-7" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Connector arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-6.75 top-35 z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-accent shadow-lg lg:flex">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}

                  {/* Text */}
                  <div className="mx-auto mt-7 max-w-xs">
                    <h3 className="text-xl font-bold text-background sm:text-2xl">
                      {step.title}
                    </h3>

                    <div className="mx-auto mt-4 h-1 w-9 rounded-full bg-primary" />

                    <p className="mt-5 text-sm leading-7 text-grey sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-primary/20 bg-primary/10 px-6 py-8 sm:px-10 lg:px-12">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Left content */}
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-accent shadow-lg">
                <Trophy className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-accent sm:text-3xl">
                  More Referrals. More Earnings.
                </h3>

                <p className="mt-2 text-sm leading-6 text-grey sm:text-base">
                  The more you refer, the more you earn.
                  <br className="hidden sm:block" />
                  There is no limit to your potential!
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/affiliate/register"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-primary/80 px-7 py-4 text-base font-bold text-accent shadow-lg shadow-primary/10 transition-all duration-300 hover:bg-primary hover:shadow-xl"
            >
              Join the Affiliate Program
              <ArrowRight className="h-5 w-5" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}