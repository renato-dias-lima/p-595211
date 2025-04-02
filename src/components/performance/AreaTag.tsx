
import React from "react";

interface AreaTagProps {
  name: string;
  color: string;
}

const AreaTag: React.FC<AreaTagProps> = ({ name, color }) => {
  const isMoreTag = name.includes("+");
  
  return (
    <div 
      className="inline-flex px-2 py-0.5 rounded text-xs border"
      style={{
        backgroundColor: isMoreTag ? "rgba(255,255,252,1)" : `${color}15`,
        borderColor: color,
        color: color,
      }}
    >
      {name}
    </div>
  );
};

export default AreaTag;
