"use client";

import Platforms from "../../components/Platforms";
import Process from "../../components/Process";
import Services from "../../components/Services";
import SiteCanvas from "../../components/SiteCanvas";

export default function ServicesPage() {
  return (
    <SiteCanvas>
      <Services />
      <Platforms />
      <Process />
    </SiteCanvas>
  );
}
