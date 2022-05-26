import Navbar from "../../../../components/navbar";
import Sidebar from "../../../../components/counsellor/sidebar";
import { useState} from "react";
import useWindowDimensions from '../../../../components/useWindowDimensions';
import styles from "../../../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faSliders ,faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import AddCategory from "../../../../components/counsellor/curriculum/addCategory";

export default function Categories() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();
  const [addCategorySidebarOpen,setAddCategorySidebarOpen]=useState(false);

  const openAddCategorySidebar=()=>{
    if(addCategorySidebarOpen==false){
      setAddCategorySidebarOpen(true);
    }
  }

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {sidebarOpen?<Sidebar/>:""}
      <div className="px-4 pt-20 h-screen text-slate-800" style={width>="768"&&sidebarOpen?{paddingLeft:"18rem"}:{paddingLeft:"1rem"}}>
        <div className="bg-[#e3f2fd] h-full rounded-t-lg p-4 md:p-6 overflow-y-auto" id={styles.noScrollBar}>
          <div className="bg-white rounded-lg border border-[#bee1fa] h-full">
            <div className="p-4 md:p-6 font-semibold text-lg border-b flex items-center gap-3">
              <div className="flex items-center"><FontAwesomeIcon icon={faBookOpen}/></div>
              <div>Categories</div>
            </div>
            <div className="p-4 md:p-6">
                <div className="flex justify-between items-center">
                  <div></div>
                  <div className="flex items-center gap-4 text-sm">
                    <div><button className="py-2 px-6 font-semibold rounded-lg border"><FontAwesomeIcon icon={faSliders}/>{" "}Filter</button></div>
                    <div><button className="py-2 px-6 font-semibold rounded-lg bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white" onClick={openAddCategorySidebar}><FontAwesomeIcon icon={faPlusCircle}/>{" "}Add New Category</button></div>
                  </div>
                </div>  
            </div>
          </div>
        </div>
      </div>
      {addCategorySidebarOpen?<AddCategory addCategorySidebarOpen={addCategorySidebarOpen} setAddCategorySidebarOpen={setAddCategorySidebarOpen}/>:""}
    </>
  )
}