import React from "react";
import SiteSummary from "../components/deliveryDirect/SiteSummary";

import classes from "./DeliveryDirectPage.module.scss";

const DeliveryDirectPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.summaryWrap}>
        <coral-accordion auto-collapse-disabled>
          <coral-collapse header="SITE SUMMARY">
            <div className={classes.siteSummaryWrap}>
              <SiteSummary/>
            </div>
          </coral-collapse>
        </coral-accordion>
      </div>
    </div>
  );
};

export default DeliveryDirectPage;
