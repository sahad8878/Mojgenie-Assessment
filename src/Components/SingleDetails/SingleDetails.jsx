import React from "react";

const SingleDetails = ({ label, detail }) => {
  return (
    <div className="flex flex-col md:flex-row w-full border-b">
      <div className="w-full py-3 md:py-0 md:w-[50%] flex flex-col sm:flex-row border-b md:border-0 ">
        <span className="min-w-[20%] font-bold">{label[0]}</span>
        <span className="w-[70%] font-medium">
          {detail[0]
            ? detail[0] === "NaN"
              ? "Not available "
              : detail[0]
            : "Not available"}
        </span>
      </div>
      <div className="w-full py-3 md:py-0 md:w-[50%] flex flex-col sm:flex-row border-b md:border-0 ">
        <span className="min-w-[20%] font-bold">{label[1]}</span>
        <span className="w-[70%] font-medium">
          {detail[1]
            ? detail[1] === "NaN"
              ? "Not available "
              : detail[1]
            : "Not available"}
        </span>
      </div>
    </div>
  );
};

export default SingleDetails;
