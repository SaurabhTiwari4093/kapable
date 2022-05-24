import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/counsellor/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../components/useWindowDimensions';
import styles from "../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandSparkles, faGraduationCap,faPersonChalkboard,faEllipsis, faUserFriends, faChalkboardTeacher, faListCheck} from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS,CategoryScale,ArcElement,LinearScale,BarElement, Tooltip, Legend} from 'chart.js';
import { Pie,Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, ArcElement, LinearScale, BarElement,Tooltip, Legend);

const dataPie = {
  labels: ['Cat#1', 'Cat#2', 'Cat#3' ],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 15],
    backgroundColor: [
      '#243f94',
      '#ed4d51',
      '#43C272',
    ],
    borderWidth: 1
  }]
}

const dataBar = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat','Sun'],
  datasets: [{
    label: 'Day of week',
    data: [12, 19, 3, 5, 2, 3,7],
    backgroundColor: [
      '#243f94',
      '#ed4d51',
      '#43C272',
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
      <div className="px-4 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4 md:p-6 overflow-y-auto" id={styles.noScrollBar}>
          <div className="bg-white rounded-lg border border-[#bee1fa]">
            <div className="p-4 md:p-6 border-b flex gap-3 items-center">
              <div>
                <div className="font-semibold text-xl md:text-2xl"><span className="text-slate-500">Hello</span>, Counsellor</div>
                <div className="font-base text-slate-500 text-normal">Welcome back!</div>
              </div>
              <div className="text-4xl flex items-center text-yellow-500"><FontAwesomeIcon icon={faHandSparkles}/></div>
            </div>
            <div className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="col-span-2 grid grid-cols-4 gap-4 md:gap-6">
                <div className="col-span-4 p-4 md:p-6 rounded-lg border">
                  <div className="font-semibold text-base md:text-lg">Quick Links</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="border-r flex flex-col items-center p-3 gap-3 mt-3 cursor-pointer">
                      <div className="text-3xl text-blue-600"><FontAwesomeIcon icon={faListCheck}/></div>
                      <div className="font-medium text-sm md:text-base">Add Activity</div>
                    </div>
                    <div className="md:border-r flex flex-col items-center p-3 gap-3 mt-3 cursor-pointer">
                      <div className="text-3xl text-green-600"><FontAwesomeIcon icon={faPersonChalkboard}/></div>
                      <div className="font-medium text-sm md:text-base">Add Teacher</div>
                    </div>
                    <div className="border-r flex flex-col items-center p-3 gap-3 mt-3 cursor-pointer">
                      <div className="text-3xl text-red-600"><FontAwesomeIcon icon={faChalkboardTeacher}/></div>
                      <div className="font-medium text-sm md:text-base">Add BDM</div>
                    </div>
                    <div className="flex flex-col items-center p-3 gap-3 mt-3 cursor-pointer">
                      <div className="text-3xl text-yellow-500"><FontAwesomeIcon icon={faUserFriends}/></div>
                      <div className="font-medium text-sm md:text-base">View Leads</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-2 flex flex-col gap-4 md:gap-6">
                <div className="col-span-4 md:col-span-2 p-4 md:p-6 rounded-lg border flex gap-4 relative">
                  <div className="text-2xl md:text-3xl p-1 text-sky-600"><FontAwesomeIcon icon={faGraduationCap}/></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-3xl md:text-4xl font-bold">211</div>
                    <div className="text-slate-400 text-base md:text-lg pb-4">Students Awaiting Welcome Kit</div>
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs md:text-sm text-[#673ab7] font-medium">See More {">"}</div>
                </div>
                <div className="col-span-4 md:col-span-2 p-4 md:p-6 rounded-lg border flex gap-4 relative">
                  <div className="text-2xl md:text-3xl p-1 text-orange-600"><FontAwesomeIcon icon={faPersonChalkboard}/></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-3xl md:text-4xl font-bold">120</div>
                    <div className="text-slate-400 text-base md:text-lg pb-4">Teachers Onboarded</div>
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs md:text-sm text-[#673ab7] font-medium">See More {">"}</div>
                </div> 
                </div>
                <div className="col-span-4 md:col-span-2 p-4 md:p-6 rounded-lg border">
                    <div className="font-semibold text-base md:text-lg text-slate-800 mb-4">Revenue</div>
                    <div>
                      <Bar data={dataBar} height={200} options={{maintainAspectRatio: false}}/>
                    </div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 p-4 md:p-6 bg-[#f6f7f8] rounded-lg relative">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-base md:text-lg">Users</div>
                  <div className="text-slate-600 text-xl"><FontAwesomeIcon icon={faEllipsis}/></div>
                </div>
                <div className="my-4 md:mt-6">
                  <Pie data={dataPie}/>
                </div>
                <div className="absolute bottom-3 right-3 text-xs md:text-sm text-[#673ab7] font-medium">See More {">"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}