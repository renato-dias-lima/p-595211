import React from "react";

interface SubNavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const SubNavbar: React.FC<SubNavbarProps> = ({
  activeTab = "Avaliação de desempenho",
  onTabChange = () => {},
}) => {
  const tabs = [
    "Dashboard",
    "Avaliação de desempenho",
    "PDI",
    "Feedbacks",
    "Metas e objetivos",
    "Configurações",
  ];

  return (
    <div
      className="items-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] flex w-full gap-6 flex-wrap px-20 py-2 max-md:max-w-full max-md:px-5"
      style={{ background: "linear-gradient(90deg, #0671E0 0%, #0A6CD2 100%)" }}
    >
      <div className="bg-[rgba(255,255,255,0.00)] self-stretch relative min-w-60 text-lg text-white font-medium w-[263px] my-auto">
        <div className="self-stretch z-0 w-full gap-6 pl-[72px] max-md:pl-5">
          Gestão de desempenho
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/d8b0ea2a4ddff959801a42f5646b3c44f9b49d3556e388b82c8851155eaadc89?placeholderIfAbsent=true"
          alt="Performance Icon"
          className="aspect-[1] object-contain w-16 absolute z-0 bottom-[-31px] h-16 left-0"
        />
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-2 overflow-hidden text-sm text-white font-normal leading-6 flex-wrap flex-1 shrink basis-[0%] my-auto px-1 max-md:max-w-full">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`self-stretch flex ${tab === "Metas e objetivos" ? "" : "whitespace-nowrap"} my-auto rounded-lg cursor-pointer ${activeTab === tab ? "bg-[rgba(255,255,255,0.14)] border border-white font-medium" : ""}`}
            onClick={() => onTabChange(tab)}
          >
            <div className="px-2 py-1 rounded-[19px]">{tab}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
