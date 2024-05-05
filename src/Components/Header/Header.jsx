import React from "react";
import Logo from "../../img/logoBlack.png";

const Header = () => {
  return (
    <header className="w-screen bg-[#56B5A2] shadow-md fixed top-0 left-0 right-0 py-2 z-50">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-extrabold items-center mb-4 md:mb-0">
          {/* <span className="ml-3 text-2xl">Belencho</span> */}
          <img className="w-40" src={Logo} alt="" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Desayunos</a>
          <a className="mr-5 hover:text-gray-900">Anchetas</a>
          <a className="mr-5 hover:text-gray-900">Tablas</a>
          <a className="mr-5 hover:text-gray-900">Refrigerios</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
