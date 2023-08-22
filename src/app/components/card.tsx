import React from "react";
interface CardProps {
  cardData: string;
}
const Card = ({cardData}:CardProps) => {
  return (
    <div className="group  relative my-8 mx-auto h-96 w-72 overflow-hidden rounded shadow">
      <h1 className="text-xl group-hover:z-10 absolute group-hover:text-white transition-all ease-in-out duration-300">{cardData}</h1>
      <div className="absolute -top-96 h-full w-full bg-black/30 transition-all duration-300 ease-in-out group-hover:-top-0"></div>
      <div className="absolute top-96 inset-y-0 left-1/2 h-28 w-4/5 -translate-x-1/2 transform rounded bg-orange-500 group-hover:top-60 transition-all ease-in-out duration-300 "></div>
    </div>
  );
};

export default Card;
