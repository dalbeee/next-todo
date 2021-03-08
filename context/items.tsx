import { isThisMonth, isThisWeek, isToday } from "date-fns";
import { createContext, useContext, useEffect, useState } from "react";
import { ICard } from "../components/Card";
import cloneDeep from "lodash/cloneDeep";

interface IFilter {
  filtration(): void;
  thisMonth(): void;
  thisWeek(): void;
  today(): void;
  doing: () => void;
  finished: () => void;
}

const useItem = () => {
  const [items, setItems] = useState<ICard[]>([]);
  const [filteredItems, setFilteredItems] = useState<ICard[]>([]);

  const [lastFilter, setLastFilter] = useState<
    "thisMonth" | "thisWeek" | "today" | "doing" | "finished"
  >("today");

  const filter: IFilter = {
    filtration: () => {},
    thisMonth: () => {
      setLastFilter("thisMonth");
      setFilteredItems(
        items.filter((item) => isThisMonth(item.targetDay * 1000))
      );
    },
    thisWeek: () => {
      setLastFilter("thisWeek");
      setFilteredItems(
        items.filter((item) => isThisWeek(item.targetDay * 1000))
      );
    },
    today: () => {
      setLastFilter("today");
      setFilteredItems(items.filter((item) => isToday(item.targetDay * 1000)));
    },

    doing: () => {
      setLastFilter("doing");
      setFilteredItems(items.filter((item) => item.finished === false));
    },
    finished: () => {
      setLastFilter("finished");
      setFilteredItems(items.filter((item) => item.finished));
    },
  };

  const operation = {
    toggleFinish: (id: number) => {
      const cloneItems: ICard[] = cloneDeep(items);
      cloneItems
        .filter((item) => item.id === id)
        .map((item) => (item.finished = !item.finished));
      setItems(cloneItems);
    },
  };

  useEffect(() => {
    // if (!lastFilter) return setFilteredItems(items);
    filter[lastFilter]();
  }, [items]);

  return { filter, items: filteredItems, operation, setItems, lastFilter };
};

type useItemTypes = ReturnType<typeof useItem>;

const ItemContext = createContext<useItemTypes>({} as useItemTypes);

export const ItemContextProvider = ({ children }) => {
  const itemProps = useItem();
  return (
    <ItemContext.Provider value={itemProps}>{children}</ItemContext.Provider>
  );
};

export const useItemContext = () => useContext(ItemContext);
