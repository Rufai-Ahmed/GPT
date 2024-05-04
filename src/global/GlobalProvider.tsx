import { FC, PropsWithChildren, createContext, useState } from "react";
import { iProps } from "../static/Sider";

const data: iProps[] = [
  {
    id: 1,
    name: "Search One",
    desc: "Lorem Ipsum Iknlefnlnekjfn",
  },
  {
    id: 2,
    name: "Search Two",
    desc: "Ipsum Jorem jsjdnj",
  },
  {
    id: 3,
    name: "Search Three",
    desc: "Forem jfjkwdmlkwmqkq",
  },
];

export const CreateContext: any = createContext([]);

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<iProps[]>(data);
  const [num, setNumb] = useState<number>(0);
  const [truthy, setTruthy] = useState<boolean>(false);

  return (
    <CreateContext.Provider
      value={{ state, num, setNumb, setState, truthy, setTruthy }}
    >
      {children}
    </CreateContext.Provider>
  );
};
