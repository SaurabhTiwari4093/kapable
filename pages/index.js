import Logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <>
      <title>Kapable</title>
      <main>
        <div className="bg-[#e3f2fd] min-h-screen p-12 flex justify-center text-slate-800 items-center">
          <div className="bg-white p-10 rounded-lg text-center w-full h-full md:w-1/2 lg:w-1/3 border border-[#bee1fa]">
              <div className="font-bold text-lg my-4 flex justify-center items-center gap-1">
                <div className="flex justify-center"><Image src={Logo} width="30" height="30"/></div>
                <div className="flex justify-center">KAPABLE</div>
              </div>
              <div className="text-[#673ab7] font-bold text-2xl my-4">Hi, Welcome Back</div>
              <div className="text-slate-400 text-lg my-4">Please select one to continue</div>
              <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={()=>{router.push('/user/admin/login')}}>Admin</button></div>  
              <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={()=>{router.push('/user/student/login')}}>Student</button></div>
              <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={()=>{router.push('/user/teacher/login')}}>Teacher</button></div>
              <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={()=>{router.push('/user/counsellor/login')}}>Counsellor</button></div>
              <div><button className="w-full py-2 text-white bg-[#673ab7] rounded font-medium my-4 hover:bg-[#563199]" onClick={()=>{router.push('/user/b2b/login')}}>B2B</button></div>
          </div>
        </div>
      </main>
    </>
  )
}



