"use client";

import Hero from "../components/Hero";
import HomeOverview from "../components/HomeOverview";
import SiteCanvas from "../components/SiteCanvas";
import Stats from "../components/Stats";

export default function Page() {
  return (
    <SiteCanvas>
      <Hero />
      <Stats />
      <HomeOverview />
    </SiteCanvas>
  );
}
