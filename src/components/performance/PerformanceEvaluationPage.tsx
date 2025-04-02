
import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import SubNavbar from "../layout/SubNavbar";
import PerformanceFilters from "./PerformanceFilters";
import PerformanceTable from "./PerformanceTable";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { evaluations } from "../../data/performanceData";

const PerformanceEvaluationPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Avaliação de desempenho");
  const totalPages = 5;

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
    <div className="min-h-screen flex flex-col bg-[#F4F6F9]">
      <div className="w-full">
        <Navbar />
      </div>

      <SubNavbar activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="w-full pt-6 pb-12 px-6 md:px-12 lg:px-20 flex-grow">
        <PerformanceFilters onCreateEvaluation={handleCreateEvaluation} />

        <PerformanceTable
          evaluations={evaluations}
          onActionClick={handleActionClick}
        />

        <div className="flex w-full flex-col items-center justify-center mt-8 py-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={() => handlePageChange(page)}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default PerformanceEvaluationPage;
