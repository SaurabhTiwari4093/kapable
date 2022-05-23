import Logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function WelcomePage() {
  const router = useRouter();
  const adminLogin=()=>{
    router.push({
      pathname: '/login',
      query: { user: 'Admin' }
    })
  }
  const teacherLogin=()=>{
    router.push({
      pathname: '/login',
      query: { user: 'Teacher' }
    })
  }
  const counsellorLogin=()=>{
    router.push({
      pathname: '/login',
      query: { user: 'Counsellor' }
    })
  }
  const b2bLogin=()=>{
    router.push({
      pathname: '/login',
      query: { user: 'B2B' }
    })
  }
  return (
    <>
      <div className="bg-[#e3f2fd] min-h-screen p-12 flex justify-center text-slate-800 items-center">
        <div className="bg-white p-10 rounded-lg text-center w-full h-full md:w-1/2 lg:w-1/3 border border-[#bee1fa]">
            <div className="font-bold text-lg my-4 flex justify-center items-center gap-1">
              <div className="flex justify-center"><Image src={Logo} width="25" height="25"/></div>
              <div className="flex justify-center">KAPABLE</div>
            </div>
            <div className="text-[#673ab7] font-bold text-2xl my-4">Hi, Welcome Back</div>
            <div className="text-slate-400 text-lg my-4">Please select one to continue</div>
            <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={adminLogin}>Admin</button></div> 
            {/*<div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]">Student</button></Link></div>*/} 
            <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={teacherLogin}>Teacher</button></div> 
            <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={counsellorLogin}>Counsellor</button></div> 
            <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={b2bLogin}>B2B</button></div> 
        </div>
      </div>
    </>
  )
}



