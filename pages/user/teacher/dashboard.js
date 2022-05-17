import Navbar from "../../../components/navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar/>
      <div className="px-4 min-h-screen pt-20 text-slate-800">
        <div className="bg-[#e3f2fd] w-full h-full rounded-t-lg p-4">
          Teacher dashboard
        </div>
      </div>
    </>
  )
}

