import EmeraldGrid from "@grid/react-grid";
import React from "react";
import { useLoaderData } from "react-router-dom";

import classes from './SubscriberGrid.module.scss';

const SubscriberGrid = ({infoData: info}) => {
  const { data: {subscriberLocations} } = info;

  const columns = [
    { title: "Subscriber ID", field: "subscriberLocation" },
    { title: "Subscriber Name", field: "subscriberName" },
    { title: "Action", field: "action" },
  ];

  const config = {
    columns,
    dataModel: {
      data: subscriberLocations,
    },
  };

  return (
    <>
      <EmeraldGrid className={classes.grid} config={config} />
    </>
  );
};

export default SubscriberGrid;
