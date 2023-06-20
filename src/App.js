import "./App.scss";

//React components
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

//elf components
import "@elf/carbon-sidebar-layout";
import "@elf/coral-header";
import "@elf/coral-panel";
import "@elf/coral-button";
import "@elf/coral-icon";
import "@elf/coral-select";
import "@elf/coral-input";
import "@elf/coral-tree";
import "@elf/coral-accordion";
import '@elf/coral-tab';
import '@elf/coral-tab-bar';
import '@elf/emerald-grid';
import '@elf/amber-loader';
import '@elf/coral-checkbox';
import '@elf/coral-header';

//elf components theming
import "@elf/elf-theme-halo/dark/imports/native-elements";
import "@elf/carbon-sidebar-layout/themes/halo/dark";
import "@elf/coral-header/themes/halo/dark";
import "@elf/coral-panel/themes/halo/dark";
import "@elf/coral-button/themes/halo/dark";
import "@elf/coral-icon/themes/halo/dark";
import "@elf/coral-select/themes/halo/dark";
import "@elf/coral-input/themes/halo/dark";
import "@elf/coral-tree/themes/halo/dark";
import "@elf/coral-accordion/themes/halo/dark";
import "@elf/coral-tab/themes/halo/dark";
import "@elf/coral-tab-bar/themes/halo/dark";
import "@elf/emerald-grid/themes/halo/dark";
import "@elf/amber-loader/themes/halo/dark";
import "@elf/coral-checkbox/themes/halo/dark";
import "@elf/coral-header/themes/halo/dark";


//components
import Auth from "./components/Auth/Auth";
import AdsLogs from "./components/adsLogs/AdsLogs";
import Dashboard from "./components/dashboard/Dashboard";
import DeliveryDirectPage from "./pages/DeliveryDirectPage";
import CustomerViewPage from "./pages/CustomerViewPage";

//loaders
import {loader as InfoLoader} from './pages/CustomerViewPage';


function App() {
  const router = createBrowserRouter([
    {path: '/auth', element: <Auth></Auth>},
    {path: '/', element: <Root></Root>, children: [
      {path: '/dashboard', element: <Dashboard/>},
      {path: '/assurance-support', element: <Outlet></Outlet>, children: [
        {path: 'customer', element: <CustomerViewPage/>, loader: InfoLoader},
        {path: 'ads-logs', element: <AdsLogs/>},
        {path: 'permission', element: <div>permission</div>},
      ]},
      {path: '/delivery-direct', element: <DeliveryDirectPage/>}
    ]}
  ])



  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
