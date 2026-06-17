"use client";

import Hero from "../components/Hero";
import Communities from "../components/Communities";
import HomeOverview from "../components/HomeOverview";
import FAQ from "../components/FAQ";
import SiteCanvas from "../components/SiteCanvas";

export default function Page() {
  return (
    <SiteCanvas>
      <Hero />
      <Communities />
      <HomeOverview />
      <FAQ />
    </SiteCanvas>
  );
}
