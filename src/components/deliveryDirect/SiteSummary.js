import React from "react";
import InfraCommsGrid from "./InfraCommsGrid";

const SiteSummary = () => {
  return (
    <div>
      <coral-tab-bar level="1">
        <coral-tab label="Infrastructure comms" active></coral-tab>
        <coral-tab label="Infrastructure Services" disabled></coral-tab>
        <coral-tab label="Permissions" disabled></coral-tab>
        <coral-tab label="Orders" disabled></coral-tab>
      </coral-tab-bar>
      <section>
          <InfraCommsGrid/>
      </section>
    </div>
  );
};

export default SiteSummary;
