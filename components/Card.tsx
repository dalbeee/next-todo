import { format } from "date-fns";
import { useItemContext } from "../context/items";

export interface ICard {
  title: string;
  content: string;
  createdAt?: number;
  targetDay: number;
  finished: boolean;
  startTime: number;
  endTime: number;
  id: number;
}

const convertTimeStampToDate = (timestamp: number) => {
  let result = format(timestamp, "MM월dd일 HH:mm");
  return `~ ${result}`;
};

const Checked = () => (
  <svg
    width="37"
    height="37"
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5667 27.5L5.56669 18.5L8.10469 15.944L14.5667 22.406L28.2287 8.744L30.7667 11.3L14.5667 27.5ZM18.1667 0.5C15.8029 0.5 13.4622 0.965584 11.2784 1.87017C9.09452 2.77475 7.11022 4.10062 5.43876 5.77208C2.06311 9.14773 0.166687 13.7261 0.166687 18.5C0.166687 23.2739 2.06311 27.8523 5.43876 31.2279C7.11022 32.8994 9.09452 34.2252 11.2784 35.1298C13.4622 36.0344 15.8029 36.5 18.1667 36.5C22.9406 36.5 27.519 34.6036 30.8946 31.2279C34.2703 27.8523 36.1667 23.2739 36.1667 18.5C36.1667 16.1362 35.7011 13.7956 34.7965 11.6117C33.8919 9.42784 32.5661 7.44353 30.8946 5.77208C29.2232 4.10062 27.2388 2.77475 25.055 1.87017C22.8711 0.965584 20.5305 0.5 18.1667 0.5V0.5Z"
      fill="#E5989B"
    />
  </svg>
);

const NotCheck = () => (
  <svg
    width="47"
    height="46"
    viewBox="0 0 47 46"
    className="text-font-black-secondary"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M38.8333 23C38.8333 27.0667 37.2178 30.9668 34.3423 33.8423C31.4667 36.7179 27.5666 38.3333 23.5 38.3333C19.4333 38.3333 15.5332 36.7179 12.6577 33.8423C9.78212 30.9668 8.16665 27.0667 8.16665 23C8.16665 18.9334 9.78212 15.0333 12.6577 12.1577C15.5332 9.28214 19.4333 7.66667 23.5 7.66667C24.9566 7.66667 26.375 7.8775 27.7166 8.26084L30.7258 5.25167C28.4341 4.30784 25.9785 3.82584 23.5 3.83334C20.983 3.83334 18.4906 4.3291 16.1652 5.29231C13.8398 6.25553 11.7269 7.66734 9.9471 9.44712C6.35265 13.0416 4.33331 17.9167 4.33331 23C4.33331 28.0833 6.35265 32.9584 9.9471 36.5529C11.7269 38.3327 13.8398 39.7445 16.1652 40.7077C18.4906 41.6709 20.983 42.1667 23.5 42.1667C28.5833 42.1667 33.4584 40.1473 37.0529 36.5529C40.6473 32.9584 42.6666 28.0833 42.6666 23H38.8333ZM15.6608 19.32L12.9583 22.0417L21.5833 30.6667L40.75 11.5L38.0475 8.77834L21.5833 25.2425L15.6608 19.32Z" />
  </svg>
);

const Card = ({
  title,
  content,
  finished,
  targetDay,
  createdAt,
  id,
}: ICard) => {
  const context = useItemContext();
  const handleFinish = () => {
    context.operation.toggleFinish(id);
  };
  return (
    <div className="w-full py-4 my-4 bg-gray-500 card">
      <div className="indicator"></div>
      <div className="left">
        <h1 className="x-i1022101 valign-text-middle barlow-bold-black-24px">
          {title}
        </h1>
        <div className="text-1 valign-text-middle barlow-medium-dove-gray-24px">
          {content}
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <div className="controls">
          <button onClick={handleFinish} className="check">
            {finished ? <Checked /> : <NotCheck />}
          </button>
          <div className="delete">
            <svg
              width="27"
              height="36"
              viewBox="0 0 27 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.9166 2.66667H20.2083L18.2916 0.75H8.70831L6.79165 2.66667H0.083313V6.5H26.9166V2.66667ZM1.99998 31.4167C1.99998 32.4333 2.40385 33.4084 3.12274 34.1272C3.84163 34.8461 4.81665 35.25 5.83331 35.25H21.1666C22.1833 35.25 23.1583 34.8461 23.8772 34.1272C24.5961 33.4084 25 32.4333 25 31.4167V8.41667H1.99998V31.4167Z"
                fill="#EB5757"
              />
            </svg>
          </div>
        </div>
        <div className="">
          <span>{convertTimeStampToDate(targetDay * 1000)}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
