import Navbar from "../../../../components/navbar";
import Sidebar from "../sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import Calender from "../../../../components/calender";
import styles from "../../../../styles/Home.module.css";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-4 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4 overflow-y-auto" id={styles.noScrollBar}>
          <div className="bg-gradient-to-r from-[#5e35b1] to-[#1e88e5] rounded-lg p-4 px-6 text-white font-semibold text-lg mb-4">Week Schedule</div>
          <div>
            <Calender/>
          </div>
        </div>
      </div>
    </>
  )
}