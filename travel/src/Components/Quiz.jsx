import React, { useState } from "react";

const Quiz = ({ question, answer }) => {
  const [accordionOpen, setaccordionOpen] = useState(false);

  return (
    <div className="flex flex-col justify-items-center w-[80%] my-4 ">
      <div>
        <button
          onClick={() => setaccordionOpen(!accordionOpen)}
          className="flex justify-between w-full border-b-[3px] border-red-900 p-3 pl-0"
        >
          <span className="font-inter font-semibold text-lg">{question}</span>
          {accordionOpen ? (
            <span className="text-xl font-inter font-bold text-brown">-</span>
          ) : (
            <span className="text-xl font-inter font-bold text-brown">+</span>
          )}
        </button>
      </div>
      <div
        className={`grid overflow-hidden  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-inter pt-2">{answer}</div>
      </div>
    </div>
  );
};

export default Quiz;
