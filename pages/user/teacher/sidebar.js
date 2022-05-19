import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGauge,faUsers,faComment,faMessage} from '@fortawesome/free-solid-svg-icons';
import styles from "../../../styles/Home.module.css";

export default function Sidebar() {
  return (
    <div className='w-72 pt-20 h-screen fixed left-0 bg-white z-10'>
        <div className="flex flex-col gap-4 p-4 font-medium text-sm text-slate-600 h-full overflow-y-auto" id={styles.noScrollBar}>

          <div className='border-b p-2'>
            <div className='text-slate-900 mb-3 font-semibold'>Dashboard</div>
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faGauge}/></div>
              <div className='flex items-center'>Dashboard</div>
            </div>
          </div>

          <div className='border-b p-2'>
            <div className='text-slate-900 mb-3 font-semibold'>Class</div>
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faUsers}/></div>
              <div className='flex items-center'>Take Class</div>
            </div>
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faUsers}/></div>
              <div className='flex items-center'>Review Class</div>
            </div>
          </div>

          <div className='border-b p-2'>
            <div className='text-slate-900 mb-3 font-semibold'>Feedback</div>
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faMessage}/></div>
              <div className='flex items-center'>Feedback</div>
            </div>
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faMessage}/></div>
              <div className='flex items-center'>Interact with parents/students</div>
            </div>
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faMessage}/></div>
              <div className='flex items-center'>Access student</div>
            </div>
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faMessage}/></div>
              <div className='flex items-center'>Log parent Interaction</div>
            </div>
          </div>

          <div className='p-2'>
            <div className="flex gap-2 item-center w-full hover:bg-[#ede7f6] hover:text-[#673ab7] rounded-lg p-3 pl-6 cursor-pointer mb-1">
              <div className='flex items-center'><FontAwesomeIcon icon={faComment}/></div>
              <div className='flex items-center'>Recommenadation</div>
            </div>
          </div>

        </div>
    </div>
  )
}
