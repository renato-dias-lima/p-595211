import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.3)] flex min-h-14 w-full items-center gap-[40px_100px] justify-between flex-wrap pl-8 pr-[104px] max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 items-center gap-2 my-auto">
        <div className="self-stretch flex min-h-8 items-center gap-6 w-[113px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/c2ceb5e6f0296b284e7960e8a1cfd42f2dc3865bb653cbac9cb6d81483730989?placeholderIfAbsent=true"
            alt="Company Logo"
            className="aspect-[2.75] object-contain w-[88px] self-stretch shrink-0 my-auto"
          />
          <div className="rotate-[-1.5707963267948966rad] self-stretch min-h-6 w-px my-auto">
            <div className="bg-[rgba(232,235,244,1)] flex min-h-6 w-full flex-1" />
          </div>
        </div>
        <div className="self-stretch flex items-center gap-2 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/aea5f013a422948b3b19f28520df7d39bb1b7dbc5a1101bfe22930ec4643d368?placeholderIfAbsent=true"
            alt="Performance Icon"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          />
          <div className="text-[#344449] text-sm font-medium leading-6 self-stretch my-auto">
            Gestão de desempenho
          </div>
          <div className="rotate-[-1.5707963267948966rad] self-stretch min-h-6 w-px my-auto">
            <div className="bg-[rgba(232,235,244,1)] flex min-h-6 w-full flex-1" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-4 flex-wrap my-auto max-md:max-w-full">
        <div className="self-stretch min-w-60 text-sm text-[#B6C7D4] font-normal whitespace-nowrap leading-6 w-[280px] my-auto">
          <div className="w-full">
            <div className="bg-white border flex w-full items-center gap-2 overflow-hidden px-4 py-1 rounded-lg border-[rgba(153,185,209,1)] border-solid">
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                Pesquisar...
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/a3746a986ffea002c89d8bd5145d3159b259a35dc5dd3538a7ae94a7d595c8ae?placeholderIfAbsent=true"
                alt="Search Icon"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex text-sm text-[#0671E0] font-normal whitespace-nowrap leading-6 w-[153px] my-auto">
          <div className="flex w-[153px]">
            <div className="rounded bg-[rgba(237,251,255,1)] flex w-full items-center gap-1 justify-center flex-1 shrink basis-[0%] px-2 py-0.5">
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                Administrador
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/0545c5209b64dca0ef60ef49263b45d00804fdd49debf4d13648a72971cc1644?placeholderIfAbsent=true"
                alt="Admin Icon"
                className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center gap-3 my-auto">
          <div className="self-stretch flex w-8 shrink-0 h-8 my-auto" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/be835827c2e06563948189c63d8ba01efaa7529c9c44b7004f0ed16e55e3a716?placeholderIfAbsent=true"
            alt="Menu Icon"
            className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
          />
        </div>
        <div className="self-stretch flex items-center gap-2 text-sm text-[#085DB5] font-medium whitespace-nowrap leading-6 h-full pl-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/27032e44da0dfeeb7fea69497cfb063ff0ef01d41f141027d6297d48202a6287?placeholderIfAbsent=true"
            alt="Welcome Icon"
            className="aspect-[2.56] object-contain w-[41px] shadow-[0px_0px_0px_rgba(0,0,0,0.25)] self-stretch shrink-0 my-auto rounded-[22px]"
          />
          <div className="self-stretch my-auto">Bem-vindo</div>
        </div>
        <div className="self-stretch flex items-center justify-center w-10 my-auto rounded-[21px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/5748615ad4ee30359f6d7de92430baf7a686d2bfd04f6d052dfa205c58162957?placeholderIfAbsent=true"
            alt="User Avatar"
            className="aspect-[1] object-contain w-10 shadow-[1px_1px_1px_rgba(0,0,0,0.1)] self-stretch my-auto rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
