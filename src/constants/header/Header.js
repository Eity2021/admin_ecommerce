import TopNav from "./TopNav";
import { Menu } from "lucide-react";
export default function Header({ isOpen, setIsOpen }) {
  return (
    <header className={`  relative shadow-sm px-16 py-6 `}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-800 focus:outline-none absolute top-10 left-6"
      >
        <Menu />
      </button>
      <div>
        <TopNav></TopNav>
      </div>
    </header>
  );
}
