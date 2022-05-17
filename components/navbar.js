import Logo from "../assets/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faCircleUser,faGear,faBell} from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <div className='bg-white h-20 flex justify-between fixed top w-full items-center p-4 text-slate-800'>
      <div className="flex justify-between items-center w-60">
        <div className="flex gap-2 items-center font-bold text-lg">
          <div className="flex justify-center items-center"><Image src={Logo} width="25" height="25"/></div>
          <div className="flex justify-center items-center">KAPABLE</div>
        </div>
        <div className="flex items-center">
          <button className="py-1 px-2 text-xl rounded-xl bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white">
            <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>
      </div> 
      <div className="flex items-center gap-3">
        <div className="p-1 px-2 text-xl rounded-lg bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-white">
          <FontAwesomeIcon icon={faBell}/>
        </div>
        <div className="bg-[#e3f2fd] hover:bg-[#1e88e5] text-[#1e88e5] hover:text-white rounded-3xl flex items-center gap-3 p-2 px-3">
          <div className="text-4xl flex items-center">
            <FontAwesomeIcon icon={faCircleUser}/>
          </div>
          <div className="text-xl">
            <FontAwesomeIcon icon={faGear}/>
          </div>
        </div>
      </div> 
    </div>
  )
}
