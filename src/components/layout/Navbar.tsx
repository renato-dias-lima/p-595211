
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white shadow-md flex h-16 w-full items-center justify-between px-4 md:px-8 lg:px-12">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            src="https://placehold.co/88x32/0671E0/FFFFFF?text=LOGO"
            alt="Company Logo"
            className="h-8 w-auto"
          />
          <div className="h-6 w-px bg-gray-200 mx-2 hidden md:block" />
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://placehold.co/24x24/0671E0/FFFFFF?text=PM"
            alt="Performance Icon"
            className="w-6 h-6"
          />
          <div className="text-[#344449] text-sm font-medium hidden md:block">
            Gestão de desempenho
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="relative hidden md:block w-[280px]">
          <div className="bg-white border border-[#99B9D1] flex w-full items-center gap-2 rounded-lg px-3 py-1.5">
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              className="flex-1 outline-none text-sm text-gray-600"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#99B9D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </div>
        </div>
        
        <div className="flex items-center mx-2">
          <div className="bg-[#EDFBFF] text-[#0671E0] text-sm rounded px-2 py-1 flex items-center gap-1">
            <span>Administrador</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#586B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
          
          <div className="pl-2 md:flex items-center gap-2 hidden">
            <span className="text-[#085DB5] text-sm font-medium">Bem-vindo</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full shadow-sm object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
