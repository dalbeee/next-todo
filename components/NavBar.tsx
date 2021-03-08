import styled from "styled-components";

const Hanmburger = styled.div``;

const Inner = styled.div`
  align-items: flex-start;
  display: flex;
  min-width: 132px;
`;

const UserIcon = styled.div``;

import React from "react";

const NavBar = ({ ClassName }) => {
  return (
    <div className={` ${ClassName} nav-bar`}>
      <Hanmburger className="pb-10 hamburger">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.1111 25.5556L8.88889 25.5556"
            stroke="#E5989B"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.1111 20L8.88889 20"
            stroke="#E5989B"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.1111 14.4444L8.88889 14.4444"
            stroke="#E5989B"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Hanmburger>
      <UserIcon className="pb-10 user">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 32C15.8333 32 12.15 29.8667 10 26.6667C10.05 23.3333 16.6667 21.5 20 21.5C23.3333 21.5 29.95 23.3333 30 26.6667C28.8981 28.3073 27.4098 29.6519 25.6659 30.582C23.9221 31.512 21.9763 31.999 20 32ZM20 8.33333C21.3261 8.33333 22.5978 8.86011 23.5355 9.79779C24.4732 10.7355 25 12.0072 25 13.3333C25 14.6594 24.4732 15.9312 23.5355 16.8689C22.5978 17.8065 21.3261 18.3333 20 18.3333C18.6739 18.3333 17.4021 17.8065 16.4645 16.8689C15.5268 15.9312 15 14.6594 15 13.3333C15 12.0072 15.5268 10.7355 16.4645 9.79779C17.4021 8.86011 18.6739 8.33333 20 8.33333ZM20 3.33333C17.8113 3.33333 15.644 3.76442 13.6219 4.602C11.5998 5.43958 9.76253 6.66724 8.21488 8.21488C5.08928 11.3405 3.33333 15.5797 3.33333 20C3.33333 24.4203 5.08928 28.6595 8.21488 31.7851C9.76253 33.3328 11.5998 34.5604 13.6219 35.398C15.644 36.2356 17.8113 36.6667 20 36.6667C24.4203 36.6667 28.6595 34.9107 31.7851 31.7851C34.9107 28.6595 36.6667 24.4203 36.6667 20C36.6667 10.7833 29.1667 3.33333 20 3.33333Z"
            fill="#E5989B"
          />
        </svg>
      </UserIcon>
    </div>
  );
};

export default NavBar;
