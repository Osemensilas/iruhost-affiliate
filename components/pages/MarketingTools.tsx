"use client";

import {
  BarChart3,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Copy,
  Download,
  Mail,
  MessageCircle,
  PlayCircle,
  Share2,
  Sparkles,
  Eye,
  Link2,
} from "lucide-react";
import { useState } from "react";

const banners = [
  {
    size: "728 × 90",
    label: "Leaderboard",
    image: "/marketing/banners/banner-728x90.png",
  },
  {
    size: "300 × 250",
    label: "Medium Rectangle",
    image: "/marketing/banners/banner-300x250.png",
  },
  {
    size: "336 × 280",
    label: "Large Rectangle",
    image: "/marketing/banners/banner-336x280.png",
  },
  {
    size: "160 × 600",
    label: "Wide Skyscraper",
    image: "/marketing/banners/banner-160x600.png",
  },
  {
    size: "300 × 600",
    label: "Half Page",
    image: "/marketing/banners/banner-300x600.png",
  },
];

const socialPlatforms = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    className: "bg-green-50 text-green-600",
  },
  {
    name: "Facebook",
    icon: Share2,
    className: "bg-blue-50 text-blue-600",
  },
  {
    name: "Email",
    icon: Mail,
    className: "bg-purple-50 text-purple-600",
  },
];

export default function MarketingToolsContent() {
  const [copied, setCopied] = useState(false);

  const referralLink =
    "https://iruhost.com/aff.php?ref=IRU12345";

  const copyReferralLink = async () => {
    await navigator.clipboard.writeText(referralLink);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const share = (platform: string) => {
    const encodedLink = encodeURIComponent(referralLink);

    if (platform === "WhatsApp") {
      window.open(
        `https://wa.me/?text=${encodedLink}`,
        "_blank"
      );
    }

    if (platform === "Facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`,
        "_blank"
      );
    }

    if (platform === "Email") {
      window.location.href = `mailto:?subject=Check out IruHost&body=${encodedLink}`;
    }
  };

  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">

        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <div className="mb-6">

          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Marketing Tools
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Powerful tools and resources to help you promote IruHost and earn more.
          </p>

        </div>


        {/* ================================= */}
        {/* TABS */}
        {/* ================================= */}

        <div className="mb-5 overflow-x-auto border-b border-slate-200">

          <div className="flex min-w-max gap-7">

            <MarketingTab
              label="Overview"
              active
            />

            <MarketingTab label="Banners" />
            <MarketingTab label="Referral Links" />
            <MarketingTab label="Email Templates" />
            <MarketingTab label="Social Media" />
            <MarketingTab label="Videos" />
            <MarketingTab label="Printable Materials" />

          </div>

        </div>


        {/* ================================= */}
        {/* TOP THREE CARDS */}
        {/* ================================= */}

        <div className="grid gap-5 xl:grid-cols-[1.15fr_1.3fr_0.95fr]">

          {/* Referral Link */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Link2 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-950">
                  Your Referral Link
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Share your unique referral link and start earning commission.
                </p>
              </div>

            </div>


            <div className="mt-5 flex items-center rounded-lg border border-slate-200 bg-white">

              <input
                type="text"
                readOnly
                value={referralLink}
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs text-slate-600 outline-none"
              />

              <button
                type="button"
                onClick={copyReferralLink}
                className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>

            </div>


            <div className="mt-4 grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={copyReferralLink}
                className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-3 py-3 text-xs font-bold text-white transition hover:bg-green-800"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}

                {copied ? "Copied" : "Copy Link"}
              </button>


              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-green-600 px-3 py-3 text-xs font-bold text-green-700 transition hover:bg-green-50"
              >
                <Link2 className="h-4 w-4" />
                Shorten Link
              </button>

            </div>

          </section>


          {/* Quick Share */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <h2 className="text-base font-bold text-slate-950">
              Quick Share
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Share your link on social media and other platforms.
            </p>


            <div className="mt-6 flex justify-between gap-2">

              {socialPlatforms.map((platform) => {

                const Icon = platform.icon;

                return (
                  <button
                    type="button"
                    key={platform.name}
                    onClick={() => share(platform.name)}
                    className="group flex flex-col items-center gap-2"
                  >

                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${platform.className} transition group-hover:scale-105`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-[11px] font-medium text-slate-600">
                      {platform.name}
                    </span>

                  </button>
                );

              })}

            </div>


            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 text-xs font-semibold text-green-700"
            >
              View All Platforms
              <ChevronRight className="h-4 w-4" />
            </button>

          </section>


          {/* Marketing Performance */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <BarChart3 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-950">
                  Marketing Performance
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Your marketing tools performance this month.
                </p>
              </div>

            </div>


            <div className="mt-5 space-y-4">

              <PerformanceRow
                label="Total Clicks"
                value="4,782"
                change="12.5%"
              />

              <PerformanceRow
                label="Total Conversions"
                value="642"
                change="15.3%"
              />

              <PerformanceRow
                label="Conversion Rate"
                value="13.4%"
                change="2.8%"
              />

              <PerformanceRow
                label="Earnings Generated"
                value="₦850,000"
                change="22.4%"
              />

            </div>


            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-green-50 py-3 text-xs font-bold text-green-700 transition hover:bg-green-100"
            >
              <BarChart3 className="h-4 w-4" />
              View Full Report
            </button>

          </section>

        </div>


        {/* ================================= */}
        {/* BANNERS */}
        {/* ================================= */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-base font-bold text-slate-950">
                Banners
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Choose from our collection of banners and start promoting.
              </p>

            </div>


            <button
              type="button"
              className="flex w-fit items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-medium text-slate-600"
            >
              All Sizes
              <ChevronDown className="h-4 w-4" />
            </button>

          </div>


          {/* Banner Cards */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {banners.map((banner) => (

              <div
                key={banner.size}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >

                {/* Banner Preview */}
                <div className="flex h-40 items-center justify-center bg-slate-50 p-3">

                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-green-900">

                    <div className="p-4 text-center">

                      <p className="text-[10px] font-bold text-white">
                        Premium Web Hosting
                      </p>

                      <p className="mt-1 text-lg font-black text-white">
                        ₦10,000
                      </p>

                      <p className="text-[8px] text-green-100">
                        Reliable hosting for your website
                      </p>

                      <span className="mt-3 inline-block rounded bg-green-500 px-2 py-1 text-[7px] font-bold text-white">
                        Get Started
                      </span>

                    </div>

                  </div>

                </div>


                <div className="p-3">

                  <p className="text-xs font-bold text-slate-700">
                    {banner.size}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    {banner.label}
                  </p>


                  <div className="mt-3 grid grid-cols-2 gap-2">

                    <button
                      type="button"
                      className="flex items-center justify-center gap-1 rounded-md border border-slate-200 py-2 text-[10px] font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      <Eye className="h-3 w-3" />
                      Preview
                    </button>

                    <button
                      type="button"
                      className="flex items-center justify-center gap-1 rounded-md border border-green-600 py-2 text-[10px] font-semibold text-green-700 hover:bg-green-50"
                    >
                      <Code2 className="h-3 w-3" />
                      Get Code
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>


          <button
            type="button"
            className="mx-auto mt-6 flex items-center gap-2 text-xs font-semibold text-green-700"
          >
            View All Banners
            <ChevronRight className="h-4 w-4" />
          </button>

        </section>


        {/* ================================= */}
        {/* OTHER MARKETING RESOURCES */}
        {/* ================================= */}

        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {/* Email Templates */}
          <MarketingResource
            icon={<Mail className="h-6 w-6" />}
            iconClass="bg-green-50 text-green-600"
            title="Email Templates"
            description="Professional email templates to share with your audience."
            button="View Templates"
          />


          {/* Social Media */}
          <MarketingResource
            icon={<Share2 className="h-6 w-6" />}
            iconClass="bg-blue-50 text-blue-600"
            title="Social Media Content"
            description="Ready-to-use content for your social media channels."
            button="View Content"
          />


          {/* Videos */}
          <MarketingResource
            icon={<PlayCircle className="h-6 w-6" />}
            iconClass="bg-purple-50 text-purple-600"
            title="Promotional Videos"
            description="High-quality videos to boost your promotions."
            button="View Videos"
          />

        </div>


        {/* ================================= */}
        {/* EXTRA RESOURCES */}
        {/* ================================= */}

        <div className="mt-5 grid gap-5 md:grid-cols-2">

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Download className="h-6 w-6" />
              </div>

              <div className="flex-1">

                <h2 className="text-sm font-bold text-slate-900">
                  Printable Materials
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Download flyers, posters and other promotional materials.
                </p>

              </div>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-green-600 px-4 py-2.5 text-xs font-semibold text-green-700"
              >
                Browse
                <ChevronRight className="h-4 w-4" />
              </button>

            </div>

          </section>


          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Sparkles className="h-6 w-6" />
              </div>

              <div className="flex-1">

                <h2 className="text-sm font-bold text-slate-900">
                  Marketing Tips
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Learn strategies to get more clicks and referrals.
                </p>

              </div>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-green-600 px-4 py-2.5 text-xs font-semibold text-green-700"
              >
                Learn More
                <ChevronRight className="h-4 w-4" />
              </button>

            </div>

          </section>

        </div>

      </div>
    </main>
  );
}


/* ================================= */
/* TAB */
/* ================================= */

function MarketingTab({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`relative pb-4 text-xs font-medium transition ${
        active
          ? "font-semibold text-green-700"
          : "text-slate-500 hover:text-slate-800"
      }`}
    >
      {label}

      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-green-600" />
      )}
    </button>
  );
}


/* ================================= */
/* PERFORMANCE ROW */
/* ================================= */

function PerformanceRow({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">

      <span className="text-xs text-slate-500">
        {label}
      </span>

      <div className="flex items-center gap-3">

        <span className="text-xs font-bold text-slate-800">
          {value}
        </span>

        <span className="text-[10px] font-bold text-green-600">
          ↑ {change}
        </span>

      </div>

    </div>
  );
}


/* ================================= */
/* RESOURCE CARD */
/* ================================= */

function MarketingResource({
  icon,
  iconClass,
  title,
  description,
  button,
}: {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  description: string;
  button: string;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0 flex-1">

          <h2 className="text-sm font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>

        </div>

      </div>


      <button
        type="button"
        className="mt-5 ml-auto flex items-center gap-2 rounded-lg border border-green-600 px-4 py-2.5 text-xs font-semibold text-green-700 transition hover:bg-green-50"
      >
        {button}
        <ChevronRight className="h-4 w-4" />
      </button>

    </section>
  );
}