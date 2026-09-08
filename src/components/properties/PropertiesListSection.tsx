"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { CompletedProjectsStrip } from "@/components/properties/CompletedProjectsStrip";
import { FilterPill } from "@/components/ui/FilterPill";
import { RevealGroup } from "@/components/ui/RevealGroup";
import {
  FEATURED_PROPERTIES,
  PROPERTY_LISTINGS,
  PROPERTY_TABS,
} from "@/lib/properties-content";
import type { PropertyListing } from "@/lib/properties-content";

function ListingCard({
  property,
  index = 0,
}: {
  property: PropertyListing;
  index?: number;
}) {
  const cardClass =
    "group relative flex w-full flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border-primary bg-surface p-3 shadow-sm card-fade-in transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:scale-[1.02] hover:shadow-lg";
  const cardStyle = { "--card-delay": `${(index % 6) * 80}ms` } as React.CSSProperties;

  const body = (
    <>
      <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-xl">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 384px, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <span className="absolute top-4 right-4 rounded-md bg-surface px-3 py-1.5 text-sm font-medium text-title">
          {property.status === "On going" ? "On going" : "Completed"}
        </span>
        <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-active:bg-black/40" />
      </div>

      <div className="flex w-full flex-col gap-4 rounded-xl bg-surface-muted p-4">
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-start gap-2">
            <h3 className="min-w-0 flex-1 truncate text-display-xs font-semibold text-title">
              {property.title}
            </h3>
            <Image
              src="/fura/icons/arrow-up-right.svg"
              alt=""
              width={24}
              height={24}
              className="mt-0.5 size-6 shrink-0"
            />
          </div>
          {property.price ? (
            <p className="w-full text-lg text-subtitle">{property.price}</p>
          ) : null}
        </div>

        <hr className="w-full border-t border-border-primary" />

        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2">
            {property.specs.map((spec, index) => (
              <span
                key={`${spec.label}-${index}`}
                className="flex items-center gap-1"
              >
                <Image
                  src={spec.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 shrink-0"
                />
                <span className="text-xs font-medium whitespace-nowrap text-subtitle">
                  {spec.label}
                </span>
              </span>
            ))}
          </div>

          {property.location ? (
            <div className="flex w-full items-center gap-1">
              <Image
                src="/fura/icons/marker-pin-01.svg"
                alt=""
                width={16}
                height={16}
                className="size-4 shrink-0"
              />
              <p className="min-w-0 flex-1 truncate text-xs font-medium text-subtitle">
                {property.location}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );

  return property.href ? (
    <Link href={property.href} className={cardClass} style={cardStyle}>
      {body}
    </Link>
  ) : (
    <div className={cardClass} style={cardStyle}>
      {body}
    </div>
  );
}

export function PropertiesListSection() {
  const [activeTab, setActiveTab] = useState(0);

  const filteredListings = PROPERTY_LISTINGS.filter((property) => {
    if (activeTab === 1) return property.status === "On going";
    if (activeTab === 2) return property.status === "Completed";
    return true;
  });

  return (
    <>
      <CompanyHero
        image="/fura/properties/hero.png"
        title="Habitech Real Estate Properties Pty Ltd"
        subtitle="Global Real Asset Investment Platform – for Housing Solutions in Australia"
        ctaLabel="Partner With Us"
        ctaHref="/invest"
      />

      <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-16">
          <div className="flex w-full flex-col gap-4">
            <h1 className="w-full text-display-xs font-medium tracking-[-0.72px] text-title lg:text-display-md">
              Our Projects Portfolio - Real Estate Properties
            </h1>
            <p className="w-full text-base text-subtitle">
              <span className="font-medium text-title">
                Invest with FURA Habitech
              </span>
              <br />
              Access curated real estate investment opportunities through FURA
              Habitech&rsquo;s investment strategies, including{" "}
              <span className="font-medium text-title">
                Landbanking, Build-to-Sell and Build-to-Rent.
              </span>{" "}
              Investors may also invest directly into selected projects
              through dedicated SPVs, providing direct exposure to specific
              development opportunities.
              <br />
              <span className="font-medium text-title">
                Explore our current investment opportunities below.
              </span>
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 lg:gap-[42px]">
            <div className="-mx-4 w-[calc(100%+2rem)] overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:w-full lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max items-start gap-3">
                {PROPERTY_TABS.map((tab, index) => (
                  <FilterPill
                    key={tab}
                    active={index === activeTab}
                    border="primary"
                    className="shrink-0 px-9"
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </FilterPill>
                ))}
              </div>
            </div>

            {filteredListings.length > 0 ? (
              <RevealGroup
                key={activeTab}
                className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredListings.map((property, index) => (
                  <ListingCard
                    key={`${property.title}-${index}`}
                    property={property}
                    index={index}
                  />
                ))}
              </RevealGroup>
            ) : null}
          </div>

          {activeTab !== 1 ? (
            <div className="flex w-full flex-col items-center gap-6">
              <h2 className="w-full text-center text-display-xs font-medium tracking-[-0.72px] text-title lg:text-display-md">
                Our Complete Projects Portfolio
              </h2>

              <CompletedProjectsStrip properties={FEATURED_PROPERTIES} />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
