"use client";

import {
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Globe2,
  MousePointerClick,
  ShoppingCart,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  Mail,
  Link2,
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
  { date: "May 1", earnings: 10000, previous: 5000 },
  { date: "May 3", earnings: 22000, previous: 11000 },
  { date: "May 6", earnings: 18000, previous: 9000 },
  { date: "May 9", earnings: 30000, previous: 15000 },
  { date: "May 12", earnings: 42000, previous: 22000 },
  { date: "May 15", earnings: 55000, previous: 30000 },
  { date: "May 18", earnings: 50000, previous: 34000 },
  { date: "May 21", earnings: 68000, previous: 44000 },
  { date: "May 24", earnings: 55000, previous: 33000 },
  { date: "May 27", earnings: 70000, previous: 42000 },
  { date: "May 31", earnings: 100000, previous: 80000 },
];

const referralSources = [
  {
    name: "Direct Link",
    value: 485,
    percentage: "38.9%",
  },
  {
    name: "Social Media",
    value: 312,
    percentage: "25.0%",
  },
  {
    name: "Website / Blog",
    value: 256,
    percentage: "20.5%",
  },
  {
    name: "Email Campaign",
    value: 128,
    percentage: "10.3%",
  },
  {
    name: "Other",
    value: 67,
    percentage: "5.3%",
  },
];

const sourceColors = [
  "#07883e",
  "#36aa68",
  "#62bd86",
  "#9bd7b3",
  "#cdebd9",
];

const countries = [
  {
    country: "Nigeria",
    referrals: "1,023",
    flag: "🇳🇬",
  },
  {
    country: "Ghana",
    referrals: "96",
    flag: "🇬🇭",
  },
  {
    country: "United States",
    referrals: "45",
    flag: "🇺🇸",
  },
  {
    country: "United Kingdom",
    referrals: "28",
    flag: "🇬🇧",
  },
  {
    country: "Canada",
    referrals: "16",
    flag: "🇨🇦",
  },
];

const services = [
  {
    name: "Web Hosting",
    referrals: 645,
    conversions: 342,
    earnings: "₦510,000",
    rate: "53.0%",
  },
  {
    name: "Domain Registration",
    referrals: 386,
    conversions: 186,
    earnings: "₦170,000",
    rate: "48.2%",
  },
  {
    name: "Business Email",
    referrals: 152,
    conversions: 92,
    earnings: "₦102,000",
    rate: "60.5%",
  },
  {
    name: "SSL Certificates",
    referrals: 48,
    conversions: 22,
    earnings: "₦26,000",
    rate: "45.8%",
  },
  {
    name: "Other Services",
    referrals: 17,
    conversions: 4,
    earnings: "₦12,000",
    rate: "23.5%",
  },
];

const activities = [
  {
    icon: <ShoppingCart className="h-4 w-4" />,
    title: "New paid referral",
    description: "Oluwaseun A. purchased Web Hosting",
    time: "10:24 AM",
    type: "green",
  },
  {
    icon: <UserPlus className="h-4 w-4" />,
    title: "New signup",
    description: "Daniel K. signed up",
    time: "09:15 AM",
    type: "orange",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    title: "Email campaign",
    description: "May Newsletter sent",
    time: "Yesterday",
    type: "purple",
  },
  {
    icon: <CircleDollarSign className="h-4 w-4" />,
    title: "Payout completed",
    description: "₦100,000 paid via Bank Transfer",
    time: "May 15, 2024",
    type: "green",
  },
  {
    icon: <Users className="h-4 w-4" />,
    title: "New referral",
    description: "Blessing E. joined via your link",
    time: "May 14, 2024",
    type: "blue",
  },
];

const reportLinks = [
  {
    title: "Referral Report",
    description: "Detailed referral performance",
    icon: BarChart3,
    className: "bg-red-50 text-red-600",
  },
  {
    title: "Earnings Report",
    description: "Earnings and commission details",
    icon: CircleDollarSign,
    className: "bg-blue-50 text-blue-600",
  },
  {
    title: "Payout Report",
    description: "Payouts and withdrawals",
    icon: Wallet,
    className: "bg-green-50 text-green-600",
  },
  {
    title: "Traffic Report",
    description: "Clicks and traffic analytics",
    icon: TrendingUp,
    className: "bg-green-50 text-green-600",
  },
];

export default function ReportsContent() {
  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">

        {/* ======================================= */}
        {/* HEADER */}
        {/* ======================================= */}

        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950">
              Reports
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Insights and analytics to grow your affiliate performance.
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm"
          >
            <CalendarDays className="h-5 w-5 text-slate-500" />

            <span>May 1 – May 31, 2024</span>

            <ChevronDown className="h-4 w-4" />
          </button>

        </div>


        {/* ======================================= */}
        {/* TOP STATISTICS */}
        {/* ======================================= */}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

          <ReportStat
            title="Total Referrals"
            value="1,248"
            change="18.6%"
            icon={<Users />}
            iconClass="bg-green-50 text-green-600"
          />

          <ReportStat
            title="Paid Referrals"
            value="642"
            change="15.3%"
            icon={<ShoppingCart />}
            iconClass="bg-blue-50 text-blue-600"
          />

          <ReportStat
            title="Conversion Rate"
            value="51.4%"
            change="8.7%"
            icon={<TrendingUp />}
            iconClass="bg-purple-50 text-purple-600"
          />

          <ReportStat
            title="Total Earnings"
            value="₦850,000"
            change="22.4%"
            icon={<CircleDollarSign />}
            iconClass="bg-orange-50 text-orange-600"
          />

          <ReportStat
            title="Total Payouts"
            value="₦730,000"
            change="20.1%"
            icon={<Wallet />}
            iconClass="bg-green-50 text-green-600"
          />

        </div>


        {/* ======================================= */}
        {/* CHART + SOURCES + COUNTRIES */}
        {/* ======================================= */}

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr_0.85fr]">

          {/* Earnings Overview */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-start justify-between">

              <div>
                <h2 className="text-base font-bold text-slate-950">
                  Earnings Overview
                </h2>

                <div className="mt-3 flex gap-5 text-xs text-slate-500">

                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                    Earnings (₦)
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-200" />
                    Previous Period (₦)
                  </span>

                </div>
              </div>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600"
              >
                Daily
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

            </div>


            <div className="mt-5 h-[285px]">

              <ResponsiveContainer width="100%" height="100%">

                <AreaChart data={earningsData}>

                  <defs>
                    <linearGradient
                      id="reportEarningsGradient"
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
                    vertical={false}
                    stroke="#e5e7eb"
                    strokeDasharray="4 4"
                  />

                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fill: "#64748b",
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fill: "#64748b",
                    }}
                    tickFormatter={(value) =>
                      `₦${value / 1000}K`
                    }
                  />

                  <Tooltip
                    formatter={(value) =>
                      `₦${Number(value).toLocaleString()}`
                    }
                    contentStyle={{
                      borderRadius: "10px",
                      border: "1px solid #e2e8f0",
                      fontSize: "12px",
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
                    stroke="#07883e"
                    strokeWidth={2.5}
                    fill="url(#reportEarningsGradient)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </section>


          {/* Referral Sources */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <h2 className="text-base font-bold text-slate-950">
              Referrals by Source
            </h2>

            <div className="mt-4 flex items-center gap-5">

              <div className="relative h-[190px] w-[190px] shrink-0">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={referralSources}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={58}
                      outerRadius={88}
                      paddingAngle={1}
                    >
                      {referralSources.map((_, index) => (
                        <Cell
                          key={index}
                          fill={sourceColors[index]}
                        />
                      ))}
                    </Pie>

                  </PieChart>

                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-black text-slate-950">
                    1,248
                  </span>

                  <span className="text-xs text-slate-500">
                    Total
                  </span>
                </div>

              </div>


              <div className="min-w-0 flex-1 space-y-3">

                {referralSources.map((source, index) => (

                  <div
                    key={source.name}
                    className="flex items-start gap-2"
                  >

                    <span
                      className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor: sourceColors[index],
                      }}
                    />

                    <div className="min-w-0">

                      <p className="truncate text-xs font-semibold text-slate-700">
                        {source.name}
                      </p>

                      <p className="text-[11px] text-slate-500">
                        {source.value} ({source.percentage})
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>


          {/* Top Countries */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <h2 className="text-base font-bold text-slate-950">
                Top Countries
              </h2>

              <Globe2 className="h-5 w-5 text-green-600" />

            </div>

            <div className="mt-5">

              <div className="mb-3 flex justify-between text-[11px] font-medium text-slate-400">
                <span>Country</span>
                <span>Referrals</span>
              </div>

              <div className="space-y-4">

                {countries.map((country) => (

                  <div
                    key={country.country}
                    className="flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <span className="text-lg">
                        {country.flag}
                      </span>

                      <span className="text-xs font-medium text-slate-700">
                        {country.country}
                      </span>

                    </div>

                    <span className="text-xs font-semibold text-slate-700">
                      {country.referrals}
                    </span>

                  </div>

                ))}

              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-lg border border-green-600 py-2.5 text-xs font-semibold text-green-700 transition hover:bg-green-50"
              >
                View All Countries
              </button>

            </div>

          </section>

        </div>


        {/* ======================================= */}
        {/* SECONDARY STATISTICS */}
        {/* ======================================= */}

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          <MiniReportStat
            title="Clicks"
            value="4,782"
            change="12.5%"
            icon={<MousePointerClick />}
          />

          <MiniReportStat
            title="Signups"
            value="1,248"
            change="18.6%"
            icon={<UserPlus />}
          />

          <MiniReportStat
            title="Paid Conversions"
            value="642"
            change="15.3%"
            icon={<ShoppingCart />}
          />

          <MiniReportStat
            title="Earnings per Click"
            value="₦177.70"
            change="9.4%"
            icon={<CircleDollarSign />}
          />

          <MiniReportStat
            title="Earnings per Referral"
            value="₦682.05"
            change="3.8%"
            icon={<Users />}
          />

        </div>


        {/* ======================================= */}
        {/* BOTTOM CONTENT */}
        {/* ======================================= */}

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.45fr_0.9fr_0.9fr]">

          {/* Top Services */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="p-5">

              <h2 className="text-base font-bold text-slate-950">
                Top Performing Services
              </h2>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px]">

                <thead>

                  <tr className="border-y border-slate-100 bg-slate-50/50 text-left text-[11px] font-semibold text-slate-500">

                    <th className="px-5 py-3">
                      Service
                    </th>

                    <th className="px-5 py-3">
                      Referrals
                    </th>

                    <th className="px-5 py-3">
                      Conversions
                    </th>

                    <th className="px-5 py-3">
                      Earnings
                    </th>

                    <th className="px-5 py-3">
                      Conversion Rate
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {services.map((service) => (

                    <tr
                      key={service.name}
                      className="border-b border-slate-100 last:border-0"
                    >

                      <td className="px-5 py-3.5 text-xs font-semibold text-slate-700">
                        {service.name}
                      </td>

                      <td className="px-5 py-3.5 text-xs text-slate-600">
                        {service.referrals}
                      </td>

                      <td className="px-5 py-3.5 text-xs text-slate-600">
                        {service.conversions}
                      </td>

                      <td className="px-5 py-3.5 text-xs font-semibold text-slate-700">
                        {service.earnings}
                      </td>

                      <td className="px-5 py-3.5">

                        <div className="flex items-center gap-2">

                          <span className="text-xs text-slate-600">
                            {service.rate}
                          </span>

                          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-green-600"
                              style={{
                                width: service.rate,
                              }}
                            />
                          </div>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            <div className="p-5 pt-3">

              <button
                type="button"
                className="w-full rounded-lg border border-green-600 py-2.5 text-xs font-semibold text-green-700 hover:bg-green-50"
              >
                View All Services
              </button>

            </div>

          </section>


          {/* Recent Activity */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between p-5">

              <h2 className="text-base font-bold text-slate-950">
                Recent Activity
              </h2>

              <Clock3 className="h-5 w-5 text-slate-400" />

            </div>

            <div className="border-t border-slate-100">

              {activities.map((activity, index) => (

                <div
                  key={`${activity.title}-${index}`}
                  className="flex gap-3 border-b border-slate-100 px-5 py-3.5 last:border-0"
                >

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      activity.type === "green"
                        ? "bg-green-50 text-green-600"
                        : activity.type === "orange"
                        ? "bg-orange-50 text-orange-600"
                        : activity.type === "purple"
                        ? "bg-purple-50 text-purple-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {activity.icon}
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-2">

                      <p className="text-xs font-semibold text-slate-700">
                        {activity.title}
                      </p>

                      <span className="whitespace-nowrap text-[10px] text-slate-400">
                        {activity.time}
                      </span>

                    </div>

                    <p className="mt-1 truncate text-[11px] text-slate-500">
                      {activity.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </section>


          {/* Reports */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="p-5">

              <h2 className="text-base font-bold text-slate-950">
                Reports
              </h2>

            </div>

            <div className="border-t border-slate-100">

              {reportLinks.map((report) => {

                const Icon = report.icon;

                return (
                  <button
                    type="button"
                    key={report.title}
                    className="flex w-full items-center gap-3 border-b border-slate-100 px-5 py-4 text-left transition hover:bg-slate-50"
                  >

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${report.className}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="text-xs font-semibold text-slate-700">
                        {report.title}
                      </p>

                      <p className="mt-1 truncate text-[10px] text-slate-500">
                        {report.description}
                      </p>

                    </div>

                    <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />

                  </button>
                );

              })}

            </div>

            <div className="p-5">

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-600 py-2.5 text-xs font-semibold text-green-700 hover:bg-green-50"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Export All Reports
              </button>

            </div>

          </section>

        </div>

      </div>
    </main>
  );
}


/* ================================================= */
/* LARGE REPORT STAT */
/* ================================================= */

function ReportStat({
  title,
  value,
  change,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        >
          <div className="h-6 w-6">
            {icon}
          </div>
        </div>

        <div className="min-w-0">

          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-1 truncate text-2xl font-black text-slate-950">
            {value}
          </h3>

        </div>

      </div>

      <div className="mt-5 flex items-center gap-2 text-xs">

        <span className="flex items-center gap-1 font-bold text-green-600">
          <ArrowUpRight className="h-3.5 w-3.5" />
          {change}
        </span>

        <span className="text-slate-400">
          vs Apr 1 – Apr 30
        </span>

      </div>

    </div>
  );
}


/* ================================================= */
/* SMALL REPORT STAT */
/* ================================================= */

function MiniReportStat({
  title,
  value,
  change,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
          {icon}
        </div>

        <div>

          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-1 text-xl font-black text-slate-950">
            {value}
          </h3>

        </div>

      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px]">

        <span className="flex items-center gap-1 font-bold text-green-600">
          <ArrowUpRight className="h-3 w-3" />
          {change}
        </span>

        <span className="text-slate-400">
          vs Apr 1 – Apr 30
        </span>

      </div>

    </div>
  );
}