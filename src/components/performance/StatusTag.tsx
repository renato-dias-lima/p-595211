import React from "react";
import { Evaluation, getStatusInfo } from "../../data/performanceData";

interface StatusTagProps {
  status: Evaluation["status"];
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const { label, bgColor, borderColor, textColor, icon } =
    getStatusInfo(status);

  return (
    <div className="self-stretch flex my-auto">
      <div
        className="rounded flex items-center gap-1 justify-center px-2 py-0.5 border border-solid"
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          color: textColor,
        }}
      >
        <img
          src={icon}
          alt={`${label} icon`}
          className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch my-auto">{label}</div>
      </div>
    </div>
  );
};

export default StatusTag;
