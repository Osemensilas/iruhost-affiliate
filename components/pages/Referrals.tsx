"use client";

import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Download,
  Eye,
  Link2,
  Mail,
  Megaphone,
  MoreHorizontal,
  Search,
  Send,
  Share2,
  ShoppingCart,
  Timer,
  TrendingDown,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

const referrals = [
  {
    name: "Oluwaseun A.",
    email: "oluwaseun.a@example.com",
    id: "987654",
    service: "Web Hosting",
    status: "Paid",
    date: "May 31, 2024",
    time: "10:24 AM",
    commission: "₦25,000",
    initial: "O",
    color: "green",
  },
  {
    name: "Blessing E.",
    email: "blessing.e@example.com",
    id: "987653",
    service: "Domain",
    status: "Paid",
    date: "May 30, 2024",
    time: "09:15 AM",
    commission: "₦8,000",
    initial: "B",
    color: "blue",
  },
  {
    name: "Daniel K.",
    email: "daniel.k@example.com",
    id: "987652",
    service: "Business Email",
    status: "Pending",
    date: "May 29, 2024",
    time: "04:30 PM",
    commission: "₦5,000",
    initial: "D",
    color: "purple",
  },
  {
    name: "Aminu M.",
    email: "aminu.m@example.com",
    id: "987651",
    service: "Web Hosting",
    status: "Paid",
    date: "May 28, 2024",
    time: "11:45 AM",
    commission: "₦25,000",
    initial: "A",
    color: "green",
  },
  {
    name: "Fatima I.",
    email: "fatima.i@example.com",
    id: "987650",
    service: "Domain",
    status: "Cancelled",
    date: "May 27, 2024",
    time: "02:10 PM",
    commission: "₦0",
    initial: "F",
    color: "orange",
  },
];

export default function ReferralsPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All Status");

  const [service, setService] = useState("All Services");

  const [page, setPage] = useState(1);

  const filteredReferrals = referrals.filter((referral) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      referral.name.toLowerCase().includes(searchValue) ||
      referral.email.toLowerCase().includes(searchValue) ||
      referral.id.includes(searchValue);

    const matchesStatus =
      status === "All Status" || referral.status === status;

    const matchesService =
      service === "All Services" || referral.service === service;

    return matchesSearch && matchesStatus && matchesService;
  });

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://iruhost.com/aff.php?ref=IRU12345"
      );
    } catch {
      console.log("Could not copy referral link");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">

        {/* ========================================= */}
        {/* PAGE HEADER */}
        {/* ========================================= */}

        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950">
              Referrals
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track, manage and analyze all your referrals.
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

        {/* ========================================= */}
        {/* STATISTICS */}
        {/* ========================================= */}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

          <ReferralStat
            title="Total Referrals"
            value="1,248"
            change="18.6%"
            icon={<Users />}
            type="positive"
            iconClass="bg-green-50 text-green-600"
          />

          <ReferralStat
            title="Paid Referrals"
            value="642"
            change="15.3%"
            icon={<ShoppingCart />}
            type="positive"
            iconClass="bg-blue-50 text-blue-600"
          />

          <ReferralStat
            title="Conversion Rate"
            value="51.4%"
            change="8.7%"
            icon={<TrendingUp />}
            type="positive"
            iconClass="bg-purple-50 text-purple-600"
          />

          <ReferralStat
            title="Pending Referrals"
            value="128"
            change="12.2%"
            icon={<Timer />}
            type="positive"
            iconClass="bg-orange-50 text-orange-600"
          />

          <ReferralStat
            title="Cancelled Referrals"
            value="24"
            change="4.1%"
            icon={<CheckCircle2 />}
            type="negative"
            iconClass="bg-green-50 text-green-600"
          />

        </div>

        {/* ========================================= */}
        {/* REFERRAL LINK + QUICK SHARE */}
        {/* ========================================= */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="grid gap-7 lg:grid-cols-[1.5fr_1fr]">

            {/* Referral link */}
            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Your Referral Link
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Share this link and start earning commission.
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">

                <div className="flex h-12 flex-1 items-center rounded-xl border border-slate-200 bg-white px-4">
                  <span className="min-w-0 flex-1 truncate text-sm text-slate-600">
                    https://iruhost.com/aff.php?ref=IRU12345
                  </span>

                  <button
                    type="button"
                    onClick={copyReferralLink}
                    className="ml-3 shrink-0 text-slate-500 transition hover:text-green-600"
                    title="Copy referral link"
                  >
                    <Clipboard className="h-5 w-5" />
                  </button>
                </div>

                <button
                  type="button"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 text-sm font-bold text-white transition hover:bg-green-800"
                >
                  <Share2 className="h-4 w-4" />
                  Share Link
                </button>

              </div>
            </div>

            {/* Quick share */}
            <div className="border-t border-slate-100 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">

              <h2 className="text-lg font-bold text-slate-950">
                Quick Share
              </h2>

              <div className="mt-5 grid grid-cols-5 gap-3">

                <ShareButton
                  icon={
                    <span className="text-lg font-black text-green-600">
                      W
                    </span>
                  }
                  label="WhatsApp"
                />

                <ShareButton
                  icon={
                    <span className="text-lg font-black text-blue-600">
                      f
                    </span>
                  }
                  label="Facebook"
                />

                <ShareButton
                  icon={
                    <span className="text-lg font-black text-slate-900">
                      X
                    </span>
                  }
                  label="X (Twitter)"
                />

                <ShareButton
                  icon={
                    <Send className="h-5 w-5 text-sky-500" />
                  }
                  label="Telegram"
                />

                <ShareButton
                  icon={
                    <Mail className="h-5 w-5 text-slate-500" />
                  }
                  label="Email"
                />

              </div>
            </div>

          </div>
        </section>

        {/* ========================================= */}
        {/* REFERRALS TABLE */}
        {/* ========================================= */}

        <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Filters */}
          <div className="border-b border-slate-100 p-4 sm:p-5">

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr_auto]">

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, email or ID..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Status */}
              <FilterSelect
                value={status}
                options={[
                  "All Status",
                  "Paid",
                  "Pending",
                  "Cancelled",
                ]}
                onChange={setStatus}
              />

              {/* Services */}
              <FilterSelect
                value={service}
                options={[
                  "All Services",
                  "Web Hosting",
                  "Domain",
                  "Business Email",
                ]}
                onChange={setService}
              />

              {/* Date */}
              <button
                type="button"
                className="flex h-11 items-center justify-between rounded-xl border border-slate-200 px-4 text-sm text-slate-600"
              >
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  May 1 – May 31, 2024
                </span>

                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Export */}
              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-green-600 px-5 text-sm font-bold text-green-700 transition hover:bg-green-50"
              >
                <Download className="h-4 w-4" />
                Export
              </button>

            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50 text-left text-xs font-semibold text-slate-500">

                  <th className="px-6 py-4">
                    Referrer
                  </th>

                  <th className="px-6 py-4">
                    Email
                  </th>

                  <th className="px-6 py-4">
                    Service
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                  <th className="px-6 py-4">
                    Date
                  </th>

                  <th className="px-6 py-4">
                    Commission
                  </th>

                  <th className="px-6 py-4 text-right">
                    Actions
                  </th>

                </tr>
              </thead>

              <tbody>
                {filteredReferrals.map((referral) => (
                  <tr
                    key={referral.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50/50"
                  >

                    {/* Referrer */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${getAvatarClass(
                            referral.color
                          )}`}
                        >
                          {referral.initial}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {referral.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            ID: {referral.id}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {referral.email}
                      </span>
                    </td>

                    {/* Service */}
                    <td className="px-6 py-4">
                      <ServiceBadge service={referral.service} />
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <StatusBadge status={referral.status} />
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700">
                        {referral.date}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {referral.time}
                      </p>
                    </td>

                    {/* Commission */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-800">
                        {referral.commission}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">

                        <button
                          type="button"
                          title="View referral"
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-green-500 hover:text-green-600"
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          title="More actions"
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-green-500 hover:text-green-600"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

            {/* Empty state */}
            {filteredReferrals.length === 0 && (
              <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                  <Users className="h-6 w-6 text-slate-400" />
                </div>

                <h3 className="mt-4 font-bold text-slate-800">
                  No referrals found
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Try changing your search or filters.
                </p>
              </div>
            )}

          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                1 to 10
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                1,248
              </span>{" "}
              referrals
            </p>

            <div className="flex items-center gap-2">

              <button
                type="button"
                disabled={page === 1}
                onClick={() => setPage(Math.max(1, page - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {[1, 2, 3].map((number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() => setPage(number)}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium ${
                    page === number
                      ? "border border-green-600 bg-green-50 text-green-700"
                      : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {number}
                </button>
              ))}

              <span className="px-1 text-slate-400">
                ...
              </span>

              <button
                type="button"
                onClick={() => setPage(125)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-slate-600"
              >
                125
              </button>

              <button
                type="button"
                onClick={() => setPage(page + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

            </div>

            <button
              type="button"
              className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600"
            >
              10 / page
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

function ReferralStat({
  title,
  value,
  change,
  icon,
  type,
  iconClass,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  type: "positive" | "negative";
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${iconClass}`}
        >
          <div className="h-6 w-6">
            {icon}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-600">
            {title}
          </p>

          <h3 className="mt-1 text-2xl font-black text-slate-950">
            {value}
          </h3>
        </div>

      </div>

      <div className="mt-6 flex items-center gap-3 text-xs">

        <span
          className={`flex items-center gap-1 font-bold ${
            type === "positive"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {type === "positive" ? (
            <TrendingUp className="h-3.5 w-3.5" />
          ) : (
            <TrendingDown className="h-3.5 w-3.5" />
          )}

          {change}
        </span>

        <span className="text-slate-500">
          vs Apr 1 – Apr 30
        </span>

      </div>
    </div>
  );
}


/* ================================================= */
/* FILTER SELECT */
/* ================================================= */

function FilterSelect({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-600 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
      >
        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

    </div>
  );
}


/* ================================================= */
/* SHARE BUTTON */
/* ================================================= */

function ShareButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="group flex flex-col items-center gap-2"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white transition group-hover:border-green-500 group-hover:bg-green-50">
        {icon}
      </span>

      <span className="text-[11px] font-medium text-slate-600">
        {label}
      </span>
    </button>
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
  const styles = {
    "Web Hosting": "bg-green-50 text-green-700",
    Domain: "bg-blue-50 text-blue-700",
    "Business Email": "bg-purple-50 text-purple-700",
  };

  return (
    <span
      className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
        styles[service as keyof typeof styles]
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
  const styles = {
    Paid: "bg-green-50 text-green-700",
    Pending: "bg-orange-50 text-orange-700",
    Cancelled: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold ${
        styles[status as keyof typeof styles]
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "Paid"
            ? "bg-green-600"
            : status === "Pending"
            ? "bg-orange-500"
            : "bg-red-500"
        }`}
      />

      {status}
    </span>
  );
}


/* ================================================= */
/* AVATAR COLORS */
/* ================================================= */

function getAvatarClass(color: string) {
  switch (color) {
    case "blue":
      return "bg-blue-100 text-blue-700";

    case "purple":
      return "bg-purple-100 text-purple-700";

    case "orange":
      return "bg-orange-100 text-orange-700";

    default:
      return "bg-green-100 text-green-700";
  }
}