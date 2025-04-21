import React, { useState } from "react";

const Category = () => {

  const categories = [
    "All",
    "Cook Studio",
    "UX",
    "Case Study",
    "Music",
    "Bnagla Lofi",
    "Tour",
    "Saintmartin",
    "Tech",
    "iPhone 13",
    "User Interface Design",
    "Computer Programming",
  ];
  return (
    <div className="p-[10px_12px] flex items-center gap-3 w-full overflow-x-auto border-b border-[#383838] ">
      {categories.map((cat, i) => (
        <button
          key={i}
          className={`p-[8px_12px] text-[12px] rounded-full  cursor-pointer border border-[#474747] transition-all duration-300
              ${
                cat === "All"
                  ? "bg-white text-black"
                  : "bg-[#383838] text-white hover:bg-white hover:text-black"
              }
            `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Category;
