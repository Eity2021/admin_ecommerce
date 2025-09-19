import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import routes from "../../routes";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import Header from "../../constants/header/Header";
import anotherRoutes from "../../routes/anotherRoutes";
export default function SideNavbar() {
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
        className={`bg-gray-800 text-white w-72 h-full space-y-6 py-7 px-2 fixed transform z-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-300 ease-in-out`}
      >
        <div className="flex justify-around mb-10">
          <h1 className="text-2xl font-semibold text-center ">E-Commerce</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <Menu />
          </button>
        </div>

        <nav>
          {routes.map((link, index) => (
            <div key={index} className="mb-2">
              <div
                className="flex items-center justify-between py-2.5 px-4 cursor-pointer rounded transition duration-200 text-[#fff] hover:bg-gray-700"
                onClick={() => (link.children ? toggleMenu(link.name) : null)}
              >
                <Link
                  to={link.path}
                  className="flex-1 flex gap-2 font-roboto text-base"
                >
                  <p className="flex items-center">{link.icon}</p>
                  <p className="flex items-center">{link.name}</p>
                </Link>

                {link.children &&
                  (openMenus[link.name] ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  ))}
              </div>

              {link.children && openMenus[link.name] && (
                <div
                  className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                    openMenus[link.name]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      to={`/${child.path}`}
                      className="py-2 px-4 text-gray-300 rounded hover:bg-gray-600 font-roboto text-base transition duration-200 flex items-center gap-2"
                    >
                      <p className="flex items-center">{child.icon}</p>
                      <p className="flex items-center">{child.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="flex-1 flex flex-col md:ml-72">
        <Header isOpe={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-1 p-6 bg-gray-100">
          <Routes>{renderRoutes(routes)}</Routes>
          <Routes>{renderRoutes(anotherRoutes)}</Routes>
        </main>
      </div>
    </div>
  );
}
