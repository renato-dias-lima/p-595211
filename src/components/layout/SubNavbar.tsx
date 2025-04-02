
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
      className="flex w-full py-3 px-4 md:px-8 lg:px-20 overflow-x-auto shadow-md"
      style={{ background: "linear-gradient(90deg, #0671E0 0%, #0A6CD2 100%)" }}
    >
      <div className="relative flex-shrink-0 text-lg text-white font-medium mr-6 pl-16 md:pl-[72px]">
        <div className="z-10 relative">
          Gestão de desempenho
        </div>
        <div className="absolute left-0 bottom-[-12px] z-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white" stroke="#0671E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-white overflow-x-auto hide-scrollbar pb-1 flex-grow">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer whitespace-nowrap rounded-lg px-3 py-1.5 transition-colors ${
              activeTab === tab 
                ? "bg-white/15 border border-white font-medium" 
                : "hover:bg-white/10"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
