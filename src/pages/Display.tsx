import { useContext, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { CreateContext } from "../global/GlobalProvider";
import { makeSearch } from "../APIs/API";

const Display = () => {
  const [text, setText] = useState("");

  const { num, state, setState, truthy, setTruthy }: any =
    useContext(CreateContext);

  console.log(truthy);

  return (
    <div className="w-[calc(100%-250px)]  flex justify-center">
      <div className="w-[90%] py-5 bg-white h-screen flex flex-col justify-between">
        <div>{truthy ? state[num]?.desc : state[state.length - 1]?.desc}</div>

        <div className="w-full border rounded-[40px] flex gap-3 items-center p-2 px-4 ">
          <input
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            type="text"
            placeholder="Message ChatGPT"
            className="flex-[0.997] flex h-[40px] outline-none bg-white"
          />
          <div
            className={`flex items-center justify-center flex-[0.03] h-[30px] rounded-lg ${
              text.length > 1
                ? "bg-black cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <FaArrowUp
              onClick={() => {
                makeSearch(text).then((res: any) => {
                  setState([
                    ...state,
                    { name: text, id: state.length + 1, desc: res?.result },
                  ]);

                  setText("");
                  setTruthy(false);
                });
              }}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
