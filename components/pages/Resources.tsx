"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Headphones,
  Image as ImageIcon,
  PlayCircle,
  Search,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

const quickResources = [
  {
    title: "Affiliate Guide",
    description: "Learn how to become a successful IruHost affiliate.",
    button: "View Guide",
    icon: BookOpen,
    iconClass: "bg-green-100 text-green-600",
    buttonClass: "border-green-300 text-green-700 hover:bg-green-50",
  },
  {
    title: "Video Training",
    description: "Short videos to help you promote effectively.",
    button: "Watch Videos",
    icon: PlayCircle,
    iconClass: "bg-blue-100 text-blue-600",
    buttonClass: "border-blue-300 text-blue-700 hover:bg-blue-50",
  },
  {
    title: "Marketing Materials",
    description: "Banners, logos, social media posts and more.",
    button: "View Assets",
    icon: ImageIcon,
    iconClass: "bg-purple-100 text-purple-600",
    buttonClass: "border-purple-300 text-purple-700 hover:bg-purple-50",
  },
  {
    title: "Tools & Support",
    description: "Useful tools and support resources.",
    button: "Get Support",
    icon: Wrench,
    iconClass: "bg-orange-100 text-orange-600",
    buttonClass: "border-orange-300 text-orange-700 hover:bg-orange-50",
  },
];

const featuredResources = [
  {
    title: "IruHost Brand Kit",
    description:
      "Download our official brand kit including logo, colors and more.",
    type: "Assets",
    format: "PDF",
    image: "/resources/brand-kit.png",
    action: "Download",
    icon: Download,
  },
  {
    title: "Complete Affiliate Guide",
    description:
      "Step-by-step guide to help you grow and earn with IruHost.",
    type: "Guide",
    format: "PDF",
    image: "/resources/affiliate-guide.png",
    action: "View",
    icon: ArrowRight,
  },
  {
    title: "Social Media Templates",
    description:
      "Ready-to-use post templates for all major social platforms.",
    type: "Templates",
    format: "DOCX",
    image: "/resources/social-templates.png",
    action: "Download",
    icon: Download,
  },
  {
    title: "Promotional Videos",
    description:
      "High-quality videos to boost your promotions and reach.",
    type: "Videos",
    format: "MP4",
    image: "/resources/promotional-video.png",
    action: "Watch",
    icon: PlayCircle,
  },
];

const recommendedSteps = [
  {
    number: 1,
    title: "Complete your affiliate profile",
    description: "Let clients know who you are.",
  },
  {
    number: 2,
    title: "Share your referral link",
    description: "Use social media, email or your website.",
  },
  {
    number: 3,
    title: "Start earning",
    description: "Turn your clicks into commissions!",
  },
];

export default function ResourcesContent() {
  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1500px]">

        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950">
              Resources
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Everything you need to succeed is right here. Get access to
              guides, templates, promotional assets and more.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-[290px]">

            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search resources..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />

          </div>

        </div>


        {/* ========================================= */}
        {/* CATEGORY TABS */}
        {/* ========================================= */}

        <div className="mt-6 overflow-x-auto">

          <div className="flex min-w-max gap-2">

            <ResourceTab label="All Resources" active />
            <ResourceTab label="Guides" />
            <ResourceTab label="Templates" />
            <ResourceTab label="Marketing Assets" />
            <ResourceTab label="Training" />
            <ResourceTab label="Tools & Support" />

          </div>

        </div>


        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}

        <section className="relative mt-5 overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-r from-green-50 via-white to-green-100 px-6 py-8 sm:px-8">

          {/* Decorative circles */}
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-green-100/60" />

          <div className="absolute bottom-[-70px] right-[25%] h-44 w-44 rounded-full bg-green-50" />


          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <BookOpen className="h-5 w-5" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                  Affiliate Resources
                </span>

              </div>


              <h2 className="mt-4 max-w-xl text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Grow Together with IruHost
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                We support our affiliates with the best tools, resources and
                guidance to help you succeed. Explore our resources and start
                turning your referrals into real earnings.
              </p>


              <button
                type="button"
                className="mt-5 flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-xs font-bold text-white transition hover:bg-green-800"
              >
                Start Exploring
                <ArrowRight className="h-4 w-4" />
              </button>

            </div>


            {/* Hero visual */}
            <div className="hidden min-h-[170px] items-center justify-center lg:flex">

              <div className="relative">

                <div className="flex h-40 w-64 items-center justify-center rounded-xl border-4 border-slate-700 bg-slate-900 shadow-xl">

                  <div className="text-center">

                    <p className="text-xs font-bold text-green-400">
                      IruHost
                    </p>

                    <p className="mt-2 text-lg font-black text-white">
                      Affiliate
                    </p>

                    <p className="text-xs text-slate-400">
                      Resources
                    </p>

                  </div>

                </div>


                <div className="absolute -right-20 top-2 rounded-xl border border-green-100 bg-white px-4 py-2 shadow-lg">

                  <p className="text-[10px] font-bold text-green-700">
                    Better Tools
                  </p>

                </div>


                <div className="absolute -right-24 bottom-6 rounded-xl border border-green-100 bg-white px-4 py-2 shadow-lg">

                  <p className="text-[10px] font-bold text-green-700">
                    More Earnings
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ========================================= */}
        {/* QUICK ACCESS */}
        {/* ========================================= */}

        <section className="mt-6">

          <div className="mb-4 flex items-center justify-between">

            <h2 className="text-lg font-black text-slate-950">
              Quick Access
            </h2>

            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold text-green-700"
            >
              View All
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {quickResources.map((resource) => {

              const Icon = resource.icon;

              return (
                <div
                  key={resource.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >

                  <div className="flex items-start gap-3">

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${resource.iconClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>

                      <h3 className="text-sm font-bold text-slate-900">
                        {resource.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        {resource.description}
                      </p>

                    </div>

                  </div>


                  <button
                    type="button"
                    className={`mt-4 flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] font-bold transition ${resource.buttonClass}`}
                  >
                    {resource.button}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                </div>
              );

            })}

          </div>

        </section>


        {/* ========================================= */}
        {/* FEATURED + RIGHT SIDEBAR */}
        {/* ========================================= */}

        <div className="mt-6 grid gap-5 xl:grid-cols-[1.55fr_0.8fr]">

          {/* Featured Resources */}
          <section>

            <div className="mb-4 flex items-center justify-between">

              <h2 className="text-lg font-black text-slate-950">
                Featured Resources
              </h2>

              <button
                type="button"
                className="flex items-center gap-1 text-xs font-semibold text-green-700"
              >
                See All
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

            </div>


            <div className="grid gap-4 md:grid-cols-2">

              {featuredResources.map((resource) => {

                const ActionIcon = resource.icon;

                return (
                  <div
                    key={resource.title}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                  >

                    <div className="grid sm:grid-cols-[150px_1fr]">

                      {/* Image */}
                      <div className="flex min-h-[150px] items-center justify-center bg-slate-50 p-3">

                        <div className="flex h-full min-h-[125px] w-full items-center justify-center overflow-hidden rounded-lg bg-green-50">

                          <ImageIcon className="h-10 w-10 text-green-200" />

                        </div>

                      </div>


                      {/* Content */}
                      <div className="p-4">

                        <h3 className="text-sm font-bold text-slate-900">
                          {resource.title}
                        </h3>

                        <p className="mt-2 text-[11px] leading-5 text-slate-500">
                          {resource.description}
                        </p>


                        <div className="mt-3 flex gap-2">

                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-semibold text-slate-600">
                            {resource.type}
                          </span>

                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-semibold text-slate-600">
                            {resource.format}
                          </span>

                        </div>


                        <button
                          type="button"
                          className="mt-4 flex items-center gap-2 rounded-lg border border-green-600 px-3 py-2 text-[10px] font-bold text-green-700 transition hover:bg-green-50"
                        >
                          <ActionIcon className="h-3.5 w-3.5" />
                          {resource.action}
                          <ArrowRight className="h-3 w-3" />
                        </button>

                      </div>

                    </div>

                  </div>
                );

              })}

            </div>

          </section>


          {/* RIGHT COLUMN */}
          <div className="space-y-5">

            {/* Recommended Steps */}
            <section className="rounded-xl border border-green-200 bg-green-50/50 p-5">

              <h2 className="text-sm font-black text-slate-950">
                Recommended Next Steps
              </h2>


              <div className="mt-4 space-y-4">

                {recommendedSteps.map((step) => (

                  <button
                    type="button"
                    key={step.number}
                    className="flex w-full items-center gap-3 text-left"
                  >

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-700 text-[10px] font-bold text-white">
                      {step.number}
                    </span>

                    <div className="min-w-0 flex-1">

                      <p className="text-xs font-bold text-slate-800">
                        {step.title}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        {step.description}
                      </p>

                    </div>

                    <ChevronRight className="h-4 w-4 shrink-0 text-green-700" />

                  </button>

                ))}

              </div>

            </section>


            {/* Testimonial */}
            <section className="rounded-xl border border-blue-100 bg-blue-50/60 p-5">

              <div className="text-3xl font-black leading-none text-blue-300">
                “
              </div>

              <p className="mt-1 text-xs leading-5 text-slate-700">
                The resources here are super helpful! The templates saved me
                a lot of time and I&apos;m already seeing results.
              </p>


              <div className="mt-4 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-[10px] font-bold text-white">
                    AS
                  </div>

                  <div>

                    <p className="text-[10px] font-bold text-slate-800">
                      Affiliate
                    </p>

                    <p className="text-[9px] text-slate-500">
                      IruHost Affiliate
                    </p>

                  </div>

                </div>


                <div className="flex gap-0.5">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

              </div>

            </section>


            {/* Support */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <Headphones className="h-5 w-5" />
                </div>

                <div>

                  <h2 className="text-sm font-bold text-slate-900">
                    Need Help?
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Our support team is always here for you.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-green-600 py-2.5 text-[11px] font-bold text-green-700 transition hover:bg-green-50"
              >
                Contact Support
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

            </section>

          </div>

        </div>


        {/* ========================================= */}
        {/* BOTTOM CTA */}
        {/* ========================================= */}

        <section className="mt-6 overflow-hidden rounded-2xl bg-green-700 p-6 sm:p-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="flex items-center gap-2 text-green-100">

                <Sparkles className="h-4 w-4" />

                <span className="text-xs font-bold uppercase tracking-wider">
                  Ready to grow?
                </span>

              </div>

              <h2 className="mt-2 text-xl font-black text-white">
                Start promoting IruHost today.
              </h2>

              <p className="mt-1 text-xs text-green-100">
                Use our resources to reach more people and increase your
                affiliate earnings.
              </p>

            </div>


            <button
              type="button"
              className="flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-bold text-green-700 transition hover:bg-green-50"
            >
              Get Your Referral Link
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </section>

      </div>
    </main>
  );
}


/* ========================================= */
/* RESOURCE TAB */
/* ========================================= */

function ResourceTab({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`rounded-lg px-5 py-2.5 text-xs font-semibold transition ${
        active
          ? "bg-green-700 text-white shadow-sm"
          : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}