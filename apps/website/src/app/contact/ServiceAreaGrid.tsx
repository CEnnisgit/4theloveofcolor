"use client";

import React, { useState } from "react";
import { MapPin, PhoneCall, Check, ArrowRight } from "lucide-react";
import { contact } from "@/lib/data/content";

interface RegionData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyAreas: string[];
  popularServices: string[];
}

const serviceRegions: RegionData[] = [
  {
    id: "lwr",
    name: "Lakewood Ranch Villages",
    tagline: "Primary Service Hub & Village Specialists",
    description:
      "We provide expert exterior and interior painting across all master-planned villages in Lakewood Ranch, meeting strict HOA color guidelines and paint specs.",
    keyAreas: [
      "Country Club East",
      "The Lake Club",
      "Waterside & Esplanade",
      "Del Webb & Lorraine Lakes",
      "Greenbrook & Summerfield",
      "Mallory Park & Indigo",
      "Central Park & Riverwalk",
      "Bridgewater & Azario",
    ],
    popularServices: [
      "HOA-Approved Stucco Repainting",
      "Lanai Ceiling & Deck Coating",
      "Tray Ceiling & Trim Accents",
      "Cabinet Refinishing & Spraying",
    ],
  },
  {
    id: "sarasota",
    name: "Sarasota & Coastal Keys",
    tagline: "Coastal Protection & Estate Finishes",
    description:
      "From downtown condo interiors to coastal estates on Siesta Key and Palmer Ranch residences, we apply high-grade coatings that withstand intense sun and salt air.",
    keyAreas: [
      "Downtown Sarasota",
      "Palmer Ranch",
      "Siesta Key & Bird Key",
      "Osprey & Southbay",
      "The Meadows & Gulf Gate",
      "West of Trail Estates",
    ],
    popularServices: [
      "Salt-Air & Salt-Mist Resistant Exterior Elastomeric",
      "Luxury Interior Paint Systems",
      "Epoxy Floor Coatings",
      "Drywall Repair & Texture Matching",
    ],
  },
  {
    id: "bradenton",
    name: "Bradenton & Islands",
    tagline: "Residential & Commercial Surface Care",
    description:
      "Serving East Bradenton, riverfront communities, and Anna Maria Island with long-lasting exterior seals and complete home interior upgrades.",
    keyAreas: [
      "River Strand & Heritage Harbour",
      "East Bradenton Commons",
      "West Bradenton & Palma Sola",
      "Anna Maria Island & Cortez",
      "Perico Island & NW Bradenton",
    ],
    popularServices: [
      "Pressure Washing & Surface Prep",
      "Full Exterior Stucco & Trim Painting",
      "Interior Wall & Woodwork Refinishing",
      "Rental & Turnover Refresh",
    ],
  },
  {
    id: "parrish",
    name: "Parrish & Palmetto",
    tagline: "Rapid Growth & New Build Customization",
    description:
      "Helping new home buyers customize builder-grade interiors and protecting exterior stucco on single-family homes across North Manatee County.",
    keyAreas: [
      "North River Ranch",
      "Harrison Ranch",
      "Trevesta & Sanctuary",
      "Palmetto Historic District",
      "Terra Ceia Island",
    ],
    popularServices: [
      "Builder-Grade Color Upgrades",
      "Accent Walls & Board and Batten Trim",
      "Exterior Garage & Entry Door Coating",
      "Whole-Home Interior Repaint",
    ],
  },
  {
    id: "venice",
    name: "Venice & South County",
    tagline: "Golf Communities & Suncoast Estates",
    description:
      "Providing reliable, clean-site painting for homeowners in Venice, Nokomis, and Wellen Park who appreciate direct owner communication.",
    keyAreas: [
      "Wellen Park & Playmore",
      "Venice Golf & Country Club",
      "Nokomis & Laurel",
      "South Venice & Island",
      "Venetian Golf & River Club",
    ],
    popularServices: [
      "High-Durability Exterior Coatings",
      "Kitchen Cabinet Refinishing",
      "Crown Molding & Trim Painting",
      "Commercial Storefront Painting",
    ],
  },
];

export function ServiceAreaGrid() {
  const [activeTab, setActiveTab] = useState<string>("lwr");

  const currentRegion = serviceRegions.find((r) => r.id === activeTab) || serviceRegions[0];

  const scrollToForm = () => {
    const el = document.getElementById("estimate-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#c5a059]">
          Suncoast Local Coverage
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211711]">
          Lakewood Ranch & Regional Service Breakdown
        </h2>
        <p className="text-sm sm:text-base text-[#6a594c] leading-relaxed">
          We live and work right here on the Florida Suncoast. Select a region below to see key communities served and specialized local painting services.
        </p>
      </div>

      {/* Region Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {serviceRegions.map((region) => {
          const isActive = region.id === activeTab;
          return (
            <button
              key={region.id}
              onClick={() => setActiveTab(region.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-[var(--radius)] transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#211711] text-white border-[#211711] shadow-sm"
                  : "bg-white text-[#6a594c] border-[#211711]/15 hover:border-[#211711]/40 hover:text-[#211711]"
              }`}
            >
              {region.name}
            </button>
          );
        })}
      </div>

      {/* Active Region Display Card */}
      <div className="bg-white border border-[#211711]/10 rounded-[var(--radius)] p-6 sm:p-10 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#211711]/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c2592e] mb-1">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{currentRegion.tagline}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#211711]">
              {currentRegion.name}
            </h3>
          </div>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#c2592e] text-white text-xs sm:text-sm font-bold rounded-[var(--radius)] hover:bg-[#a34521] transition-colors shadow-sm self-start md:self-auto cursor-pointer"
          >
            <span>Request Quote for {currentRegion.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm sm:text-base text-[#6a594c] leading-relaxed">
          {currentRegion.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Neighborhoods */}
          <div className="bg-[#faf7f2] p-5 sm:p-6 rounded-[var(--radius)] border border-[#211711]/10 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#211711]">
              Key Villages & Communities Served
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#211711]">
              {currentRegion.keyAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2592e] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Services in Region */}
          <div className="bg-[#faf7f2] p-5 sm:p-6 rounded-[var(--radius)] border border-[#211711]/10 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#211711]">
              Popular Local Paint Solutions
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#211711]">
              {currentRegion.popularServices.map((svc, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c2592e] mt-1.5 shrink-0" />
                  <span>{svc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call Trigger Bar */}
      <div className="bg-[#211711] text-white rounded-[var(--radius)] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-serif text-lg sm:text-xl font-bold">
            Don't see your specific neighborhood listed?
          </p>
          <p className="text-xs sm:text-sm text-neutral-300">
            We service all of Manatee and Sarasota counties. Speak directly with Edwin and the crew.
          </p>
        </div>
        <a
          href={contact.phoneHref}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#c2592e] text-white text-sm font-bold rounded-[var(--radius)] hover:bg-[#a34521] transition-colors shrink-0 shadow-sm"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call {contact.phone}</span>
        </a>
      </div>
    </div>
  );
}
