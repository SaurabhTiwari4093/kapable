import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage, faUpload} from '@fortawesome/free-solid-svg-icons';

export default function AddActivity(props) {
  const { addActivitySidebarOpen, setAddActivitySidebarOpen } = props;

  const closeAddActivitySidebar = () => {
    if (addActivitySidebarOpen == true) {
      setAddActivitySidebarOpen(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-5 h-screen fixed right-0 top-0 z-30 text-slate-800 overflow-y-auto">
        <div className="bg-opacity-50 col-span-1 md:col-span-2 bg-black">
        </div>
        <div className="col-span-4 md:col-span-3 bg-white">
            <div className="bg-[#e3f2fd] p-4 md:p-6 flex items-center">
                <div><button className="py-1 px-3 text-xl rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white" onClick={closeAddActivitySidebar}>X</button></div>
                <div className="text-center font-bold text-base md:text-xl w-full">Add New Activity</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="border-b-2 py-3 mb-4 md:mb-6">
                 <div className="text-base md:text-xl font-semibold my-1">
                   Basics
                 </div>
                 <div className="text-xs md:text-sm text-slate-500 my-1">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam quia fuga nesciunt accusamus.
                 </div>
              </div>
              <div className="grid grid-cols-4 gap-4 md:gap-6">
                  <div className="col-span-1 bg-[#e3f2fd] rounded-lg flex items-center justify-center p-4">
                    <div className="flex flex-col gap-3 items-center">
                      <div className="bg-[white] py-3 px-4 rounded-3xl w-fit text-[#673ab7] shadow-lg text-2xl"><FontAwesomeIcon icon={faImage}/></div>
                      <div className="font-semibold text-sm md:text-base">Activity Image</div>
                      <div><button className="py-2 px-3 text-sm rounded-lg bg-[#673ab7] hover:bg-[#563199] text-white"><FontAwesomeIcon icon={faUpload}/>{" "}Upload</button></div>
                    </div>
                  </div>
                  <div className="col-span-3 grid grid-cols-2 gap-4 md:gap-6 font-semibold p-2">
                    <div className="col-span-2">
                      <label>Activity Name
                        <input type="text" placeholder="" className="w-full p-2 border border-slate-200 rounded-lg outline-none"/>
                      </label>
                    </div>
                    <div className="col-span-1">
                      <label>Category
                        <select className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600">
                          <option>Select</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-span-1">
                      <label>Sub Category
                        <select className="w-full p-2 border border-slate-200 rounded-lg outline-none text-slate-600">
                          <option>Select</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="col-span-4 font-semibold">
                    <label>Description
                      <textarea className="w-full p-2 border border-slate-200 rounded-lg outline-none"/>
                    </label>
                  </div>
                  <div className="col-span-4 rounded-lg bg-[#f6f7f8] p-4 md:p-6">
                     <div className="mb-2 font-semibold">Suitable levels</div>
                     <div className="grid grid-cols-2 gap-2 md:gap-4">
                      <div className="col-span-1"><input type="checkbox" className="mx-2"/>Explorer</div>
                      <div className="col-span-1"><input type="checkbox" className="mx-2"/>Initiator</div>
                      <div className="col-span-1"><input type="checkbox" className="mx-2"/>Innovator</div>
                      <div className="col-span-1"><input type="checkbox" className="mx-2"/>Leader</div>
                    </div>
                  </div>
                  <div className="col-span-4 rounded-lg bg-[#f6f7f8] p-4 md:p-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-semibold">Age Group<span className="font-light">{" ("}You can add multiple{")"}</span></div>
                      <div className="flex items-center gap-1">
                       <div className="font-semibold text-sm">Apply to All Ages</div>
                       <div>
                          <label for="toggle-example-checked" class="flex items-center cursor-pointer relative">
                          <input type="checkbox" id="toggle-example-checked" class="sr-only" checked/>
                          <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  );
}
