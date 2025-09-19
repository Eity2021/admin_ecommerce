import { useState } from "react";
import ProfileDropdown from "../../components/profileDropdown/ProfileDropdown";
import avatar from "../../image/avatar.jpg";
import { Bell, MessageCircle } from "lucide-react";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-lg font-bold flex items-center font-roboto">
        Dashboard
      </h1>

      <div className="flex gap-6">
        <div className=" h-10 w-10  rounded-full  bg-gray-100 flex justify-center items-center relative">
          <MessageCircle color="#333" size={22} />
          <div className="absolute top-0 left-8 bg-[#8884D8] h-5 w-5 flex justify-center items-center rounded-full">
            <small className="text-white">6</small>
          </div>
        </div>

        <div className=" h-10 w-10  rounded-full  bg-gray-100 flex justify-center items-center relative">
          <Bell color="#333" size={22} />
          <div className="absolute top-0 left-8 bg-primary h-5 w-5 flex justify-center items-center rounded-full">
            <small className="text-white">10</small>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              className="w-12 h-12 rounded-full border-2 border-gray-300"
              src={avatar}
              alt="User Avatar"
            />
            <div>
              <h2 className="text-[15px] font-heading font-roboto font-medium">
                Marufa Akter Eity
              </h2>
              <p className="text-paragraph text-[12px] font-roboto">
                Frontend Developer
              </p>
            </div>
          </div>
          <div>
            <ProfileDropdown isOpen={isOpen}></ProfileDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
