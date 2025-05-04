import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import routes from "../routes";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
  const renderRoutes = (routes) =>
    routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));

  return (
    <div className="flex min-h-screen">
      <div
        className={`bg-gray-800 text-white w-72 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-300 ease-in-out`}
      >
        <h1 className="text-2xl font-semibold text-center mb-10">E-Commerce</h1>

        <nav>
          {routes.map((link, index) => (
            <div key={index} className="mb-2">
              <div
                className="flex items-center justify-between py-2.5 px-4 cursor-pointer rounded transition duration-200 text-[#fff] hover:bg-gray-700"
                onClick={() => (link.children ? toggleMenu(link.name) : null)}
              >
                <Link to={link.path} className="flex-1 font-roboto text-base">
                  {link.name}
                </Link>
                {link.children &&
                  (openMenus[link.name] ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  ))}
              </div>

              {link.children && openMenus[link.name] && (
                <div className="ml-6 space-y-2">
                  {link.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      to={`/${child.path}`}
                      className="block py-2 px-4 text-gray-300  rounded hover:bg-gray-600 font-roboto text-base transition duration-200 flex  items-center  gap-2"
                    >
                   <p className="flex items-center ">{child.icon}</p>
                 <p className="flex items-center">{child.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center bg-gray-200 p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>

        <main className="flex-1 p-6 bg-gray-100">
          <Routes>{renderRoutes(routes)}</Routes>
        </main>
      </div>
    </div>
  );
}
