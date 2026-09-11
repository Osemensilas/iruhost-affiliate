"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ArrowRight,
  ArrowUp,
  Banknote,
  CreditCard,
  Globe,
  Headphones,
  Mail,
  Monitor,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {

    const pathname = usePathname();
    const handleBackToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

  return (
    <footer className={`"bg-background text-accent
        ${pathname === "/" ? "" : "hidden"}
    `}>

      {/* Newsletter */}
      <div className="px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-linear-to-r from-primary/10 to-accent px-6 py-10 text-background sm:px-10 lg:px-14">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">

            {/* Newsletter content */}
            <div className="flex items-center gap-5">

              {/* Envelope */}
              <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-green-100 sm:flex">
                <Mail className="h-12 w-12 text-primary" />
              </div>

              <div>
                <h2 className="text-2xl font-black sm:text-3xl lg:text-4xl">
                  Stay Updated.{" "}
                  <span className="text-primary">
                    Earn More.
                  </span>
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-accent sm:text-base">
                  Subscribe to our newsletter for affiliate tips, updates,
                  useful resources, and exclusive offers.
                </p>
              </div>
            </div>

            {/* Newsletter form */}
            <form
              className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-14 flex-1 rounded-xl border border-grey bg-accent px-5 text-sm outline-none transition focus:border-primary/80 focus:ring-2 focus:ring-primary/10"
              />

              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-primary/80 px-7 text-sm font-bold text-accent transition hover:bg-primary"
              >
                Subscribe
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-accent/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="relative w-15 h-10">
                    <Image src="/logo.png" fill className="object-fill" alt="logo" />
                </div>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-accent">
                Empowering businesses and individuals with reliable digital
                solutions. Join our affiliate program and earn with IruHost.
              </p>

              {/* Social icons */}
                <div>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>

            {/* Company */}
            <FooterColumn title="Company">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Our Services</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </FooterColumn>

            {/* Affiliate */}
            <FooterColumn title="Affiliate">
              <FooterLink href="/affiliate#how-it-works">
                How It Works
              </FooterLink>

              <FooterLink href="/affiliate#benefits">
                Benefits
              </FooterLink>

              <FooterLink href="/affiliate/resources">
                Resources
              </FooterLink>

              <FooterLink href="/affiliate/payouts">
                Payouts
              </FooterLink>

              <FooterLink href="/affiliate/dashboard">
                Affiliate Dashboard
              </FooterLink>
            </FooterColumn>

            {/* Support */}
            <FooterColumn title="Support">
              <FooterLink href="/help">
                Help Center
              </FooterLink>

              <FooterLink href="/affiliate#faq">
                FAQs
              </FooterLink>

              <FooterLink href="/terms">
                Terms & Conditions
              </FooterLink>

              <FooterLink href="/privacy">
                Privacy Policy
              </FooterLink>

              <FooterLink href="/affiliate/terms">
                Affiliate Agreement
              </FooterLink>
            </FooterColumn>
          </div>

          {/* Services */}
          <div className="mt-14 border-t border-white/10 pt-12">

            <div className="mb-7 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-primary" />

              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Our Services
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

              <ServiceLink
                icon={<Monitor />}
                title="Web Hosting"
                href="/hosting"
              />

              <ServiceLink
                icon={<Globe />}
                title="Domain Registration"
                href="/domains"
              />

              <ServiceLink
                icon={<Mail />}
                title="Business Email"
                href="/email"
              />

              <ServiceLink
                icon={<Monitor />}
                title="Website Design"
                href="/website-design"
              />

              <ServiceLink
                icon={<ShieldCheck />}
                title="SSL Certificates"
                href="/ssl"
              />
            </div>
          </div>

          {/* Trust features */}
          <div className="mt-14 border-t border-accent/10 pt-12">
            <div className="grid gap-8 md:grid-cols-3">

              <TrustItem
                icon={<ShieldCheck />}
                title="Trusted & Secure"
                description="We provide secure and reliable solutions you can trust."
              />

              <TrustItem
                icon={<Headphones />}
                title="24/7 Support"
                description="Our support team is always here to help you succeed."
              />

              <TrustItem
                icon={<WalletCards />}
                title="Timely Payouts"
                description="We value our affiliates and aim to provide prompt and reliable payouts."
              />

            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-accent/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          {/* Copyright */}
          <p className="text-sm text-accent">
            © {new Date().getFullYear()} IruHost. All rights reserved.
          </p>

          {/* Payment methods */}
          <div className="flex flex-wrap items-center gap-3">
            <PaymentBadge>
              <CreditCard className="h-4 w-4" />
              Visa
            </PaymentBadge>

            <PaymentBadge>
              <CreditCard className="h-4 w-4" />
              Mastercard
            </PaymentBadge>

            <PaymentBadge>
              <WalletCards className="h-4 w-4" />
              Verve
            </PaymentBadge>

            <PaymentBadge>
              <WalletCards className="h-4 w-4" />
              PayPal
            </PaymentBadge>

            <PaymentBadge>
              <Banknote className="h-4 w-4" />
              Bank Transfer
            </PaymentBadge>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={handleBackToTop}
            className="group inline-flex items-center justify-center gap-3 self-start text-sm font-bold text-primary transition hover:text-primary/80 lg:self-auto"
          >
            Back to Top

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/80 text-white transition group-hover:bg-primary">
              <ArrowUp className="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- */
/* Reusable Components */
/* -------------------------------- */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-primary/800">
        {title}
      </h3>

      <div className="mt-5 h-1 w-9 rounded-full bg-primary" />

      <div className="mt-6 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-grey transition hover:text-primary"
    >
      {children}
    </a>
  );
}

function ServiceLink({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-accent/10 bg-background/10 p-4 transition hover:border-primary hover:bg-primary/20"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-accent/50 transition group-hover:bg-primary group-hover:text-accent">
        {icon}
      </span>

      <span className="text-sm font-medium text-accent/50 group-hover:text-accent">
        {title}
      </span>
    </a>
  );
}

function TrustItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/80 bg-primary/20 text-primary">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-bold text-accent">{title}</h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-accent/80">
          {description}
        </p>
      </div>
    </div>
  );
}

function PaymentBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-accent/10 bg-accent/3 px-3 py-2 text-xs font-semibold text-grey/60">
      {children}
    </div>
  );
}