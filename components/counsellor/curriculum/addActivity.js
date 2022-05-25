export default function AddActivity(props) {
  const { addActivitySidebarOpen, setAddActivitySidebarOpen } = props;

  const closeAddActivitySidebar = () => {
    if (addActivitySidebarOpen == true) {
      setAddActivitySidebarOpen(false);
    }
  };

  return (
    <div className="w-4/5 md:w-3/5 h-screen fixed right-0 top-0 bg-white z-20 shadow-lg text-slate-800">
      <div className="bg-[#e3f2fd] p-4 md:p-6 flex items-center">
        <div><button className="py-1 px-2 text-xl rounded-lg bg-[#1e88e5] text-white" onClick={closeAddActivitySidebar}>X</button></div>
        <div className="text-center font-bold text-base md:text-xl w-full">Add New Activity</div>
      </div>
      <div className="p-4 md:p-6">

      </div>
    </div>
  );
}
