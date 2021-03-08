import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import { ICard } from "../components/Card";
import { useItemContext } from "../context/items";
import { useEffect } from "react";

export const testArray: ICard[] = [
  {
    title: "타이틀11",
    content: "할 일 11",
    finished: true,
    targetDay: 1615101507,
    createdAt: 1615101507,
    startTime: 1615141675,
    endTime: 1615241675,
    id: 1,
  },
  {
    title: "타이틀121",
    content: "할 일 112",
    finished: false,
    targetDay: 1615101517,
    createdAt: 1615101501,
    startTime: 1615151675,
    endTime: 1615159675,
    id: 2,
  },
  {
    title: "타이틀1",
    content: "할 일 1",
    finished: false,
    targetDay: 1615359483,
    createdAt: 1615100255,
    startTime: 1615156075,
    endTime: 1615166075,
    id: 3,
  },
  {
    title: "타이틀2",
    content: "할 일 2",
    finished: true,
    targetDay: 1615359473,
    createdAt: 1615100155,
    startTime: 1615174075,
    endTime: 1615184075,
    id: 4,
  },
  {
    title: "타이틀3",
    content: "할 일 3",
    finished: false,
    targetDay: 1615359383,
    createdAt: 1615100055,
    startTime: 1615260475,
    endTime: 1615270475,
    id: 5,
  },
  {
    title: "타이틀4",
    content: "할 일 4",
    finished: true,
    targetDay: 1615359183,
    createdAt: 1615199255,
    startTime: 1615278475,
    endTime: 1615288475,
    id: 6,
  },
];

export default function Home() {
  const context = useItemContext();
  useEffect(() => {
    context.setItems(testArray);
  }, []);

  return (
    <div className="flex ">
      <NavBar ClassName="flex flex-col w-16 h-screen px-4 overflow-hidden justify-items-center" />
      <div className="pl-4">
        <Logo className="flex items-center py-2 bg-background-primary" />
        <div className="grid max-h-screen grid-cols-12 grid-rows-1 gap-4 pt-4 overflow-hidden auto-rows-min">
          <LeftColumn className="col-span-3 " />
          <RightColumn className="col-span-9 col-start-4 overflow-x-hidden overflow-y-auto " />
        </div>
      </div>
    </div>
  );
}
