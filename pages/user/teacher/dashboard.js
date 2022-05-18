import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/sidebar";
import { useState ,useEffect} from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dashboardWidth,setDashboardWidth]=useState(true);
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   if(width<="768px"){
  //     //in mobile view open side bar above dashboard
  //     setDashboardWidth(false);
  //   }
  // }, [])
  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-4 pt-20 h-screen text-slate-800" style={dashboardWidth&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4">
          Teacher dashboard
        </div>
      </div>
    </>
  )
}

