
import React from "react";
import { Evaluation, getStatusInfo } from "../../data/performanceData";
import { Check, Clock, AlertTriangle, Ban, Edit } from "lucide-react";

interface StatusTagProps {
  status: Evaluation["status"];
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const { label, bgColor, borderColor, textColor } = getStatusInfo(status);
  
  const getStatusIcon = () => {
    switch (status) {
      case "draft":
        return <Edit className="w-3 h-3" />;
      case "in-progress":
        return <Clock className="w-3 h-3" />;
      case "calibrate":
        return <AlertTriangle className="w-3 h-3" />;
      case "completed":
        return <Check className="w-3 h-3" />;
      case "canceled":
        return <Ban className="w-3 h-3" />;
      default:
        return <Edit className="w-3 h-3" />;
    }
  };

  return (
    <div 
      className="flex items-center gap-1 px-2 py-1 rounded text-xs"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
        border: `1px solid ${borderColor}`
      }}
    >
      {getStatusIcon()}
      <span>{label}</span>
    </div>
  );
};

export default StatusTag;
