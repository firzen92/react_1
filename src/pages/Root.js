import React from "react";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

import './Root.scss';

//context
import Dummy from "../store/dummyContext";

//components
import SidebarTitle from "../components/header/SidebarTitle";
import MainHeader from "../components/header/MainHeader";
import SidebarContent from "../components/sidebar/SidebarContent";


const Root = () => {
  const layout = useRef(null);
  const toggleBtn = useRef(null);
  const layoutHandler = () => {
    layout.current.collapsed = !layout.current.collapsed;
    toggleBtn.current.style.visibility = layout.current.collapsed ? 'visible':'hidden';
  };
  
  return (
    <>
      <carbon-sidebar-layout id="layout" ref={layout}>
        <coral-header slot="sidebar-header" level="1">
          <SidebarTitle layoutHandler={layoutHandler}></SidebarTitle>
        </coral-header>
        <coral-panel spacing slot="sidebar-content">
          <SidebarContent></SidebarContent>
        </coral-panel>
        <coral-header slot="main-header" level="1">
          <coral-button transparent slot="left" ref={toggleBtn} style={{visibility: 'hidden'}} onClick={layoutHandler} icon="leftpanel-closed"></coral-button>
          <MainHeader/>
        </coral-header>
        <coral-panel spacing slot="main-content">
          <Dummy.Provider value={{name: 'Wick'}}>
            <Outlet></Outlet>
          </Dummy.Provider>
        </coral-panel>
      </carbon-sidebar-layout>
    </>
  );
};

export default Root;
