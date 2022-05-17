import Logo from "../assets/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <div className='bg-white h-20 flex fixed top w-full items-center p-4 text-slate-800'>
         <div className="font-bold text-lg flex justify-center items-center gap-1">
            <div className="flex justify-center"><Image src={Logo} width="20" height="20"/></div>
            <div className="flex justify-center">KAPABLE</div>
         </div>
         <div className="ml-20">
          <FontAwesomeIcon icon={faBars} />
         </div>
         
    </div>
  )
}
