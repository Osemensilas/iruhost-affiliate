"use client";

import {
  Camera,
  Check,
  ChevronRight,
  Clock3,
  Edit3,
  Eye,
  EyeOff,
  Globe2,
  KeyRound,
  Landmark,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Save,
  Settings2,
  ShieldCheck,
  User,
  Users,
  Wallet,
} from "lucide-react";

import { useState } from "react";

export default function ProfileContent() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1500px]">

        {/* ========================================= */}
        {/* PAGE HEADER */}
        {/* ========================================= */}

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950">
              Profile
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage your personal information and account settings.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Home</span>

            <ChevronRight className="h-3.5 w-3.5" />

            <span className="font-semibold text-slate-800">
              Profile
            </span>
          </div>

        </div>


        {/* ========================================= */}
        {/* PROFILE SUMMARY */}
        {/* ========================================= */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

            {/* User */}
            <div className="flex items-center gap-4">

              <div className="relative">

                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-green-100 text-2xl font-black text-green-700">

                  {/* Replace with user's image */}
                  <User className="h-9 w-9" />

                </div>

                <button
                  type="button"
                  className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white text-slate-600 shadow-sm hover:text-green-700"
                >
                  <Camera className="h-4 w-4" />
                </button>

              </div>


              <div>

                <div className="flex flex-wrap items-center gap-2">

                  <h2 className="text-xl font-black text-slate-950">
                    Affiliate User
                  </h2>

                  <span className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold text-green-700">
                    <Check className="h-3 w-3" />
                    Verified
                  </span>

                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Affiliate ID: <span className="font-semibold text-slate-700">IRU12345</span>
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Member since May 15, 2024
                </p>

                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5" />
                  Nigeria
                </p>

              </div>

            </div>


            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:min-w-[650px]">

              <ProfileStat
                icon={<Users className="h-5 w-5" />}
                iconClass="bg-green-50 text-green-600"
                label="Total Referrals"
                value="1,248"
              />

              <ProfileStat
                icon={<Wallet className="h-5 w-5" />}
                iconClass="bg-blue-50 text-blue-600"
                label="Paid Referrals"
                value="642"
              />

              <ProfileStat
                icon={<Wallet className="h-5 w-5" />}
                iconClass="bg-purple-50 text-purple-600"
                label="Total Earnings"
                value="₦850,000"
              />

              <ProfileStat
                icon={<Clock3 className="h-5 w-5" />}
                iconClass="bg-orange-50 text-orange-600"
                label="Pending Payout"
                value="₦120,000"
              />

            </div>

          </div>

        </section>


        {/* ========================================= */}
        {/* INFORMATION GRID */}
        {/* ========================================= */}

        <div className="mt-5 grid gap-5 xl:grid-cols-3">

          {/* ======================================= */}
          {/* PERSONAL INFORMATION */}
          {/* ======================================= */}

          <ProfileCard
            icon={<User className="h-5 w-5" />}
            iconClass="bg-green-50 text-green-600"
            title="Personal Information"
            description="Update your personal details and how you want to be contacted."
          >

            <ProfileRow
              icon={<User className="h-4 w-4" />}
              label="Full Name"
              value="Affiliate User"
            />

            <ProfileRow
              icon={<Mail className="h-4 w-4" />}
              label="Email Address"
              value="affiliate@example.com"
            />

            <ProfileRow
              icon={<Phone className="h-4 w-4" />}
              label="Phone Number"
              value="+234 801 234 5678"
            />

            <ProfileRow
              icon={<Globe2 className="h-4 w-4" />}
              label="Country"
              value="Nigeria"
            />

            <ProfileRow
              icon={<MapPin className="h-4 w-4" />}
              label="State"
              value="Lagos"
            />

            <ProfileRow
              icon={<MapPin className="h-4 w-4" />}
              label="Address"
              value="12, Adeola Street, Lagos"
              last
            />

          </ProfileCard>


          {/* ======================================= */}
          {/* ACCOUNT SETTINGS */}
          {/* ======================================= */}

          <ProfileCard
            icon={<Settings2 className="h-5 w-5" />}
            iconClass="bg-blue-50 text-blue-600"
            title="Account Settings"
            description="Manage your account preferences and settings."
          >

            <SettingRow
              label="Preferred Language"
              value="English"
            />

            <SettingRow
              label="Email Notifications"
              value="Enabled"
              status
            />

            <SettingRow
              label="Payout Notifications"
              value="Enabled"
              status
            />

            <SettingRow
              label="Marketing Emails"
              value="Enabled"
              status
            />

            <SettingRow
              label="Timezone"
              value="(GMT+1) West Africa Time"
              last
            />

          </ProfileCard>


          {/* ======================================= */}
          {/* BANK DETAILS */}
          {/* ======================================= */}

          <ProfileCard
            icon={<Landmark className="h-5 w-5" />}
            iconClass="bg-purple-50 text-purple-600"
            title="Bank Details"
            description="Manage your payout and banking information."
          >

            <div className="mb-4 rounded-lg border border-green-100 bg-green-50 px-3 py-3">

              <p className="text-[11px] font-semibold text-green-700">
                Your payouts will be sent to this bank account.
              </p>

            </div>


            <BankRow
              label="Bank Name"
              value="GTBank"
            />

            <BankRow
              label="Account Number"
              value="0123456789"
            />

            <BankRow
              label="Account Name"
              value="Affiliate User"
            />

            <BankRow
              label="Account Type"
              value="Savings"
            />

            <BankRow
              label="Bank Code"
              value="058"
              last
            />


            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-green-600 py-2.5 text-xs font-bold text-green-700 transition hover:bg-green-50"
            >
              <Edit3 className="h-3.5 w-3.5" />
              Edit Bank Details
            </button>

          </ProfileCard>

        </div>


        {/* ========================================= */}
        {/* SECURITY SECTION */}
        {/* ========================================= */}

        <div className="mt-5 grid gap-5 xl:grid-cols-2">

          {/* ======================================= */}
          {/* CHANGE PASSWORD */}
          {/* ======================================= */}

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <LockKeyhole className="h-5 w-5" />
              </div>

              <div>

                <h2 className="text-sm font-black text-slate-950">
                  Change Password
                </h2>

                <p className="mt-1 text-[11px] text-slate-500">
                  Ensure your account is using a strong and secure password.
                </p>

              </div>

            </div>


            <div className="mt-5 space-y-4">

              {/* Current Password */}
              <PasswordInput
                label="Current Password"
                show={showCurrentPassword}
                setShow={setShowCurrentPassword}
              />

              {/* New Password */}
              <PasswordInput
                label="New Password"
                show={showNewPassword}
                setShow={setShowNewPassword}
              />

              {/* Confirm Password */}
              <PasswordInput
                label="Confirm New Password"
                show={showConfirmPassword}
                setShow={setShowConfirmPassword}
              />

            </div>


            <div className="mt-5 flex justify-end">

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-green-700 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-green-800"
              >
                <Save className="h-3.5 w-3.5" />
                Update Password
              </button>

            </div>

          </section>


          {/* ======================================= */}
          {/* TWO FACTOR AUTHENTICATION */}
          {/* ======================================= */}

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>

                <h2 className="text-sm font-black text-slate-950">
                  Two-Factor Authentication
                </h2>

                <p className="mt-1 text-[11px] text-slate-500">
                  Add an extra layer of security to your account.
                </p>

              </div>

            </div>


            {/* Enabled Alert */}
            <div className="mt-5 flex items-center gap-3 rounded-lg border border-green-100 bg-green-50 p-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                <Check className="h-4 w-4" />
              </div>

              <div>

                <p className="text-xs font-bold text-green-700">
                  Two-factor authentication is enabled
                </p>

                <p className="mt-1 text-[10px] text-green-600">
                  Your account is protected with two-factor authentication.
                </p>

              </div>

            </div>


            {/* 2FA Details */}
            <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200">

              <div className="pr-4">

                <p className="text-[10px] text-slate-400">
                  Email
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-700">
                  a*****@example.com
                </p>

                <span className="mt-2 inline-block rounded-full bg-green-100 px-2 py-1 text-[9px] font-bold text-green-700">
                  Verified
                </span>

              </div>


              <div className="px-4">

                <p className="text-[10px] text-slate-400">
                  Authenticator App
                </p>

                <p className="mt-2 text-xs font-semibold text-slate-700">
                  Enabled
                </p>

              </div>


              <div className="pl-4">

                <p className="text-[10px] text-slate-400">
                  Backup Codes
                </p>

                <p className="mt-2 text-xs font-semibold text-green-700">
                  5 Available
                </p>

              </div>

            </div>


            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-green-600 py-2.5 text-xs font-bold text-green-700 transition hover:bg-green-50"
            >
              <ShieldCheck className="h-4 w-4" />
              Manage 2FA Settings
            </button>

          </section>

        </div>


        {/* ========================================= */}
        {/* ACCOUNT ACTIVITY */}
        {/* ========================================= */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <KeyRound className="h-5 w-5" />
              </div>

              <div>

                <h2 className="text-sm font-black text-slate-950">
                  Account Security
                </h2>

                <p className="mt-1 text-[11px] text-slate-500">
                  Review your recent account security activity.
                </p>

              </div>

            </div>


            <button
              type="button"
              className="flex items-center gap-2 text-xs font-bold text-green-700"
            >
              View Security Activity
              <ChevronRight className="h-4 w-4" />
            </button>

          </div>

        </section>

      </div>
    </main>
  );
}


/* ================================================= */
/* PROFILE CARD */
/* ================================================= */

function ProfileCard({
  icon,
  iconClass,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start gap-3">

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        >
          {icon}
        </div>

        <div>

          <h2 className="text-sm font-black text-slate-950">
            {title}
          </h2>

          <p className="mt-1 text-[10px] leading-4 text-slate-500">
            {description}
          </p>

        </div>

      </div>


      <div className="mt-4">
        {children}
      </div>

    </section>
  );
}


/* ================================================= */
/* PROFILE ROW */
/* ================================================= */

function ProfileRow({
  icon,
  label,
  value,
  last = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 py-3 ${
        !last ? "border-b border-slate-100" : ""
      }`}
    >

      <span className="shrink-0 text-slate-400">
        {icon}
      </span>

      <span className="w-[100px] shrink-0 text-[10px] font-medium text-slate-500">
        {label}
      </span>

      <span className="min-w-0 flex-1 truncate text-[11px] font-semibold text-slate-700">
        {value}
      </span>

      <button
        type="button"
        className="flex shrink-0 items-center gap-1 rounded-md border border-slate-200 px-2 py-1.5 text-[9px] font-semibold text-slate-600 hover:bg-slate-50"
      >
        <Edit3 className="h-3 w-3" />
        Edit
      </button>

    </div>
  );
}


/* ================================================= */
/* ACCOUNT SETTING ROW */
/* ================================================= */

function SettingRow({
  label,
  value,
  status = false,
  last = false,
}: {
  label: string;
  value: string;
  status?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 py-3 ${
        !last ? "border-b border-slate-100" : ""
      }`}
    >

      <span className="flex-1 text-[10px] font-medium text-slate-500">
        {label}
      </span>

      <span
        className={`text-[10px] font-semibold ${
          status ? "text-green-600" : "text-slate-700"
        }`}
      >
        {value}
      </span>

      <button
        type="button"
        className="rounded-md border border-slate-200 px-2 py-1.5 text-[9px] font-semibold text-slate-600 hover:bg-slate-50"
      >
        Edit
      </button>

    </div>
  );
}


/* ================================================= */
/* BANK ROW */
/* ================================================= */

function BankRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-3 ${
        !last ? "border-b border-slate-100" : ""
      }`}
    >

      <span className="text-[10px] font-medium text-slate-500">
        {label}
      </span>

      <span className="text-right text-[11px] font-semibold text-slate-700">
        {value}
      </span>

    </div>
  );
}


/* ================================================= */
/* PASSWORD INPUT */
/* ================================================= */

function PasswordInput({
  label,
  show,
  setShow,
}: {
  label: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

      <label className="w-full shrink-0 text-[10px] font-semibold text-slate-600 sm:w-[140px]">
        {label}
      </label>

      <div className="relative flex-1">

        <input
          type={show ? "text" : "password"}
          defaultValue="password123"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-10 text-xs text-slate-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
        >
          {show ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>

      </div>

    </div>
  );
}


/* ================================================= */
/* PROFILE STAT */
/* ================================================= */

function ProfileStat({
  icon,
  iconClass,
  label,
  value,
}: {
  icon: React.ReactNode;
  iconClass: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 border-l border-slate-100 pl-4">

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="truncate text-[9px] text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-sm font-black text-slate-900">
          {value}
        </p>

      </div>

    </div>
  );
}