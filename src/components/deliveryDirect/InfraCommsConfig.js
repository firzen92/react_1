const checkBoxFormatter = {
  render: () => {},
  bind: (rowIndex, colIndex, data, cell) => {
    let element = cell.getContent();
    if (!element) {
      element = document.createElement("coral-checkbox");
      element.style["pointer-events"] = "none";
    }
    element.checked = data;
    cell.setContent(element);
  },
};

// [" ", "Split", "type", 'leg', 'sln', 'bw', 'pop', 'agg. router', 'port', 'server', 'service id', 'hub', 'vlan', 'customer circuit', 'cross-connect', 'nid', 'cpe switch', 'cpe router', 'eed', 'lll', 'nat']

export const columns = [
  { title: " ", field: "", leftPinned: true },
  {
    title: "Split",
    field: "split",
    leftPinned: true,
    formatter: {
      render: (rowIndex, columnIndex, data, cell, columnDef, rowData) => {
        console.log("row index ", rowIndex);

        let row = cell.getSection();
        row.setRowStyle(rowIndex, 'backgroundColor', '#0D0D0D', rowIndex%3 == 0);
        row.setRowStyle(rowIndex, 'backgroundColor', '#1A1A1A', rowIndex%3 == 1);
        if(rowData.empty) row.setRowHeight(rowIndex, 5);
        // cell.setStyles({
        //   'backgroundColor': 'red'
        // })
      },
    },
  },
  { title: "Type", field: "type" },
  { title: "Leg", field: "leg" },
  { title: "SLN", field: "sln" },
  { title: "BW", field: "bw" },
  { title: "POP", field: "pop" },
  { title: "Agg. Router", field: "aggRouter" },
  { title: "Port", field: "port" },
  { title: "Server", field: "server", contentWrap: true },
  { title: "Service ID", field: "serviceId" },
  { title: "Hub", field: "hub" },
  { title: "VLAN", field: "vlan" },
  { title: "Customer Circuit", field: "customerCircuit", contentWrap: true },
  { title: "Cross-Connect", field: "crossConnect", contentWrap: true },
  { title: "NID", field: "nid" },
  { title: "CPE Switch", field: "cpeSwitch", contentWrap: true },
  { title: "CPE Router", field: "cpeRouter" },
  { title: "EED", field: "eed", formatter: checkBoxFormatter },
  { title: "LLL", field: "lll", formatter: checkBoxFormatter },
  { title: "NAT", field: "nat", formatter: checkBoxFormatter },
];

export const getData = async () => {
  const fetchedData = await fetch("https://fullpicture-cf824-default-rtdb.firebaseio.com/infracomms.json");
  return fetchedData.json();
};

const transformData = () => {};

export const getInfraData = async () => {
  const response = await getData();
  console.log(response.data);

  const transformedData = response.data.reduce((prevVal, currVal, currIndex, allData) => {
    currVal.innerBaseModelList = currVal.innerBaseModelList.map(data => {
      return {
        ...data,
        empty: false,
        live: currVal.live,
        split: currVal.split,
        type: currVal.type,
        server: data.server && data.server.map(details => details.value).join(" "),
        cpeSwitch: data.cpeSwitch && data.cpeSwitch.map(details => details.value).join(" "),
      }
    })

    prevVal.push(...currVal.innerBaseModelList);
    prevVal.push({ empty: true });
    return prevVal;
  }, []);

  return transformedData;
};

export default getData;

export const data = [
  {
    split: "",
    type: "TRMC",
    leg: "Secondary",
    sln: "",
    bw: "",
    pop: "",
    aggRouter: "",
    port: "",
    server: "",
    serviceId: "",
    hub: "",
    vlan: "",
    customerCircuit: "",
    crossConnect: "",
    nid: "",
    cpeSwitch: "",
    cpeRouter: "",
    eed: "",
    lll: "",
    nat: "",
  },
];
