import Table from "./components/Table";

const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Designation",
    key: "designation",
  },
  {
    title: "Address",
    key: "address",
  },
  {
    title: "Department",
    key: "department",
  },
];
const data = [
  {
    name:"siddharth patel",
    designation:"senior director",
    address:"sadasdaw dawdawdaw rererer adasdadas reawrer adada rearf fetre rt",
    department:"R&D"
  },
  {
    name:"Manmohan Singh",
    designation:"sales lead",
    address:"sadasdaw dawdawdaw rererer",
    department:"Customer Success"
  },
  {
    name:"Anil Kumar",
    designation:"SDE-2",
    address:"sadasdaw dawdawdaw rererer adasdadas reawrer adada rearf fetre rtda dawdawda adawdwa frghthiniaf haefbile agf;abcr andsahef bc",
    department:"R&D"
  },
  {
    name:"Radhika Madan",
    designation:"Tech Recruiter",
    address:"sadasdaw dawdawdaw rererer adasdadas reawrer adada",
    department:"HR"
  },
  {
    name:"Abhay Pratap Singh",
    designation:"CEO",
    address:"sadasdaw",
    department:"Organisational"
  },
  {
    name:"Sunil pal",
    designation:"director",
    address:"sadasdaw dawdawdaw rererer adasdadas reawrer adada rearf fetre rt rere wewew rr",
    department:"R&D"
  },
  {
    name:"Ghanshyam Tiwari",
    designation:"VP Engineering",
    address:"sadasdaw dawdawdaw rererer erere",
    department:"R&D"
  },
  {
    name:"Sachin Pilot",
    designation:"SDE-3",
    address:"sadasdaw dawdawdaw rererer adasdadas reawrer adada rearf fetre niaf haefbile agf;abcr andsahef bc",
    department:"R&D"
  },
  {
    name:"Radhika Madan",
    designation:"Tech Recruiter",
    address:"sadasdaw dawdawdaw rererer adasdadas reawrer adada",
    department:"HR"
  },
  {
    name:"Madhuri Singh",
    designation:"HRBP",
    address:"sadasdaw dawdaw dfertlmvnbd af sekf ksjhencvsfkvsljdnm c",
    department:"HR"
  },
];

function App() {
  return <Table data={data} columns={columns}/>;
}

export default App;
