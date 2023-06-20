import React, {memo} from "react";
import { EmeraldGrid } from "@grid/react-grid";
import { ConditionalColoring } from "tr-grid-conditional-coloring/es6";

import classes from "./ContactsGrid.module.scss";

const ContactsGrid = ({contacts}) => {
  const columns = [
    {
      title: "Role",
      field: "role",
      conditions: [
        {
          color: "#595959",
          expression: "[role] === 'N/A'",
        },
      ],
    },
    {
      title: "Full Name",
      field: "fullName",
      conditions: [
        {
          color: "#595959",
          expression: "[fullName] === 'N/A'",
        },
      ],
    },
    {
      title: "Phone Number",
      field: "phoneNumber",
      conditions: [
        {
          color: "#595959",
          expression: "[phoneNumber] === 'N/A'",
        },
      ],
    },
  ];

  console.log('this is the contacts ', contacts)
  const config = {
    columns,
    dataModel: {
      data: contacts,
    },
    extensions: [new ConditionalColoring()],
  };
  return (
    <>
      <EmeraldGrid className={classes["contacts-grid"]} config={config} />
    </>
  );
};

// export default ContactsGrid;
export default memo(ContactsGrid);
