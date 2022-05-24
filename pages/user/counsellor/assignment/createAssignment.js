import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/counsellor/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import styles from "../../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';


export default function CreateAssignment() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-4 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4 md:p-6 overflow-y-auto" id={styles.noScrollBar}>
          <div className="bg-white rounded-lg border border-[#bee1fa]">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faBook}/></div>
              <div>Create Assignment</div>
            </div>
            <div className="p-4 md:p-6 flex justify-center w-full">
              <form className="w-full bg-white p-4 md:p-6 rounded-lg border">
                  <div className="text-slate-500 text-lg mb-4">Fill this form and click submit to create assignment</div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="text-slate-500 text-sm">Title
                        <input type="text" className="w-full py-2 px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]" placeholder=""/>
                      </label>
                    </div>
                    <div>
                      <label className="text-slate-500 text-sm">Attachment
                        <input type="file" className="w-full py-[0.3rem] px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]" placeholder=""/>
                      </label>
                    </div>
                    <div className="col-span-2">
                      <label className="text-slate-500 text-sm">Description
                        <textarea type="text" className="w-full py-2 px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]" placeholder=""/>
                      </label>
                    </div>
                    <div>
                      <label className="text-slate-500 text-sm">Sub category
                        <input type="text" className="w-full py-2 px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]" placeholder=""/>
                      </label>
                    </div>
                    <div>
                      <label className="text-slate-500 text-sm">Age Group
                        <input type="text" className="w-full py-2 px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]" placeholder=""/>
                      </label>
                    </div>
                    <div className="col-span-2">
                      <label className="text-slate-500 text-sm">Student Level
                        <input type="text" className="w-full py-2 px-2 bg-[#fafafa] rounded-lg border border-slate-300 outline-[#673ab7] text-base text-[#673ab7]" placeholder=""/>
                      </label>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <button type="button" className="py-2 px-6 text-white bg-[#673ab7] rounded font-medium hover:bg-[#563199]">Submit</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}