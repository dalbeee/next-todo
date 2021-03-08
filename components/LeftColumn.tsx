import dynamic from "next/dynamic";
import Filter from "./Filter";

const NoSSRCalendar = dynamic(() => import("./Calendar"), {
  ssr: false,
});

const LeftColumn = ({ className }) => {
  return (
    <div className={className}>
      <div className="grid grid-rows-2 ">
        <Filter className="row-start-1" />
        <NoSSRCalendar />
      </div>
    </div>
  );
};

export default LeftColumn;
