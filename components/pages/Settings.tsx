"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Clipboard,
  Copy,
  Download,
  Globe,
  Info,
  KeyRound,
  Lock,
  Moon,
  Palette,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  Trash2,
  User,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export default function SettingsContent() {
  const [activeTab, setActiveTab] = useState("General");

  const [notifications, setNotifications] = useState({
    email: true,
    marketing: true,
    payout: true,
    referral: true,
    weekly: false,
    product: true,
  });

  const [theme, setTheme] = useState("Light");

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1500px]">

        {/* ======================================= */}
        {/* HEADER */}
        {/* ======================================= */}

        <div className="mb-6">

          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Settings
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your account settings and preferences.
          </p>

        </div>


        {/* ======================================= */}
        {/* SETTINGS TABS */}
        {/* ======================================= */}

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">

          <div className="flex min-w-max">

            <SettingsTab
              label="General"
              icon={<SlidersHorizontal className="h-4 w-4" />}
              active={activeTab === "General"}
              onClick={() => setActiveTab("General")}
            />

            <SettingsTab
              label="Security"
              icon={<ShieldCheck className="h-4 w-4" />}
              active={activeTab === "Security"}
              onClick={() => setActiveTab("Security")}
            />

            <SettingsTab
              label="Notifications"
              icon={<BellIcon className="h-4 w-4" />}
              active={activeTab === "Notifications"}
              onClick={() => setActiveTab("Notifications")}
            />

            <SettingsTab
              label="Payment"
              icon={<Wallet className="h-4 w-4" />}
              active={activeTab === "Payment"}
              onClick={() => setActiveTab("Payment")}
            />

            <SettingsTab
              label="Privacy"
              icon={<Lock className="h-4 w-4" />}
              active={activeTab === "Privacy"}
              onClick={() => setActiveTab("Privacy")}
            />

            <SettingsTab
              label="API Access"
              icon={<CodeIcon className="h-4 w-4" />}
              active={activeTab === "API Access"}
              onClick={() => setActiveTab("API Access")}
            />

          </div>

        </div>


        {/* ======================================= */}
        {/* MAIN SETTINGS GRID */}
        {/* ======================================= */}

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.55fr_0.8fr]">

          {/* ===================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================== */}

          <div className="space-y-5">

            {/* GENERAL SETTINGS */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <SectionHeading
                icon={<SlidersHorizontal className="h-5 w-5" />}
                iconClass="bg-green-50 text-green-600"
                title="General Settings"
                description="Configure your general account settings and preferences."
              />

              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <FormInput
                  label="Full Name"
                  value="Affiliate User"
                />

                <FormInput
                  label="Username"
                  value="affiliateuser"
                />

                <FormInput
                  label="Email Address"
                  value="affiliate@example.com"
                  type="email"
                />

                <div>
                  <label className="mb-2 block text-[10px] font-bold text-slate-600">
                    Affiliate ID
                  </label>

                  <div className="relative">

                    <input
                      value="IRU12345"
                      readOnly
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 pr-10 text-xs text-slate-500 outline-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        navigator.clipboard?.writeText("IRU12345")
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-green-600"
                    >
                      <Copy className="h-4 w-4" />
                    </button>

                  </div>
                </div>


                <SelectInput
                  label="Timezone"
                  value="(GMT+1) West Africa Time"
                />

                <SelectInput
                  label="Date Format"
                  value="May 15, 2024 (MM DD, YYYY)"
                />

                <SelectInput
                  label="Language"
                  value="English"
                />

                <SelectInput
                  label="Currency"
                  value="NGN (Naira)"
                />

              </div>


              <button
                type="button"
                className="mt-5 flex items-center gap-2 rounded-lg bg-green-700 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-green-800"
              >
                <Check className="h-4 w-4" />
                Save Changes
              </button>

            </section>


            {/* SITE PREFERENCES */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <SectionHeading
                icon={<Globe className="h-5 w-5" />}
                iconClass="bg-green-50 text-green-600"
                title="Site Preferences"
                description="Customize your dashboard experience."
              />


              <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">

                {/* Theme */}
                <div>

                  <label className="mb-3 block text-[10px] font-bold text-slate-600">
                    Dashboard Theme
                  </label>

                  <div className="grid grid-cols-3 gap-3">

                    <ThemeButton
                      label="Light"
                      icon={<Sun className="h-4 w-4" />}
                      active={theme === "Light"}
                      onClick={() => setTheme("Light")}
                    />

                    <ThemeButton
                      label="Dark"
                      icon={<Moon className="h-4 w-4" />}
                      active={theme === "Dark"}
                      onClick={() => setTheme("Dark")}
                    />

                    <ThemeButton
                      label="System"
                      icon={<Palette className="h-4 w-4" />}
                      active={theme === "System"}
                      onClick={() => setTheme("System")}
                    />

                  </div>

                </div>


                {/* Page Settings */}
                <div className="space-y-4">

                  <SelectInput
                    label="Items Per Page"
                    value="10 items"
                  />

                  <SelectInput
                    label="Default Page"
                    value="Dashboard"
                  />

                </div>

              </div>


              <button
                type="button"
                className="mt-5 flex items-center gap-2 rounded-lg bg-green-700 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-green-800"
              >
                <Check className="h-4 w-4" />
                Save Preferences
              </button>

            </section>


            {/* ACCOUNT INFORMATION */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <SectionHeading
                icon={<Info className="h-5 w-5" />}
                iconClass="bg-green-50 text-green-600"
                title="Account Information"
                description="View your account details and membership information."
              />

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

                <InfoStat
                  icon={<Clipboard className="h-4 w-4" />}
                  label="Member Since"
                  value="May 15, 2024"
                />

                <InfoStat
                  icon={<ShieldCheck className="h-4 w-4" />}
                  label="Account Status"
                  value="Active"
                  green
                />

                <InfoStat
                  icon={<Users className="h-4 w-4" />}
                  label="Affiliate Tier"
                  value="Gold Affiliate"
                />

                <InfoStat
                  icon={<Users className="h-4 w-4" />}
                  label="Total Referrals"
                  value="1,248"
                />

                <InfoStat
                  icon={<Wallet className="h-4 w-4" />}
                  label="Total Earnings"
                  value="₦850,000"
                />

                <InfoStat
                  icon={<Wallet className="h-4 w-4" />}
                  label="Total Payouts"
                  value="₦730,000"
                />

              </div>

            </section>

          </div>


          {/* ===================================== */}
          {/* RIGHT CONTENT */}
          {/* ===================================== */}

          <div className="space-y-5">

            {/* ACCOUNT PREFERENCES */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <SectionHeading
                icon={<SlidersHorizontal className="h-5 w-5" />}
                iconClass="bg-green-50 text-green-600"
                title="Account Preferences"
                description="Manage your account preferences."
              />


              <div className="mt-5 space-y-1">

                <ToggleRow
                  title="Email Notifications"
                  description="Receive important updates via email"
                  enabled={notifications.email}
                  onToggle={() => toggleNotification("email")}
                />

                <ToggleRow
                  title="Marketing Emails"
                  description="Receive marketing tips and promotions"
                  enabled={notifications.marketing}
                  onToggle={() => toggleNotification("marketing")}
                />

                <ToggleRow
                  title="Payout Notifications"
                  description="Get notified about payouts and earnings"
                  enabled={notifications.payout}
                  onToggle={() => toggleNotification("payout")}
                />

                <ToggleRow
                  title="Referral Notifications"
                  description="Get notified when someone signs up"
                  enabled={notifications.referral}
                  onToggle={() => toggleNotification("referral")}
                />

                <ToggleRow
                  title="Weekly Summary"
                  description="Receive weekly performance summary"
                  enabled={notifications.weekly}
                  onToggle={() => toggleNotification("weekly")}
                />

                <ToggleRow
                  title="Product Updates"
                  description="Receive updates about new products"
                  enabled={notifications.product}
                  onToggle={() => toggleNotification("product")}
                />

              </div>


              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-green-50 py-2.5 text-xs font-bold text-green-700 transition hover:bg-green-100"
              >
                <Check className="h-4 w-4" />
                Save Preferences
              </button>

            </section>


            {/* QUICK ACTIONS */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <SectionHeading
                icon={<Zap className="h-5 w-5" />}
                iconClass="bg-green-50 text-green-600"
                title="Quick Actions"
                description="Manage your account settings quickly."
              />


              <div className="mt-5 grid grid-cols-2 gap-3">

                <QuickAction
                  icon={<KeyRound className="h-5 w-5" />}
                  title="Change Password"
                  description="Update your password"
                />

                <QuickAction
                  icon={<User className="h-5 w-5" />}
                  title="Update Profile"
                  description="Edit your profile info"
                />

                <QuickAction
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Two-Factor Auth"
                  description="Manage 2FA settings"
                />

                <QuickAction
                  icon={<Download className="h-5 w-5" />}
                  title="Download Data"
                  description="Export your data"
                />

              </div>


              {/* Deactivate */}
              <button
                type="button"
                className="mt-3 flex w-full items-center gap-3 rounded-lg border border-red-200 bg-white p-4 text-left transition hover:bg-red-50"
              >

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </div>

                <div className="flex-1">

                  <p className="text-xs font-bold text-slate-800">
                    Deactivate Account
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Temporarily deactivate your account
                  </p>

                </div>

                <ChevronRight className="h-4 w-4 text-red-500" />

              </button>

            </section>

          </div>

        </div>

      </div>
    </main>
  );
}


/* ================================================= */
/* SETTINGS TAB */
/* ================================================= */

function SettingsTab({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex items-center gap-2 px-6 py-4 text-xs font-semibold transition ${
        active
          ? "text-green-700"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >

      {icon}

      {label}

      {active && (
        <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-green-600" />
      )}

    </button>
  );
}


/* ================================================= */
/* SECTION HEADING */
/* ================================================= */

function SectionHeading({
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

        <p className="mt-1 text-[10px] text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
}


/* ================================================= */
/* FORM INPUT */
/* ================================================= */

function FormInput({
  label,
  value,
  type = "text",
}: {
  label: string;
  value: string;
  type?: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-[10px] font-bold text-slate-600">
        {label}
      </label>

      <input
        type={type}
        defaultValue={value}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
      />

    </div>
  );
}


/* ================================================= */
/* SELECT INPUT */
/* ================================================= */

function SelectInput({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-[10px] font-bold text-slate-600">
        {label}
      </label>

      <div className="relative">

        <select
          defaultValue={value}
          className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-9 text-xs text-slate-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
        >
          <option>{value}</option>
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

      </div>

    </div>
  );
}


/* ================================================= */
/* THEME BUTTON */
/* ================================================= */

function ThemeButton({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-20 flex-col items-center justify-center gap-2 rounded-lg border text-xs font-semibold transition ${
        active
          ? "border-green-500 bg-green-50 text-green-700"
          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}


/* ================================================= */
/* TOGGLE ROW */
/* ================================================= */

function ToggleRow({
  title,
  description,
  enabled,
  onToggle,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center gap-3 py-3">

      <div className="min-w-0 flex-1">

        <p className="text-xs font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-slate-500">
          {description}
        </p>

      </div>


      <button
        type="button"
        onClick={onToggle}
        aria-label={`Toggle ${title}`}
        className={`relative h-5 w-9 shrink-0 rounded-full transition ${
          enabled ? "bg-green-600" : "bg-slate-200"
        }`}
      >

        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            enabled ? "left-[18px]" : "left-0.5"
          }`}
        />

      </button>

    </div>
  );
}


/* ================================================= */
/* QUICK ACTION */
/* ================================================= */

function QuickAction({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      className="group flex min-h-[85px] items-center gap-3 rounded-lg border border-slate-200 p-3 text-left transition hover:border-green-200 hover:bg-green-50/40"
    >

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[11px] font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-[9px] leading-4 text-slate-500">
          {description}
        </p>

      </div>

      <ChevronRight className="h-4 w-4 shrink-0 text-green-600 transition group-hover:translate-x-0.5" />

    </button>
  );
}


/* ================================================= */
/* INFO STAT */
/* ================================================= */

function InfoStat({
  icon,
  label,
  value,
  green = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  green?: boolean;
}) {
  return (
    <div className="border-l border-slate-100 pl-3">

      <div className="flex items-center gap-1.5 text-slate-400">
        {icon}

        <span className="text-[9px] font-medium">
          {label}
        </span>
      </div>

      <p
        className={`mt-2 text-[11px] font-bold ${
          green ? "text-green-600" : "text-slate-800"
        }`}
      >
        {value}
      </p>

    </div>
  );
}


/* ================================================= */
/* SIMPLE ICON COMPONENTS */
/* ================================================= */

function BellIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </svg>
  );
}