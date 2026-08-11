"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileQuestion,
  Gift,
  Headphones,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Play,
  Search,
  Send,
  Ticket,
} from "lucide-react";

export default function SupportContent() {
  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Support Center
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            We're here to help you succeed. Find answers or get in touch with
            our support team.
          </p>
        </div>


        {/* HELP HERO */}
        <section className="relative overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-r from-white via-green-50/60 to-green-100/50 p-6 sm:p-8">

          <div className="relative z-10 max-w-2xl">

            <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
              How can we help you today?
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
              Search our help center or browse through our resources to find
              the answers you need.
            </p>


            {/* SEARCH */}
            <div className="mt-6 flex max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

              <div className="flex flex-1 items-center gap-3 px-4">

                <Search className="h-5 w-5 shrink-0 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="w-full bg-transparent py-3 text-xs text-slate-700 outline-none placeholder:text-slate-400"
                />

              </div>

              <button
                type="button"
                className="m-1 rounded-lg bg-green-700 px-5 py-2 text-xs font-bold text-white transition hover:bg-green-800"
              >
                Search
              </button>

            </div>

          </div>


          {/* DECORATION */}
          <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block">

            <div className="relative flex h-48 w-80 items-center justify-center">

              <div className="absolute h-40 w-40 rounded-full bg-green-100/70" />

              <div className="relative rounded-2xl bg-green-600 px-8 py-5 text-2xl font-black text-white shadow-lg">

                We&apos;re here
                <br />
                to help!

                <div className="absolute -bottom-5 left-7 h-0 w-0 border-l-[18px] border-r-[18px] border-t-[25px] border-l-transparent border-r-transparent border-t-green-600" />

              </div>


              <div className="absolute -top-2 left-12 flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-700 shadow-md">
                <MessageCircle className="h-6 w-6" />
              </div>

              <div className="absolute -right-2 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-700 shadow-md">
                <Mail className="h-6 w-6" />
              </div>

              <div className="absolute bottom-0 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-700 shadow-md">
                <Headphones className="h-6 w-6" />
              </div>

            </div>

          </div>

        </section>


        {/* SUPPORT OPTIONS */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <SupportOption
            icon={<MessageCircle className="h-6 w-6" />}
            iconClass="bg-green-50 text-green-600"
            title="Submit a Ticket"
            description="Get help from our support team"
          />

          <SupportOption
            icon={<BookOpen className="h-6 w-6" />}
            iconClass="bg-blue-50 text-blue-600"
            title="Knowledge Base"
            description="Browse articles and guides"
          />

          <SupportOption
            icon={<HelpCircle className="h-6 w-6" />}
            iconClass="bg-purple-50 text-purple-600"
            title="FAQs"
            description="Find answers to common questions"
          />

          <SupportOption
            icon={<Play className="h-6 w-6" />}
            iconClass="bg-orange-50 text-orange-600"
            title="Video Tutorials"
            description="Watch step-by-step video guides"
          />

        </div>


        {/* MAIN CONTENT */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.5fr_0.8fr]">


          {/* LEFT */}
          <div className="space-y-5">

            {/* POPULAR ARTICLES */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <FileQuestion className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-sm font-black text-slate-950">
                      Popular Articles
                    </h2>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Helpful resources for IruHost affiliates
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  className="hidden items-center gap-1 text-xs font-bold text-green-700 sm:flex"
                >
                  View All Articles
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>


              <div className="mt-5">

                <Article
                  icon={<Gift className="h-4 w-4" />}
                  title="Getting Started as an IruHost Affiliate"
                  description="Learn the basics of our affiliate program and how to get started."
                  tag="Getting Started"
                  tagClass="bg-green-50 text-green-700"
                />

                <Article
                  icon={<WalletIcon />}
                  title="How Commissions & Payouts Work"
                  description="Understand our commission structure and payout process."
                  tag="Payments"
                  tagClass="bg-blue-50 text-blue-700"
                />

                <Article
                  icon={<Send className="h-4 w-4" />}
                  title="How to Promote IruHost Effectively"
                  description="Best practices and tips to maximize your earnings."
                  tag="Marketing"
                  tagClass="bg-purple-50 text-purple-700"
                />

                <Article
                  icon={<BookOpen className="h-4 w-4" />}
                  title="Understanding Your Dashboard"
                  description="A complete guide to navigating your affiliate dashboard."
                  tag="Dashboard"
                  tagClass="bg-orange-50 text-orange-700"
                />

                <Article
                  icon={<HelpCircle className="h-4 w-4" />}
                  title="Frequently Asked Questions"
                  description="Answers to the most common questions from our affiliates."
                  tag="FAQ"
                  tagClass="bg-yellow-50 text-yellow-700"
                  last
                />

              </div>

            </section>


            {/* STILL NEED HELP */}
            <section className="rounded-2xl border border-green-100 bg-gradient-to-r from-green-50 to-white p-5">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Headphones className="h-7 w-7" />
                  </div>

                  <div>

                    <h2 className="text-sm font-black text-slate-950">
                      Still need help?
                    </h2>

                    <p className="mt-1 max-w-md text-[11px] leading-5 text-slate-500">
                      We&apos;re here for you 24/7. Our support team is always ready
                      to help you succeed.
                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-xs font-bold text-white transition hover:bg-green-800"
                >
                  Contact Support
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>

            </section>

          </div>


          {/* RIGHT */}
          <div className="space-y-5">

            {/* CONTACT SUPPORT */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <h2 className="text-sm font-black text-slate-950">
                Contact Support
              </h2>

              <p className="mt-1 text-[10px] text-slate-500">
                Choose your preferred way to get in touch with us.
              </p>


              <div className="mt-5 space-y-3">

                <ContactMethod
                  icon={<MessageCircle className="h-5 w-5" />}
                  iconClass="bg-green-50 text-green-600"
                  title="Live Chat"
                  description="Chat with our support team instantly"
                  status="Online"
                  statusClass="bg-green-100 text-green-700"
                />

                <ContactMethod
                  icon={<Mail className="h-5 w-5" />}
                  iconClass="bg-blue-50 text-blue-600"
                  title="Email Support"
                  description="support@iruhost.com"
                  extra="We typically reply within 2-4 hours"
                />

                <ContactMethod
                  icon={<Clock3 className="h-5 w-5" />}
                  iconClass="bg-purple-50 text-purple-600"
                  title="Response Time"
                  description="Monday - Friday: 24 hours"
                  extra="Weekend: 48 hours"
                />

                <ContactMethod
                  icon={<Phone className="h-5 w-5" />}
                  iconClass="bg-orange-50 text-orange-600"
                  title="WhatsApp Support"
                  description="+234 901 234 5678"
                  extra="Mon - Fri: 9AM - 6PM (WAT)"
                  last
                />

              </div>

            </section>


            {/* MY TICKETS */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-sm font-black text-slate-950">
                    My Support Tickets
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Track your support requests
                  </p>

                </div>

                <button
                  type="button"
                  className="text-[10px] font-bold text-green-700"
                >
                  View All Tickets
                </button>

              </div>


              <div className="mt-5">

                <TicketRow
                  title="Payout not received"
                  id="#TKT-2024-000123"
                  status="In Progress"
                  statusClass="bg-blue-50 text-blue-600"
                  updated="Updated 2 hours ago"
                />

                <TicketRow
                  title="How to track referrals"
                  id="#TKT-2024-000122"
                  status="Resolved"
                  statusClass="bg-green-50 text-green-600"
                  updated="Updated 1 day ago"
                  last
                />

              </div>


              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-green-600 py-2.5 text-xs font-bold text-green-700 transition hover:bg-green-50"
              >
                Create New Ticket
                <Ticket className="h-4 w-4" />
              </button>

            </section>

          </div>

        </div>

      </div>
    </main>
  );
}


/* ================================================= */
/* SUPPORT OPTION */
/* ================================================= */

function SupportOption({
  icon,
  iconClass,
  title,
  description,
}: {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-green-200 hover:shadow-md"
    >

      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <h3 className="text-xs font-black text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-slate-500">
          {description}
        </p>

      </div>

      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-green-600" />

    </button>
  );
}


/* ================================================= */
/* ARTICLE */
/* ================================================= */

function Article({
  icon,
  title,
  description,
  tag,
  tagClass,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  tagClass: string;
  last?: boolean;
}) {
  return (
    <button
      type="button"
      className={`group flex w-full items-center gap-3 py-3 text-left ${
        !last ? "border-b border-slate-100" : ""
      }`}
    >

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-xs font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-1 truncate text-[10px] text-slate-500">
          {description}
        </p>

      </div>

      <span
        className={`hidden shrink-0 rounded-full px-2 py-1 text-[9px] font-bold sm:inline-block ${tagClass}`}
      >
        {tag}
      </span>

      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-green-600" />

    </button>
  );
}


/* ================================================= */
/* CONTACT METHOD */
/* ================================================= */

function ContactMethod({
  icon,
  iconClass,
  title,
  description,
  extra,
  status,
  statusClass,
  last = false,
}: {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  description: string;
  extra?: string;
  status?: string;
  statusClass?: string;
  last?: boolean;
}) {
  return (
    <button
      type="button"
      className={`group flex w-full items-center gap-3 rounded-lg p-3 text-left transition hover:bg-slate-50 ${
        !last ? "border-b border-slate-100" : ""
      }`}
    >

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <div className="flex items-center gap-2">

          <p className="text-xs font-bold text-slate-800">
            {title}
          </p>

          {status && (
            <span
              className={`rounded-full px-2 py-0.5 text-[8px] font-bold ${statusClass}`}
            >
              {status}
            </span>
          )}

        </div>

        <p className="mt-1 text-[10px] text-slate-600">
          {description}
        </p>

        {extra && (
          <p className="mt-1 text-[9px] text-slate-400">
            {extra}
          </p>
        )}

      </div>

      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-green-600" />

    </button>
  );
}


/* ================================================= */
/* TICKET ROW */
/* ================================================= */

function TicketRow({
  title,
  id,
  status,
  statusClass,
  updated,
  last = false,
}: {
  title: string;
  id: string;
  status: string;
  statusClass: string;
  updated: string;
  last?: boolean;
}) {
  return (
    <button
      type="button"
      className={`group flex w-full items-center gap-3 py-3 text-left ${
        !last ? "border-b border-slate-100" : ""
      }`}
    >

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
        <Ticket className="h-4 w-4" />
      </div>

      <div className="min-w-0 flex-1">

        <p className="truncate text-xs font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          {id}
        </p>

      </div>

      <div className="hidden text-right sm:block">

        <span
          className={`rounded-full px-2 py-1 text-[8px] font-bold ${statusClass}`}
        >
          {status}
        </span>

        <p className="mt-1 text-[8px] text-slate-400">
          {updated}
        </p>

      </div>

      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-green-600" />

    </button>
  );
}


/* ================================================= */
/* WALLET ICON */
/* ================================================= */

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M20 7V6a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v8a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V7" />
      <path d="M16 14h.01" />
    </svg>
  );
}