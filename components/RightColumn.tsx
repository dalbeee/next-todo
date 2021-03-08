import dynamic from "next/dynamic";
import { useItemContext } from "../context/items";
import Card from "./Card";

const NoSSRToday = dynamic(() => import("../components/Today"), { ssr: false });

const RightColumn = ({ className }) => {
  const context = useItemContext();

  return (
    <div className={className}>
      <div className="grid grid-cols-9 gap-4 auto-rows-min">
        <NoSSRToday className="col-span-4 col-start-1 " />
        <div className="col-span-5 col-start-5">
          {context.items.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
