import React from "react";
import { Evaluation } from "../../data/performanceData";
import StatusTag from "./StatusTag";
import AreaTag from "./AreaTag";
import AvatarGroup from "./AvatarGroup";

interface PerformanceTableProps {
  evaluations: Evaluation[];
  onActionClick?: (evaluation: Evaluation, action: string) => void;
}

const PerformanceTable: React.FC<PerformanceTableProps> = ({
  evaluations,
  onActionClick = () => {},
}) => {
  return (
    <div className="bg-white w-full overflow-hidden mt-6 py-2 rounded-lg max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        {/* Table Header */}
        <div className="flex w-full text-sm text-[#344449] font-medium leading-6 flex-wrap max-md:max-w-full">
          <div className="flex min-w-60 items-stretch flex-1 shrink basis-10">
            <div className="self-stretch min-w-60 w-full h-full flex-1 shrink basis-[0%] p-2">
              Título da avaliação
            </div>
          </div>
          <div className="flex items-stretch whitespace-nowrap w-[114px]">
            <div className="self-stretch w-full h-full flex-1 shrink basis-[0%] p-2">
              Tipo
            </div>
          </div>
          <div className="flex items-stretch whitespace-nowrap w-[114px]">
            <div className="self-stretch w-full h-full flex-1 shrink basis-[0%] p-2">
              Período
            </div>
          </div>
          <div className="self-stretch flex items-stretch whitespace-nowrap h-full w-[115px]">
            <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] w-full h-full py-2">
              Avaliadores
            </div>
          </div>
          <div className="flex items-stretch whitespace-nowrap w-[114px]">
            <div className="self-stretch w-full h-full flex-1 shrink basis-[0%] p-2">
              Início
            </div>
          </div>
          <div className="flex items-stretch whitespace-nowrap w-[114px]">
            <div className="self-stretch w-full h-full flex-1 shrink basis-[0%] p-2">
              Fim
            </div>
          </div>
          <div className="self-stretch flex items-stretch whitespace-nowrap h-full w-[117px] px-2">
            <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] w-full h-full p-2">
              Público
            </div>
          </div>
          <div className="self-stretch flex items-stretch whitespace-nowrap h-full w-[124px]">
            <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] w-full h-full py-2">
              Colaboradores
            </div>
          </div>
          <div className="self-stretch flex items-stretch whitespace-nowrap h-full w-[102px] px-2">
            <div className="self-stretch w-full h-full flex-1 shrink basis-[0%] py-2">
              Status
            </div>
          </div>
          <div className="flex items-stretch whitespace-nowrap justify-center w-[100px] px-5">
            <div className="self-stretch w-full h-full flex-1 shrink basis-[0%] p-2">
              Ações
            </div>
          </div>
        </div>

        {/* Table Rows */}
        {evaluations.map((evaluation, index) => (
          <div
            key={evaluation.id}
            className={`${index % 2 === 0 ? "bg-[rgba(247,250,253,1)]" : ""} flex w-full flex-wrap max-md:max-w-full`}
          >
            {/* Title */}
            <div className="flex min-w-60 min-h-11 items-stretch text-sm text-[#586B78] font-normal leading-6 flex-1 shrink basis-20">
              <div
                className={`${evaluation.isNew ? "text-ellipsis min-w-60 w-[245px]" : ""} px-2`}
              >
                {evaluation.title}
              </div>
              {evaluation.isNew && (
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f727c669152658444bfd3e847bae1684d38c4804a67bbcb310584de2a4a1e72b?placeholderIfAbsent=true"
                  alt="New"
                  className="aspect-[1] object-contain w-4 shrink-0 my-auto"
                />
              )}
            </div>

            {/* Type */}
            <div className="flex min-h-11 items-stretch text-sm text-[#586B78] font-normal whitespace-nowrap leading-6 w-[114px]">
              <div className="text-ellipsis w-full flex-1 shrink basis-[0%] px-2">
                {evaluation.type}
              </div>
            </div>

            {/* Period */}
            <div className="flex min-h-11 items-stretch text-sm text-[#586B78] font-normal whitespace-nowrap leading-6 w-[114px]">
              <div className="text-ellipsis w-full flex-1 shrink basis-[0%] px-2">
                {evaluation.period}
              </div>
            </div>

            {/* Evaluators */}
            <div className="flex min-h-11 items-center w-[115px]">
              {evaluation.evaluators.length <= 1 ? (
                <img
                  src={
                    evaluation.evaluators[0]?.avatar ||
                    "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f6b9f688f17928793822bbafb2523976d902939deea65fefa067b076184dc052?placeholderIfAbsent=true"
                  }
                  alt="Evaluator"
                  className="aspect-[2.67] object-contain w-16 self-stretch gap-[-4px] my-auto"
                />
              ) : (
                <AvatarGroup
                  avatars={evaluation.evaluators.map((e) => ({
                    src: e.avatar,
                  }))}
                  max={4}
                />
              )}
            </div>

            {/* Start Date */}
            <div className="flex min-h-11 items-stretch text-sm text-[#586B78] font-normal whitespace-nowrap leading-6 w-[114px] px-2">
              <div className="text-ellipsis w-full flex-1 shrink basis-[0%] px-2">
                {evaluation.startDate}
              </div>
            </div>

            {/* End Date */}
            <div className="flex min-h-11 items-stretch text-sm text-[#586B78] font-normal whitespace-nowrap leading-6 w-[114px]">
              <div className="text-ellipsis w-full flex-1 shrink basis-[0%] px-2">
                {evaluation.endDate}
              </div>
            </div>

            {/* Areas */}
            <div className="flex min-h-11 items-center gap-1 text-[10px] font-normal whitespace-nowrap leading-[1.4] w-[117px] px-2">
              {evaluation.areas.map((area, idx) => (
                <AreaTag key={idx} name={area.name} color={area.color} />
              ))}
            </div>

            {/* Collaborators */}
            <div className="flex min-h-11 items-center gap-1 text-sm text-[#586B78] font-normal whitespace-nowrap leading-6 w-[124px] px-2">
              <img
                src={`URL_${121 + (index % 10)}`}
                alt="Collaborators"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <div className="text-ellipsis self-stretch my-auto">
                {evaluation.collaborators}
              </div>
            </div>

            {/* Status */}
            <div className="flex min-h-11 items-center gap-1 text-[10px] font-normal whitespace-nowrap leading-[1.4] w-[102px] px-2">
              <StatusTag status={evaluation.status} />
            </div>

            {/* Actions */}
            <div className="flex min-h-11 items-stretch justify-center w-[100px] px-10 max-md:px-5">
              <div
                className="flex w-4 items-center h-full cursor-pointer"
                onClick={() => onActionClick(evaluation, "menu")}
              >
                <img
                  src={`URL_${123 + (index % 10)}`}
                  alt="Actions"
                  className="aspect-[1] object-contain w-4 self-stretch my-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceTable;
