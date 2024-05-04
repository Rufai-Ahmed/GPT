import { useContext, useEffect } from "react";
import { FaArchive, FaEllipsisH } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { RiChatVoiceLine } from "react-icons/ri";
import { CreateContext } from "../global/GlobalProvider";

export interface iProps {
  name: string;
  desc: string;
  id: number;
}

const Sider = () => {
  const { state, setNumb, num, setTruthy, truthy }: any =
    useContext(CreateContext);

  useEffect(() => {}, [state]);

  return (
    <div>
      <div className="w-[250px] bg-[#f9f9f9] h-screen p-3 ">
        <div className="w-full p-2 rounded-md px-3 transition-all duration-300 cursor-pointer hover:bg-[#ececec] flex items-center justify-between mb-10">
          <div className="flex gap-4 items-center">
            <div className="text-[20px] rounded-full flex items-center justify-center border w-[40px] h-[40px]">
              <RiChatVoiceLine />
            </div>
            <div>New Text</div>
          </div>

          <div>
            <IoCreateOutline />
          </div>
        </div>

        {state.map((el: iProps, i: number) => (
          <div
            onClick={() => {
              setTruthy(true);
              setNumb(i);
            }}
            className="w-full p-2 rounded-md px-3 transition-all duration-300 cursor-pointer hover:bg-[#ececec] flex items-center justify-between overflow-hidden group"
          >
            <div className="truncate w-[80%]">{el.name}</div>
            <div className="group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 opacity-0 ">
              <FaEllipsisH size={13} />
              <FaArchive size={13} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sider;
