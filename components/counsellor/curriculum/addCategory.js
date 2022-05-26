import { useState } from "react";

export default function AddCategory(props) {
  const { addCategorySidebarOpen, setAddCategorySidebarOpen } = props;

  const closeAddCategorySidebar = () => {
    if (addCategorySidebarOpen == true) {
      setAddCategorySidebarOpen(false);
    }
  };


  return (
    <div className="w-full grid grid-cols-5 h-screen fixed right-0 top-0 z-30 text-slate-800 overflow-y-auto">
        <div className="bg-opacity-50 col-span-1 md:col-span-3 bg-black">
        </div>
        <div className="col-span-4 md:col-span-2 bg-white">
            <div className="bg-[#e3f2fd] fixed top-0 w-full p-4 md:p-6 flex items-center justify-start gap-4 md:gap-6">
                <div><button className="py-1 px-3 text-xl rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white" onClick={closeAddCategorySidebar}>X</button></div>
                <div className="text-center font-bold text-base md:text-xl">Add New Category</div>
            </div>
            <div className="p-4 pt-24 md:p-6 md:pt-24">
              
            </div>
        </div>
    </div>
  );
}
