"use client";

import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  Headphones,
  Image as ImageIcon,
  Link2,
  Megaphone,
  Users,
  Wallet,
  WalletCards,
} from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const earningsData = [
  { date: "May 1", earnings: 10000, previous: 0 },
  { date: "May 3", earnings: 22000, previous: 7000 },
  { date: "May 5", earnings: 33000, previous: 14000 },
  { date: "May 7", earnings: 23000, previous: 12000 },
  { date: "May 9", earnings: 35000, previous: 19000 },
  { date: "May 11", earnings: 48000, previous: 27000 },
  { date: "May 13", earnings: 37000, previous: 18000 },
  { date: "May 15", earnings: 57000, previous: 33000 },
  { date: "May 16", earnings: 65000, previous: 35000 },
  { date: "May 18", earnings: 54000, previous: 42000 },
  { date: "May 20", earnings: 66000, previous: 36000 },
  { date: "May 22", earnings: 55000, previous: 27000 },
  { date: "May 24", earnings: 69000, previous: 46000 },
  { date: "May 26", earnings: 61000, previous: 33000 },
  { date: "May 28", earnings: 76000, previous: 40000 },
  { date: "May 30", earnings: 89000, previous: 65000 },
  { date: "May 31", earnings: 100000, previous: 80000 },
];

const breakdownData = [
  {
    name: "Web Hosting",
    value: 510000,
    percentage: 60,
  },
  {
    name: "Domain Registration",
    value: 170000,
    percentage: 20,
  },
  {
    name: "Business Email",
    value: 102000,
    percentage: 12,
  },
  {
    name: "Other Services",
    value: 68000,
    percentage: 8,
  },
];

const recentReferrals = [
  {
    name: "Oluwaseun A.",
    service: "Web Hosting",
    date: "May 31, 2024",
    status: "Paid",
    letter: "O",
  },
  {
    name: "Blessing E.",
    service: "Domain",
    date: "May 30, 2024",
    status: "Paid",
    letter: "B",
  },
  {
    name: "Daniel K.",
    service: "Business Email",
    date: "May 29, 2024",
    status: "Pending",
    letter: "D",
  },
  {
    name: "Aminu M.",
    service: "Web Hosting",
    date: "May 28, 2024",
    status: "Paid",
    letter: "A",
  },
];

const countries = [
  {
    country: "Nigeria",
    flag: "🇳🇬",
    referrals: "1,023",
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    referrals: "96",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    referrals: "45",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    referrals: "28",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    referrals: "16",
  },
];

const quickLinks = [
  {
    title: "Get Referral Link",
    icon: Link2,
  },
  {
    title: "Marketing Tools",
    icon: Megaphone,
  },
  {
    title: "Banners",
    icon: ImageIcon,
  },
  {
    title: "Reports",
    icon: BarChart3,
  },
  {
    title: "Payout History",
    icon: WalletCards,
  },
  {
    title: "Help Center",
    icon: Headphones,
  },
];

export default function AffiliateDashboard() {
  return (
    <div className="min-h-screen bg-[#f8faf9] mb-20 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Welcome back, Affiliate! 👋
            </h1>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Here’s what’s happening with your affiliate account.
            </p>
          </div>

          {/* Date selector */}
          <button
            type="button"
            className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
          >
            <CalendarDays className="h-5 w-5 text-slate-500" />

            <span>May 1 – May 31, 2024</span>

            <ChevronDown className="ml-2 h-4 w-4 text-slate-500" />
          </button>
        </div>

        {/* Statistics */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard
            title="Total Referrals"
            value="1,248"
            change="18.6%"
            icon={Users}
            iconStyle="green"
          />

          <StatCard
            title="Paid Referrals"
            value="642"
            change="15.3%"
            icon={Wallet}
            iconStyle="blue"
          />

          <StatCard
            title="Total Earnings"
            value="₦850,000"
            change="22.4%"
            icon={CircleDollarSign}
            iconStyle="purple"
          />

          <StatCard
            title="Pending Earnings"
            value="₦120,000"
            change="12.7%"
            icon={WalletCards}
            iconStyle="orange"
          />

          <StatCard
            title="Total Payouts"
            value="₦730,000"
            change="20.1%"
            icon={BarChart3}
            iconStyle="green"
          />
        </div>

        {/* Main charts */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.7fr_1fr]">

          {/* Earnings overview */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Earnings Overview
                </h2>

                <div className="mt-4 flex items-center gap-6 text-xs text-slate-500">
                  <span className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-600" />
                    Earnings (₦)
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-200" />
                    Previous Period (₦)
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="flex w-fit items-center gap-3 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600"
              >
                Daily
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-7 h-75 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData}>
                  <defs>
                    <linearGradient
                      id="earningsGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#16a34a"
                        stopOpacity={0.2}
                      />
                      <stop
                        offset="100%"
                        stopColor="#16a34a"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="#e5e7eb"
                    strokeDasharray="4 4"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    interval={2}
                  />

                  <YAxis
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) =>
                      `₦${value / 1000}K`
                    }
                  />

                  <Tooltip
                    formatter={(value) =>
                      `₦${Number(value).toLocaleString()}`
                    }
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="previous"
                    stroke="#a7dfbd"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="transparent"
                  />

                  <Area
                    type="monotone"
                    dataKey="earnings"
                    stroke="#16a34a"
                    strokeWidth={3}
                    fill="url(#earningsGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Right column */}
          <div className="space-y-5">

            {/* Earnings breakdown */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-slate-950">
                Earnings Breakdown
              </h2>

              <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
                <div className="relative h-48 w-48 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={breakdownData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={58}
                        outerRadius={88}
                        paddingAngle={1}
                      >
                        {breakdownData.map((_, index) => (
                          <Cell
                            key={index}
                            fill={[
                              "#059669",
                              "#34a968",
                              "#65c48a",
                              "#c6e8d3",
                            ][index]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-black text-slate-950">
                      ₦850,000
                    </span>

                    <span className="text-xs text-slate-500">
                      Total
                    </span>
                  </div>
                </div>

                <div className="w-full space-y-4">
                  {breakdownData.map((item, index) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-2">
                        <span
                          className="mt-1 h-3 w-3 shrink-0 rounded-full"
                          style={{
                            backgroundColor: [
                              "#059669",
                              "#34a968",
                              "#65c48a",
                              "#c6e8d3",
                            ][index],
                          }}
                        />

                        <div>
                          <p className="text-xs font-semibold text-slate-800">
                            {item.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            ₦{item.value.toLocaleString()} (
                            {item.percentage}%)
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Next payout */}
            <section className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <Wallet className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-600">
                    Next Payout
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-950">
                    ₦120,000
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Will be paid on Jun 15, 2024
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="hidden rounded-lg border border-green-600 px-4 py-2 text-xs font-bold text-green-700 transition hover:bg-green-50 sm:block"
              >
                View Payouts
              </button>
            </section>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.5fr_1fr_1fr]">

          {/* Recent referrals */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between p-5 sm:p-6">
              <h2 className="text-lg font-bold text-slate-950">
                Recent Referrals
              </h2>

              <button className="text-sm font-semibold text-green-600">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-150">
                <thead>
                  <tr className="border-y border-slate-100 text-left text-xs text-slate-500">
                    <th className="px-5 py-3 font-medium">Name</th>
                    <th className="px-5 py-3 font-medium">Service</th>
                    <th className="px-5 py-3 font-medium">Date</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {recentReferrals.map((referral) => (
                    <tr
                      key={referral.name}
                      className="border-b border-slate-50 last:border-0"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                            {referral.letter}
                          </span>

                          <span className="text-sm font-medium text-slate-700">
                            {referral.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {referral.service}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-500">
                        {referral.date}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                            referral.status === "Paid"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {referral.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Top countries */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between p-5 sm:p-6">
              <h2 className="text-lg font-bold text-slate-950">
                Top Countries
              </h2>

              <button className="text-sm font-semibold text-green-600">
                View All
              </button>
            </div>

            <div className="px-5 pb-5 sm:px-6">
              <div className="mb-2 flex justify-between border-b border-slate-100 pb-3 text-xs text-slate-500">
                <span>Country</span>
                <span>Referrals</span>
              </div>

              {countries.map((country) => (
                <div
                  key={country.country}
                  className="flex items-center justify-between border-b border-slate-50 py-3 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{country.flag}</span>

                    <span className="text-sm font-medium text-slate-700">
                      {country.country}
                    </span>
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {country.referrals}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Quick links */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-950">
              Quick Links
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <button
                    key={link.title}
                    type="button"
                    className="group flex min-h-26.25 flex-col items-center justify-center rounded-xl bg-green-50 p-3 text-center transition hover:bg-green-100"
                  >
                    <Icon className="h-7 w-7 text-green-600 transition group-hover:scale-110" />

                    <span className="mt-3 text-xs font-semibold text-slate-700">
                      {link.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Statistic Card */
/* -------------------------------- */

function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconStyle,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  iconStyle: "green" | "blue" | "purple" | "orange";
}) {
  const styles = {
    green: "bg-green-50 text-green-600",
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${styles[iconStyle]}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-600">
            {title}
          </p>

          <h3 className="mt-1 truncate text-2xl font-black text-slate-950">
            {value}
          </h3>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs">
        <span className="flex items-center font-bold text-green-600">
          <ArrowUpRight className="h-4 w-4" />
          {change}
        </span>

        <span className="text-slate-500">
          vs Apr 1 – Apr 30
        </span>
      </div>
    </div>
  );
}