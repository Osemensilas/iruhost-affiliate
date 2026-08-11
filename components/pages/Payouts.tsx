"use client";

import {
  Banknote,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  Eye,
  Landmark,
  MoreHorizontal,
  Send,
  Wallet,
  XCircle,
} from "lucide-react";

const payoutHistory = [
  {
    date: "May 15, 2024",
    id: "PAYOUT-2024-0018",
    amount: "₦100,000",
    method: "Bank Transfer",
    account: "**** **** **** 1234",
    status: "Paid",
    reference: "TRF987654321",
  },
  {
    date: "Apr 15, 2024",
    id: "PAYOUT-2024-0015",
    amount: "₦80,000",
    method: "Bank Transfer",
    account: "**** **** **** 1234",
    status: "Paid",
    reference: "TRF987654320",
  },
  {
    date: "Mar 15, 2024",
    id: "PAYOUT-2024-0012",
    amount: "₦70,000",
    method: "Bank Transfer",
    account: "**** **** **** 1234",
    status: "Paid",
    reference: "TRF987654319",
  },
  {
    date: "Feb 15, 2024",
    id: "PAYOUT-2024-0009",
    amount: "₦60,000",
    method: "Bank Transfer",
    account: "**** **** **** 1234",
    status: "Paid",
    reference: "TRF987654318",
  },
  {
    date: "Jan 15, 2024",
    id: "PAYOUT-2024-0006",
    amount: "₦50,000",
    method: "Bank Transfer",
    account: "**** **** **** 1234",
    status: "Paid",
    reference: "TRF987654317",
  },
];

export default function PayoutsContent() {
  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950">
              Payouts
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track your payouts and withdrawal history.
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


        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

          <PayoutStat
            title="Available Balance"
            value="₦120,000"
            description="Minimum payout: ₦10,000"
            icon={<Wallet />}
            iconClass="bg-green-50 text-green-600"
          />

          <PayoutStat
            title="Total Payouts"
            value="₦730,000"
            description="All time"
            icon={<Landmark />}
            iconClass="bg-blue-50 text-blue-600"
          />

          <PayoutStat
            title="Pending Payouts"
            value="₦120,000"
            description="1 payout pending"
            icon={<Clock3 />}
            iconClass="bg-purple-50 text-purple-600"
          />

          <PayoutStat
            title="Total Transactions"
            value="18"
            description="All time"
            icon={<CalendarDays />}
            iconClass="bg-orange-50 text-orange-600"
          />

          <PayoutStat
            title="Success Rate"
            value="100%"
            description="Successful payouts"
            icon={<CheckCircle2 />}
            iconClass="bg-green-50 text-green-600"
          />

        </div>


        {/* Balance + Next Payout */}
        <div className="mt-5 grid gap-5 xl:grid-cols-2">

          {/* Current Balance */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start justify-between">

              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Current Balance
                </h2>

                <p className="mt-3 text-3xl font-black text-green-700">
                  ₦120,000
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Available for withdrawal
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Wallet className="h-7 w-7" />
              </div>

            </div>


            {/* Progress */}
            <div className="mt-7">

              <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-green-600"
                  style={{ width: "90%" }}
                />
              </div>

              <div className="mt-3 flex justify-between text-xs">

                <div>
                  <p className="font-bold text-slate-800">
                    ₦120,000
                  </p>

                  <p className="mt-1 text-slate-500">
                    Available
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-slate-800">
                    ₦10,000
                  </p>

                  <p className="mt-1 text-slate-500">
                    Minimum Payout
                  </p>
                </div>

              </div>

            </div>


            <div className="mt-5 flex justify-end">

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
              >
                Request Payout
                <Send className="h-4 w-4" />
              </button>

            </div>

          </section>


          {/* Next Payout */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CalendarDays className="h-7 w-7" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Next Payout
                </h2>

                <div className="mt-3 flex flex-wrap items-center gap-3">

                  <span className="text-2xl font-black text-green-700">
                    ₦120,000
                  </span>

                  <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                    In 15 days
                  </span>

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Will be paid on Jun 15, 2024
                </p>
              </div>

            </div>


            <div className="mt-6 grid border-t border-slate-100 pt-5 sm:grid-cols-3">

              <div>
                <p className="text-xs text-slate-500">
                  Payout Method
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Bank Transfer
                </p>
              </div>

              <div className="mt-4 border-slate-100 sm:mt-0 sm:border-l sm:pl-6">
                <p className="text-xs text-slate-500">
                  Account
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-800">
                  **** **** 1234
                </p>
              </div>

              <div className="mt-4 border-slate-100 sm:mt-0 sm:border-l sm:pl-6">
                <p className="text-xs text-slate-500">
                  Status
                </p>

                <span className="mt-2 inline-flex rounded-md bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700">
                  Pending
                </span>
              </div>

            </div>

          </section>

        </div>


        {/* Payout History */}
        <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Table Header */}
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Payout History
              </h2>
            </div>

            <div className="flex gap-3">

              <button
                type="button"
                className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-600"
              >
                All Status
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

            <table className="w-full min-w-[1100px]">

              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50 text-left text-xs font-semibold text-slate-500">

                  <th className="px-6 py-4">
                    Date
                  </th>

                  <th className="px-6 py-4">
                    Transaction ID
                  </th>

                  <th className="px-6 py-4">
                    Amount
                  </th>

                  <th className="px-6 py-4">
                    Payout Method
                  </th>

                  <th className="px-6 py-4">
                    Account
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                  <th className="px-6 py-4">
                    Reference
                  </th>

                  <th className="px-6 py-4 text-right">
                    Action
                  </th>

                </tr>
              </thead>


              <tbody>

                {payoutHistory.map((payout) => (

                  <tr
                    key={payout.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
                  >

                    {/* Date */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {payout.date}
                      </span>
                    </td>


                    {/* Transaction ID */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-700">
                        {payout.id}
                      </span>
                    </td>


                    {/* Amount */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-800">
                        {payout.amount}
                      </span>
                    </td>


                    {/* Method */}
                    <td className="px-6 py-4">

                      <span className="inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                        <Landmark className="h-3.5 w-3.5" />
                        {payout.method}
                      </span>

                    </td>


                    {/* Account */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {payout.account}
                      </span>
                    </td>


                    {/* Status */}
                    <td className="px-6 py-4">
                      <PayoutStatus status={payout.status} />
                    </td>


                    {/* Reference */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {payout.reference}
                      </span>
                    </td>


                    {/* Action */}
                    <td className="px-6 py-4">

                      <div className="flex justify-end">

                        <button
                          type="button"
                          title="View payout"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-green-500 hover:text-green-600"
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                      </div>

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
                18
              </span>{" "}
              transactions
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

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-600"
              >
                4
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


/* ========================================= */
/* STAT CARD */
/* ========================================= */

function PayoutStat({
  title,
  value,
  description,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  description: string;
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

          <p className="text-sm font-medium text-slate-600">
            {title}
          </p>

          <h3 className="mt-1 truncate text-2xl font-black text-slate-950">
            {value}
          </h3>

        </div>

      </div>

      <p className="mt-5 text-xs text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* ========================================= */
/* STATUS */
/* ========================================= */

function PayoutStatus({
  status,
}: {
  status: string;
}) {
  if (status === "Paid") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
        <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
        Paid
      </span>
    );
  }

  if (status === "Pending") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
        Pending
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600">
      <XCircle className="h-3.5 w-3.5" />
      Failed
    </span>
  );
}