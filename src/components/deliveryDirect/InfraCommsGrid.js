import React, { useRef } from "react";
import { EmeraldGrid } from "@grid/react-grid";
import { useEffect } from "react";
import { useState } from "react";
import { getData, getInfraData } from "./InfraCommsConfig";
import { columns } from "./InfraCommsConfig";

import './InfraCommsGrid.scss';


const InfraCommsGrid = () => {
  //setting up states
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //having a grid reference
  const grid = useRef();

  useEffect(async () => {

    let ignore = false;

    //updating the loading state to true, as we are waiting for the response
    setIsLoading(true);
    const infraData = await getInfraData();
    
    if (!ignore) {

      //updating the state with new data and setting isLoading to false
      setData(infraData);
      setIsLoading(false);

      console.log(infraData);
    }
    return () => {
      ignore = true;
    };
  }, [getInfraData]);

  const onWhenDefined = React.useCallback(e => {
    console.log("under on when defined");
    const api = grid.current.api;

    // column widths are defined under onWhenDefined, was not working on adding it under useEffect
    const widths = [50, 100, 50, 150, 150, 50, 100, 150, 150, 150, 50, 100, 150, 150, 150, 200, 100, 150, 50, 50, 50];

    //making use of grid api to set the column widths
    api.getCoreGrid().setColumnWidths(widths, false);

  }, []);

  return (
    <>
      <EmeraldGrid
        ref={grid}
        config={{
          rowVirtualization: false,
          columns: columns,
          dataModel: {
            data: data,
          }
        }}
        whenDefined={onWhenDefined}
      />
      {
        isLoading && <amber-loader></amber-loader>
      }
    </>
  );
};

export default InfraCommsGrid;
