import React from "react";

interface PerformanceFiltersProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filterType: string, value: string) => void;
  onCreateEvaluation?: () => void;
}

const PerformanceFilters: React.FC<PerformanceFiltersProps> = ({
  onSearch = () => {},
  onFilterChange = () => {},
  onCreateEvaluation = () => {},
}) => {
  return (
    <div className="flex w-full items-center gap-4 flex-wrap max-md:max-w-full">
      {/* Calendar Filter */}
      <div className="self-stretch flex gap-2 w-10 my-auto">
        <div className="flex min-h-10 w-10 items-stretch gap-2">
          <div className="justify-center items-center rounded border border-[color:var(--Primary-brandcolor-primary-medium,#0671E0)] shadow-[0px_1px_3px_0px_rgba(96,108,128,0.05)] bg-[#E7F2FF] flex w-10 gap-2 h-10 px-2 border-solid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/13c7a5bfd85456eb33a95c014fb2849781a7e2d8fb1d46995e1d920049310d7d?placeholderIfAbsent=true"
              alt="Calendar"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
            />
          </div>
        </div>
      </div>

      {/* Status Filter */}
      <div className="rounded bg-white border self-stretch flex items-center gap-2 text-sm text-[#586B78] font-normal whitespace-nowrap leading-6 justify-center my-auto p-2 border-[rgba(232,235,244,1)] border-solid">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f7ee69ded1b2f126412bdd6275353f8d69abdea77f71c3d29ccb8e90f9dc09d7?placeholderIfAbsent=true"
          alt="Status"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch my-auto">Status</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/19265a4440b2a0132b03df73b9b33dd0114bcff8e0c0c86ae9dd2302ec9aa569?placeholderIfAbsent=true"
          alt="Dropdown"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        />
      </div>

      {/* Area Filter */}
      <div className="rounded bg-white border self-stretch flex items-center gap-2 text-sm text-[#586B78] font-normal whitespace-nowrap leading-6 justify-center my-auto p-2 border-[rgba(232,235,244,1)] border-solid">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/90085f2c09952e3171511df9e2d11bc62d4de93417ae1e3b9924f9b6e5e65704?placeholderIfAbsent=true"
          alt="Area"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch my-auto">Área</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/3b3c6361d4ff5fce7ba120305448fbfc5210c381571cd78a2536f3dfad323231?placeholderIfAbsent=true"
          alt="Dropdown"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        />
      </div>

      {/* Type Filter */}
      <div className="rounded bg-white border self-stretch flex items-center gap-2 text-sm text-[#586B78] font-normal whitespace-nowrap leading-6 justify-center my-auto p-2 border-[rgba(232,235,244,1)] border-solid">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/3fb350ac935b6c96a82a71c9c46a2dcf07956acabda7d56bf62504c668243634?placeholderIfAbsent=true"
          alt="Type"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch my-auto">Tipo</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/1eac6338eae1049bd81e6c82514090ddff44078b3b378f48e68510a6bb125d7d?placeholderIfAbsent=true"
          alt="Dropdown"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        />
      </div>

      {/* Person Filter */}
      <div className="rounded bg-white border self-stretch flex items-center gap-2 text-sm text-[#586B78] font-normal whitespace-nowrap leading-6 justify-center my-auto p-2 border-[rgba(232,235,244,1)] border-solid">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/199d1bbbd8cdd7bb5f25f7a5e5a2771d5fddf17e18533ea2501b162cc7963f11?placeholderIfAbsent=true"
          alt="Person"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch my-auto">Pessoa</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/2625029b343dc767768603d8fc2b47423f92050ca76aad574fa100327b23d6b5?placeholderIfAbsent=true"
          alt="Dropdown"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        />
      </div>

      {/* Date Range */}
      <div className="self-stretch min-w-60 text-sm text-[#B6C7D4] font-normal whitespace-nowrap leading-6 w-80 my-auto">
        <div className="flex w-full gap-2">
          <div className="flex-1 shrink basis-[0%]">
            <div className="bg-white border flex min-h-10 w-full items-center gap-2 overflow-hidden px-4 py-2 rounded-lg border-[rgba(153,185,209,1)] border-solid">
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                dd/mm/aaaa
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/cbfa8dbcf79cba800e3acc024103d26f2dcae19b3ae9023202986a9473d21cd7?placeholderIfAbsent=true"
                alt="Calendar"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </div>
          </div>
          <div className="flex-1 shrink basis-[0%]">
            <div className="bg-white border flex min-h-10 w-full items-center gap-2 overflow-hidden px-4 py-2 rounded-lg border-[rgba(153,185,209,1)] border-solid">
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                dd/mm/aaaa
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/4608e22d3af4ca460cf8ba904ea9c6c374e6e6791d49d95d89a79ac0f3fbb577?placeholderIfAbsent=true"
                alt="Calendar"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="self-stretch text-sm text-[#99B9D1] font-normal leading-6 flex-1 shrink basis-8 my-auto">
        <div className="w-full">
          <div className="bg-white border flex min-h-10 w-full items-center gap-2 overflow-hidden px-4 py-2 rounded-lg border-[rgba(153,185,209,1)] border-solid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/4edbd4f5aa5a5d43b0a5986571baed3dcc3773849494a2fb15536e8fce60fa0d?placeholderIfAbsent=true"
              alt="Search"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
            <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
              Pesquisar avaliação
            </div>
          </div>
        </div>
      </div>

      {/* View Options */}
      <div className="items-center self-stretch rounded border border-[color:var(--Neutral-Gray-Light,#E8EBF4)] bg-white flex gap-6 h-full px-2 py-1 border-solid">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/64dd2ab25146a54d3b3de339d349a88aa836ec9e430b6a63d872b760816a8177?placeholderIfAbsent=true"
          alt="List view"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/6b622f7d045c3d185b4d0fcdcc2424f930e86d3216179115f0e5fd4b6c52c6ee?placeholderIfAbsent=true"
          alt="Grid view"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
      </div>

      {/* Create Button */}
      <button
        className="justify-center items-center bg-[#0671E0] self-stretch flex gap-1 text-sm text-white font-medium text-center leading-6 my-auto px-4 py-2 rounded-lg"
        onClick={onCreateEvaluation}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/d632210344b51419e109941339702367618c3f72a2c5a9676086876ec5b29164?placeholderIfAbsent=true"
          alt="Add"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch my-auto">Criar avaliação</div>
      </button>
    </div>
  );
};

export default PerformanceFilters;
