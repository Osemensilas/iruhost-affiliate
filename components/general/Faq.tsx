"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  Mail,
  ArrowRight,
  MessageCircleQuestion,
} from "lucide-react";

const faqs = [
  {
    question: "What is the IruHost Affiliate Program?",
    answer:
      "The IruHost Affiliate Program allows you to earn commissions by referring customers to IruHost services. You earn a commission when someone makes a successful purchase through your referral link.",
  },
  {
    question: "How do I join the affiliate program?",
    answer:
      "Joining is simple and free. Create an affiliate account, complete your profile, and you'll receive your unique referral link that you can start sharing.",
  },
  {
    question: "How do I earn commissions?",
    answer:
      "You earn commissions when customers purchase eligible IruHost services through your unique referral link. Your referrals and commissions can be tracked from your affiliate dashboard.",
  },
  {
    question: "What services can I promote?",
    answer:
      "You can promote eligible IruHost services including web hosting, domains, business email, website development, SSL and other digital services available through IruHost.",
  },
  {
    question: "When and how do I get paid?",
    answer:
      "Your approved commissions become available for withdrawal according to the IruHost affiliate payout policy. You can request your payout directly from your affiliate dashboard.",
  },
  {
    question: "Is there a minimum payout amount?",
    answer:
      "The minimum payout amount depends on the current IruHost affiliate payout policy. Your dashboard will show your available balance and payout status.",
  },
  {
    question: "Do I need a website to join?",
    answer:
      "No. You don't need to own a website. You can share your referral link through your network, social media, WhatsApp, email, or other permitted channels.",
  },
  {
    question: "Who can join the affiliate program?",
    answer:
      "Developers, freelancers, agencies, content creators, entrepreneurs, business owners, and anyone with a network of people who may need IruHost services can join.",
  },
];

export default function AffiliateFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-accent px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary">
            FAQ
          </span>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />

          <h2 className="mt-6 text-4xl font-black tracking-tight text-background sm:text-5xl">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-text/80 sm:text-lg">
            Find answers to common questions about the IruHost Affiliate
            Program.
          </p>
        </div>

        {/* Main FAQ area */}
        <div className="mt-12 grid gap-7 lg:grid-cols-[0.75fr_1.45fr]">

          {/* Left panel */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to- from-primary/15 to-accent p-7 sm:p-9">

            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/30" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/35" />

            <div className="relative">

              <h3 className="text-3xl font-black leading-tight text-background">
                Got Questions?
                <br />
                <span className="text-primary">
                  We have Got Answers.
                </span>
              </h3>

              <div className="mt-5 h-1 w-16 rounded-full bg-primary" />

              <p className="mt-6 max-w-sm text-base leading-7 text-text/80">
                Everything you need to know about joining, earning, and getting
                paid through the IruHost Affiliate Program.
              </p>

              {/* Question illustration */}
              <div className="relative mx-auto mt-10 flex h-64 max-w-sm items-center justify-center">

                {/* Green speech bubble */}
                <div className="absolute left-10 top-4 flex h-36 w-48 items-center justify-center rounded-[45%] bg-primary/96 shadow-xl shadow-primary/20">
                  <span className="text-7xl font-black text-accent">?</span>

                  {/* Bubble tail */}
                  <div className="absolute bottom-4.5 left-12 h-10 w-10 rotate-45 bg-primary/95" />
                </div>

                {/* White speech bubble */}
                <div className="absolute bottom-6 right-5 flex h-28 w-44 items-center justify-center rounded-[40%] bg-accent shadow-xl">
                  <div className="flex gap-3">
                    <span className="h-4 w-4 rounded-full bg-primary/80" />
                    <span className="h-4 w-4 rounded-full bg-primary/80" />
                    <span className="h-4 w-4 rounded-full bg-primary/80" />
                  </div>

                  {/* Bubble tail */}
                  <div className="absolute bottom-3 right-12 h-7 w-7 rotate-45 bg-accent" />
                </div>

                {/* Plant */}
                <div className="absolute bottom-0 left-4">
                  <div className="relative mx-auto h-24 w-10">
                    <div className="absolute bottom-0 left-1/2 h-12 w-3 -translate-x-1/2 rounded-full bg-primary" />

                    <div className="absolute bottom-10 left-0 h-10 w-6 -rotate-45 rounded-full bg-primary/80" />
                    <div className="absolute bottom-14 left-4 h-11 w-6 rotate-12 rounded-full bg-primary/90" />
                    <div className="absolute bottom-10 right-0 h-10 w-6 rotate-45 rounded-full bg-primary/80" />
                  </div>

                  <div className="h-7 w-16 rounded-b-[50%] rounded-t-md bg-grey/60" />
                </div>

                {/* Ground */}
                <div className="absolute bottom-0 left-1/2 h-6 w-72 -translate-x-1/2 rounded-[50%] bg-accent shadow-lg" />
              </div>

              {/* Contact card */}
              <div className="relative mt-8 rounded-2xl border border-grey/10 bg-accent p-5 shadow-sm">
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-bold text-background">
                      Still have questions?
                    </p>

                    <p className="mt-1 text-sm text-grey">
                      We are here to help!
                    </p>

                    <a
                      href="/contact"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary/80 hover:text-primary"
                    >
                      Contact our support team
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* FAQ accordion */}
          <div className="rounded-3xl border border-grey/40 bg-accent p-4 shadow-sm sm:p-6">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`${
                    index !== faqs.length - 1
                      ? "border-b border-grey/40"
                      : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center gap-4 px-3 py-5 text-left sm:px-5"
                    aria-expanded={isOpen}
                  >
                    {/* Question icon */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-primary/40 text-primary"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      <CircleHelp className="h-5 w-5" />
                    </div>

                    {/* Question */}
                    <span className="flex-1 text-base font-bold text-background sm:text-lg">
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <div className="shrink-0 text-primary">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mx-3 mb-5 rounded-2xl bg-primary/15 px-5 py-5 sm:mx-5">
                        <p className="text-sm leading-7 text-text sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 flex flex-col items-center justify-between gap-5 rounded-3xl bg-background px-6 py-7 text-center sm:flex-row sm:text-left sm:px-9">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/80 text-accent">
              <MessageCircleQuestion className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-bold text-accent">
                Still have questions?
              </h3>

              <p className="mt-1 text-sm text-grey/40">
                Our team is happy to help.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary/80 px-6 py-3 font-bold text-accent transition hover:bg-primary"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}