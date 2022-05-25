export default function AddActivity(props) {
  const { addActivitySidebarOpen, setAddActivitySidebarOpen } = props;

  const closeAddActivitySidebar = () => {
    if (addActivitySidebarOpen == true) {
      setAddActivitySidebarOpen(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-5 h-screen fixed right-0 top-0 z-20 text-slate-800">
        <div className="bg-opacity-50 col-span-1 md:col-span-2 bg-black">

        </div>
        <div className="col-span-4 md:col-span-3 bg-white">
            <div className="bg-[#e3f2fd] p-4 md:p-6 flex items-center">
                <div><button className="py-1 px-2 text-xl rounded-lg bg-[#1e88e5] text-white" onClick={closeAddActivitySidebar}>X</button></div>
                <div className="text-center font-bold text-base md:text-xl w-full">Add New Activity</div>
            </div>
            <div className="p-4 md:p-6">

            </div>
        </div>
    </div>
  );
}
