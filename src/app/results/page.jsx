"use client";

import PageIntro from "../../components/PageIntro";
import Results from "../../components/Results";
import SiteCanvas from "../../components/SiteCanvas";
import Stats from "../../components/Stats";

export default function ResultsPage() {
  return (
    <SiteCanvas>
      <PageIntro
        eyebrow="Our Impact"
        title="Proof that trust scales."
        description="We measure success by traffic lifts, engagement quality, and pipeline value. Here is what happens when you treat communities with respect instead of pitching them."
      />
      <Stats />
      <Results />
    </SiteCanvas>
  );
}
