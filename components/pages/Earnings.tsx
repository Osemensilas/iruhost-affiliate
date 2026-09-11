"use client";

import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  TrendingUp,
  Wallet,
  CircleDollarSign,
  Clock3,
  Percent,
  ArrowUpRight,
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

const history = [
  {
    date: "May 31, 2024",
    description: "Commission for Web Hosting",
    service: "Web Hosting",
    referrals: 12,
    amount: "₦25,000",
    status: "Paid",
  },
  {
    date: "May 30, 2024",
    description: "Commission for Domain Registration",
    service: "Domain",
    referrals: 5,
    amount: "₦8,000",
    status: "Paid",
  },
  {
    date: "May 29, 2024",
    description: "Commission for Business Email",
    service: "Business Email",
    referrals: 3,
    amount: "₦5,000",
    status: "Pending",
  },
  {
    date: "May 28, 2024",
    description: "Commission for Web Hosting",
    service: "Web Hosting",
    referrals: 11,
    amount: "₦22,000",
    status: "Paid",
  },
  {
    date: "May 27, 2024",
    description: "Commission for SSL Certificates",
    service: "Other Services",
    referrals: 4,
    amount: "₦3,000",
    status: "Paid",
  },
];

export default function EarningsContent() {
  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">

        {/* ======================================= */}
        {/* HEADER */}
        {/* ======================================= */}

        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950">
              Earnings
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track and analyze your earnings performance.
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-green-500"
          >
            <CalendarDays className="h-5 w-5 text-slate-500" />

            <span>May 1 – May 31, 2024</span>

            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>

        </div>


        {/* ======================================= */}
        {/* STATISTICS */}
        {/* ======================================= */}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

          <EarningStat
            title="Total Earnings"
            value="₦850,000"
            change="22.4%"
            icon={<CircleDollarSign />}
            iconClass="bg-green-50 text-green-600"
          />

          <EarningStat
            title="Paid Earnings"
            value="₦730,000"
            change="20.1%"
            icon={<Wallet />}
            iconClass="bg-blue-50 text-blue-600"
          />

          <EarningStat
            title="Pending Earnings"
            value="₦120,000"
            change="12.7%"
            icon={<Clock3 />}
            iconClass="bg-orange-50 text-orange-600"
          />

          <EarningStat
            title="Average per Day"
            value="₦27,419"
            change="15.3%"
            icon={<TrendingUp />}
            iconClass="bg-purple-50 text-purple-600"
          />

          <EarningStat
            title="Commission Rate"
            value="20%"
            change=""
            icon={<Percent />}
            iconClass="bg-green-50 text-green-600"
            description="On all eligible services"
          />

        </div>


        {/* ======================================= */}
        {/* CHART + BREAKDOWN */}
        {/* ======================================= */}

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.55fr_1fr]">

          {/* Earnings chart */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Earnings Overview
                </h2>

                <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-slate-500">

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


            <div className="mt-6 h-[310px] w-full">

              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData}>

                  <defs>
                    <linearGradient
                      id="earningsFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#16a34a"
                        stopOpacity={0.22}
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
                    tick={{ fontSize: 11, fill: "#64748b" }}
                    interval={2}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "#64748b" }}
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
                      boxShadow:
                        "0 10px 25px rgba(0,0,0,0.08)",
                    }}
                  />

                  {/* Previous period */}
                  <Area
                    type="monotone"
                    dataKey="previous"
                    stroke="#a7dfbd"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="transparent"
                  />

                  {/* Current earnings */}
                  <Area
                    type="monotone"
                    dataKey="earnings"
                    stroke="#16a34a"
                    strokeWidth={3}
                    fill="url(#earningsFill)"
                  />

                </AreaChart>
              </ResponsiveContainer>

            </div>
          </section>


          {/* Earnings breakdown */}
          <div className="space-y-5">

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <h2 className="text-lg font-bold text-slate-950">
                Earnings Breakdown
              </h2>

              <div className="mt-5 flex flex-col items-center gap-7 sm:flex-row">

                {/* Donut */}
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
                              "#07883e",
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

                    <span className="mt-1 text-xs text-slate-500">
                      Total
                    </span>
                  </div>

                </div>


                {/* Breakdown list */}
                <div className="w-full space-y-4">

                  {breakdownData.map((item, index) => (

                    <div
                      key={item.name}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-1 h-3 w-3 shrink-0 rounded-full"
                        style={{
                          backgroundColor: [
                            "#07883e",
                            "#34a968",
                            "#65c48a",
                            "#c6e8d3",
                          ][index],
                        }}
                      />

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          ₦{item.value.toLocaleString()} (
                          {item.percentage}%)
                        </p>
                      </div>
                    </div>

                  ))}

                </div>

              </div>

            </section>


            {/* Next payout */}
            <section className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">

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
                className="rounded-lg border border-green-600 px-4 py-2.5 text-sm font-bold text-green-700 transition hover:bg-green-50"
              >
                View Payouts
              </button>

            </section>

          </div>

        </div>


        {/* ======================================= */}
        {/* EARNINGS HISTORY */}
        {/* ======================================= */}

        <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Table heading */}
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Earnings History
              </h2>
            </div>

            <div className="flex gap-3">

              <button
                type="button"
                className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-600"
              >
                All Services
                <ChevronDown className="h-4 w-4" />
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-green-500 hover:text-green-700"
              >
                <Download className="h-4 w-4 text-green-600" />
                Export
              </button>

            </div>

          </div>


          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50 text-left text-xs font-semibold text-slate-500">

                  <th className="px-6 py-4">
                    Date
                  </th>

                  <th className="px-6 py-4">
                    Description
                  </th>

                  <th className="px-6 py-4">
                    Service
                  </th>

                  <th className="px-6 py-4 text-center">
                    Referrals
                  </th>

                  <th className="px-6 py-4">
                    Amount
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                </tr>
              </thead>


              <tbody>

                {history.map((item) => (

                  <tr
                    key={`${item.date}-${item.description}`}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
                  >

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {item.date}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-slate-700">
                      {item.description}
                    </td>

                    <td className="px-6 py-4">
                      <ServiceBadge service={item.service} />
                    </td>

                    <td className="px-6 py-4 text-center text-sm text-slate-600">
                      {item.referrals}
                    </td>

                    <td className="px-6 py-4 text-sm font-bold text-slate-800">
                      {item.amount}
                    </td>

                    <td className="px-6 py-4">
                      <StatusBadge status={item.status} />
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* Pagination */}
          <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                1 to 5
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                45
              </span>{" "}
              entries
            </p>


            <div className="flex items-center gap-2">

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-green-600 bg-green-50 text-sm font-bold text-green-700"
              >
                1
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-600"
              >
                2
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-600"
              >
                3
              </button>

              <span className="px-1 text-slate-400">
                ...
              </span>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-600"
              >
                9
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

            </div>


            <button
              type="button"
              className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600"
            >
              5 / page
              <ChevronDown className="h-4 w-4" />
            </button>

          </div>

        </section>

      </div>
    </main>
  );
}


/* ================================================= */
/* STAT CARD */
/* ================================================= */

function EarningStat({
  title,
  value,
  change,
  icon,
  iconClass,
  description,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  iconClass: string;
  description?: string;
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

          <p className="text-sm font-medium text-slate-600">
            {title}
          </p>

          <h3 className="mt-1 truncate text-2xl font-black text-slate-950">
            {value}
          </h3>

        </div>

      </div>


      {description ? (
        <p className="mt-6 text-xs text-slate-500">
          {description}
        </p>
      ) : (
        <div className="mt-6 flex items-center gap-3 text-xs">

          <span className="flex items-center gap-1 font-bold text-green-600">
            <ArrowUpRight className="h-3.5 w-3.5" />
            {change}
          </span>

          <span className="text-slate-500">
            vs Apr 1 – Apr 30
          </span>

        </div>
      )}

    </div>
  );
}


/* ================================================= */
/* SERVICE BADGE */
/* ================================================= */

function ServiceBadge({
  service,
}: {
  service: string;
}) {
  const styles: Record<string, string> = {
    "Web Hosting": "bg-green-50 text-green-700",
    Domain: "bg-blue-50 text-blue-700",
    "Business Email": "bg-purple-50 text-purple-700",
    "Other Services": "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
        styles[service] || "bg-slate-100 text-slate-700"
      }`}
    >
      {service}
    </span>
  );
}


/* ================================================= */
/* STATUS BADGE */
/* ================================================= */

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const styles: Record<string, string> = {
    Paid: "bg-green-50 text-green-700",
    Pending: "bg-orange-50 text-orange-700",
  };

  return (
    <span
      className={`inline-flex rounded-md px-3 py-1.5 text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}