import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/counsellor/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import styles from "../../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';


export default function AssignmentList() {
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
              <div>Assignment List</div>
            </div>
            <div className="p-4 md:p-6 text-slate-600">
              <div className="w-full text-left p-4 md:p-6 rounded-lg border">
              <table class="table-fixed w-full">
                <thead className="border-b">
                  <tr>
                    <th className="p-2">Title</th>
                    <th className="p-2">Description</th>
                    <th className="p-2">Attachment</th>
                    <th className="p-2">Update</th>
                    <th className="p-2">Assign</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-2">xxtdhsbjb</td>
                    <td className="p-2">fsggmqrteuio bhdytg cgfdythg</td>
                    <td className="p-2">abc</td>
                    <td className="p-2"><button className="bg-[#00C853] rounded px-3 py-1 text-white">Update</button></td>
                    <td className="p-2"><button className="bg-[#673ab7] rounded px-3 py-1 text-white">Assign</button></td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}