import React, { useRef, useEffect } from "react";
import ProfileDetails from "./ProfileDetails";
import { useNavigate } from "react-router-dom";

import "./SidebarContent.scss";

const SidebarContent = () => {
  const basicTree = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    basicTree.current.addEventListener('value-changed', (e) => {
      console.log('value details ', e.detail.value);
      navigate(e.detail.value);
    })
    basicTree.current.data = [  
      {
        label: "Dashboard",
        icon: "one-and-two-panes",
        value: '/dashboard'
      },
      {
        label: "Assurance & Support",
        icon: "help",
        value: '/assurance-support',
        items: [
          { label: "Customer View", value: '/assurance-support/customer' },
          { label: "ADS Logs", value: '/assurance-support/ads-logs' },
          { label: "Permission Migration Checker", value: '/assurance-support/permission'},
        ],
      },
      {
        label: "Reports",
        icon: "line-chart",
        items: [{ label: "Manage Configuration"}],
      },
      {
        label: "Activity Management",
        icon: "map",
      },
      {
        label: "Product Upgrade",
        icon: "briefcase-add",
      },
      {
        label: "RIC Analysis",
        expanded: false,
        icon: "analytics-align-center",
      },
      {
        label: "Delivery Direct via SLN",
        expanded: false,
        icon: "directory",
        value: '/delivery-direct',
      },
    ];
  }, []);

  return (
    <div className="container">
      <ProfileDetails></ProfileDetails>
      <coral-tree ref={basicTree} data={basicTree.current.data}></coral-tree>
      <coral-button>Replication</coral-button>
    </div>
  );
};

export default SidebarContent;
