import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/counsellor/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../components/useWindowDimensions';
import styles from "../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandSparkles,faBookOpen,faBook,faCalendar, faGraduationCap,faIndianRupee,faPersonChalkboard,faChartLine,faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Cat#1', 'Cat#2'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19],
    backgroundColor: [
      '#243f94',
      '#ed4d51',
    ],
    borderWidth: 1
  }]
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-6 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1.5rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-6 overflow-y-auto" id={styles.noScrollBar}>
          <div className="bg-white rounded-lg">
            <div className="p-6 border-b flex gap-3 items-center">
              <div>
                <div className="font-semibold text-2xl"><span className="text-slate-500">Hello</span>, Counsellor</div>
                <div className="font-base text-slate-500 text-normal">Welcome back!</div>
              </div>
              <div className="text-4xl flex items-center"><FontAwesomeIcon icon={faHandSparkles}/></div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="col-span-2 grid grid-cols-4 gap-6">
                <div className="col-span-4 p-6 rounded-lg border">
                  <div className="font-semibold text-lg">Quick Links</div>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="border-b md:border-b-0 md:border-r flex flex-col items-center p-3 gap-3 mt-3 cursor-pointer">
                      <div className="text-3xl"><FontAwesomeIcon icon={faBookOpen}/></div>
                      <div className="font-medium">Curriculum Library</div>
                    </div>
                    <div className="border-b md:border-b-0 md:border-r flex flex-col items-center p-3 gap-3 mt-3 cursor-pointer">
                      <div className="text-3xl"><FontAwesomeIcon icon={faBook}/></div>
                      <div className="font-medium">Assignments</div>
                    </div>
                    <div className="flex flex-col items-center p-3 gap-3 mt-3 cursor-pointer">
                      <div className="text-3xl"><FontAwesomeIcon icon={faCalendar}/></div>
                      <div className="font-medium">Calender</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-2 p-6 rounded-lg border flex gap-4 relative">
                  <div className="text-3xl p-1"><FontAwesomeIcon icon={faGraduationCap}/></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-4xl font-bold">50</div>
                    <div className="text-slate-500 text-lg">Students</div>
                  </div>
                  <div className="absolute bottom-3 right-3 text-sm text-[#673ab7] font-medium">See More {">"}</div>
                </div>
                <div className="col-span-4 md:col-span-2 p-6 rounded-lg border flex gap-4 relative">
                  <div className="text-3xl p-1"><FontAwesomeIcon icon={faIndianRupee}/></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-4xl font-bold">50,000</div>
                    <div className="text-slate-500 text-lg">Total Earnings</div>
                  </div>
                  <div className="absolute bottom-3 right-3 text-sm text-[#673ab7] font-medium">See More {">"}</div>
                </div>
                <div className="col-span-4 md:col-span-2 p-6 rounded-lg border flex gap-4 relative">
                  <div className="text-3xl p-1"><FontAwesomeIcon icon={faPersonChalkboard}/></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-4xl font-bold">20</div>
                    <div className="text-slate-400 text-lg">Class Taken</div>
                  </div>
                  <div className="absolute bottom-3 right-3 text-sm text-[#673ab7] font-medium">See More {">"}</div>
                </div>
                <div className="col-span-4 md:col-span-2 p-6 rounded-lg border flex gap-4 relative">
                  <div className="text-3xl p-1"><FontAwesomeIcon icon={faChartLine}/></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-4xl font-bold">50{"%"}</div>
                    <div className="text-slate-400 text-lg">Training Progress</div>
                  </div>
                  <div className="absolute bottom-3 right-3 text-sm text-[#673ab7] font-medium">See More {">"}</div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 p-6 bg-[#f6f7f8] rounded-lg relative">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-lg">Demos</div>
                  <div className="text-slate-600 text-xl"><FontAwesomeIcon icon={faEllipsis}/></div>
                </div>
                <div className="mt-6">
                  <Pie data={data}/>
                </div>
                <div className="absolute bottom-3 right-3 text-sm text-[#673ab7] font-medium">See More {">"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}