import React from "react";

const Popup = ({ isActive, children }) => {
  if(!isActive) return;
  return (
    <>
      <div className="bg-[#00000050] absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div className="bg-slate-50 px-8 py-5 max-w-[80%] rounded-md">
         {children}
        </div>
      </div>
    </>
  );
};

export default Popup;
