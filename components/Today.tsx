import { getHours, getMinutes } from "date-fns";
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useItemContext } from "../context/items";
import { ICard } from "./Card";

interface Item {
  startTime: number;
  endTime: number;
  title?: string;
  content?: string;
}

interface TableInfo {
  left: number;
  height: number;
  top: number;
  width: number;
}

const EventIndicator = ({
  top,
  height,
  item,
  tableInfo,
  column,
}: {
  top: number;
  height: number;
  item: ICard;
  tableInfo: TableInfo;
  column: number;
}) => {
  const [state, setState] = useState(false);
  const ref = useRef();
  const handleClick = () => {
    return (
      <div
        className="relative w-20 h-20 bg-gray-700"
        style={{ left: 50, top: 300 }}
      >
        {item.title}
      </div>
    );
  };
  return (
    <button
      ref={ref}
      onClick={handleClick}
      onMouseOver={() => setState(true)}
      onMouseLeave={() => setState(false)}
      className={`absolute w-12  bg-purple-500`}
      style={{
        top,
        height,
        left: tableInfo.left + (column + 1) * 60,
        transform: `translate(0,- ${tableInfo.height}px)`,
      }}
    >
      {item.title}
      <div
        className={`${
          state ? "block" : "hidden"
        } w-20 h-20 bg-gray-200 relative left-12 z-50`}
      >
        {item.title}
      </div>
    </button>
  );
};

const TableMaker = ({ className }) => {
  const context = useItemContext();

  const [tableInfo, setTableInfo] = useState<TableInfo>(null);

  const cells = Array.from(Array(24).keys());
  const ref = useRef<HTMLTableElement>();

  useEffect(() => {
    if (!ref.current) return;
    setTableInfo({
      left: ref.current?.offsetLeft,
      height: ref.current?.offsetHeight,
      top: ref.current?.offsetTop,
      width: ref.current?.offsetWidth,
    });
  }, [ref.current]);

  const getEventTimeMinute = (event: Item) => {
    const res = {
      startTime:
        getHours(event.startTime * 1000) +
        getMinutes(event.startTime * 1000) / 60,
      endTime:
        getHours(event.endTime * 1000) + getMinutes(event.endTime * 1000) / 60,
    };
    return res;
  };

  const getEventBoxSize = useCallback(
    ({ startTime, endTime }) => {
      if (!tableInfo) return;
      const timeTableLayerHeight = tableInfo.height - tableInfo.top;
      const top = (timeTableLayerHeight / 24) * startTime;
      const height = (timeTableLayerHeight / 24) * endTime - top;
      return { top, height };
    },
    [tableInfo]
  );

  const eventTrigger = () => {
    const result = context.items.map((eventItem, index) => {
      const { startTime, endTime } = getEventTimeMinute(eventItem);
      const { top, height } = getEventBoxSize({ startTime, endTime });
      return (
        <EventIndicator
          key={index}
          top={top}
          height={height}
          item={eventItem}
          tableInfo={tableInfo}
          column={index}
        />
      );
    });
    return result;
  };

  return (
    <div className={className}>
      <table className="w-full " ref={ref}>
        <tbody>
          {cells.map((c, index) => (
            <tr key={index} className="flex w-full h-8 ">
              <td className="pr-2 font-semibold text-right text-font-black-secondary">{`${c} `}</td>
              <td
                key={index}
                className="w-full grid-cols-12 border-b-2 border-gray-500 border-dotted "
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
      {!!tableInfo && eventTrigger()}
    </div>
  );
};

const Today: FC<{ className?: any }> = ({ className }) => {
  return (
    <div className={className}>
      <TableMaker className="relative max-h-screen overflow-y-auto " />
    </div>
  );
};

export default Today;
