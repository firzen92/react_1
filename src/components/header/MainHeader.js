import React from "react";

const MainHeader = () => {
  return (
    <>
      <coral-select>
        <coral-item selected value="1">
          A-number
        </coral-item>
        <coral-item value="2">Machine UUID</coral-item>
        <coral-item value="3">Service Account ID</coral-item>
        <coral-item value="4">Subscriber ID</coral-item>
      </coral-select>
      <coral-input placeholder="Search" type="search"></coral-input>
      <coral-button slot="right" transparent icon="set-alert"></coral-button>
      <coral-button slot="right" transparent icon="info"></coral-button>
      <coral-button slot="right" transparent icon="settings"></coral-button>
      <coral-button slot="right" transparent icon="grc-log-out"></coral-button>
    </>
  );
};

export default MainHeader;
