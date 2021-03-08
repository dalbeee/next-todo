import { useItemContext } from "../context/items";

const FilterItem = ({ name, value }) => {
  const context = useItemContext();
  const handleClick = () => {
    context.filter[value]();
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        context.lastFilter === value
          ? "text-font-primary"
          : "text-font-black-secondary"
      } flex items-center pb-4 text-2xl `}
    >
      <div className="flex items-center justify-center pr-2 fill-current text-font-black-secondary">
        <svg
          className="w-8 h-8 "
          width="22"
          height="22"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.30488 14.1303C9.36812 14.2185 9.45149 14.2905 9.54807 14.3401C9.64465 14.3897 9.75167 14.4156 9.86025 14.4156C9.96883 14.4156 10.0759 14.3897 10.1724 14.3401C10.269 14.2905 10.3524 14.2185 10.4156 14.1303L14.9402 7.85684C15.0219 7.74297 14.9402 7.58398 14.8006 7.58398H13.793C13.5738 7.58398 13.3654 7.68926 13.2365 7.86973L9.86133 12.5533L8.33164 10.4307C8.20273 10.2523 7.99648 10.1449 7.77519 10.1449H6.76758C6.62793 10.1449 6.54629 10.3039 6.62793 10.4178L9.30488 14.1303Z" />
          <path d="M18.9062 2.40625H3.09375C2.71348 2.40625 2.40625 2.71348 2.40625 3.09375V18.9062C2.40625 19.2865 2.71348 19.5938 3.09375 19.5938H18.9062C19.2865 19.5938 19.5938 19.2865 19.5938 18.9062V3.09375C19.5938 2.71348 19.2865 2.40625 18.9062 2.40625ZM18.0469 18.0469H3.95312V3.95312H18.0469V18.0469Z" />
        </svg>
      </div>
      <div className="">
        <p>{name}</p>
      </div>
    </button>
  );
};

const Filter = ({ className }) => {
  return (
    <div className={className}>
      <FilterItem value="thisMonth" name="이번 달" />
      <FilterItem value="thisWeek" name="이번 주" />
      <FilterItem value="doing" name="해야 할 일" />
      <FilterItem value="finished" name="완료 한 일" />
      <FilterItem value="today" name="오늘의 할 일" />
    </div>
  );
};

export default Filter;
