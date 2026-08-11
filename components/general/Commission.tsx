"use client";

import {
  ArrowRight,
  CircleDollarSign,
  RefreshCcw,
  ShieldCheck,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";

export default function CommissionStructure() {
  return (
    <section className="bg-accent px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Commission Structure
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
            Earn Every Time Your Referrals Host
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text sm:text-lg">
            At IruHost, we believe in rewarding partnerships. Our commission
            structure is simple, fair, and designed for your success.
          </p>
        </div>

        {/* Main commission card */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-primary/50 bg-gradient-to from-primary/50 to-accent p-6 sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr]">
            {/* Percentage */}
            <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border-8 border-primary bg-accent shadow-xl shadow-primary/10 sm:h-64 sm:w-64">
              <div className="text-center">
                <div className="text-6xl font-black tracking-tight text-primary sm:text-7xl">
                  20%
                </div>

                <div className="mt-2 text-sm font-bold uppercase tracking-wide text-background">
                  Recurring
                  <br />
                  Commission
                </div>
              </div>
            </div>

            {/* Commission information */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <CircleDollarSign className="h-4 w-4" />
                Recurring earnings
              </div>

              <h3 className="max-w-2xl text-2xl font-bold leading-tight text-background sm:text-3xl">
                Earn 20% of every payment your referrals make for as long as
                they remain active customers.
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text">
                When your referrals purchase a hosting plan, you earn a
                percentage of their payment. As they continue hosting with
                IruHost, your commissions can continue to grow.
              </p>

              <div className="mt-7 flex items-center gap-3 rounded-2xl bg-primary/20 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/60 text-acceny">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <p className="text-sm font-semibold text-primary sm:text-base">
                  More referrals. More renewals. More recurring income for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <BenefitCard
            icon={UserPlus}
            title="No Joining Fee"
            description="Joining the IruHost Affiliate Program is completely free."
          />

          <BenefitCard
            icon={Users}
            title="Unlimited Referrals"
            description="Refer as many clients as you can and earn from every successful referral."
          />

          <BenefitCard
            icon={RefreshCcw}
            title="Recurring Earnings"
            description="Earn commissions as your referrals continue hosting with IruHost."
          />

          <BenefitCard
            icon={Wallet}
            title="Easy Payouts"
            description="Track your earnings and request your payout directly from your dashboard."
          />
        </div>

        {/* CTA */}
        <div className="mt-6 overflow-hidden rounded-3xl bg-background p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background text-accent">
                <CircleDollarSign className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-accent">
                  Your success is our success.
                </h3>

                <p className="mt-1 text-sm text-grey sm:text-base">
                  Grow your network and earn recurring income with IruHost.
                </p>
              </div>
            </div>

            <a
              href="/affiliate/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/60 px-6 py-3.5 text-sm font-bold text-backgroundtransition hover:bg-primary"
            >
              Join the Affiliate Program
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-primary/5 bg-accent p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary/90">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-background">{title}</h3>

      <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-primary" />

      <p className="mt-4 text-sm leading-6 text-text">
        {description}
      </p>
    </div>
  );
}