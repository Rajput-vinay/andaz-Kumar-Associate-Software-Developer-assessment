"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";

const navItemRight = [
  { label: "Find Doctors" },
  { label: "Video Consult" },
  { label: "Surgeries" },
];

const navItemLeft = [
  { label: "For Corporates", icon: <FaAngleDown size={12} /> },
  { label: "For Providers", icon: <FaAngleDown size={12} /> },
  { label: "Security & help", icon: <FaAngleDown size={12} /> },
];

export function Navbar() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white z-50">
      <div className="max-w-7xl mx-auto h-20 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer flex-shrink-0" onClick={handleClick}>
          <Image
            src="https://www.practo.com/nav/9.5.23/consumer/images/practo.svg"
            alt="Practo Logo"
            width={100}
            height={40}
            priority
          />
        </div>

        {/* Center Navigation */}
        <ul className="hidden md:flex gap-x-6 text-[14px] font-semibold text-gray-800 ml-8">
          {navItemRight.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 transition-colors"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Right Navigation + Login */}
        <div className="flex items-center gap-6 ml-auto">
          <ul className="hidden md:flex gap-x-6 text-[14px] text-gray-700 font-medium">
            {navItemLeft.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
              >
                {item.label}
                {item.icon}
              </li>
            ))}
          </ul>

          <button className="px-4 py-1 text-[14px] border border-gray-300 rounded-md hover:bg-gray-100 font-medium">
            Login / Signup
          </button>
        </div>
      </div>

      
    </nav>
  );
}
