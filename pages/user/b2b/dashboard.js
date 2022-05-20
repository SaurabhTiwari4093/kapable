import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/b2b/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../components/useWindowDimensions';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-6 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1.5rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-6">
          b2b Dashboard
        </div>
      </div>
    </>
  )
}