import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import SubNavbar from "../layout/SubNavbar";
import PerformanceFilters from "./PerformanceFilters";
import PerformanceTable from "./PerformanceTable";
import Pagination from "../ui/Pagination";
import { evaluations } from "../../data/performanceData";

const PerformanceEvaluationPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Avaliação de desempenho");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleCreateEvaluation = () => {
    alert("Criar nova avaliação");
  };

  const handleActionClick = (evaluation: any, action: string) => {
    console.log(`Action ${action} clicked for evaluation:`, evaluation);
  };

  return (
    <div className="shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] bg-[#F4F6F9]">
      <div className="bg-[rgba(255,255,255,0.00)] w-full max-md:max-w-full">
        <Navbar />
      </div>

      <SubNavbar activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="w-full overflow-hidden pt-6 pb-20 px-20 max-md:max-w-full max-md:px-5">
        <PerformanceFilters onCreateEvaluation={handleCreateEvaluation} />

        <PerformanceTable
          evaluations={evaluations}
          onActionClick={handleActionClick}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PerformanceEvaluationPage;
