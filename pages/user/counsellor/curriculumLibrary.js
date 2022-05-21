import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/counsellor/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../components/useWindowDimensions';
import styles from "../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Card from "../../../assets/card.png";

const num=[1,2,3,4,5,6,7,8,9,10,11,12];

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
            <div className="p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faBookOpen}/></div>
              <div>Curriculum Library</div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-5">
                <div className="col-span-1 p-6 bg-violet-100 rounded-l-lg flex flex-col justify-around text-2xl text-violet-400">
                  <div className="font-medium text-violet-600 cursor-pointer">Activity</div>
                  <div className="cursor-pointer">Theme</div>
                  <div className="cursor-pointer">Outcome</div>
                </div>
                <div className="col-span-4 p-6 bg-violet-50 rounded-r-lg grid grid-rows-2 gap-3 font-medium">
                    <div className="grid grid-cols-4 gap-6">
                      <div className="flex items-center">
                        <label>Name<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="flex items-center">
                        <label>Category<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="flex items-center">
                        <label>SubCategory<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="flex items-center">
                        <label>For<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="flex items-center">
                        <label>Age Group<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="flex items-center">
                        <label>Student Level<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="flex items-center">
                        <label>Keyword Search<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="flex items-center">
                        <div className="pt-5 w-full"><button className="w-full p-2 rounded-lg bg-violet-700 text-white my-0.5">Search</button></div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6 mt-6">
                {num.map((value,index)=>(
                  <div key={index} className="border-2 rounded-lg pb-3 text-center font-bold">
                    <Image src={Card}/>
                    <div>Cast Away</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}