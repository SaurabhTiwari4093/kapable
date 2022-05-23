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
      <div className="px-4 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4 md:p-6 overflow-y-auto" id={styles.noScrollBar}>
          <div className="bg-white rounded-lg">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faBookOpen}/></div>
              <div>Curriculum Library</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-5">
                <div className="col-span-5 md:col-span-1 p-4 md:p-6 bg-violet-100 rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex flex-col justify-around text-lg md:text-2xl text-violet-400 gap-3">
                  <div className="font-medium text-violet-600 cursor-pointer">Activity</div>
                  <div className="cursor-pointer">Theme</div>
                  <div className="cursor-pointer">Outcome</div>
                </div>
                <div className="col-span-5 md:col-span-4 p-4 md:p-6 bg-violet-50 rounded-b-lg md:rounded-bl-none md:rounded-r-lg grid grid-rows-2 gap-3 font-medium text-xs md:text-base">
                    <div className="grid grid-cols-4 gap-2 md:gap-6">
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full">Name<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full">Category<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full">SubCategory<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full">For<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:gap-6">
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full">Age Group<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full">Student Level<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center">
                        <label className="w-full">Keyword Search<input className="w-full p-2 rounded-lg my-0.5 outline-none border-2 border-violet-200"/></label>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-center text-sm md:text-base">
                        <label className="pt-5 w-full"><button className="w-full p-2 rounded-lg bg-violet-700 text-white my-0.5">Search</button></label>
                      </div>
                    </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
                {num.map((value,index)=>(
                  <div key={index} className="border-2 rounded-lg pb-3 text-center font-bold text-sm md:text-base">
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