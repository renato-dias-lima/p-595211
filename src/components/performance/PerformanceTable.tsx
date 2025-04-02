
import React from "react";
import { Evaluation } from "../../data/performanceData";
import StatusTag from "./StatusTag";
import AreaTag from "./AreaTag";
import AvatarGroup from "./AvatarGroup";
import { MoreVertical, Users } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PerformanceTableProps {
  evaluations: Evaluation[];
  onActionClick?: (evaluation: Evaluation, action: string) => void;
}

const PerformanceTable: React.FC<PerformanceTableProps> = ({
  evaluations,
  onActionClick = () => {},
}) => {
  return (
    <div className="bg-white w-full mt-6 rounded-lg shadow-sm">
      <ScrollArea className="h-[calc(100vh-250px)]">
        <div className="min-w-[1000px] w-full">
          {/* Table Header */}
          <div className="flex w-full text-sm text-[#344449] font-medium border-b">
            <div className="flex-1 min-w-[200px] p-4">
              Título da avaliação
            </div>
            <div className="w-[100px] p-4">
              Tipo
            </div>
            <div className="w-[100px] p-4">
              Período
            </div>
            <div className="w-[120px] p-4">
              Avaliadores
            </div>
            <div className="w-[100px] p-4">
              Início
            </div>
            <div className="w-[100px] p-4">
              Fim
            </div>
            <div className="w-[120px] p-4">
              Público
            </div>
            <div className="w-[120px] p-4">
              Colaboradores
            </div>
            <div className="w-[100px] p-4">
              Status
            </div>
            <div className="w-[80px] p-4 text-center">
              Ações
            </div>
          </div>

          {/* Table Rows */}
          {evaluations.map((evaluation, index) => (
            <div
              key={evaluation.id}
              className={`flex w-full ${index % 2 === 0 ? "bg-[#F7FAFD]" : ""} hover:bg-[#F0F8FF] transition-colors`}
            >
              {/* Title */}
              <div className="flex-1 min-w-[200px] p-4 flex items-center text-sm text-[#586B78]">
                <span className="truncate">{evaluation.title}</span>
                {evaluation.isNew && (
                  <div className="ml-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#E05406" stroke="#E05406" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-new">
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                      <path d="M9.09 9h.85l2.6 3.5V9h.87v6h-.81l-2.64-3.5V15H9.1V9Z"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Type */}
              <div className="w-[100px] p-4 text-sm text-[#586B78]">
                {evaluation.type}
              </div>

              {/* Period */}
              <div className="w-[100px] p-4 text-sm text-[#586B78]">
                {evaluation.period}
              </div>

              {/* Evaluators */}
              <div className="w-[120px] p-4 flex items-center">
                {evaluation.evaluators.length <= 1 ? (
                  <img
                    src={evaluation.evaluators[0]?.avatar || `https://i.pravatar.cc/32?img=${index}`}
                    alt="Evaluator"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <AvatarGroup
                    avatars={evaluation.evaluators.map((e, i) => ({
                      src: e.avatar || `https://i.pravatar.cc/32?img=${index + i}`,
                    }))}
                    max={4}
                  />
                )}
              </div>

              {/* Start Date */}
              <div className="w-[100px] p-4 text-sm text-[#586B78]">
                {evaluation.startDate}
              </div>

              {/* End Date */}
              <div className="w-[100px] p-4 text-sm text-[#586B78]">
                {evaluation.endDate}
              </div>

              {/* Areas */}
              <div className="w-[120px] p-4 flex items-center gap-1">
                {evaluation.areas.map((area, idx) => (
                  <AreaTag key={idx} name={area.name} color={area.color} />
                ))}
              </div>

              {/* Collaborators */}
              <div className="w-[120px] p-4 flex items-center gap-2 text-sm text-[#586B78]">
                <Users className="w-5 h-5 text-[#0671E0]" />
                <span>{evaluation.collaborators}</span>
              </div>

              {/* Status */}
              <div className="w-[100px] p-4 flex items-center">
                <StatusTag status={evaluation.status} />
              </div>

              {/* Actions */}
              <div className="w-[80px] p-4 flex justify-center items-center">
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => onActionClick(evaluation, "menu")}
                >
                  <MoreVertical className="w-5 h-5 text-[#586B78]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PerformanceTable;
