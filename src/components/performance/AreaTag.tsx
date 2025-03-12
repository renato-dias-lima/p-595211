import React from "react";

interface AreaTagProps {
  name: string;
  color: string;
}

const AreaTag: React.FC<AreaTagProps> = ({ name, color }) => {
  return (
    <div className="self-stretch flex my-auto">
      <div
        className="self-stretch rounded border gap-1 px-2 py-0.5 border-solid"
        style={{
          backgroundColor: name.includes("+")
            ? "rgba(255,255,252,1)"
            : `rgba(${parseInt(color.slice(1, 3), 16)},${parseInt(color.slice(3, 5), 16)},${parseInt(color.slice(5, 7), 16)},0.05)`,
          borderColor: color,
          color: color,
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default AreaTag;
